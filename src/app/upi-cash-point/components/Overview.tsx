"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section id="overview" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Pill Tag */}
        <div className="md:col-span-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200 shadow-xs">
            About Camlenio UPI
          </span>
        </div>

        {/* Right Headline Statement */}
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug tracking-tight font-sans"
          >
            At Camlenio, we don&apos;t just build software — we engineer high-speed, secure fintech infrastructure. Since 2021, our UPI Cash Point platform has powered retail agent networks, distributors, and fintech enterprises with 100% reliable instant cash-in & cash-out capabilities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
