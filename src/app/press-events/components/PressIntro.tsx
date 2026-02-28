"use client";

import { m,LazyMotion,domMax } from "framer-motion";
import Image from "next/image";

interface PressIntroProps {
  openLightbox?: (images: string[], index: number) => void;
}

export default function PressIntro() {
  return (
    <LazyMotion features={domMax}>
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Dots Pattern */}
      <div className="absolute top-12 left-8 md:top-20 md:left-20 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side: Typography */}
        <div className="relative z-10">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
                Milestone Event
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
              CAMLENIO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                PARTY 2025
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              The grandest celebration of our journey. From humble beginnings to a powerhouse of innovation, we celebrated our 2nd anniversary with style, energy, and gratitude.
            </p>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-gray-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Camlenio 2nd Anniversary</h3>
                <p className="text-sm text-gray-500">Tickets to the future are now available.</p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative">
          {/* Abstract Shapes */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl mix-blend-multiply" />
            <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" />
          </m.div>

          {/* Main Image */}
          <m.div
            initial={{ opacity: 0, y: 50, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative z-10 w-full aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl rotate-6 border-4 border-white cursor-pointer group"
          >
            <Image
              src="/event/enjoy-party.webp"
              alt="Party Viz"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Elements */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white group-hover:opacity-90 transition-opacity">
              <h3 className="text-2xl font-bold">Live DJ & Dance</h3>
              <p className="opacity-80">Unforgettable Night</p>
             
            </div>

          </m.div>
        </div>

      </div>
    </section>
    </LazyMotion>
  );
}
