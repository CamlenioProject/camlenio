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
  rootMargin = "1000px 0px", // Aggressive pre-loading
  minHeight = "400px"
}: SectionWrapperProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  // Defer rendering slightly to avoid main-thread blocking during scroll peak
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShouldRender(true), 50);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <LazyMotion features={domMax}>
      <div
        ref={ref}
        style={{
          minHeight: !shouldRender ? minHeight : "auto",
          // contentVisibility: "auto", // Modern CSS hint for skip-rendering (use with caution)
          containIntrinsicSize: `auto ${minHeight}`,
          willChange: "opacity, transform"
        }}
        className="transform-gpu overflow-hidden"
      >
        {shouldRender ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
