"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Code,
  ArrowUpRight
} from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      id: "01",
      title: "Focus on performance-driven Backend Development Services",
      icon: Zap,
      gridSpan: "col-span-1 lg:col-span-8",
      colorClass: "from-amber-500/10 to-orange-500/5 text-amber-500 border-amber-100/40",
      glowClass: "group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
      badgeText: "High Velocity"
    },
    {
      id: "02",
      title: "Flexible Hiring Models to Hire Backend Developers according to your requirements",
      icon: Users,
      gridSpan: "col-span-1 lg:col-span-4",
      colorClass: "from-blue-500/10 to-indigo-500/5 text-blue-500 border-blue-100/40",
      glowClass: "group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]",
      badgeText: "Tailored Staffing"
    },
    {
      id: "03",
      title: "Expertise in modern Backend Development Services",
      icon: Lightbulb,
      gridSpan: "col-span-1 lg:col-span-4",
      colorClass: "from-purple-500/10 to-pink-500/5 text-purple-500 border-purple-100/40",
      glowClass: "group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)]",
      badgeText: "Tech Mastery"
    },
    {
      id: "04",
      title: "Proven track record in providing scalable and secure platforms",
      icon: ShieldCheck,
      gridSpan: "col-span-1 lg:col-span-8",
      colorClass: "from-emerald-500/10 to-teal-500/5 text-emerald-500 border-emerald-100/40",
      glowClass: "group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      badgeText: "Enterprise Security"
    },
    {
      id: "05",
      title: "Experienced and dedicated backend developers",
      icon: Code,
      gridSpan: "col-span-1 lg:col-span-12",
      colorClass: "from-rose-500/10 to-red-500/5 text-rose-500 border-rose-100/40",
      glowClass: "group-hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)]",
      badgeText: "Expert Craftsmanship"
    }
  ];

  return (
    <section 
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Premium ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ========================================================================= */}
        {/* --- HEADER BLOCK: CENTRED TYPOGRAPHY & INTRO --- */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-bold text-orange-600 tracking-wide shadow-2xs uppercase">
            Proven Excellence
          </div>

          <h2 className="text-3xl sm:text-[44px] font-black text-[#0f172a] leading-tight tracking-tight">
            Why <span 
              className="text-orange-500 inline-block mt-1" 
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Camlenio?
            </span>
          </h2>

          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mt-2">
            Selecting a reliable Backend Development Company is vital for your digital success. Here’s is the reason Camlenio stands out:
          </p>
        </div>

        {/* ========================================================================= */}
        {/* --- BENTO GRID: REASONS SHOWCASE --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-0">
          {reasons.map((reason) => {
            const IconComp = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`group relative bg-white/80 border border-slate-100 hover:border-slate-200/60 rounded-[32px] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden ${reason.gridSpan} ${reason.glowClass}`}
                style={{ transform: "translateZ(0)" }}
              >
                {/* Large visual serial watermark background */}
                <span className="absolute bottom-2 right-4 text-[90px] font-black text-slate-100/50 group-hover:text-slate-200/40 select-none pointer-events-none font-mono transition-colors duration-500">
                  {reason.id}
                </span>

                {/* Soft ambient background gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none -z-10`} />

                {/* Top Section: Icon & Badge */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className={`p-3 rounded-2xl border ${reason.colorClass} flex items-center justify-center shadow-3xs group-hover:scale-105 transition-all duration-300`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-wider bg-slate-50/50 group-hover:bg-white/80 px-2.5 py-1 rounded-lg border border-slate-100">
                    {reason.badgeText}
                  </span>
                </div>

                {/* Title Section */}
                <div className="relative z-10 max-w-xl">
                  <h3 className="text-base sm:text-lg font-black text-slate-700 group-hover:text-slate-900 leading-snug transition-colors">
                    {reason.title}
                  </h3>
                </div>

                {/* Bottom interactive card footer line */}
                <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center gap-2 text-[10px] font-bold text-slate-400 group-hover:text-orange-500 transition-colors tracking-wide uppercase">
                  <span>Explore Core Capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
