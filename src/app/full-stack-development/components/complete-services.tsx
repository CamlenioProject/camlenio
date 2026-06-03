"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Layers, 
  Laptop,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function CompleteServices() {
  const specialities = [
    { title: "Dynamic Portals", icon: Globe, bg: "bg-[#e0f2fe]/30 border-sky-100/50 hover:bg-[#e0f2fe]/50 text-sky-600" },
    { title: "SaaS based Solutions", icon: Cpu, bg: "bg-[#ffedd5]/30 border-amber-100/50 hover:bg-[#ffedd5]/50 text-amber-600" },
    { title: "Enterprise-level System", icon: Layers, bg: "bg-[#f3e8ff]/30 border-purple-100/50 hover:bg-[#f3e8ff]/50 text-purple-600" },
    { title: "Custom Web Platforms", icon: Laptop, bg: "bg-[#ccfbf1]/30 border-teal-100/50 hover:bg-[#ccfbf1]/50 text-teal-600" }
  ];

  return (
    <section 
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Cinematic background glowing nodes */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* --- LEFT COLUMN: COPY & FLEXIBILITY CALLOUT --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100/80 rounded-full text-[10px] font-bold text-orange-600 tracking-wide uppercase shadow-3xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Comprehensive Solutions
            </div>

            {/* Standardized Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
              Complete Full Stack <br className="hidden sm:block" />
              <span 
                className="text-orange-500 inline-block mt-1" 
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                Web Development Services
              </span>
            </h2>

            {/* Standardized Paragraph */}
            <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed mb-8 max-w-xl">
              Our Full Stack Web Development Services cover everything from intuitive UI design to secure backend architecture. With experience in Frontend and Backend Development Services, our expertise guarantees your app performs efficiently across all systems. We specialize in:
            </p>

            {/* Standardized Flexibility Quote Card */}
            <div className="w-full max-w-xl border-l-4 border-orange-500 bg-orange-500/5 backdrop-blur-xs p-5 rounded-r-2xl border border-slate-100 shadow-3xs">
              <p className="text-sm md:text-base font-sans text-justify text-slate-700 leading-relaxed italic">
                "Our approach to custom Full Stack Development focuses on Flexibility and scalability to meet your business requirements."
              </p>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* --- RIGHT COLUMN: 2X2 SPECIALITIES GRID --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
            className="lg:col-span-6 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {specialities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative ${item.bg} border rounded-[28px] p-6 shadow-3xs hover:shadow-2xs transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-default`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-3xs border border-white/60 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-slate-700 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-orange-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
