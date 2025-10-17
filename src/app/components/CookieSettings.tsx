"use client";
import { useState, useEffect, useRef } from "react";

export default function CookieSettings() {
  // State for checkbox values
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-sm  text-gray-300 hover:text-orange-500 transition-colors duration-300"
      >
        Cookie Settings
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)} // Close on overlay click
        >
          <div
            ref={modalRef}
            className="bg-orange-100 p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Cookie Preferences
            </h2>
            <div className="space-y-3">
              <label className="flex items-center text-gray-800 space-x-2">
                <input type="checkbox" defaultChecked disabled />
                <span>Necessary Cookies</span>
              </label>
              <label className="flex items-center text-gray-800 space-x-2">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="accent-orange-500"
                />
                <span>Analytics Cookies</span>
              </label>

              <label className="flex items-center text-gray-800 space-x-2">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="accent-orange-500"
                />
                <span>Marketing Cookies</span>
              </label>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // You can now use the 'analytics' and 'marketing' state
                  console.log({ analytics, marketing });
                  alert("Your cookie preferences have been saved.");
                  setOpen(false);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
