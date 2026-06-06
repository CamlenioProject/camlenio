"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Target,
  TrendingUp,
  Search,
  MousePointer,
  Heart,
  MessageSquare,
  Send,
  Mail,
  CheckCircle,
  Globe,
  Sliders
} from "lucide-react";
import { Button } from "@/app/components/ui/Button";

type TabType = "SEO" | "PPC" | "SMM" | "Content";

export default function BrandTransformation() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("SEO");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-transparent border-b border-slate-100">
      {/* Subtle modern dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Glowing background highlights */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-rose-500/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Interactive Campaign Growth Simulator */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[380px] bg-white/70 backdrop-blur-xl border border-slate-200/85 rounded-[2rem] p-6 shadow-sm relative overflow-hidden flex flex-col gap-5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Title & Live Status */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Growth Simulator</span>
                <span className="text-[9.5px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  <span>Interactive Preview</span>
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex bg-slate-100/80 p-1 rounded-2xl gap-1">
                {(["SEO", "PPC", "SMM", "Content"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${activeTab === tab
                      ? "bg-white text-orange-500 shadow-sm border border-slate-200/50"
                      : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content Box with Framer Motion Transition */}
              <div className="min-h-[150px] flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  {activeTab === "SEO" && (
                    <motion.div
                      key="seo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      {/* Search Bar Mock */}
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-slate-400 text-xs">
                        <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[11px] truncate font-sans text-slate-600">Jaipur SEO Services</span>
                      </div>

                      {/* SERP Search Result Mock */}
                      <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm relative">
                        <span className="absolute top-3 right-3 text-[9px] font-bold bg-orange-50 border border-orange-100 text-orange-600 px-2 py-0.5 rounded-md">Rank #1</span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-sans mb-1">
                          <Globe className="w-3 h-3" />
                          <span>www.camlenio.com</span>
                        </div>
                        <h4 className="text-[12.5px] font-black text-slate-800 leading-snug mb-1">
                          Best Business in Jaipur | Grow Locally
                        </h4>
                        <p className="text-[10px] font-sans text-slate-500 leading-normal">
                          Jaipur's top local services. Highly rated and trusted local partner...
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "PPC" && (
                    <motion.div
                      key="ppc"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      {/* PPC Campaign Card */}
                      <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm relative">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-slate-700">Google Ads Performance</span>
                          <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">Active</span>
                        </div>

                        {/* Visual graph / ROAS indicator */}
                        <div className="flex items-end justify-between gap-1.5 h-16 pt-2 select-none border-b border-slate-100 pb-2">
                          {[35, 45, 60, 48, 72, 85, 98].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div
                                className={`w-full rounded-t-sm transition-all duration-500 ${i === 6 ? "bg-orange-500" : "bg-orange-200"
                                  }`}
                                style={{ height: `${h}%` }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-wider pt-2">
                          <span>Mon</span>
                          <span>Wed</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "SMM" && (
                    <motion.div
                      key="smm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-3 text-left"
                    >
                      {/* Social Post Mockup */}
                      <div className="border border-slate-100 rounded-2xl p-3.5 bg-white shadow-sm flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">YB</div>
                          <div className="flex flex-col text-left">
                            <span className="text-[11px] font-bold text-slate-800">yourbrand_jaipur</span>
                            <span className="text-[8px] text-slate-400 font-sans">Sponsored</span>
                          </div>
                        </div>

                        {/* Mock Post Image/Creative Grid */}
                        <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-orange-400/20 via-orange-100 to-rose-200/20 border border-orange-100 flex items-center justify-center relative overflow-hidden">
                          <Sparkles className="w-6 h-6 text-orange-500/60 animate-pulse" />
                        </div>

                        {/* Engagement Stats */}
                        <div className="flex gap-4 text-slate-500 items-center pl-1">
                          <div className="flex items-center gap-1.5 text-[10px]"><Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> <span className="font-sans">1.2k</span></div>
                          <div className="flex items-center gap-1.5 text-[10px]"><MessageSquare className="w-3.5 h-3.5" /> <span className="font-sans">324</span></div>
                          <div className="flex items-center gap-1.5 text-[10px]"><Send className="w-3.5 h-3.5" /> <span className="font-sans">84</span></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "Content" && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4 text-left"
                    >
                      {/* Email Newsletter Card */}
                      <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-xs flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-700">
                            <Mail className="w-3.5 h-3.5 text-orange-500" />
                            <span>Weekly Newsletter Flow</span>
                          </div>
                          <span className="text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">12.8K Subs</span>
                        </div>

                        {/* Open Rate Indicators */}
                        <div className="flex flex-col gap-2.5 pt-1">
                          <div>
                            <div className="flex justify-between text-[9px] font-bold text-slate-500 mb-1">
                              <span>Email Open Rate</span>
                              <span className="font-sans font-bold">48.6%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-orange-500 rounded-full" style={{ width: "48.6%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[9px] font-bold text-slate-500 mb-1">
                              <span>Click-Through Rate (CTR)</span>
                              <span className="font-sans font-bold">12.4%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-orange-400 rounded-full" style={{ width: "12.4%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200/80" />

              {/* Dynamic Metric Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50/70 border border-slate-100 p-3.5 rounded-2xl text-left">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                    {activeTab === "SEO" ? "Organic Traffic" : activeTab === "PPC" ? "Google ROAS" : activeTab === "SMM" ? "User Engagement" : "Click Conversion"}
                  </span>
                  <p className="text-lg font-black text-slate-900 mt-1">
                    {activeTab === "SEO" ? "+340%" : activeTab === "PPC" ? "10.4x" : activeTab === "SMM" ? "+18.4%" : "12.2%"}
                  </p>
                </div>
                <div className="bg-slate-50/70 border border-slate-100 p-3.5 rounded-2xl text-left">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                    {activeTab === "SEO" ? "SERP Rankings" : activeTab === "PPC" ? "Cost Per Lead" : activeTab === "SMM" ? "Daily Reach" : "Mail Open Rate"}
                  </span>
                  <p className="text-lg font-black text-slate-900 mt-1">
                    {activeTab === "SEO" ? "Top 3" : activeTab === "PPC" ? "-₹450" : activeTab === "SMM" ? "12.5K" : "48.6%"}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading & Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Transform Your Brand with a{" "}
              <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Digital Marketing
              </span>{" "}
              Company in Jaipur
            </h2>

            {/* Description Paragraph 1 */}
            <p className="text-sm md:text-[14.5px] font-sans text-slate-600 leading-relaxed text-justify mb-5">
              As a professional digital marketing services in Jaipur, we offer reliable solutions for beginners, local businesses, and enterprises. Our experts merge creativity, methods, and advanced marketing tools to help your business attract the right audience and improve online performance.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-sm md:text-[14.5px] font-sans text-slate-600 leading-relaxed text-justify mb-8">
              We focus on making long-term digital success through data-driven campaigns. If you require local SEO Services, paid advertising, website promotion, or content marketing services. Our experts develop customized solutions that align with your business plans.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
