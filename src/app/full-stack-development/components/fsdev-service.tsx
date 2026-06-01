"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Server, 
  Activity, 
  Cpu, 
  Database, 
  CheckCircle2, 
  Layers,
  Network
} from "lucide-react";

export default function FsDevServices() {
  return (
    <section 
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Dynamic atmospheric ambient flows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* --- LEFT COLUMN: HIGH-FIDELITY TEXT COPY --- */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Status Indicator Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100/80 rounded-full text-[10px] font-bold text-orange-600 tracking-wide uppercase shadow-3xs mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
              <span>SaaS Stack Excellence</span>
            </motion.div>

            {/* Signature Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight mb-8"
            >
              Full Stack Development <br className="hidden sm:block" />
              <span 
                className="text-orange-500 inline-block mt-1" 
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                Services For Scalable Apps
              </span>
            </motion.h2>

            {/* Strictly Adhered Copy Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-500 font-semibold leading-relaxed text-justify mb-10 max-w-xl"
            >
              In a competitive digital environment, businesses need powerful and high-performing applications. Camlenio provides advanced Full Stack Development Services intended to offer a seamless user experience and powerful backend functionality. As a reliable Full Stack Development Company, we fully support SMEs, beginners, and enterprises to convert ideas into high-quality products.
            </motion.p>

            {/* Interactive Feature Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-3xs group hover:border-orange-100 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Production Ready</span>
              </div>
              <div className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-3xs group hover:border-orange-100 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">High Performance</span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* --- RIGHT COLUMN: MINIMAL & MODERN INTERACTIVE SAAS UI DASHBOARD --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: "spring", stiffness: 40, damping: 15 }}
            className="lg:col-span-6 w-full flex justify-center lg:justify-end py-4"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3] bg-white/70 backdrop-blur-md rounded-[32px] border border-white/60 shadow-[0_20px_50px_-25px_rgba(249,115,22,0.12)] overflow-hidden p-1.5 flex flex-col">
              
              {/* Sleek Browser Title Bar */}
              <div className="w-full h-11 border-b border-slate-100/60 px-5 flex items-center justify-between bg-white/40 backdrop-blur-xs rounded-t-[26px]">
                {/* Windows/Mac Style Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                
                {/* Mock Address Bar */}
                <div className="w-[60%] h-6.5 bg-slate-100/60 rounded-full px-4 flex items-center justify-center gap-1.5 border border-slate-100/30">
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">camlenio.app/stack-monitor</span>
                </div>

                {/* Dummy indicator */}
                <div className="w-10 flex justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Main Dashboard Interface Area */}
              <div className="flex-1 bg-white/30 rounded-b-[26px] p-6 flex flex-col justify-between gap-6">
                
                {/* Telemetry Header Row */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-black text-slate-400 block uppercase tracking-widest mb-0.5">TELEMETRY MONITOR</span>
                    <h4 className="text-sm font-black text-slate-800 tracking-tight">Scalable Stack Analytics</h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-wider shadow-3xs">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>99.99% Uptime SLA</span>
                  </div>
                </div>

                {/* SVG Performance Chart Block */}
                <div className="h-28 w-full bg-slate-950 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xs border border-slate-900">
                  {/* Subtle Grid Watermark lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-[0.03]">
                    <span className="w-full border-t border-white" />
                    <span className="w-full border-t border-white" />
                    <span className="w-full border-t border-white" />
                  </div>

                  <div className="flex justify-between items-start z-10">
                    <span className="text-[9px] font-extrabold text-orange-400 tracking-widest uppercase">REAL-TIME CPU SCALING</span>
                    <span className="text-[11px] font-black text-emerald-400 tracking-widest">Active load: 12.4%</span>
                  </div>

                  {/* Dynamic Scalability Graph Path */}
                  <div className="relative w-full h-12 mt-2">
                    <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Area Gradient */}
                      <path 
                        d="M 0 80 Q 50 70 80 40 T 160 50 T 240 20 T 320 60 T 400 10 L 400 100 L 0 100 Z" 
                        fill="url(#chartGrad)" 
                      />
                      {/* Stroke Line */}
                      <motion.path 
                        d="M 0 80 Q 50 70 80 40 T 160 50 T 240 20 T 320 60 T 400 10" 
                        fill="none" 
                        stroke="#f97316" 
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 4 }}
                      />
                      {/* Glowing pointer tip */}
                      <motion.circle 
                        cx="400" 
                        cy="10" 
                        r="5" 
                        fill="#ff781e"
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Grid of Micro stats & Schematic Flows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Schematic Flow: React Client to Node.js backend */}
                  <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between shadow-3xs min-h-[96px]">
                    <span className="text-[9px] font-black text-slate-400 block uppercase tracking-widest">ARCHITECTURE BRIDGE</span>
                    
                    <div className="flex items-center justify-between relative py-2 px-1">
                      <div className="flex flex-col items-center gap-1 z-10">
                        <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-500 shadow-3xs">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <span className="text-[8px] font-extrabold text-slate-500 uppercase">React Client</span>
                      </div>

                      {/* Animated connecting line */}
                      <div className="flex-1 h-[2px] bg-slate-100 mx-2 relative overflow-hidden">
                        <motion.div 
                          animate={{ x: [-40, 80] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent absolute"
                        />
                      </div>

                      <div className="flex flex-col items-center gap-1 z-10">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-500 shadow-3xs">
                          <Database className="w-4 h-4" />
                        </div>
                        <span className="text-[8px] font-extrabold text-slate-500 uppercase">Node.js Server</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Stats List */}
                  <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between shadow-3xs">
                    <span className="text-[9px] font-black text-slate-400 block uppercase tracking-widest mb-1.5">RESPONSE SPEED</span>
                    
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase">Average Latency</span>
                        <span className="text-[11px] font-black text-slate-700">12.8ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase">Connection Peak</span>
                        <div className="flex items-center gap-1 text-[11px] font-black text-orange-600">
                          <Activity className="w-3 h-3" />
                          <span>Max</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
