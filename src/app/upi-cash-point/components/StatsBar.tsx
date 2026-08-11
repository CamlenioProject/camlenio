"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "₹500Cr+", label: "Volume processed annually" },
  { value: "99.99%", label: "Transaction success rate" },
  { value: "15,000+", label: "Active cash point outlets" },
  { value: "24/7", label: "Instant settlement engine" },
];

export default function StatsBar() {
  return (
    <section id="stats" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
      {/* Subtitle label */}
      <p className="text-xs sm:text-sm font-medium text-gray-500 mb-10 tracking-wide">
        A few facts about our UPI Cash Point platform in numbers
      </p>

      {/* 4-column minimal stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight font-sans">
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
