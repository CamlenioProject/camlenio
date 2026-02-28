"use client";

import React, { useState, useEffect, useMemo } from "react";
import { m, AnimatePresence, LazyMotion, domMax } from "framer-motion";
import { cn } from "../../../lib/utils";

export interface HeroTextAnimateProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function HeroTextAnimate({
  words = ["Fintech Custom Solutions", "Digital Transformation"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: HeroTextAnimateProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentWordIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  // Find longest word to prevent layout shifting without using expensive DOM measuring
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b)),
    [words]
  );

  return (
    <LazyMotion features={domMax}>
      <span
        className={cn(
          "relative inline-grid items-center justify-items-center rounded-lg overflow-hidden align-bottom bg-orange-500 text-white font-bold px-2",
          className
        )}
      >
        {/* HACK: Longest word as an invisible layer sets the container width instantly (No JS measure needed) */}
        <span
          className="invisible pointer-events-none col-start-1 row-start-1 px-3 py-1 select-none whitespace-nowrap"
          aria-hidden="true"
        >
          {longestWord}
        </span>
        <div className="col-start-1 row-start-1 w-full text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <m.div
              key={words[currentWordIndex]}
              className={cn(
                "col-start-1 row-start-1 whitespace-nowrap",
                textClassName
              )}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {words[currentWordIndex].split("").map((letter, i) => (
                <m.span
                  key={`${words[currentWordIndex]}-${i}`}
                  variants={{
                    hidden: { opacity: 0, filter: "blur(8px)", y: 5 },
                    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                    exit: {
                      opacity: 0,
                      filter: "blur(8px)",
                      transition: { duration: 0.15 }
                    }
                  }}
                  transition={{
                    delay: i * 0.015, // Slightly faster staggered delay for better feel
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1], // Smoother quintic ease-out
                  }}
                  style={{
                    willChange: "opacity, transform, filter",
                    display: "inline-block",
                    backfaceVisibility: "hidden",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  className="transform-gpu"
                >
                  {letter === " " ? "\u00A0" : letter}
                </m.span>
              ))}
            </m.div>
          </AnimatePresence>
        </div>
      </span>
    </LazyMotion>
  );
}
