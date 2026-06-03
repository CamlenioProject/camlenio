"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 1000), 80);
    return () => clearInterval(id);
  }, []);

  const services = [
    { label: "SEO", angle: 0 },
    { label: "Social", angle: 72 },
    { label: "Ads", angle: 144 },
    { label: "Web", angle: 216 },
    { label: "Content", angle: 288 },
  ];

  const points = Array.from({ length: 24 }).map((_, i) => {
    const x = (i / 23) * 100;
    const base = 60 - i * 1.6;
    const y = base + Math.sin((i + tick / 6) / 2) * 6;
    return `${x},${y}`;
  });
  const linePath = `M ${points.join(" L ")}`;
  const areaPath = `M 0,80 L ${points.join(" L ")} L 100,80 Z`;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-transparent text-slate-900 selection:bg-orange-300/60 flex items-center"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-24 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.05] text-slate-900"
            >
              Grow Business with{" "}
              <span className="relative inline-block">
                <span className="text-orange-500" style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }} >
                  Trusted
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C 50 2, 150 14, 198 4" stroke="url(#sg)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="sg" x1="0" x2="1">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              Digital Marketing Services
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed"
            >
              Looking to boost online visibility and develop leads. That's why Camlenio is a trusted digital marketing company in Jaipur, we offer reliable services that meet your business goals. From SEO and social media marketing to performance campaigns and website marketing, we support businesses in building a powerful digital company that offers quantifiable growth.
            </motion.p>

            {/* CTAs using standardized Button component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
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
                Book a free strategy call
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Orbit + live cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto aspect-square w-full max-w-[500px]">

              {/* glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-300/40 via-rose-200/30 to-amber-200/40 blur-2xl" />

              {/* orbit rings */}
              <div className="absolute inset-6 rounded-full border border-slate-900/5 bg-white/20" />
              <div className="absolute inset-16 rounded-full border border-dashed border-slate-900/10" />
              <div className="absolute inset-28 rounded-full border border-slate-900/5" />

              {/* spinning ring with service pills */}
              <div className="absolute inset-6 animate-[spin_25s_linear_infinite] rounded-full">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `rotate(${s.angle}deg) translate(0, -45%) rotate(-${s.angle}deg)` }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md shadow-orange-200/20 select-none">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-550" style={{ backgroundColor: "#f97316" }} />
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-40 w-40 sm:h-48 sm:w-48 flex-col items-center justify-center rounded-[2rem] border border-white/80 bg-white/90 px-4 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 ring-4 ring-white shadow-md">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Camlenio</div>
                  <div className="mt-1 text-base font-bold text-slate-900">Growth Engine</div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Live optimising
                  </div>
                </div>
              </div>

              {/* Floating live-growth card */}
              <div className="absolute -left-2 bottom-2 w-44 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-[0_15px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:left-0 sm:bottom-6 sm:w-56">
                <div className="flex items-center justify-between">
                  <div className="text-[9px] uppercase tracking-widest font-black text-slate-400">Traffic · 30d</div>
                  <div className="text-[10px] font-bold text-emerald-600">+128%</div>
                </div>
                <div className="mt-1 text-xl font-bold text-slate-900">42.6K</div>
                <svg viewBox="0 0 100 80" className="mt-1 h-12 w-full">
                  <defs>
                    <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#ag)" />
                  <path d={linePath} fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Floating leads card */}
              <div className="absolute -right-2 top-4 w-44 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-[0_15px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:right-0 sm:top-10 sm:w-52">
                <div className="flex items-center justify-between">
                  <div className="text-[9px] uppercase tracking-widest font-black text-slate-400">Qualified Leads</div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 shadow-3xs">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l10-10" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </div>
                </div>
                <div className="mt-1 text-xl font-bold text-slate-900">1,284</div>
                <div className="mt-2.5 flex h-8 items-end gap-1">
                  {[40, 55, 35, 70, 60, 80, 65, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-orange-200 to-orange-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* mobile services pill rail */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
              {services.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
