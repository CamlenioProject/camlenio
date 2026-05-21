"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (popupShown === "true") return;

    // Preload image
    // const img = new Image();
    // img.src = "/popup.webp";

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/popup.webp"
              alt="Special Offer"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8 text-center bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Build Your Dream Project</h3>
            <p className="text-gray-600 mb-6">Get a free consultation and personalized quote for your software needs.</p>
            <button
              onClick={() => {
                setIsOpen(false);
                window.location.href = "/contact";
              }}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
