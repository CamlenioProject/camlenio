"use client";

import { motion } from "framer-motion";
import { MoveRight, Smartphone, ShieldCheck, Zap, Apple, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-transparent pt-32 pb-24 md:pb-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center">
      {/* Delicate, premium background gradient blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] pointer-events-none -z-10 flex justify-center">
        <div className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-[100px] top-0 left-10 mix-blend-multiply"></div>
        <div className="absolute w-[30rem] h-[30rem] bg-amber-200/20 rounded-full blur-[120px] bottom-0 right-10 mix-blend-multiply"></div>
        <div className="absolute w-80 h-80 bg-gray-200/50 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Mobile-Only Feature Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex md:hidden bg-white/80 backdrop-blur-md rounded-full border border-orange-100 p-1 pr-4 items-center gap-2 shadow-sm mb-6 ring-1 ring-orange-500/10"
        >
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
            <Apple className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">Premium iOS Solutions</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Custom <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#f97316]">iOS App Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-medium px-4"
        >
          Transform your ideas into reality with expert iOS App Development Services to build secure and high-performance iPhone apps for modern businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-[280px] sm:max-w-none"
        >
          <Button size="xl" className="w-full sm:w-auto group" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Graphical Phone Mockups Section */}
        <div className="relative w-full max-w-6xl h-[500px] md:h-[650px] flex items-center justify-center perspective-[2000px] mt-0">

          {/* Mobile-Only Floating Elements (Simpler for mobile performance) */}
          <div className="absolute inset-0 z-40 md:hidden pointer-events-none">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-20 bg-white shadow-lg rounded-xl p-3 border border-slate-50 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <div className="w-12 h-1.5 bg-slate-100 rounded-full"></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-4 top-40 bg-white shadow-lg rounded-xl p-3 border border-slate-50 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-orange-500" />
              <div className="w-12 h-1.5 bg-slate-100 rounded-full"></div>
            </motion.div>
          </div>

          {/* Floating Feature Cards (Desktop Only) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="absolute left-0 lg:left-10 top-20 hidden md:flex bg-white/80 backdrop-blur-xl border border-white p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-40 max-w-[200px] flex-col rotate-[-4deg]"
          >
            <div className="w-10 h-10 rounded-2xl bg-orange-100/50 mb-3 flex items-center justify-center">
              <span className="text-orange-600 font-bold text-xs">01</span>
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Real-Time Sync</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">Robust and high-speed execution data processing without delays.</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            style={{ willChange: "transform" }}
            className="absolute right-0 lg:right-10 top-40 hidden md:flex bg-white/80 backdrop-blur-xl border border-white p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-40 max-w-[200px] flex-col rotate-[4deg]"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-100/50 mb-3 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">02</span>
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Contactless Delivery</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">Enjoy a convenient, contactless delivery experience with real time tracking.</p>
          </motion.div>

          {/* Side Phones (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10, rotateZ: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 20, rotateZ: -10 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute left-[15%] w-[240px] h-[500px] bg-white rounded-[35px] border-[8px] border-gray-200 shadow-xl overflow-hidden z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-200 rounded-b-xl z-30"></div>
            <div className="p-4 pt-8 bg-gray-50 h-full">
              <div className="w-full h-24 bg-white rounded-xl mb-4 shadow-sm border border-gray-100 p-3"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10, rotateZ: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: -20, rotateZ: 10 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute right-[15%] w-[240px] h-[500px] bg-white rounded-[35px] border-[8px] border-gray-200 shadow-xl overflow-hidden z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-200 rounded-b-xl z-30"></div>
            <div className="p-4 pt-10 bg-gray-50 h-full flex flex-col gap-3"></div>
          </motion.div>

          {/* Center Main Phone (Optimized for Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-30 w-[280px] md:w-[320px] h-[500px] md:h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)] border border-slate-800 overflow-hidden mx-auto"
          >
            {/* Dynamic Island fake */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40"></div>

            <div className="w-full h-full bg-slate-50 rounded-[2.2rem] flex flex-col pt-12 pb-4 px-5 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <div className="w-16 h-3 bg-slate-200 rounded-full"></div>
                  <div className="w-10 h-1.5 bg-slate-100 rounded-full"></div>
                </div>
                <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
              </div>

              {/* Search bar mock */}
              <div className="w-full h-9 rounded-full bg-slate-100 mb-6 flex items-center px-4">
                <div className="w-3 h-3 bg-slate-200 rounded-full mr-2"></div>
                <div className="w-1/2 h-1.5 bg-slate-200 rounded-full"></div>
              </div>

              {/* Categories Mock */}
              <div className="flex gap-3 overflow-hidden mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm"></div>
                    <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Large Card Mock */}
              <div className="w-full h-36 bg-slate-900 rounded-3xl p-4 flex flex-col justify-end text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-full blur-[40px] opacity-20 -mr-6 -mt-6"></div>
                <div className="w-3/4 h-3 bg-white/20 rounded-full mb-2"></div>
                <div className="w-1/2 h-3 bg-white/10 rounded-full"></div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="mt-auto flex justify-around items-center pt-4 border-t border-slate-100">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-8 h-1.5 rounded-full ${i === 1 ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
