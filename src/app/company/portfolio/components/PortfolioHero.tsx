"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          // marker: true, // Uncomment for debugging
        },
      });

      // Background zoom effect: scale 1 -> 2
      tl.to(bgImageRef.current, {
        scale: 2,
        opacity: 0,
        ease: "none", // Linear scrub
        transformOrigin: "center center",
      });

      // Content scale effect: scale 1 -> 1.1 (subtle push)
      tl.to(
        contentRef.current,
        {
          scale: 1.1,
          opacity: 0, // Fade out content as we scroll deep
          ease: "none",
        },
        "<" // Start at same time
      );

      // Next Section reveal effect: Fade in + Scale up
      tl.fromTo(
        nextSectionRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
        },
        "<+=0.1" // Start slightly after the fade out begins for a smooth crossover
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image Container */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/portfolio/hero_bg.png"
          alt="Futuristic Hero Background"
          fill
          priority
          className="object-cover object-center opacity-80"
          quality={100}
        />
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      </div>

      {/* Hero Content (Fades Out) */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 text-white pointer-events-none"
      >
        {/* Spacer for Fixed Header */}
        <div className="h-24 w-full" />

        {/* Main Hero Text Centralized */}
        <div className="flex flex-col justify-center items-start absolute top-1/2 left-6 md:left-12 -translate-y-1/2 w-full pr-12">
          <div className="overflow-hidden mb-2">
            <span className="font-mono text-cyan-500 text-sm md:text-base tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-950/30 backdrop-blur-md">
                  // CAMLENIO INNOVATION
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6 mix-blend-screen relative">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">CAMLENIO</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradientMove bg-[length:200%_200%]">
              DIGITAL
            </span>
          </h1>

          <div className="flex items-start gap-6 max-w-xl pl-2 border-l-2 border-cyan-500/50">
            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
              At <span className="text-white font-medium">Camlenio</span>, we engineer cinematic digital ecosystems where art meets high-performance code.
            </p>
          </div>
        </div>

        {/* Bottom Tech Stats / Scroll */}
        <div className="flex justify-between items-end border-b border-white/20 pb-6 relative">
          <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

          <div className="hidden md:flex gap-8 font-mono text-[10px] text-white/50 tracking-widest">
            <div>COORD: 34.0522° N, 118.2437° W</div>
            <div>LATENCY: 12ms</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest animate-pulse">Initialize Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent" />
          </div>

          <div className="font-mono text-4xl text-white/10 font-bold">
            01
          </div>
        </div>
      </div>

      {/* Next Section (Fades In) - Featured Projects Preview */}
      <div
        ref={nextSectionRef}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <div className="w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-cyan-400 font-mono tracking-widest text-sm">LATEST WORK</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Check our <br /> Latest Work
            </h2>
            <p className="text-gray-400 max-w-md">
              We push the boundaries of what is possible on the web. Explore our curated selection of award-winning projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 opacity-80">
            <div className="space-y-4 pt-12">
              <div className="w-full h-40 relative rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/portfolio/project1.png"
                  alt="Abstract Crystal Design"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full h-56 relative rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/portfolio/project2.png"
                  alt="Futuristic Dashboard UI"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-56 relative rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/portfolio/project3.png"
                  alt="Cyberpunk City Concept"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full h-40 relative rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src="/portfolio/project4.png"
                  alt="Data Flow Visualization"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
