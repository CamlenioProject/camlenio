"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domMax } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

const SectionWrapper = ({
  children,
  threshold = 0.01,
  rootMargin = "200px 0px",
  minHeight = "400px"
}: SectionWrapperProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Yielding to the main thread (1ms delay) allows critical 
      // assets like the logo and hero to prioritize their animations.
      const timer = setTimeout(() => setShouldRender(true), 1);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <LazyMotion features={domMax}>
      <div
        ref={ref}
        style={{
          minHeight: !shouldRender ? minHeight : "auto",
          containIntrinsicSize: `auto ${minHeight}`,
          willChange: "opacity, transform"
        }}
        className="transform-gpu overflow-hidden"
      >
        {shouldRender ? (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {children}
          </m.div>
        ) : (
          <div style={{ height: minHeight }} />
        )}
      </div>
    </LazyMotion>
  );
};

export default SectionWrapper;
