"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function FeatureCards() {
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <section id="features" className="py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Dark Navy/Black Card (Horizon Courts Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-950 text-white rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xl min-h-[380px] border border-slate-800"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-orange-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold leading-snug font-sans tracking-tight">
              Secure Transaction Processing
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed font-sans">
              It is developed with a security-focused design for secure operations.
            </p>
          </div>

          {/* Bottom Toggle Switch */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setToggleActive(!toggleActive)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  toggleActive ? "bg-orange-500 justify-end" : "bg-slate-700 justify-start"
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </button>
              <span className="text-xs font-semibold text-gray-300">
                {toggleActive ? "Live Settlement" : "Manual Mode"}
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
              ACTIVE
            </span>
          </div>
        </motion.div>

        {/* Card 2: Vibrant Blue Image Card with Centered Pill Tag (Horizon Courts Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-[2rem] overflow-hidden shadow-xl min-h-[380px] group flex items-center justify-center p-6 border border-gray-200"
        >
          <Image
            src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=2070&auto=format&fit=crop"
            alt="Admin & Agent Management"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/60" />

          {/* Center Pill Tag Overlay */}
          <div className="relative z-10 text-center">
            <span className="px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 font-bold text-xs sm:text-sm shadow-lg border border-white/40 tracking-wide inline-block hover:scale-105 transition-transform cursor-pointer">
              Admin &amp; Agent Management
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
            <p className="text-xs font-medium text-gray-200">
              Manage your complete agent members from the dashboard.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Light Card with Stats & Dots Graphic (Horizon Courts Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white/90 backdrop-blur-md border border-orange-500/15 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-sm min-h-[380px]"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight font-sans">
              Real-Time Transaction Processing
            </h4>
            <p className="text-xs text-gray-600 font-medium leading-relaxed mt-2">
              Monitor transactions and status updates easily.
            </p>
          </div>

          {/* Progress Dots Graphic */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700 w-28 text-left">Transaction Reports</span>
              <div className="flex gap-1">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-orange-500" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700 w-28 text-left">Easy Dashboard</span>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-amber-500" />
                ))}
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-gray-200" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700 w-28 text-left">Scalable Platform</span>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-emerald-500" />
                ))}
                {[...Array(1)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-gray-200" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
