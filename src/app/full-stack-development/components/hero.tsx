"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0 bg-transparent">
      {/* Cinematic Background Decorations */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-orange-100/20 rounded-full blur-[160px] -mr-80 -mt-80 opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[140px] -ml-40 -mb-40 opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-16 md:pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text Content Column */}
          <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1">
            <div className="relative inline-block mb-6">

              {/* Custom Loopy Hand-Drawn Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute -top-20 -right-24 w-32 h-32 hidden lg:block"
              >
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform -rotate-12">
                  <motion.path
                    d="M 10 60 C 5 45 15 30 30 35 C 45 40 35 65 25 60 C 15 55 35 30 65 45 L 80 55"
                    stroke="#f97316"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 65 52 L 82 56 L 75 40"
                    stroke="#f97316"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                  <motion.circle
                    cx="82" cy="56" r="4"
                    fill="#f97316"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8"
              >
                Build
                Digital Products
                With <span className="text-orange-500 inline-block mt-1" style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                }}>Full Stack Expertise</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 text-justify"
            >
              Camlenio provides Full Stack Development Services, offering end-to-end web and mobile solutions with seamless performance and unique technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const ctaSection = document.getElementById("cta-section");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push("/contact");
                  }
                }}
                className="h-12 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 border-0"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Visual Showcase Column */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center lg:justify-end py-6 md:py-12 perspective-[2000px] w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none">

            <div className="absolute inset-0 pointer-events-none overflow-visible">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-radial from-orange-100/30 via-transparent to-transparent blur-[80px] md:blur-[120px] rounded-full -z-10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 45,
                damping: 18,
                mass: 1.8,
                delay: 0.4,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full aspect-[4/3] flex items-center justify-center max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 0.4, 0, -0.4, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="absolute -bottom-6 -right-10 w-[120%] h-1/2 bg-gradient-to-tr from-orange-100/10 via-white/5 to-transparent blur-2xl md:blur-3xl -z-10 rotate-12" />

                <div className="relative w-full h-full z-20 rounded-[32px] overflow-hidden shadow-md border border-white/40">
                  <Image
                    src="/ServiceDropdown/webdevpage/hero2.webp"
                    alt="Full Stack Software Development"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Dynamic Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -60, 0],
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                  className={`absolute w-2 h-2 rounded-full blur-[1px] ${i % 2 === 0 ? 'bg-orange-400/30' : 'bg-indigo-400/30'}`}
                  style={{
                    top: `${15 + i * 15}%`,
                    left: `${5 + i * 15}%`,
                    zIndex: 40
                  }}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
