"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";

export default function TravelHero() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative w-full min-h-screen flex flex-col pt-32 pb-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col h-full justify-between">

          {/* Top Section: Heading + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">

            {/* Left: Heading */}
            <div className="lg:col-span-8">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-[12vw] lg:text-[7rem] font-black text-slate-900 leading-[0.85] tracking-tighter">
                  DISCOVER <br />
                  <span className="text-orange-500">NEW TECH</span>
                </h1>
              </m.div>
            </div>

            {/* Right: Description + Button */}
            <div className="lg:col-span-4 mb-4">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Your next digital transformation starts here. Plan, build, and scale your travel business with Camlenio — your reliable technology partner.
                </p>
                <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 w-full md:w-auto">
                  Start Innovation
                </button>
              </m.div>
            </div>
          </div>

          {/* Hero Image Section */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/travel/scenic_bg.png"
              alt="Scenic Travel Logic"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
