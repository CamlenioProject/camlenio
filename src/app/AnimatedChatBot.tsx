"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, MessageCircle, Sparkles, Minus } from "lucide-react";
import { usePathname } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

export default function SimpleFormChatBot() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const portalRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    el.setAttribute("data-chat-portal", "true");
    portalRootRef.current = el;
    document.body.appendChild(el);
    return () => {
      if (portalRootRef.current) {
        document.body.removeChild(portalRootRef.current);
        portalRootRef.current = null;
      }
    };
  }, []);

  const disableBodyScroll = () => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void } })
      .__lenis;
    lenis?.stop();
  };

  const enableBodyScroll = () => {
    const lenis = (window as unknown as { __lenis?: { start: () => void } })
      .__lenis;
    lenis?.start();
  };

  const handlePurposeSelect = (purpose: string) => {
    setSelectedPurpose(purpose);
    setShowForm(true);
  };

  const handleSuggestionClick = (purpose: string) => {
    setShowSuggestion(false);
    setOpen(true);
    setMinimized(false);
    setSelectedPurpose(purpose);
    setShowForm(true);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!validateEmail(formData.email)) newErrors.email = "Enter valid email";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.message || formData.message.length < 2)
      newErrors.message = "Message must be at least 2 characters";

    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const resp = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chatbot",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: "",
          message: formData.message,
        }),
      });

      if (resp.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Submit failed");
      }
    } catch {
      alert("Submit failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setShowForm(false);
    setSelectedPurpose("");
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({ name: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMinimized(false);
      }
    };

    const timer = setTimeout(() => {
      if (!open) setShowSuggestion(true);
    }, 60000);

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(target) &&
        !minimized
      ) {
        setMinimized(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, minimized]);

  if (pathname !== "/") return null;

  const chatContent = (
    <div
      style={{ position: "fixed", bottom: 16, right: 16 }}
      className="pointer-events-none z-[9999]"
    >
      <div
        ref={chatContainerRef}
        onMouseEnter={disableBodyScroll}
        onMouseLeave={enableBodyScroll}
        onWheel={(e) => e.stopPropagation()}
        className={`transition-all duration-500 mb-3 ${open && !minimized
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-90 translate-y-6 pointer-events-none"
          }`}
      >
        <div className="w-[90vw] max-w-[330px] max-h-[75vh] rounded-2xl overflow-hidden border border-gray-200/40 shadow-xl backdrop-blur-2xl bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
          <div className="px-4 py-4 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-gray-300/40 shadow-[0_0_25px_rgba(255,140,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
              </div>

              <div>
                <p className="text-gray-800 font-semibold text-sm">
                  Camlenio Assistant
                </p>
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  active
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              <button
                className="p-2 rounded-xl hover:bg-gray-200 transition"
                onClick={() => setMinimized(true)}
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <button
                className="p-2 rounded-xl hover:bg-gray-200 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div
            className="p-4 overflow-y-auto overscroll-contain max-h-[60vh] text-gray-700 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent
"

          >
            {!showForm && !submitted && (
              <div className="space-y-4">
                <div className="text-center mb-3">
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    Hi There 👋
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    How can Camlenio help you today?
                  </p>
                </div>

                <button
                  onClick={() => handlePurposeSelect("Development Services")}
                  className="
        w-full flex items-center gap-2 md:gap-3 
        px-3 py-2 md:px-4 md:py-3
        rounded-xl 
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm
        hover:bg-orange-50 transition
        text-sm md:text-base
      "
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-100 flex items-center justify-center text-lg md:text-xl">
                    💻
                  </div>
                  Development Services
                </button>

                <button
                  onClick={() => handlePurposeSelect("Job Opportunities")}
                  className="
        w-full flex items-center gap-2 md:gap-3 
        px-3 py-2 md:px-4 md:py-3
        rounded-xl 
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm
        hover:bg-orange-50 transition
        text-sm md:text-base
      "
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-100 flex items-center justify-center text-lg md:text-xl">
                    💼
                  </div>
                  Job Opportunities
                </button>
              </div>
            )}

            {showForm && !submitted && (
              <div className="space-y-4 animate-slideIn">
                <button
                  onClick={handleBack}
                  className="text-orange-600 text-xs cursor-pointer"
                >
                  ← Back
                </button>

                {/* <div className="p-3 rounded-xl bg-white/60 border border-gray-300 shadow-sm">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-orange-600">
                      Selected:
                    </span>{" "}
                    {selectedPurpose}
                  </p>
                </div> */}

                <form onSubmit={handleSubmit} className="space-y-2">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-orange-300 outline-none"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-orange-300 outline-none"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-orange-300 outline-none"
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}

                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        const form = e.currentTarget.closest("form");
                        form?.dispatchEvent(
                          new Event("submit", {
                            cancelable: true,
                            bubbles: true,
                          })
                        );
                      }
                    }}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-sm placeholder-gray-400 resize-none focus:ring-2 focus:ring-orange-300 outline-none"
                    placeholder="Your Message…"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting…" : "Submit"}
                  </button>
                </form>
              </div>
            )}

            {submitted && (
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/90 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl">
                  ✓
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  Thank You!
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  We’ll contact you within 24 hours.
                </p>

                <button
                  onClick={handleBack}
                  className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xs"
                >
                  Submit Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuggestion && !open && (
        <div
          style={{ position: "fixed", bottom: 96, right: 24 }}
          className="z-[9998] flex flex-col items-end gap-3 pointer-events-auto"
        >
          <button
            onClick={() => setShowSuggestion(false)}
            className="w-7 h-7 flex items-center justify-center bg-white/80 backdrop-blur-xl border border-gray-200 shadow-md rounded-full text-gray-600 hover:bg-gray-100 active:scale-90 transition cursor-pointer"
          >
            ✕
          </button>

          <button
            onClick={() =>
              handleSuggestionClick(
                "I am looking for development related services"
              )
            }
            className="text-sm font-semibold text-gray-800 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl shadow-lg border border-gray-200 animate-suggestBounce animate-suggestFadePulse hover:bg-orange-50 transition"
          >
            💻 Development Services
          </button>

          <button
            onClick={() =>
              handleSuggestionClick("I am looking for job opportunities")
            }
            className="text-sm font-semibold text-gray-800 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl shadow-lg border border-gray-200 animate-suggestBounce animate-suggestFadePulse hover:bg-orange-50 transition"
            style={{ animationDelay: "0.25s" }}
          >
            💼 Job Opportunities
          </button>
        </div>
      )}

      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            setMinimized(false);
          }}
          style={{ position: "fixed", bottom: 16, right: 16 }}
          className="
      pointer-events-auto
      relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 
      text-white p-4 rounded-full shadow-xl
      hover:scale-110 active:scale-95
      transition-all duration-300 z-[10000]
    "
        >
          <div className="relative w-7 h-7">
            <MessageCircle className="w-7 h-7 absolute opacity-100 scale-100" />
          </div>
        </button>
      )}
    </div>
  );

  if (!portalRootRef.current) return null;
  return createPortal(chatContent, portalRootRef.current);
}
