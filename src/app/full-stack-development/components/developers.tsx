"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Cloud,
  Cpu,
  Database,
  Smartphone,
  CloudRain,
  Building,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Network,
  CpuIcon,
  Globe
} from "lucide-react";

export default function Developers() {
  const skills = [
    { name: "API Development and integrations", icon: GitBranch, bg: "bg-orange-50 border-orange-100 text-orange-500" },
    { name: "Cloud Based Architecture", icon: Cloud, bg: "bg-blue-50 border-blue-100 text-blue-500" },
    { name: "MERN Stack Development Services", icon: Cpu, bg: "bg-emerald-50 border-emerald-100 text-emerald-500" },
    { name: "MEAN Stack Development Services", icon: Database, bg: "bg-purple-50 border-purple-100 text-purple-500" }
  ];

  const services = [
    { name: "Full Stack Mobile App Development", icon: Smartphone, color: "bg-[#e0f2fe]/30 border-sky-100/50 hover:bg-[#e0f2fe]/50 text-sky-600" },
    { name: "Cloud Based Application Development", icon: CloudRain, color: "bg-[#ffedd5]/30 border-amber-100/50 hover:bg-[#ffedd5]/50 text-amber-600" },
    { name: "Enterprise Full Stack Development", icon: Building, color: "bg-[#f3e8ff]/30 border-purple-100/50 hover:bg-[#f3e8ff]/50 text-purple-600" },
    { name: "Scalable Web Application Development", icon: Zap, color: "bg-[#ccfbf1]/30 border-teal-100/50 hover:bg-[#ccfbf1]/50 text-teal-600" }
  ];

  return (
    <section
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">

        {/* ========================================================================= */}
        {/* --- PART 1: HIRE DEVELOPERS (2-Column Premium Grid) --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (Copy and Title) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100/80 rounded-full text-[10px] font-bold text-orange-600 tracking-wide uppercase shadow-3xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Offshore Talent
            </div>

            <h3 className="text-2xl sm:text-[34px] font-black text-gray-900 leading-tight tracking-tight mb-6">
              Hire Full Stack Developers <br />
              <span
                className="text-orange-500 inline-block mt-1"
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                for Complete Solutions
              </span>
            </h3>

            <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed text-justify mb-8 max-w-lg">
              Are you looking to build smart applications? You can hire Full Stack Developers from Camlenio who are experienced with frameworks. If you need to hire dedicated developers India and work with an Offshore Development Company India, we offer cost-effective and high-quality solutions.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50/50 rounded-2xl border border-orange-100/40 text-[10px] font-extrabold text-orange-600 uppercase tracking-widest">
              <span>Framework Experts Available</span>
            </div>
          </div>

          {/* Right Column (2x2 Skill Bento Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative bg-white/70 hover:bg-white border border-slate-100 hover:border-orange-100 rounded-3xl p-6 shadow-3xs hover:shadow-2xs transition-all duration-300 flex flex-col justify-between"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-xl border ${skill.bg} flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 animate-pulse" />
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-orange-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-700 group-hover:text-slate-900 transition-colors leading-snug">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* --- PART 2: SECTOR MASTERY (Horizontal Card Flow) --- */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100/80 rounded-full text-[10px] font-bold text-orange-600 tracking-wide uppercase shadow-3xs mb-4">
              Sector Mastery
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
              Full Stack Application <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                Development for Each Industry
              </span>
            </h3>

            <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-4xl text-justify">
              As an experienced Full Stack Software Development Company offers customized Full Stack Application Development solutions for industries such as healthcare, eCommerce, fintech, and logistics. Our expertise focuses on making Database Driven Application Development platforms that guarantee data security and efficiency. We provide:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((spec, index) => {
              const IconComp = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`group relative ${spec.color} border rounded-[28px] p-6 shadow-3xs hover:shadow-2xs transition-all duration-300 flex flex-col justify-between min-h-[160px]`}
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-3xs border border-white/60">
                      <IconComp className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
                    {spec.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- PART 3: ADVANCED TECHNOLOGY (Split Banner Card) --- */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/70 backdrop-blur-md border border-slate-100 rounded-[32px] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row items-stretch"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Left Side: Dynamic API Connector Diagram (35% width) */}
          <div className="w-full md:w-[35%] bg-orange-500/5 border-b md:border-b-0 md:border-r border-slate-100/80 p-8 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />

            <div className="relative z-10 flex flex-col items-start gap-4">
              <div className="p-3 bg-white rounded-2xl border border-orange-100/50 shadow-3xs text-orange-500">
                <Network className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[8px] font-black text-slate-400 block uppercase tracking-widest mb-0.5">CONNECTOR SCHEMATIC</span>
                <h4 className="text-xs font-black text-slate-800 leading-none">API & Design Integrations</h4>
              </div>
            </div>

            {/* Custom Visual: Connector Nodes */}
            <div className="flex items-center justify-between w-full bg-white/80 rounded-2xl p-3.5 border border-slate-100 shadow-3xs mt-8 relative z-10">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shadow-3xs">
                  <CpuIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[7px] font-black text-slate-400 uppercase">Core</span>
              </div>

              {/* Animated Gateway Line */}
              <div className="flex-1 h-[2px] bg-slate-100 mx-2.5 relative overflow-hidden">
                <motion.div
                  animate={{ x: [-15, 35] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-full bg-orange-500/80 absolute"
                />
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center shadow-3xs">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-[7px] font-black text-slate-400 uppercase">UX Gateway</span>
              </div>
            </div>
          </div>

          {/* Right Side: Copy and Details (65% width) */}
          <div className="w-full md:w-[65%] p-8 md:p-12 relative flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100/80 rounded-full text-[10px] font-bold text-orange-600 tracking-wide uppercase shadow-3xs mb-5 w-fit">
              Advanced Technology
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              Advanced Technology & <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                }}
              >
                Seamless Integration
              </span>
            </h3>

            <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed text-justify">
              Our Full Stack Development Solutions involve seamless API Integration Services that enable ease of communication between systems. We also emphasize intuitive design by expert UI UX Development Services, guaranteeing a user-friendly experience. Our strong focus on creation builds future-rich applications that help business development and digital transformation.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
