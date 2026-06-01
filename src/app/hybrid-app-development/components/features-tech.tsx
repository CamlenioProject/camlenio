"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, ArrowRight, DollarSign, Cpu, Zap, Layers, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FeaturesTech() {
  const router = useRouter();

  const pillars = [
    { icon: Code2, text: "Streamline maintenance with a single codebase" },
    { icon: Smartphone, text: "Guarantee a consistent user experience across devices" },
    { icon: Globe, text: "Reach users on multiple platforms simultaneously" },
    { icon: DollarSign, text: "Decrease development time and cost" }
  ];

  return (
    <div className="relative w-full py-24 sm:pb-32 sm:pt-12 overflow-hidden bg-transparent" style={{ transform: "translateZ(0)" }}>

      {/* Background Atmosphere Spheres */}
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-br from-orange-500/5 to-orange-300/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">

        {/* ========================================================================= */}
        {/* --- SECTION 1: WHY HYBRID MOBILE APP DEVELOPMENT? --- */}
        {/* ========================================================================= */}
        <section className="bg-white/80 backdrop-blur-md rounded-[32px] border border-slate-100 p-8 md:p-14 shadow-sm flex flex-col gap-12 hover:shadow-md transition-all duration-300 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-orange-500/10 to-transparent blur-xl pointer-events-none" />

          {/* Header row split: Left Title, Right Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-100">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-[38px] font-black text-[#0f172a] leading-[1.15] tracking-tight" style={{ transform: "translateZ(0)" }}>
                Why Hybrid Mobile <br className="hidden sm:block" />
                <span className="text-orange-500" style={{ textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)" }}>
                  App Development?
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-3">
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Hybrid Mobile App Development enables businesses to reach users on multiple platforms with a single codebase, delivering near native performance while reducing development time and costs.
              </p>
            </div>
          </div>

          {/* Pillars List: Minimal Columns inside Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="flex flex-col items-start gap-4 p-4 hover:bg-orange-50/20 rounded-2xl transition-all duration-300"
                >
                  {/* Minimal Orange Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-700 leading-snug">
                      {item.text}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* --- SECTION 2: OUR ADVANCED TECHNOLOGIES --- */}
        {/* ========================================================================= */}
        <section className="flex flex-col gap-12">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <h2 className="text-3xl sm:text-[38px] font-black text-slate-900 tracking-tight leading-tight" style={{ transform: "translateZ(0)" }}>
              Our Advanced <span className="text-orange-500" style={{ textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)" }}>Hybrid Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              We use the latest tools and technologies to offer robust and scalable applications:
            </p>
          </div>

          {/* ASYMMETRIC GRID SYSTEM (Flutter & Ionic on Row 1, React Native on Row 2) */}
          <div className="flex flex-col gap-8">

            {/* Row 1: Left & Right Square Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

              {/* Flutter App Development Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[380px]"
                onClick={() => router.push("/contact")}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">High Performance</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">
                    Flutter App Development
                  </h3>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed mb-4">
                    for high-performance and visually demanding apps
                  </p>
                </div>

                <div>
                  {/* Glowing CSS Skia Speed Test chart widget */}
                  <div className="w-full h-24 bg-orange-50/30 rounded-2xl border border-orange-100/50 flex items-center justify-between p-4 overflow-hidden relative group-hover:border-orange-200 transition-all duration-300">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-0.5">Speed Test</span>
                      <span className="text-sm font-black text-slate-800">Skia Graphics</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-full pt-4">
                      {[30, 45, 25, 60, 40, 75, 95].map((val, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                          className="w-2 bg-gradient-to-t from-orange-400 to-orange-500 rounded-t shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-slate-900 leading-none">60 FPS</span>
                      <span className="text-[9px] font-bold text-slate-400 block mt-0.5">Rendering engine</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-500 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ionic App Development Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[380px]"
                onClick={() => router.push("/contact")}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Flexible Solutions</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">
                    Ionic App Development
                  </h3>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed mb-4">
                    for flexible and cost-effective solutions
                  </p>
                </div>

                <div>
                  {/* Beautiful 3D isometric component layers stack representation */}
                  <div className="w-full h-24 bg-orange-50/30 rounded-2xl border border-orange-100/50 p-4 overflow-hidden relative group-hover:border-orange-200 transition-all duration-300 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-0.5">Component Stack</span>
                      <span className="text-xs font-black text-slate-800 font-sans">Web Standards</span>
                    </div>

                    {/* Isometric rotating/overlapping sheets */}
                    <div className="relative w-24 h-16 flex items-center justify-center mr-4">
                      {/* Top iOS View layer */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="absolute w-16 h-4 bg-orange-500 rounded shadow-md border border-orange-400/50 flex items-center justify-center text-[7px] font-bold text-white uppercase tracking-wider"
                        style={{ transform: "rotate(-12deg) skewX(20deg)", top: "12%" }}
                      >
                        iOS App
                      </motion.div>

                      {/* Middle Android View layer */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="absolute w-18 h-4 bg-orange-400 rounded shadow-md border border-orange-300/50 flex items-center justify-center text-[7px] font-bold text-white uppercase tracking-wider"
                        style={{ transform: "rotate(-12deg) skewX(20deg)", top: "34%" }}
                      >
                        Android App
                      </motion.div>

                      {/* Bottom Web View layer */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="absolute w-20 h-4 bg-orange-300 rounded shadow-md border border-orange-200/50 flex items-center justify-center text-[7px] font-bold text-white uppercase tracking-wider"
                        style={{ transform: "rotate(-12deg) skewX(20deg)", top: "56%" }}
                      >
                        Web Base
                      </motion.div>
                    </div>

                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-slate-900 leading-none">Multi-Platform</span>
                      <span className="text-[9px] font-bold text-slate-400 block mt-0.5">Unified web codebase</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-500 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Row 2: Wide Card (React Native) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              {/* Left Column Content (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">

                  
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-extrabold text-orange-500 bg-orange-50 px-2.5 py-0.5 rounded-full">
                    Ease & Responsiveness
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  React Native App Development
                </h3>

                <p className="text-sm font-medium text-slate-400 leading-relaxed">
                  for ease, responsive user experiences
                </p>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900 leading-none">Native Bridges</span>
                    <span className="text-[9px] font-bold text-slate-400 block mt-0.5">Smooth responsive interfaces</span>
                  </div>
                </div>
              </div>

              {/* Right Column linear graph panel (lg:col-span-7) */}
              <div className="lg:col-span-7 bg-orange-50/20 rounded-2xl border border-orange-100/30 p-6 flex flex-col justify-between overflow-hidden relative min-h-[190px]">

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Efficiency Chart</p>
                    <p className="text-lg font-black text-slate-800">$1,876,580</p>
                  </div>
                  <span className="text-[9px] font-extrabold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-100/80">6 Months</span>
                </div>

                {/* Upgraded SVG Line Chart Graph with Glowing Path */}
                <div className="w-full h-24 relative flex items-end">
                  <svg className="absolute inset-0 w-full h-[80%] z-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                    {/* Glowing neon orange line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M0,28 Q15,25 30,17 T60,10 T90,3 L100,2"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Light Orange Fill underneath */}
                    <path
                      d="M0,28 Q15,25 30,17 T60,10 T90,3 L100,2 L100,30 L0,30 Z"
                      fill="url(#gradient-orange)"
                      opacity="0.1"
                    />

                    <defs>
                      <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Horizontal Timeline labels */}
                  <div className="w-full flex justify-between text-[8px] font-extrabold text-slate-400 pt-1.5 border-t border-slate-100/60 z-20 bg-transparent">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
