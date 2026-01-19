"use client";

import { AnimatePresence, m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsPointingOutIcon, ShareIcon } from "@heroicons/react/24/outline";

interface PressLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function PressLightbox({ images, initialIndex, isOpen, onClose }: PressLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let newIndex = index + newDirection;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setIndex(newIndex);
  };

  const handleThumbnailClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  }

  if (!isOpen) return null;

  return (
    <LazyMotion features={domMax}>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-between py-6 md:py-10"
        >

          {/* Top Bar UI */}
          <m.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-7xl px-6 flex justify-between items-center z-50 text-white"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{index + 1} / {images.length}</span>
              <div className="h-4 w-[1px] bg-white/20" />
              <span className="text-sm font-medium tracking-wide">Event Gallery</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:rotate-90 duration-300 border border-white/5"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </m.div>


          {/* Key Visual Area */}
          <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center px-4 md:px-12 my-2">

            {/* Left Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
              className="absolute left-2 md:left-0 z-40 p-2 md:p-4 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center group"
            >
              <ChevronLeftIcon className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Right Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
              className="absolute right-2 md:right-0 z-40 p-2 md:p-4 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center group"
            >
              <ChevronRightIcon className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* The Image */}
            <div className="relative w-full h-full" onClick={onClose}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <m.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.9, x: direction * 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: direction * -50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="relative w-full h-full max-w-[90vw] max-h-[75vh] md:max-h-[80vh] shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={images[index]}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      quality={100}
                      priority
                    />
                  </div>
                </m.div>
              </AnimatePresence>
            </div>
          </div>


          {/* Bottom Thumbnails Strip */}
          <m.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg overflow-x-auto no-scrollbar px-6 z-50 mt-4 h-16 md:h-20"
          >
            <div className="flex items-center justify-center gap-3 h-full">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleThumbnailClick(i)}
                  className={`relative h-12 w-12 md:h-16 md:w-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ease-out group ${i === index ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                  {/* Active Indicator Dot */}
                  {i === index && (
                    <div className="absolute inset-0 bg-white/10" />
                  )}
                </button>
              ))}
            </div>
          </m.div>

        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

// Swipe Helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
