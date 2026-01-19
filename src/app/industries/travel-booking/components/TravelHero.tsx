"use client";

import { m, LazyMotion, domMax, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function TravelHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <LazyMotion features={domMax}>
      <section ref={containerRef} className="relative w-full min-h-[95vh] overflow-hidden flex items-center pt-24 pb-12">

        {/* Background Abstract Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#F97316 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        {/* Orange Glow Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

          {/* Left Content */}
          <div className="max-w-2xl">
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Travel Tech Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight mb-8">
                BUILD <br />
                THE NEXT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  BIG JOURNEY
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                We develop high-performance booking engines, B2B portals, and diverse travel apps. Empowering agencies with scalable, futuristic technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 flex items-center gap-3 group">
                  Start Your Project
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </m.div>

            {/* Trusted By Strip */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 pt-8 border-t border-slate-200 flex items-center gap-6"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted By</span>
              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple generic logos or placeholders */}
                <div className="h-6 w-20 bg-slate-800 rounded opacity-20" />
                <div className="h-6 w-20 bg-slate-800 rounded opacity-20" />
                <div className="h-6 w-20 bg-slate-800 rounded opacity-20" />
              </div>
            </m.div>
          </div>

          {/* Right Visuals - Dynamic Layered Composition */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">

            {/* Main Phone Mockup */}
            <m.div
              style={{ y: y1, rotate: rotate }}
              initial={{ opacity: 0, y: 100, rotateY: 30 }}
              animate={{ opacity: 1, y: 0, rotateY: -10 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="absolute top-10 right-10 w-[300px] z-20 hover:z-30 transition-all duration-500"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-900 shadow-2xl bg-slate-900">
                <Image
                  src="/travel/mobile_app.png"
                  alt="Travel Mobile App"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </m.div>

            {/* Floating 'Ticket' Card */}
            <m.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-1/3 left-0 w-72 bg-white/80 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30"
            >
              <div className="flex items-center justify-between mb-4 border-b border-dashed border-gray-300 pb-4">
                <div className="text-xs font-bold text-slate-400 uppercase">Flight</div>
                <div className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">Confirmed</div>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-2xl font-black text-slate-900">NYC</span>
                <div className="flex-1 border-t-2 border-dotted border-gray-300 mx-4 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1">✈️</div>
                </div>
                <span className="text-2xl font-black text-orange-500">LDN</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>JFK Airport</span>
                <span>Heathrow</span>
              </div>
            </m.div>

            {/* Destination Card - Bottom Right */}
            <m.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-0 w-60 bg-white p-3 rounded-2xl shadow-xl z-10 rotate-3"
            >
              <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                <Image src="/travel/scenic_bg.png" fill className="object-cover" alt="Destination" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <StarIcon className="w-3 h-3 text-yellow-400" /> 4.9
                </div>
              </div>
              <div className="px-1">
                <h4 className="font-bold text-slate-900">Swiss Alps Trip</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <MapPinIcon className="w-3 h-3 text-orange-500" />
                  <span>Interlaken, Switzerland</span>
                </div>
              </div>
            </m.div>

          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
