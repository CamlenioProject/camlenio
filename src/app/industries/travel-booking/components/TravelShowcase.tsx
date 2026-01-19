"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function TravelShowcase() {
  return (
    <LazyMotion features={domMax}>
      <section className="py-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-20">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] mb-8">
                  EXPLORE <br />
                  THE WORLD
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
                  Discover amazing experiences in the world's most exciting outdoor destinations. Our software powers the journey.
                </p>

                <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-md flex items-center gap-2 group mb-16">
                  See Solutions
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Stats Row */}
                <div className="flex items-center gap-8 md:gap-12 border-t border-slate-200 pt-8">
                  <div>
                    <div className="text-4xl font-black text-slate-900">68%</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Growth Rate</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div>
                    <div className="text-4xl font-black text-slate-900">1.2K+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Active Users</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div>
                    <div className="text-4xl font-black text-slate-900">1.5K+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Destinations</div>
                  </div>
                </div>
              </m.div>
            </div>

            {/* Right Visuals */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Orange Curved Line SVG */}
              <svg className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2 -z-10" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <m.path
                  d="M0 150 C 200 150, 400 250, 600 100 S 800 200, 900 150"
                  stroke="#F97316"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>

              {/* Perspective Phones */}
              <m.div
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[300px] md:w-[350px]"
              >
                <Image
                  src="/travel/mobile_app.png"
                  alt="Travel Mobile App 1"
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 100, rotate: 10 }}
                whileInView={{ opacity: 1, y: 40, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 right-0 md:right-10 w-[200px] md:w-[250px] z-20"
              >
                <Image
                  src="/travel/mobile_app.png"
                  alt="Travel Mobile App 2"
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl brightness-90"
                />
              </m.div>

            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
