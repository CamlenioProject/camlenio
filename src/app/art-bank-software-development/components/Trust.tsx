"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-28 text-white bg-[#0b0f19] border-y border-orange-500/10 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Title Block */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Trusted Platform
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
          >
            Why Do Fertility Clinics Trust{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow: "0 10px 30px rgba(249,115,22,0.15)",
              }}
            >
              Camlenio?
            </span>

          </motion.h2>
        </div>

        {/* Content block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl text-center md:text-left"
        >
          {/* Quote watermark */}
          <div className="absolute -right-6 -bottom-6 text-white/[0.02] pointer-events-none">
            <Quote size={180} />
          </div>

          <div className="relative z-10 space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-200 font-sans">
              Fertility clinics trust Camlenio because we deliver reliable ART Bank Software, secure data management, smooth IVF workflow automation, and dedicated support.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans font-medium">
              Our advanced fertility clinic software helps to improve patient management, donor tracking, operational accuracy, and clinic efficiency with technology solutions designed specifically for modern IVF and fertility centers.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
