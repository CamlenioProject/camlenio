"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

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
            <h1 className="hero-fade text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1C20] leading-[1.1] tracking-tight">
              Your Trusted <br />
              <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}>
                Billing Software
              </span> <br />
              Development in Jaipur
            </h1>

            {/* Subtext */}
            <p className="hero-fade text-sm sm:text-base text-gray-660 leading-relaxed text-justify max-w-xl">
              Are you looking for a billing system to manage your business bills? Camlenio is a trusted billing software development company in Jaipur that develops secure billing solutions for all sizes of businesses. We create customized software from GST invoicing to stock management that streamlines operations and boosts business productivity.
            </p>

            {/* Buttons */}
            <div className="hero-fade flex flex-wrap gap-4 pt-2">
              <Button onClick={() => router.push("/contact")} size="xl" className="w-full sm:w-auto">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT: High fidelity Mockup Section */}
          <div ref={mockupRef} className="lg:col-span-6 relative flex items-center justify-center h-[500px] md:h-[600px]">
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">

              {/* Background glowing circle */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 rounded-full blur-2xl" />

              {/* 1. Main iPhone Frame mockup */}
              <div className="mockup-main relative w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] rounded-[48px] border-[10px] border-slate-900 bg-white shadow-2xl overflow-hidden flex flex-col justify-between p-4 z-10">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full flex items-center justify-center z-30">
                  <div className="w-3.5 h-3.5 bg-slate-850 rounded-full ml-auto mr-1.5" />
                </div>

                {/* iPhone screen Header */}
                <div className="pt-6 pb-2 border-b border-gray-100 flex items-center justify-between">
                  <div className="text-[11px] font-bold text-gray-400">Total Revenue</div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                </div>

                {/* iPhone Balance tracker */}
                <div className="py-2 text-left">
                  <div className="text-3xl font-black text-slate-900">₹8,49,250</div>
                  <div className="text-[10px] text-green-500 font-bold flex items-center gap-1 mt-1">
                    <span>↑ +18.4% this month</span>
                  </div>
                </div>

                {/* Graphic chart mockup */}
                <div className="flex-1 my-4 flex items-end gap-1.5 justify-between bg-orange-50/30 p-2 rounded-2xl border border-orange-100/35 h-32">
                  <div className="w-3 bg-orange-300 rounded-t-sm h-[30%]" />
                  <div className="w-3 bg-orange-400 rounded-t-sm h-[55%]" />
                  <div className="w-3 bg-orange-500 rounded-t-sm h-[45%]" />
                  <div className="w-3 bg-red-400 rounded-t-sm h-[75%]" />
                  <div className="w-3 bg-orange-600 rounded-t-sm h-[60%]" />
                  <div className="w-3 bg-orange-500 rounded-t-sm h-[90%]" />
                </div>

                {/* Recent invoices tracker list */}
                <div className="space-y-2 text-left mb-2">
                  <div className="text-[10px] font-bold text-gray-400">Recent Transactions</div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-xs">R</div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 leading-none">Retail Order</div>
                        <span className="text-[8px] text-gray-400">2 mins ago</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-green-500">+ ₹1,420</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-xs">P</div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800 leading-none">Pharmacy Drug</div>
                        <span className="text-[8px] text-gray-400">10 mins ago</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-green-500">+ ₹620</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-24 h-1 bg-slate-900 rounded-full mx-auto mt-1" />
              </div>

              {/* 2. Floating dynamic credit cards */}
              <div className="mockup-float float-slow absolute bottom-24 -left-12 w-[180px] h-[115px] bg-gradient-to-tr from-orange-500 via-red-500 to-orange-600 rounded-2xl shadow-2xl p-4 text-white z-20 flex flex-col justify-between text-left rotate-[-8deg] border border-orange-400/30">
                <div className="flex justify-between items-start">
                  <div className="text-[10px] tracking-widest opacity-80 uppercase">Camlenio Pay</div>
                  <div className="w-6 h-4 bg-white/20 rounded-md flex items-center justify-center text-[8px] font-bold">Visa</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold tracking-widest">**** **** **** 8421</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[6px] uppercase tracking-wide opacity-60">Card Holder</div>
                      <div className="text-[8px] font-bold">JAIPUR RETAILS</div>
                    </div>
                    <div className="text-[8px] font-bold opacity-80">12/29</div>
                  </div>
                </div>
              </div>

              {/* 3. Floating 100% Safe pill badge */}
              <div className="mockup-float float-slow absolute top-16 -left-16 px-4 py-2 bg-white rounded-2xl shadow-xl flex items-center gap-2.5 border border-orange-50/50 z-20">
                <div className="w-7 h-7 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left leading-none">
                  <div className="text-[11px] font-bold text-slate-900">100% Safe</div>
                  <span className="text-[8px] text-gray-400">GST Audited</span>
                </div>
              </div>

              {/* 4. Floating 100k customers card badge */}
              <div className="mockup-float float-slow absolute top-28 -right-16 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl text-left border border-slate-700/50 z-20 w-32">
                <div className="text-2xl font-black text-orange-500 leading-none">100k+</div>
                <div className="text-[10px] text-white font-bold mt-1 leading-tight">Total Invoices Generated</div>
                <div className="text-[8px] text-gray-400 mt-0.5">Reliable & Secure</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
