"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function PressCTA() {
  const router = useRouter();

  return (
    <LazyMotion features={domMax}>
      <section className="py-10 bg-black relative overflow-hidden flex items-center justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900 opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 will-change-transform"
          >
            <SparklesIcon className="w-5 h-5 text-yellow-400" />
            <span className="font-bold tracking-wider text-sm uppercase">Join the movement</span>
          </m.div>

          <m.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-black text-white leading-none mb-10 tracking-tighter will-change-transform"
          >
            READY TO <br />
            MAKE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">HISTORY?</span>
          </m.h2>

          <m.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center will-change-transform"
          >
            <button onClick={() => router.push('/contact')} className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
