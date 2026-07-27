"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-28 pb-16 " style={{ transform: "translateZ(0)" }}>

      {/* --- HERO CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* --- LEFT COLUMN: CONTENT & ACTION --- */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Modern Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-800 mb-6 tracking-wide shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            iOS & Android • One Codebase
          </motion.div>

          {/* Clean SaaS Typography Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0f172a] leading-[1.12] tracking-tight">
              Hybrid Mobile App <br />
              <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }} >Development Services</span> <br />
              for Business Growth
            </h1>
          </motion.div>

          {/* SaaS Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mt-6"
          >
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Build powerful, high-performance apps with our expert Hybrid Mobile App Development solutions using a single codebase for iOS & Android.
            </p>
          </motion.div>

          {/* Action Center - Premium Theme-aligned CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Button
              variant="default"
              size="xl"
              onClick={() => router.push("/contact")}
              className="group bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer border-0"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>

        {/* --- RIGHT COLUMN: VISUAL MOCKUPS & GLASSMORPHIC METRICS --- */}
        <div className="lg:col-span-5 flex items-center justify-center relative">

          <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">

            {/* Background glowing bubble */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 blur-[80px] rounded-full -z-10" />

            {/* --- PREMIUM SMARTPHONE CHASSIS --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[300px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-2.5 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.18)] border-[5px] border-slate-800 ring-1 ring-slate-700/50 overflow-hidden"
            >
              {/* App UI Screen */}
              <div className="w-full h-full bg-[#fafbfe] rounded-[34px] overflow-hidden p-4 pt-8 flex flex-col justify-between relative select-none">

                {/* Header inside screen */}
                <div>
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <Smartphone className="w-3 h-3 text-orange-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-800">Camlenio Core</span>
                    </div>
                    <span className="text-[8px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full">v1.0</span>
                  </div>

                  {/* Balance / Analytics Metrics */}
                  <div className="w-full bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.02)]">
                    <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block mb-0.5">Development Saved</span>
                    <span className="text-xl font-black text-slate-900">₹1,876,580</span>

                    {/* Performance Progress */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-orange-500 rounded-full"
                      />
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[8px] font-extrabold text-orange-500">85% Faster Setup</span>
                      <span className="text-[8px] font-semibold text-slate-400">iOS & Android</span>
                    </div>
                  </div>

                  {/* Feature Lists */}
                  <div className="mt-4 space-y-2">
                    <div className="w-full bg-white p-2.5 rounded-xl border border-slate-100/80 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-emerald-50 rounded-lg text-emerald-600">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-700">Native Performance</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-emerald-600">60 FPS</span>
                    </div>

                    <div className="w-full bg-white p-2.5 rounded-xl border border-slate-100/80 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-cyan-50 rounded-lg text-cyan-600">
                          <Cpu className="w-3 h-3" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-700">React Native / Flutter</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-cyan-600">Active</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Bottom Deployment Button */}
                <div className="w-full mt-auto">
                  <div className="w-full bg-slate-900 hover:bg-black py-2.5 rounded-xl text-center text-[9px] font-extrabold text-white cursor-pointer active:scale-95 transition-all shadow-md">
                    Launch Hybrid App
                  </div>
                </div>

              </div>
            </motion.div>

            {/* --- FLOATING ELEMENT 2: PERFORMANCE METRICS CARD (Finpay Style) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -50, y: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-10 bottom-[22%] z-20 w-[170px] cursor-pointer hidden md:block"
              onClick={() => router.push("/contact")}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-white/95 rounded-2xl p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] border border-slate-100 backdrop-blur-md w-full"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Active Apps</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <p className="text-base font-black text-slate-900 leading-tight">4,820 <span className="text-[8px] text-orange-500 font-extrabold ml-1">+12.4%</span></p>

                {/* Overlapping Faces */}
                <div className="mt-3 flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-5 h-5 rounded-full border border-white flex items-center justify-center text-[7px] font-extrabold bg-slate-100 text-slate-500`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[7px] font-bold bg-orange-50 text-orange-600">
                    +4k
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
