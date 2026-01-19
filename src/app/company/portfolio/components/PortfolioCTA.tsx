"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PortfolioCTA() {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax Text Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden">

      <motion.div style={{ y }} className="relative z-10 text-center">

        <p className="text-sm md:text-base font-mono uppercase tracking-widest mb-8 text-neutral-500">
          What's Next?
        </p>

        <h2 className="text-[10vw] font-bold leading-[0.9] tracking-tighter mb-12">
          Let's Build<br />
          <span className="text-orange-600 block">The Future.</span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-6 bg-black text-white rounded-full overflow-hidden text-xl md:text-2xl font-bold"
        >
          <div className="relative z-10 flex items-center gap-4">
            <span>Start a Project</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
          {/* Fill effect */}
          <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </motion.button>

      </motion.div>

      {/* Footer Links Mini */}
      <div className="absolute bottom-10 left-0 w-full px-10 md:px-20 flex justify-between items-end">
        <div className="hidden md:block text-2xl font-bold tracking-tighter">
          CAMLENIO
        </div>

        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>

    </section>
  );
}
