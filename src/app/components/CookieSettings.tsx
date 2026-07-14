"use client";
import { useState, useEffect, useRef } from "react";
import { X, ShieldAlert, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieSettings() {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAnalytics = localStorage.getItem("cookie_consent_analytics");
      const savedMarketing = localStorage.getItem("cookie_consent_marketing");
      if (savedAnalytics !== null) setAnalytics(savedAnalytics === "true");
      if (savedMarketing !== null) setMarketing(savedMarketing === "true");
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  const handleSave = () => {
    localStorage.setItem("cookie_consent_analytics", String(analytics));
    localStorage.setItem("cookie_consent_marketing", String(marketing));
    
    // Dispatch custom event to notify other components if necessary
    window.dispatchEvent(new Event("cookieConsentChange"));
    
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-orange-500 transition-colors duration-500 text-xs md:text-sm text-gray-300"
      >
        Cookie Settings
      </button>

      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
            onClick={() => setOpen(false)} // Close on overlay click
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              ref={modalRef}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-orange-500/10 p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-500">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Cookie Preferences
                  </h2>
                  <p className="text-xs text-slate-400 font-medium">Manage your privacy choices</p>
                </div>
              </div>

              <div className="space-y-4 my-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="space-y-1 pr-4">
                    <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                      Necessary Cookies
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">
                        Always Active
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Required for the basic functionalities of the website, such as page navigation, secure areas, and saving choices.
                    </p>
                  </div>
                  <div className="pt-1">
                    <div className="w-4 h-4 rounded bg-orange-500 text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <label className="flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-500/20 cursor-pointer transition-all duration-300 select-none">
                  <div className="space-y-1 pr-4">
                    <p className="text-sm font-semibold text-slate-800">
                      Analytics Cookies
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Allow us to measure traffic, identify traffic sources, and understand user behavior on our platform to improve overall performance.
                    </p>
                  </div>
                  <div className="pt-1">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 border-slate-300 accent-orange-500 cursor-pointer"
                    />
                  </div>
                </label>

                {/* Marketing Cookies */}
                <label className="flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-500/20 cursor-pointer transition-all duration-300 select-none">
                  <div className="space-y-1 pr-4">
                    <p className="text-sm font-semibold text-slate-800">
                      Marketing Cookies
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Used to track visitors across websites to enable display of relevant and engaging ads matching your interests.
                    </p>
                  </div>
                  <div className="pt-1">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 border-slate-300 accent-orange-500 cursor-pointer"
                    />
                  </div>
                </label>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-600/10 hover:shadow-orange-600/20 active:scale-95 transition-all duration-300"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
