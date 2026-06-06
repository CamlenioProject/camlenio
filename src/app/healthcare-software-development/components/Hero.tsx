"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Brain } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

// Floating badge helper component
const FloatingBadge = ({ children, className, delay = 0, yOffset = -12 }: { children: React.ReactNode, className: string, delay?: number, yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-4 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.12)] border border-orange-500/10 select-none ${className}`}
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
    <section className="relative min-h-[90vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent flex flex-col justify-center">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Floating decorative blobs for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        {/* Left Column (Headline & CTAs) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight relative"
          >
            Reliable{" "}
            <span
              className="text-orange-500 relative inline-flex z-20"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
              }}
            >
              Healthcare Software
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
            Development Company in Jaipur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-650 font-medium font-sans leading-relaxed max-w-xl text-left"
          >
            Looking for a reliable developer to manage your healthcare department? Camlenio is a top healthcare software development company, providing secure and creative digital solutions for hospitals, clinics, diagnostic centers, pharmacies, and startups. We specialize in healthcare application development and custom healthcare software development services.
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
              className="w-full sm:w-auto shadow-md"
            >
              <span>Get Healthcare Solution</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Right Column (Clinical Tech Image + Floating Badges) */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          {/* Floating Badges */}
          <FloatingBadge className="-top-6 -left-6 md:-left-12" delay={0.4} yOffset={-12}>
            <div className="p-2 rounded-lg bg-orange-50 text-orange-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">DPDP Secure</p>
              <span className="text-[10px] text-gray-500">Patient Protection</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="top-1/3 -right-6 md:-right-10" delay={0.6} yOffset={-15}>
            <div className="p-2 rounded-lg bg-orange-50 text-orange-500">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">99.9% Uptime</p>
              <span className="text-[10px] text-gray-500">High Availability</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="-bottom-6 left-6 md:-left-4" delay={0.8} yOffset={-10}>
            <div className="p-2 rounded-lg bg-orange-50 text-orange-500">
              <Brain className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-800">10x Operations</p>
              <span className="text-[10px] text-gray-500">Automated Flows</span>
            </div>
          </FloatingBadge>

          {/* Main Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
              alt="Healthcare Software Dashboard Technology"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
            {/* Soft inner glow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
