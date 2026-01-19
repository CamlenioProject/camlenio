"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline for smoother orchestration
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      // Staggered Entrance for Content
      tl.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        clearProps: "all" // Ensure clean state after animation
      })
        // Smooth Image Entrance
        .from(".hero-image", {
          x: 50,
          opacity: 0,
          duration: 1.2,
          scale: 0.95,
          clearProps: "all"
        }, "-=0.8")
        // Pop in shapes with elastic effect
        .from(".hero-shape", {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(1.7)",
          clearProps: "scale,opacity" // Keep them visible for floating
        }, "-=1");

      // Continuous Floating Animation (The "100% smoother" part)
      // We animate y position continuously to make the scene feel alive
      gsap.to(".hero-shape", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut", // Sine ease is the smoothest for floating
        stagger: {
          each: 0.3,
          from: "random"
        }
      });

      // Gentle Parallax for Image Container
      gsap.to(".hero-image", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] text-slate-900 flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* --- Decorative shapes (Background) --- */}
      {/* Large Circle Top Left */}
      <div className="hero-shape absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full border-[60px] border-black/[0.03]" />

      {/* Orange Circle Center/Bottom */}
      <div className="hero-shape absolute bottom-10 left-[45%] w-24 h-24 rounded-full border-[6px] border-amber-400" />
      <div className="hero-shape absolute bottom-14 left-[46%] w-12 h-12 rounded-full bg-amber-400" />

      {/* Dotted Pattern Bottom Left */}
      <div className="hero-shape absolute bottom-14 left-10 flex gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full border border-slate-800" />
        ))}
      </div>


      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* --- Left Column: Content --- */}
        <div className="hero-content max-w-xl">
          {/* <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black mb-6">
            Trustable Payout <br />
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Payroll Services
            </span>
          </h1> */}



          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black mb-6">
            Trustworthy Payout <br /> &
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              {" "} Payroll Services
            </span>
          </h1>
          {/* Trustable Payout & Payroll Services for Company */}
          {/* <h2 className="text-lg md:text-xl font-bold text-orange-600 mb-6 tracking-wide">
            Camlenio is the way of growth
          </h2> */}

          <div className="w-20 h-1 bg-orange-200 mb-8 rounded-full" />

          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Camlenio Software is a trusted Payout & Payroll Services Provider for Business, delivering fast, secure, and automated payment solutions to streamline salary and vendor disbursements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/10"
          >
            Get Started Now
          </Link>
        </div>

        {/* --- Right Column: Image --- */}
        <div className="hero-image relative">
          {/* Background Shape for Image */}
          <div className="absolute top-10 right-0 w-[80%] h-[90%] bg-orange-50 rounded-tl-[100px] rounded-br-[100px] -z-10" />

          {/* Floating Squares Decoration */}
          <div className="absolute top-20 -right-10 flex flex-col gap-0 z-20">
            <div className="w-16 h-16 bg-orange-500" />
            <div className="w-16 h-16 bg-orange-500/50 translate-x-8" />
            <div className="w-16 h-16 bg-orange-500/20 translate-x-16" />
          </div>

          {/* Purple Semi-Circle Bottom */}
          <div className="absolute -bottom-10 left-20 w-32 h-16 bg-orange-600 rounded-t-full z-20" />

          {/* Square Bottom Left */}
          <div className="absolute bottom-20 -left-10 flex flex-col-reverse gap-0 z-20">
            <div className="w-10 h-10 bg-orange-500" />
            <div className="w-8 h-8 bg-purple-500/50 -translate-x-4" />
          </div>


          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/fintech/payout_hero_rupee.png"
              alt="Fintech Professional Dashboard with Rupee symbols"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Badge */}
          {/* <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur px-6 py-4 border border-cyan-500 shadow-xl z-30">
            <span className="text-cyan-600 font-bold text-xl tracking-widest uppercase">
              Payouts
            </span>
          </div> */}
        </div>

      </div>
    </section>
  );
}
