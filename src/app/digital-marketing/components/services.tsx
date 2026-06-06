"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Target,
  FileText,
  Globe,
  Sparkles,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  TrendingUp,
  Heart
} from "lucide-react";

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
      },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-transparent">
      {/* Subtle modern dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Glowing abstract background blobs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-200/20 via-orange-100/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-200/20 via-rose-100/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/70 px-4 py-1.5 text-xs font-semibold text-orange-600 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Advanced{" "}
            <span
              className="text-orange-500 inline-block"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Digital Marketing Services
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base font-sans text-slate-550 leading-relaxed max-w-2xl">
            We deploy data-driven, creative, and highly optimized growth strategies that establish market presence, maximize lead acquisition, and scale revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : "visible"}
          whileInView={isMounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {/* Card 1: SEO */}
          <motion.div
            variants={isMounted ? itemVariants : undefined}
            className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.12)] flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/20 mb-3 text-white ring-4 ring-orange-50">
                  <Search className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  SEO (Search Engine Optimization)
                </h3>
                <p className="text-[12px] font-sans text-slate-550 leading-relaxed text-justify max-w-lg">
                  Boost your website traffic by using SEO techniques such as local SEO, keyword enhancement, and technical SEO. These methods increase your website's organic traffic.
                </p>
              </div>

              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 border-t border-slate-100/80 pt-2 flex flex-col gap-1.5 relative">
              <div className="absolute right-0 -top-4 glass-card px-2 py-0.5 rounded-md border border-orange-200/50 text-[9px] font-extrabold text-orange-600 flex items-center gap-1 select-none pointer-events-none animate-float shadow-xs">
                <span>Jaipur Agency</span>
                <span className="bg-orange-500 text-white px-0.5 rounded-xs">#1 Rank</span>
              </div>

              <div className="text-[9px] uppercase font-bold text-orange-600/70 tracking-widest flex items-center gap-1.5 select-none">
                <span className="w-1 h-1 bg-orange-500 rounded-full animate-ping" />
                Organic Growth +128%
              </div>

              <div className="relative h-8 w-full flex items-end pt-1">
                <div className="absolute inset-0 flex flex-col justify-between opacity-30 select-none pointer-events-none">
                  <div className="w-full border-t border-dashed border-slate-300" />
                  <div className="w-full border-t border-dashed border-slate-300" />
                </div>

                <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="seoGridGlow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,20 Q 20,16 40,12 T 80,4 T 100,0 L 100,20 Z" fill="url(#seoGridGlow)" />
                  <motion.path
                    d="M 0,20 Q 20,16 40,12 T 80,4 T 100,0"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    initial={isMounted ? { pathLength: 0 } : { pathLength: 1 }}
                    whileInView={isMounted ? { pathLength: 1 } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 2: SMM */}
          <motion.div
            variants={isMounted ? itemVariants : undefined}
            className="lg:col-span-5 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.12)] flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/20 mb-3 text-white ring-4 ring-orange-50">
                  <Share2 className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  SMM (Social Media Marketing)
                </h3>
                <p className="text-[12px] font-sans text-slate-555 leading-relaxed text-justify">
                  Build a powerful social media presence by using campaigns across platforms like LinkedIn, Instagram, Facebook, and others through our social media marketing services.
                </p>
              </div>

              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 border-t border-slate-100/80 pt-2 flex items-center justify-between relative overflow-hidden select-none">
              <div className="glass-card px-2.5 py-1.5 rounded-xl flex items-center gap-2 border border-white/60 shadow-xs max-w-[130px] shrink-0">
                <Instagram className="w-4 h-4 text-orange-500 shrink-0" />
                <div className="text-left leading-none">
                  <p className="text-[8px] text-slate-400">Post Feed</p>
                  <p className="text-[10px] font-bold text-slate-800 flex items-center gap-0.5 mt-0.5">
                    +1.8K <Heart className="w-2.5 h-2.5 text-red-500 fill-red-500 animate-pulse" />
                  </p>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <span className="w-6.5 h-6.5 rounded-full bg-orange-50/70 text-orange-600 flex items-center justify-center shadow-3xs border border-orange-100 hover:bg-orange-500 hover:text-white hover:scale-115 transition-all">
                  <Linkedin className="w-3 h-3" />
                </span>
                <span className="w-6.5 h-6.5 rounded-full bg-orange-50/70 text-orange-600 flex items-center justify-center shadow-3xs border border-orange-100 hover:bg-orange-500 hover:text-white hover:scale-115 transition-all">
                  <Facebook className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Performance Marketing */}
          <motion.div
            variants={isMounted ? itemVariants : undefined}
            className="lg:col-span-5 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.12)] flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/20 mb-3 text-white ring-4 ring-orange-50">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  Performance Marketing
                </h3>
                <p className="text-[12px] font-sans text-slate-555 leading-relaxed text-justify">
                  Get the quality leads and maximize ROI with targeted ad campaigns. As a trusted PPC company in Jaipur, we create highly transforming Google Ads and paid marketing strategies.
                </p>
              </div>

              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 border-t border-slate-100/80 pt-2 flex flex-col gap-1.5">
              <div className="flex justify-between items-center select-none">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Conversion Stats</span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +320% ROI
                </span>
              </div>

              <div className="flex items-end gap-2 h-6 pt-1">
                {[35, 60, 45, 90, 75].map((h, idx) => (
                  <div key={idx} className="flex-1 bg-slate-100 rounded-sm h-full flex items-end">
                    <motion.div
                      initial={isMounted ? { height: 0 } : { height: `${h}%` }}
                      whileInView={isMounted ? { height: `${h}%` } : undefined}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="w-full rounded-xs bg-gradient-to-t from-orange-400 to-orange-500 group-hover:from-orange-500 group-hover:to-rose-500 transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Content Marketing */}
          <motion.div
            variants={isMounted ? itemVariants : undefined}
            className="lg:col-span-4 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.12)] flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/20 mb-3 text-white ring-4 ring-orange-50">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  Content Marketing
                </h3>
                <p className="text-[12px] font-sans text-slate-555 leading-relaxed text-justify">
                  Increase brand authority with effective content marketing services, including blogs, website content, social media content, and SEO copywriting.
                </p>
              </div>

              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 border-t border-slate-100/80 pt-2 flex flex-col gap-1 relative">
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">SEO Copywriting Score</span>

              <div className="flex items-center justify-between bg-orange-50/50 px-2.5 py-1.5 rounded-lg border border-orange-100/50">
                <span className="text-[11px] font-black text-slate-800">Headline Analyzer</span>
                <span className="text-[11px] font-black text-orange-600 bg-white px-1.5 py-0.5 rounded-md border border-orange-100 shadow-3xs">92 Score</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Website Marketing */}
          <motion.div
            variants={isMounted ? itemVariants : undefined}
            className="lg:col-span-3 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.12)] flex flex-col justify-between min-h-[220px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200 shadow-lg shadow-orange-500/10 mb-3 text-orange-600 ring-4 ring-orange-50">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  Website Marketing
                </h3>
                <p className="text-[12px] font-sans text-slate-555 leading-relaxed text-justify">
                  Promote your website by advanced digital methods designed to increase traffic, improve user engagement, and boost conversions.
                </p>
              </div>

              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 border-t border-slate-100/80 pt-2 flex flex-col gap-1.5">
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Site Performance Metrics</span>

              <div className="flex justify-between items-center px-1">
                <div className="flex flex-col items-center gap-0.5 select-none">
                  <div className="relative w-6.5 h-6.5 rounded-full flex items-center justify-center border border-orange-500 text-[8.5px] font-black text-orange-600 bg-orange-50">
                    99
                  </div>
                  <span className="text-[6.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Perf</span>
                </div>

                <div className="flex flex-col items-center gap-0.5 select-none">
                  <div className="relative w-6.5 h-6.5 rounded-full flex items-center justify-center border border-orange-500 text-[8.5px] font-black text-orange-600 bg-orange-50">
                    100
                  </div>
                  <span className="text-[6.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">SEO</span>
                </div>

                <div className="flex flex-col items-center gap-0.5 select-none">
                  <div className="relative w-6.5 h-6.5 rounded-full flex items-center justify-center border border-orange-500 text-[8.5px] font-black text-orange-600 bg-orange-50">
                    100
                  </div>
                  <span className="text-[6.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Best</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
