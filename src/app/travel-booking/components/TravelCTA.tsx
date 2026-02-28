"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function TravelCTA() {
  return (
    <LazyMotion features={domMax}>
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Phone Mockup with floating elements */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[280px] md:w-[320px]"
              >
                <Image
                  src="/travel/mobile_app.png"
                  alt="Travel App Confidence"
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl rounded-[3rem]"
                />

                {/* Floating Travel Cards */}
                <m.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-20 -left-16 w-40 h-40 bg-white rounded-2xl shadow-xl p-2 rotate-[-12deg]"
                >
                  <div className="w-full h-24 bg-orange-100 rounded-xl mb-2 overflow-hidden relative">
                    <Image src="/travel/feat_booking.png" fill className="object-cover" alt="thumb" />
                  </div>
                  <div className="h-2 w-3/4 bg-slate-200 rounded-full mb-1" />
                  <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                </m.div>

                <m.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-32 -right-12 w-48 h-16 bg-white rounded-xl shadow-xl flex items-center gap-3 p-3 rotate-[12deg]"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Trip Confirm</div>
                    <div className="text-[10px] text-slate-500">Ready to go!</div>
                  </div>
                </m.div>
              </m.div>
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase leading-tight">
                  TRAVEL WITH <br />
                  <span className="text-orange-500">CONFIDENCE</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Discover amazing outdoor experiences, trusted route suggestions and the best maps around the world, recommended by thousands of mountain guides.
                </p>
                <button className="px-10 py-5 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                  Download the App
                </button>

                {/* Curly Line SVG */}
                <div className="w-full mt-12 relative h-20">
                  <svg className="w-full h-full" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 C 50 80, 150 100, 200 40 S 350 -20, 400 20" stroke="#F97316" strokeWidth="2" strokeDasharray="8 8" />
                  </svg>
                </div>
              </m.div>
            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
