"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, MapPin, Clock, Star, Zap, ShieldCheck, Compass } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-28 pb-16"
      style={{ transform: "translateZ(0)" }}
    >

      {/* Atmosphere Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* --- HERO CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* --- LEFT COLUMN: CONTENT & ACTION --- */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Premium Modern Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-bold text-orange-800 mb-6 tracking-wide shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Real-Time GPS Tracking • Doorstep Delivery • Instant Booking
          </motion.div>

          {/* SaaS Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0f172a] leading-[1.12] tracking-tight"
              style={{ transform: "translateZ(0)" }}
            >
              Build Smart <br />
              <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                On Demand Apps
              </span> <br />
              With Camlenio
            </h1>
          </motion.div>

          {/* Description Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mt-6"
          >
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Transform your Business with a scalable, real-time mobile app solution designed for growth.
            </p>
          </motion.div>

          {/* Action Center - Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="default"
              size="xl"
              onClick={() => router.push("/contact")}
              className="group bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer border-0"
            >
              Get On-Demand Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: ON-DEMAND LIVE SIMULATOR & FLOATING WIDGETS --- */}
        <div className="lg:col-span-5 flex items-center justify-center relative">

          <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">

            {/* Background blur bubble */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 blur-[90px] rounded-full -z-10" />

            {/* --- SMARTPHONE CHASSIS --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[300px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-2.5 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.18)] border-[5px] border-slate-800 ring-1 ring-slate-700/50 overflow-hidden"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Inside Screen */}
              <div className="w-full h-full bg-[#f8fafc] rounded-[34px] overflow-hidden p-4 pt-8 flex flex-col justify-between relative select-none">

                {/* Screen Header */}
                <div>
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <Compass className="w-3 h-3 text-orange-500 animate-spin-slow" />
                      </div>
                      <span className="text-[10px] font-black text-slate-800">Dispatch Map</span>
                    </div>
                    <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">LIVE</span>
                  </div>

                  {/* Order Courier Delivery Card */}
                  <div className="w-full bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.02)]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-wider block">Courier ID</span>
                        <span className="text-[11px] font-black text-slate-800">Rider #4892</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-[8px] font-black text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <span>4.9</span>
                      </div>
                    </div>

                    {/* Simple Map representation with CSS lines */}
                    <div className="w-full h-20 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden relative my-2 flex items-center justify-center">
                      {/* Grid Line Map aesthetics */}
                      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                      {/* Simulated path line */}
                      <svg className="absolute inset-0 w-full h-full" fill="none">
                        <path d="M20,60 Q60,20 100,50 T220,30" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          d="M20,60 Q60,20 100,50 T220,30"
                          stroke="#f97316"
                          strokeWidth="2.5"
                        />
                      </svg>

                      {/* Map Pins */}
                      <div className="absolute left-[15px] bottom-[15px] p-1 bg-slate-900 text-white rounded-full shadow-md z-10">
                        <MapPin className="w-2 h-2" />
                      </div>

                      <div className="absolute right-[25px] top-[25px] p-1 bg-orange-500 text-white rounded-full shadow-md z-10 animate-bounce">
                        <MapPin className="w-2 h-2" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                          <Clock className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="text-[7px] text-slate-400 block font-bold">Estimated Arrival</span>
                          <span className="text-[10px] font-black text-slate-800">12 Mins</span>
                        </div>
                      </div>
                      <span className="text-[8px] font-black text-slate-400">2.4 miles</span>
                    </div>

                  </div>
                </div>

                {/* Bottom interactive action card inside phone simulator */}
                <div className="mt-auto flex flex-col gap-2">
                  <div className="w-full bg-white p-2.5 rounded-xl border border-slate-100/80 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-orange-50 rounded-lg text-orange-500">
                        <Zap className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold text-slate-400 block uppercase">Operational Speed</span>
                        <span className="text-[9px] font-bold text-slate-700">Auto-Dispatch Engine</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold text-orange-600">Active</span>
                  </div>

                  <div className="w-full bg-slate-900 hover:bg-black py-2.5 rounded-xl text-center text-[9px] font-extrabold text-white cursor-pointer active:scale-95 transition-all shadow-md">
                    Complete Booking
                  </div>
                </div>

              </div>
            </motion.div>

            {/* --- FLOATING METRIC 1: LIVE TRIP COUNT (Left side) --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-12 bottom-[24%] z-20 w-[170px] cursor-pointer hidden md:block"
              style={{ transform: "translateZ(0)" }}
            >
              <div
                className="bg-white/95 rounded-2xl p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] border border-slate-100 backdrop-blur-md w-full"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Live Dispatches</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <p className="text-base font-black text-slate-900 leading-tight">
                  1,482 <span className="text-[8px] text-emerald-500 font-extrabold ml-1">+18.2%</span>
                </p>

                <div className="mt-2.5 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full w-4/5" />
                </div>
              </div>
            </motion.div>

            {/* --- FLOATING METRIC 2: SECURITY & PAYMENTS (Right side) --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-12 top-[20%] z-20 w-[160px] cursor-pointer hidden md:block"
              style={{ transform: "translateZ(0)" }}
            >
              <div
                className="bg-white/95 rounded-2xl p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] border border-slate-100 backdrop-blur-md w-full"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Payments Engine</span>
                </div>
                <p className="text-[10px] font-black text-slate-800 leading-tight">PCI Compliant Gateway</p>
                <span className="text-[8px] font-black text-slate-400 block mt-1">Multi-Vendor Settlement</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
