"use client";

import { m, LazyMotion, domMax, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PressTripProps {
  openLightbox?: (images: string[], index: number) => void;
}

export default function PressTrip() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <LazyMotion features={domMax}>
      <section ref={containerRef} className="py-24 md:py-32 bg-[#F0F9FF] relative overflow-hidden">

        {/* Nainital Theme Elements (Cool Blues & Greens) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

        {/* Falling Snow/Mist Effect (Subtle) */}
        <m.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[20%] text-sky-200 text-6xl opacity-20 animate-bounce">❄️</m.div>
        <m.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[20%] text-sky-200 text-6xl pointer-events-none"
        >
          ❄️
        </m.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* 1. Header Section (Centered) */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Fun Badge */}
              <m.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="inline-block bg-teal-600 text-white font-black px-6 py-2 text-lg transform -rotate-2 shadow-[4px_4px_0px_#0f172a] border-2 border-slate-900 mb-8 will-change-transform"
              >
                HILL STATION VIBES 🏔️
              </m.div>

              <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-none mb-6 tracking-tight">
                PEACE OF <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
                  NAINITAL.
                </span>
              </h2>

              <p className="text-xl md:text-2xl font-bold text-slate-600 leading-relaxed font-handwriting transform -rotate-1 max-w-2xl mx-auto">
                "From debugging code to boating in Naini Lake. We traded our office chairs for mountain views and misty mornings."
              </p>

              {/* Stats / Fun Tags */}
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                {['Boating 🚣', 'Mall Road Walks 🚶', 'Pahadi Maggi 🍜', 'Zero Stress ☁️'].map((tag, i) => (
                  <m.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
                    className="px-4 py-2 bg-white border-2 border-slate-900 rounded-lg font-bold text-sm shadow-[2px_2px_0px_#0f172a] cursor-default text-slate-800 will-change-transform"
                  >
                    {tag}
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>

          {/* 2. Wide Image Section (Full Team) */}
          <div className="relative w-full">
            <m.div
              style={{ y, rotate }}
              className="relative w-full aspect-[21/12] md:aspect-[2.5/1.2] bg-white p-3 md:p-4 shadow-xl border-2 border-slate-200 transform rotate-1 z-10 rounded-xl  group will-change-transform"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src="/event/trip1.webp"
                  alt="Team in Nainital"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-101"
                  priority
                />
              </div>

              {/* Tape Effect - Blue Tape for Cold Theme */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-sky-200/90 rotate-1 shadow-sm opacity-80" />

              {/* Sticker on Image */}
              <div className="absolute -bottom-6 -right-4 md:right-10 bg-white border-2 border-slate-900 px-6 py-3 shadow-[6px_6px_0px_#0f172a] transform -rotate-3 z-20">
                <span className="font-black text-lg md:text-xl text-slate-900">TEAM TRIP '25 💙</span>
              </div>

              {/* Another Sticker */}
              <div className="absolute -top-4 -left-4 md:left-10 bg-emerald-400 border-2 border-slate-900 px-4 py-2 shadow-[4px_4px_0px_#0f172a] transform rotate-6 z-20">
                <span className="font-bold font-mono text-sm text-slate-900">📍 NAINITAL, UK</span>
              </div>
            </m.div>

            {/* Decorative Background Elements behind the image */}
            <div className="absolute top-10 left-4 w-full h-full bg-slate-900/5 rounded-xl -rotate-1 -z-10" />

            {/* Floating Emoji */}
            <div className="absolute -top-10 right-[10%] text-6xl drop-shadow-lg z-30"
            >
              🌲
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
