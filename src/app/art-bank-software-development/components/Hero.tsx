"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Database, Snowflake } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

// Floating badge helper component with interactive hover states
const FloatingBadge = ({
  children,
  className,
  delay = 0,
  yOffset = -12,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  yOffset?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ y: -5, scale: 1.05, boxShadow: "0 25px 50px -12px rgba(249,115,22,0.2)" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute z-30 bg-white/95 backdrop-blur-md rounded-[24px] p-4 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.1)] border border-orange-500/10 select-none cursor-pointer transition-colors duration-300 hover:border-orange-500/30 ${className}`}
  >
    <motion.div
      animate={{ y: [0, yOffset, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2.5"
    >
      {children}
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[95vh] pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent flex flex-col justify-center">
      {/* Background cyber grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.25) 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
      />

      {/* Futuristic Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating decorative blobs for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        {/* Left Column (Headline & CTAs) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold border border-orange-500/15 shadow-sm mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
            NEXT-GEN ART INFRASTRUCTURE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight relative"
          >
            Advanced{" "}
            <span
              className="text-orange-500 relative inline-flex z-20"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
              }}
            >
              ART Bank Software
              {/* SVG underline highlight effect */}
              <motion.svg
                viewBox="0 0 460 34"
                className="absolute left-0 -bottom-3 w-full h-8 -z-10 opacity-70"
                fill="none"
              >
                <motion.path
                  d="M1 20 C120 10, 270 -4, 480 10"
                  stroke="#f97316"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.9,
                  }}
                />
              </motion.svg>
            </span>{" "}
            <br />
            Solutions by Camlenio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-650 font-medium font-sans leading-relaxed max-w-xl text-left"
          >
            Transform your fertility clinic solutions with secure smart ART Bank Software designed for modern fertility centers. Camlenio is a trusted fertility software company in Jaipur that serves digital solutions for donor management, patient records, IVF tracking, and clinic automation. Increase functional regulation, improve patient experiences, and simplify workflows with our customized software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={() => router.push("/contact")}
              size="xl"
              className="w-full sm:w-auto shadow-md group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
          </motion.div>
        </div>

        {/* Right Column (Clinical Tech Image + Floating Badges) */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          {/* Floating Badges */}
          <FloatingBadge className="-top-6 -left-6 md:-left-12" delay={0.4} yOffset={-10}>
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 border border-orange-500/10">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">HIPAA Compliant</p>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Maximum Security</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="top-1/3 -right-6 md:-right-10" delay={0.6} yOffset={-14}>
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 border border-orange-500/10">
              <Snowflake className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">Cryo-Tracking</p>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Location Mapping</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="-bottom-6 left-6 md:-left-4" delay={0.8} yOffset={-8}>
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 border border-orange-500/10">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">100% Traceability</p>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Chain of Custody</span>
            </div>
          </FloatingBadge>

          {/* Main Visual Container with glowing outline border frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.1)] bg-white/50 p-2 cursor-pointer group"
          >
            {/* High Tech outline shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/20 to-transparent scale-110 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="/ServiceDropdown/artsoftware/hero-art.jpg"
                alt="Modern Fertility Lab ART Software Solutions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              {/* Soft inner glow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
