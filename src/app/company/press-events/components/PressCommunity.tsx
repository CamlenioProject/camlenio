"use client";

import { m, LazyMotion, domMax, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PressCommunityProps {
  openLightbox?: (images: string[], index: number) => void;
}

export default function PressCommunity({ openLightbox }: PressCommunityProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <LazyMotion features={domMax}>
      <section ref={containerRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white">

        {/* Abstract Disco Lights Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Section 1: The Party Vibe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">

            <m.div
              className="relative cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => openLightbox?.(['/event/dancing2.webp'], 0)}
            >
              {/* "Fun" Badge */}
              <m.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                className="absolute -top-12 -left-8 z-20 bg-yellow-400 text-black font-black text-xl px-4 py-2 rotate-[-12deg] shadow-[4px_4px_0px_white] border-2 border-black"
              >
                PURE CHAOS! 🤪
              </m.div>

              <div className="relative aspect-[4/5] md:aspect-square group">

                {/* Decorative Frame */}
                <div className="absolute inset-0 border-4 border-pink-500 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 bg-pink-500/20" />

                <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/20 bg-gray-900">
                  <Image
                    src="/event/dancing2.webp"
                    alt="Party Mode"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-60" />
                </div>
              </div>
            </m.div>

            <div className="md:pl-10 relative">
              <m.h2
                className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 relative z-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
                  PARTY
                </span> <br />
                ANIMAL?
                {/* Sticker */}
                <span className="absolute -top-10 -right-10 text-6xl animate-bounce drop-shadow-xl">🪩</span>
              </m.h2>

              <m.p
                className="text-xl md:text-2xl font-bold text-gray-200 transform -rotate-1 mb-8 border-l-4 border-yellow-400 pl-6 py-2 bg-white/5 inline-block rounded-r-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                "We code like seniors, but we party like freshers."
              </m.p>

              <p className="text-gray-400 leading-relaxed text-lg">
                When the laptops close, the speakers turn up. No stiff corporate vibes here. Whether it&apos;s the
                annual bash or a random pizza friday, we bring the energy. Life at Camlenio is a festival.
              </p>
            </div>
          </div>


          {/* Section 2: Squad/Family */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1 md:pr-10">
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="inline-block bg-blue-600 text-white font-black px-4 py-1.5 text-xs tracking-widest uppercase mb-6 rounded-md shadow-lg transform -rotate-2"
              >
                Unbreakable Bond 🤝
              </m.div>

              <m.h2
                className="text-5xl md:text-7xl font-black text-white mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                ONE TEAM, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  ONE FAMILY.
                </span>
              </m.h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                It&apos;s not just about code; it&apos;s about connection. We lift each other up, share our knowledge, and treat every success as a collective victory. At Camlenio, nobody flies solo.
              </p>

              {/* <div className="flex -space-x-4 pl-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-2xl relative hover:z-10 hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    {['🦁', '🦄', '🦅', '🐻'][i]}
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center text-black font-black text-xs pl-1 z-0 shadow-lg">
                  +50
                </div>
              </div> */}
            </div>

            <div className="order-1 md:order-2 relative">
              {/* Image Stack / Collage */}
              <m.div
                style={{ rotate }}
                className="relative z-10 aspect-video rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-3 cursor-pointer group"
                onClick={() => openLightbox?.(['/event/team.webp'], 0)}
              >
                <Image
                  src="/event/team.webp"
                  alt="Squad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </m.div>

              {/* Floaters */}
              <m.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: -6 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="absolute -bottom-6 -left-6 z-20 bg-white text-black p-4 rounded-xl shadow-xl max-w-[180px] border-2 border-gray-100"
              >
                <p className="text-xs font-bold leading-tight flex gap-2">
                  <span>🧡</span>
                  <span>"Stronger Together!"</span>
                </p>
              </m.div>

              <m.div
                initial={{ scale: 0, y: 50 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -top-10 -right-6 z-20 text-7xl drop-shadow-2xl filter hover:brightness-110 transition-all cursor-pointer"
              >
                🧩
              </m.div>

            </div>

          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
