"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, Layout, CheckCircle, Grid, Layers } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-transparent py-20 lg:py-0 overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Premium Apple-style design grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20" />

      {/* Dynamic ambient graphic backdrop nodes */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-orange-300/10 to-amber-300/10 rounded-full blur-[120px] pointer-events-none -z-20 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-blue-300/5 to-orange-300/5 rounded-full blur-[140px] pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-16 md:pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* Left Column: SaaS Headings and Action */}
          <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1 flex flex-col items-center lg:items-start">

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6"
            >
              Build a <br />
              <span
                className="text-orange-500 inline-block mt-1"
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                Powerful Brand
              </span>{" "}
              <br />
              With Camlenio
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed mb-8 max-w-xl"
            >
              Camlenio is a top graphic design agency helping companies to create amazing brand identities through modern, creative design services. As reliable logo designers in Jaipur, we craft unique logos that represent your brand values and abilities. Whether you are a beginner, a local business, or a growing enterprise. Our expertise helps you stand out in the competitive market by creating a clear identity.
            </motion.p>

            {/* Action Center - Unified CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="default"
                size="xl"
                className="w-full sm:w-auto shadow-[0_15px_30px_rgba(249,115,22,0.2)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] transition-all duration-300"
                onClick={() => {
                  const ctaSection = document.getElementById("cta-section");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

            </motion.div>
          </div>

          {/* Right Column: Redesigned Static Visual Mockup & UI overlays */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center lg:justify-end py-6 md:py-12 w-full max-w-[450px] sm:max-w-[550px] lg:max-w-none">

            {/* Background glowing bubbles */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 blur-[80px] rounded-full -z-10 animate-pulse pointer-events-none" />

            <div className="relative w-full">

              {/* Decorative design grid crosshairs */}
              <div className="absolute -top-3 -left-3 text-slate-300 font-light select-none text-lg pointer-events-none">+</div>
              <div className="absolute -top-3 -right-3 text-slate-300 font-light select-none text-lg pointer-events-none">+</div>
              <div className="absolute -bottom-3 -left-3 text-slate-300 font-light select-none text-lg pointer-events-none">+</div>
              <div className="absolute -bottom-3 -right-3 text-slate-300 font-light select-none text-lg pointer-events-none">+</div>

              {/* Layered physical offset card behind the main browser frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-orange-200/30 via-amber-100/20 to-blue-200/10 rounded-[2.5rem] -z-10 border border-orange-100/30 shadow-sm" />

              {/* Main premium browser/visual mockup card - 0 animation */}
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white/95 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col z-10">

                {/* Mockup Header Bar */}
                <div className="h-12 border-b border-slate-100 bg-slate-50/50 px-6 flex items-center justify-between select-none">
                  {/* Left: colored dots window controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-2xs"></span>
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-2xs"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-2xs"></span>
                  </div>

                  {/* Center: Fake glass URL bar */}
                  <div className="bg-white/80 border border-slate-100 rounded-lg text-[10px] text-slate-400 font-bold px-4 py-1 flex items-center gap-1.5 shadow-3xs w-48 sm:w-64 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                    <span>camlenio.com</span>
                  </div>

                  {/* Right: spacer */}
                  <div className="w-12"></div>
                </div>

                {/* Mockup Canvas Image Area */}
                <div className="flex-1 relative w-full h-full p-6">
                  <Image
                    src="/ServiceDropdown/logo&graphicdesign/logo&graphic-hero.webp"
                    alt="Brand Identity Custom Graphic Design Jaipur Showcase"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                    priority
                  />
                </div>
              </div>

              {/* Overlapping UI Tag 2: Brand Guide (Bottom Right) */}
              <div className="absolute bottom-12 -right-6 z-20 bg-white/90 backdrop-blur-md border border-slate-100 rounded-2xl p-3 shadow-md flex items-center gap-2.5 select-none hover:border-orange-100/50 hover:bg-white transition-colors duration-300">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Status</div>
                  <div className="text-xs font-bold text-gray-900 leading-none">Brand Approved</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
