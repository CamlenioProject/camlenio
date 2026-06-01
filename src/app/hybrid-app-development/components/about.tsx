"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {


  return (
    <section className="relative w-full pt-2 pb-24 bg-transparent overflow-hidden" style={{ transform: "translateZ(0)" }}>

      {/* Tech Geometric Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Atmospheric Glow Blurs */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[380px] h-[380px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {/* ========================================================================= */}
        {/* --- TOP ROW: SPLIT HEADER & COMPACT STATS COUNTERS --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-100/80">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              Core Expertise
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-[1.12] tracking-tight" style={{ transform: "translateZ(0)" }}>
              Best Hybrid Mobile <br className="hidden sm:block" />
              App Development <span className="text-orange-500" style={{ textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)" }}>Services</span>
            </h2>
          </div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-stretch">

          {/* Animated Connecting Timeline line between Card 1 and Card 2 (Desktop only) */}
          <div className="absolute top-[40%] left-[47%] w-[7%] h-[2px] hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-4 overflow-visible" fill="none">
              <path d="M0,8 L100,8" stroke="#fed7aa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 5" />
              <motion.circle
                cx="0" cy="8" r="4.5" fill="#f97316"
                animate={{ cx: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="shadow-sm"
              />
            </svg>
          </div>

          {/* STEP 01 CARD: Platform Adaptability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative p-8 bg-white/70 backdrop-blur-md border border-slate-100 rounded-[32px] shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            whileHover={{ y: -4 }}
          >
            {/* Step Step Indicator */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-orange-500/20">
              01
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Multi-Platform Reach</span>
              </div>

              <h3 className="text-xl font-black text-slate-900 leading-tight">
                Cross-Platform Harmony
              </h3>

              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Several businesses require adaptable mobile applications that are cost-effective and compatible with multiple platforms. That’s why Camlenio designed a Hybrid Mobile App Development approach to help businesses launch robust applications that run seamlessly on both Android and iOS devices.
              </p>
            </div>

            {/* Step 1 Visual Widget: Integrated Checklist */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>iOS Core Engine</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Android UI Sync</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Single Codebase</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>60 FPS Graphics</span>
              </div>
            </div>

          </motion.div>

          {/* STEP 02 CARD: Startup Scaling */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative p-8 bg-orange-50/10 backdrop-blur-md border border-orange-100/50 rounded-[32px] shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            whileHover={{ y: -4 }}
          >
            {/* Step Step Indicator */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-orange-500/25">
              02
            </div>

            <div className="absolute top-4 right-6">
              <span className="inline-flex items-center gap-1 text-[8px] font-black text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Startup Friendly
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency & Cost</span>
              </div>

              <h3 className="text-xl font-black text-slate-900 leading-tight">
                Cost-Effective Scaling
              </h3>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Our expertise delivers high-quality Hybrid App Development Services customized to your essential business requirements. If you are a beginner or startup, we design high-quality apps using a single codebase and guarantee quick development and decreased costs without compromising quality.
              </p>
            </div>

            {/* Step 2 Visual Widget: Development Pipeline */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-[9px] font-black uppercase text-slate-400">
              <div className="flex flex-col items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-extrabold text-[10px]">1</span>
                <span>Concept</span>
              </div>
              <div className="flex-1 h-[2px] bg-dashed bg-orange-100/80 mx-2" />
              <div className="flex flex-col items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-extrabold text-[10px]">2</span>
                <span>One Build</span>
              </div>
              <div className="flex-1 h-[2px] bg-dashed bg-orange-100/80 mx-2" />
              <div className="flex flex-col items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-extrabold text-[10px]">3</span>
                <span>Launch</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
