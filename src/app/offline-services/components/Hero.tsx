"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Button } from "@/app/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Fade-in text content
      tl.fromTo(
        ".hero-fade",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.1 }
      );

      // Float mockup elements
      tl.fromTo(
        ".mockup-main",
        { opacity: 0, scale: 0.9, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.3 },
        "-=0.9"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] sm:min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-gray-100 via-orange-100/40 to-gray-100 flex items-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT: Heading, description & CTAs */}
          <div ref={textRef} className="lg:col-span-7 space-y-6 text-left">
            {/* Heading */}
            <h1 className="hero-fade text-4xl sm:text-5xl md:text-[57px] font-bold text-[#1A1C20] leading-[1.1] tracking-tight font-sans">
              Reliable Offline Services <br />
              <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}>
                for Fintech Businesses
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-fade text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-xl font-sans font-medium">
              Simplify your important documentation and government-related tasks with Camlenio’s professional offline services. With government documentation and compliance support, we offer accurate and hassle-free solutions across India. Save time, reduce paperwork, and get expert support for all your offline services needs.
            </p>

            {/* Buttons */}
            <div className="hero-fade flex flex-wrap gap-4 pt-2">
              <Button onClick={() => router.push("/contact")} size="xl" className="w-full sm:w-auto">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT: Offline Services Image Visual Section */}
          <div ref={mockupRef} className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Background glowing circle */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-500/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mockup-main relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 group cursor-pointer"
              >
                <img
                  src="/assets/offline-services/offline-services-hero.webp"
                  alt="Reliable Offline Fintech Services"
                  className="w-full h-full object-cover rounded-[2.2rem]"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
