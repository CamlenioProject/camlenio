"use client";
import { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle, Sparkles, MinusIcon } from "lucide-react";

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

const validateName = (name: string) => name.length >= 2;

// Gemini AI helper function
async function askGeminiAI(userMessage: string): Promise<string> {
  try {
    console.log("🚀 [CLIENT] Calling Gemini API with message:", userMessage);

    const response = await fetch("/api/geminichat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    console.log(
      "📥 [CLIENT] Response status:",
      response.status,
      response.statusText
    );

    const data = await response.json();
    console.log("📦 [CLIENT] Response data:", data);

    if (data.reply) {
      return data.reply;
    }

    return "I'm here to help! How can I assist you with your project today?";
  } catch (error) {
    console.error("❌ [CLIENT] Network or parse error:", error);
    return "I'm having trouble connecting right now. Please try again in a moment or type 'start project' to get started.";
  }
}

export default function ModernChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [messages, setMessages] = useState<
    { from: "bot" | "user" | "company"; text: string; timestamp: Date }[]
  >([
    {
      from: "bot",
      text: "Hello! 👋 How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<
    "greeting" | "normal" | "name" | "email" | "phone" | "project" | "message"
  >("greeting");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userProject, setUserProject] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed, timestamp: new Date() },
    ]);
    setInput("");

    if (step === "greeting") {
      setStep("normal");
      addBotMessage("How can I assist you today?");
      return;
    }

    if (step === "normal") {
      if (
        trimmed.toLowerCase().includes("start") ||
        trimmed.toLowerCase().includes("project") ||
        trimmed.toLowerCase().includes("inquiry") ||
        trimmed.toLowerCase().includes("contact")
      ) {
        setStep("name");
        addBotMessage("Great! Let's get started. What's your name?");
        return;
      }

      setIsTyping(true);
      try {
        const reply = await askGeminiAI(trimmed);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: reply, timestamp: new Date() },
        ]);
      } catch (error) {
        console.error("Error in handleSend:", error);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Sorry, I encountered an error. Please try again or type 'start project' to begin.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
      return;
    }

    if (step === "name") {
      if (!validateName(trimmed)) {
        addBotMessage("Please enter a valid name (at least 2 characters).");
        return;
      }
      setUserName(trimmed);
      setStep("email");
      addBotMessage(`Nice to meet you, ${trimmed}! What's your email address?`);
      return;
    }

    if (step === "email") {
      if (!validateEmail(trimmed)) {
        addBotMessage(
          "That doesn't look like a valid email. Please try again:"
        );
        return;
      }
      setUserEmail(trimmed);
      setStep("phone");
      addBotMessage("Perfect! What's your phone number?");
      return;
    }

    if (step === "phone") {
      if (!validatePhone(trimmed)) {
        addBotMessage("Please enter a valid phone number (10-15 digits).");
        return;
      }
      setUserPhone(trimmed);
      setStep("project");
      addBotMessage("Awesome! What type of project are you interested in?");
      return;
    }

    if (step === "project") {
      if (!trimmed) {
        addBotMessage("Please select a project type.");
        return;
      }
      setUserProject(trimmed);
      setStep("message");
      addBotMessage("Great choice! Tell me more about your project:");
      return;
    }

    if (step === "message") {
      setUserMessage(trimmed);
      setStep("normal");

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sending your information...",
          timestamp: new Date(),
        },
      ]);

      try {
        await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "chatbot",
            name: userName,
            email: userEmail,
            phone: userPhone,
            project: userProject,
            message: trimmed,
          }),
        });

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "company",
              text: `✅ Thank you, ${userName}! We've received your inquiry and our team will reach out within 24 hours.`,
              timestamp: new Date(),
            },
          ]);
        }, 1000);
      } catch (err) {
        console.error("Enquiry submission error:", err);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "❌ Something went wrong. Please try again later or email us directly.",
            timestamp: new Date(),
          },
        ]);
      }
      return;
    }
  };

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) {
      const timer = setTimeout(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, open, isTyping]);

  useEffect(() => {
    if (open && !minimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, minimized]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (minimized) {
          setOpen(false);
        } else {
          setMinimized(true);
        }
      }
    };

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

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, minimized]);

  if (dismissed) return null;

  return (
    <>
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
        {/* Chat Window */}
        <div
          ref={chatContainerRef}
          className={`mb-3 sm:mb-4 transition-all duration-300 ease-out ${
            open && !minimized
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="w-[calc(100vw-1.5rem)] sm:w-[380px] md:w-[420px] lg:w-[440px] h-[calc(100vh-5rem)] sm:h-[550px] md:h-[580px] bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200/50">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 flex justify-between items-center overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-800/20 animate-shimmer"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

              <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                  <div className="relative bg-white/25 backdrop-blur-md rounded-xl sm:rounded-2xl w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shadow-xl border border-white/20">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 animate-pulse" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base sm:text-xl tracking-tight">
                    AI Assistant
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/90 flex items-center gap-1.5 font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Online 
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 relative z-10">
                <button
                  onClick={() => setMinimized(true)}
                  className="hover:bg-white/25 active:bg-white/30 p-2 sm:p-2.5 rounded-xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                  aria-label="Minimize chat"
                >
                  <MinusIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-white/25 active:bg-white/30 p-2 sm:p-2.5 rounded-xl transition-all backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 p-3 sm:p-5 md:p-6 overflow-y-auto bg-gradient-to-b from-gray-50 via-white to-gray-50/50 flex flex-col gap-4 sm:gap-5 overscroll-contain relative"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "thin",
                scrollbarColor: "#FB923C #f3f4f6",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-50/30 to-transparent pointer-events-none"></div>

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  } animate-messageSlide relative`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {msg.from !== "user" && (
                    <div className="flex flex-col items-center mr-2 sm:mr-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md mb-1">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:scale-[1.02] ${
                      msg.from === "bot"
                        ? "bg-white text-gray-800 shadow-lg shadow-gray-200/50 border border-gray-100 rounded-tl-md"
                        : msg.from === "company"
                        ? "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-green-900 border-2 border-green-200/60 shadow-lg shadow-green-100/50 rounded-tl-md"
                        : "bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white rounded-tr-md shadow-xl shadow-orange-300/40"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {msg.text}
                    </p>
                    <span
                      className={`text-[9px] sm:text-[10px] mt-1.5 block ${
                        msg.from === "user" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </div>
                  {msg.from === "user" && (
                    <div className="flex flex-col items-center ml-2 sm:ml-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-md mb-1 text-white font-semibold text-xs">
                        You
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-messageSlide">
                  <div className="flex flex-col items-center mr-2 sm:mr-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md mb-1">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl rounded-tl-md px-5 py-4 shadow-lg shadow-gray-200/50 border border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-bounce"></span>
                      <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Input */}
            <div className="p-3 sm:p-5 bg-white/90 backdrop-blur-2xl border-t border-gray-200/50">
              {step === "project" ? (
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex-1 relative group">
                    <select
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100/50 transition-all bg-gray-50 hover:bg-white hover:border-gray-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select project type...</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Game App Development</option>
                      <option>UI/UX Design</option>
                      <option>Idea Based Website</option>
                      <option>E-commerce Development</option>
                      <option>Others</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!input}
                    className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-orange-300/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 hover:scale-105 disabled:hover:scale-100 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 sm:gap-3 items-end">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 pr-12 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100/50 transition-all bg-gray-50 hover:bg-white hover:border-gray-300 placeholder:text-gray-400"
                      placeholder="Type your message..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                    />
                    {input && (
                      <button
                        onClick={() => setInput("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-orange-300/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 disabled:hover:scale-100 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
              <p className="text-[10px] text-gray-400 mt-2 text-center">
                Press Enter to send • Shift + Enter for new line
              </p>
            </div>
          </div>
        </div>

        {/* Minimized State */}
        {open && minimized && (
          <div
            onClick={() => setMinimized(false)}
            className="mb-3 sm:mb-4 cursor-pointer animate-slideIn"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-300/50 transition-all flex items-center gap-2 sm:gap-3 group">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm">
                  AI Assistant
                </span>
                <span className="text-[10px] sm:text-xs text-white/80">
                  Click to expand
                </span>
              </div>
              <div className="ml-auto bg-white/20 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                {messages.length}
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => {
            setOpen(!open);
            setMinimized(false);
          }}
          className={`group relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-orange-400/50 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            open ? "scale-100" : "scale-100 hover:rotate-12"
          }`}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          <div className="absolute inset-0 bg-orange-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <MessageCircle
              className={`w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${
                open
                  ? "opacity-0 scale-0 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <X
              className={`w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${
                open
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-90"
              }`}
            />
          </div>

          {/* Notification Badge */}
          {!open && messages.length > 1 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold animate-pulse shadow-lg">
              {messages.length - 1}
            </span>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-messageSlide {
          animation: messageSlide 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fb923c, #f97316);
          border-radius: 10px;
          border: 2px solid #f3f4f6;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f97316, #ea580c);
        }

        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
