"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface ContainerScrollProps {
  titleComponent?: ReactNode;
  children: ReactNode;
}

export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 🔹 Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 28,
    mass: 0.9,
  });

  // 🔹 Calibrated transforms
  const rotate = useTransform(smoothProgress, [0, 1], [isMobile ? 6 : 10, 0]);

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [isMobile ? 0.96 : 1.02, 1]
  );

  const translateY = useTransform(smoothProgress, [0, 1], [120, 0]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-[22rem] sm:h-[48rem] md:h-[46rem] px-4"
    >
      <div className="relative w-full" style={{ perspective: "1000px" }}>
        {/* OPTIONAL TITLE */}
        {titleComponent && (
          <motion.div
            style={{ translateY }}
            className="mx-auto mb-8 max-w-5xl text-center"
          >
            {titleComponent}
          </motion.div>
        )}

        {/* ANIMATED CONTAINER */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            translateY,
            transformStyle: "preserve-3d",
            boxShadow:
              "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
          }}
          className="mx-auto w-full max-w-5xl rounded-[28px] border border-[#6C6C6C] bg-[#222222] p-2 md:p-5"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:p-4">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
