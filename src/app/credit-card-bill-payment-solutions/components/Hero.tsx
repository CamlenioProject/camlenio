"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, CreditCard, Sparkles } from "lucide-react";
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

      tl.fromTo(
        ".mockup-float",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
        "-=0.6"
      );

      // Gentle floating animation for elements
      gsap.to(".float-slow", {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
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
          <div ref={textRef} className="lg:col-span-6 space-y-6 text-left">

            {/* Heading */}
            <h1 className="hero-fade text-4xl sm:text-5xl md:text-[57px] font-bold text-[#1A1C20] leading-[1.1] tracking-tight">
              Reliable Credit Card <br />
              <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}>
                Bill Payment
              </span> <br />
              Solutions for Businesses
            </h1>

            {/* Subtext */}
            <p className="hero-fade text-sm sm:text-base text-gray-600 leading-relaxed text-justify max-w-xl">
              Simplify your bill collection process with Camlenio's advanced Credit Card Bill Payment Solution. We offer a secure and user-friendly platform that helps businesses deliver a seamless credit card bill payment across India. Improve customer convenience with our technology-driven payment ecosystem.
            </p>

            {/* Buttons */}
            <div className="hero-fade flex flex-wrap gap-4 pt-2">
              <Button onClick={() => router.push("/contact")} size="xl" className="w-full sm:w-auto">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT: Credit Card Image Visual Section */}
          <div ref={mockupRef} className="lg:col-span-6 relative flex items-center justify-center h-[400px] sm:h-[500px]">
            <div className="relative w-full max-w-[480px] aspect-[3/2] flex items-center justify-center">
              {/* Background glowing circle */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-500/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Main Credit Card Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 4, y: 30 }}
                animate={{ opacity: 1, scale: 1, rotate: -6, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 group cursor-pointer"
              >
                <img
                  src="/assets/credit-card/credit-card-hero.webp"
                  alt="Credit Card Bill Payment Solution"
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
