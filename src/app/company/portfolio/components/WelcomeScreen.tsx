"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const greetings = [
    "Hello",
    "Namaste",
    "Bonjour",
    "Hola",
    "Welcome"
  ];

  useEffect(() => {
    // Progress simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Non-linear progress for realism
        const increment = prev > 80 ? 1 : 2;
        return prev + increment;
      });
    }, 30);

    // Text cycling
    const textTimer = setInterval(() => {
      setGreetingIndex(prev => {
        if (prev === greetings.length - 1) return prev;
        return (prev + 1);
      });
    }, 450);

    // Trigger completion
    const completeTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 2500); // Wait for the now slower exit animation
    }, 3500);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
      clearTimeout(completeTimer);
    }
  }, [onComplete]);

  // Curtain columns for the reveal effect - increased for smoother wave resembling the sketch
  const columns = 7;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-row transition-none ${isExiting ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      {/* Background Curtains */}
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          className="relative h-full bg-black border-r border-gray-900/10 last:border-r-0"
          style={{ width: `${100 / columns}%` }}
          initial={{ y: 0 }}
          animate={isExiting ? { y: "-100%" } : { y: 0 }}
          transition={{
            duration: 2.4,
            ease: [0.83, 0, 0.17, 1],
            delay: i * 0.12, // Slower, more majestic stagger
          }}
        >
          {/* Subtle Grid Pattern inside each column */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </motion.div>
      ))}

      {/* Content Overlay - Centered Absolute */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        // Fade out slightly faster so the curtain effect takes focus
        animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Progress Counter */}
        <div className="absolute top-10 right-10 flex flex-col items-end">
          <motion.span
            className="text-8xl md:text-9xl font-bold text-transparent text-stroke-2 text-stroke-white opacity-20 font-mono"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
          >
            {progress}
          </motion.span>
        </div>

        <div className="relative">
          <div className="overflow-hidden h-24 md:h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={greetings[greetingIndex]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
              >
                {greetings[greetingIndex]}
                <span className="text-cyan-500">.</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Loading Line */}
          <div className="w-64 h-[1px] bg-gray-800 mt-8 overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-cyan-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs uppercase tracking-widest text-gray-500 font-mono">
            <span>Loading Assets</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
