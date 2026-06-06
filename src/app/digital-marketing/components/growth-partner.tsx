"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Sliders,
  Users,
  BarChart3,
  Sparkles,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";
import mobileMockup from "@/asests/mobile-mockup.png";

export default function GrowthPartner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "ROI-Focused Marketing Strategies",
      description:
        "We structure every campaign with clear, trackable return goals, ensuring your marketing spend directly drives conversions.",
      iconBg: "bg-gradient-to-br from-violet-500 to-violet-700 shadow-lg shadow-violet-500/20",
    },
    {
      icon: <Sliders className="w-6 h-6 text-white" />,
      title: "Customized Campaign Solutions",
      description:
        "No boilerplate solutions here. We build bespoke marketing roadmaps engineered explicitly around your unique market niche.",
      iconBg: "bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/20",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Expert Team with Industry Experience",
      description:
        "Leverage the combined power of senior marketing minds, creative copywriters, certified SEO analysts, and performance ad experts.",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/20",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Transparent Reporting & Analytics",
      description:
        "Stay completely in control. Gain 24/7 access to live reporting dashboards that track meaningful KPIs and conversions.",
      iconBg: "bg-gradient-to-br from-rose-500 to-rose-700 shadow-lg shadow-rose-500/20",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-12 overflow-hidden bg-transparent">
      {/* Decorative subtle dot-matrix background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Decorative background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-violet-200/20 via-orange-100/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-200/20 via-rose-100/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start justify-center max-w-6xl mx-auto">
          {/* Left Column: Title + 2x2 Grid */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            {/* Title / Badging */}
            <div className="flex flex-col items-start text-left mb-12 max-w-3xl">
              <motion.h2
                initial={isMounted ? { opacity: 0, y: 15 } : { opacity: 1 }}
                whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
              >
                Your Growth Partner for{" "}
                <span
                  className="text-orange-500 inline-block"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Digital Success
                </span>
              </motion.h2>
            </div>

            {/* 2x2 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 w-full">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={isMounted ? { opacity: 0, y: 30 } : { opacity: 1 }}
                  whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col items-start text-left relative"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${feature.iconBg} mb-4 ring-4 ring-slate-100/80 group-hover:ring-orange-100 group-hover:scale-110 transition-all duration-300`}
                  >
                    {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-5.5 h-5.5 text-white" })}
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors duration-300 relative">
                    {feature.title}
                    <span className="block w-0 group-hover:w-12 h-0.5 bg-orange-500 transition-all duration-300 mt-1" />
                  </h3>
                  <p className="text-sm font-sans text-slate-555 leading-relaxed text-left group-hover:text-slate-655 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Mockup with Floating Badges */}
          <div className="lg:col-span-5 flex lg:justify-end justify-center items-center relative w-full mt-8 lg:mt-6">
            {/* Phone Glow Background */}
            <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-orange-400/20 via-violet-300/20 to-rose-200/20 blur-3xl -z-10 animate-pulse pointer-events-none" />

            {/* Smartphone Mockup Image Wrapper */}
            <motion.div
              initial={isMounted ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 1 }}
              whileInView={isMounted ? { opacity: 1, scale: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="relative w-full max-w-[420px] lg:-ml-2"
            >
              <Image
                src={mobileMockup}
                alt="Mobile Mockup Dashboard"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
