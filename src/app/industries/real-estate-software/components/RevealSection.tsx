"use client";

import { m, useInView } from "framer-motion";
import { useRef } from "react";

export const RevealSection = ({ children, className }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className={className}>
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </m.div>
    </div>
  );
};
