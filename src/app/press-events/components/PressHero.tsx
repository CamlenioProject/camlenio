"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function PressHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] lg:h-screen w-full overflow-hidden bg-[#1a0b2e] flex flex-col justify-center px-6 md:px-16 perspective-1000">
      {/* Background & Overlays */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-[#1a0b2e] to-black z-10" />
        {/* Placeholder image background */}
        <div
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"
        />

        {/* Geometric Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Left Side: Typography */}
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="bg-white text-black font-bold px-4 py-3 text-center min-w-[80px] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="block text-2xl leading-none">02</span>
                <span className="block text-xs uppercase tracking-wider">Years</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 font-medium tracking-wide border-l-2 border-orange-500 pl-4"
              >
                Party of innovation in the world <br />
                All are welcome here
              </motion.p>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-2 drop-shadow-2xl">
              CAMLENIO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient-x">
                ANNIVERSARY
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Right Side: Level 02 Unlocked Hologram */}
        <div className="md:col-span-4 flex justify-center items-center md:items-end h-full text-right md:mt-0 order-first md:order-last">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            {/* Rotating Outer Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-[6px] border-dashed border-orange-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-purple-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Central Achievement Badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-48 h-48 md:w-56 md:h-56 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {/* Achievement Trophy/Party Icon */}
                <motion.div
                  className="mb-1 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] text-yellow-400"
                  animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SparklesIcon className="w-12 h-12 md:w-16 md:h-16" />
                </motion.div>

                <h2 className="text-lg md:text-xl font-black text-white italic tracking-tighter opacity-80">
                  HAPPY
                </h2>
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 leading-none">
                  2ND
                </h2>
                <p className="text-xs md:text-sm tracking-[0.2em] text-white/60 font-bold mt-2 uppercase">
                  ANNIVERSARY
                </p>

                {/* Dynamic Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-10"
                  animate={{ x: [-300, 300] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Floating Confetti Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-sm ${i % 2 === 0 ? 'bg-orange-500' : 'bg-purple-500'}`}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                  rotate: 360,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                style={{ top: '50%', left: '50%' }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Footer Overlay */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 z-20">
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-6">
          <div className="text-white/60 text-sm max-w-md">
            Celebrating two years of excellence, innovation, and teamwork.
            Join us as we reflect on our journey and look forward to the future.
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {/* Dots decoration */}
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-orange-500/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
