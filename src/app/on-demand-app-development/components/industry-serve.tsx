"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  Home, 
  ShoppingCart,
  ArrowRight
} from "lucide-react";

export default function IndustryServe() {
  const industries = [
    { 
      label: "Healthcare & Telemedicine", 
      icon: HeartPulse, 
      color: "text-rose-500 bg-rose-50 border-rose-100", 
      glow: "group-hover:border-rose-200 shadow-rose-500/5",
      accent: "from-rose-400 to-rose-500",
      desc: "Telehealth portals, virtual care consultation, and patient prescription tools." 
    },
    { 
      label: "E-commerce or Retail", 
      icon: ShoppingBag, 
      color: "text-purple-500 bg-purple-50 border-purple-100", 
      glow: "group-hover:border-purple-200 shadow-purple-500/5",
      accent: "from-purple-400 to-purple-500",
      desc: "Fluid multi-vendor shopping, 1-tap checkout, and smart stock inventories." 
    },
    { 
      label: "Transportation & Logistics", 
      icon: Truck, 
      color: "text-amber-500 bg-amber-50 border-amber-100", 
      glow: "group-hover:border-amber-200 shadow-amber-500/5",
      accent: "from-amber-400 to-amber-500",
      desc: "Real-time dispatch, automated route planners, and active cargo status tracker." 
    },
    { 
      label: "Home Services", 
      icon: Home, 
      color: "text-sky-500 bg-sky-50 border-sky-100", 
      glow: "group-hover:border-sky-200 shadow-sky-500/5",
      accent: "from-sky-400 to-sky-500",
      desc: "Doorstep service booking, live provider tracking, and instant secure estimates." 
    },
    { 
      label: "Grocery & Food Delivery", 
      icon: ShoppingCart, 
      color: "text-emerald-500 bg-emerald-50 border-emerald-100", 
      glow: "group-hover:border-emerald-200 shadow-emerald-500/5",
      accent: "from-emerald-400 to-emerald-500",
      desc: "Real-time orders matching, delivery coordinates tracking, and dynamic cart sync." 
    }
  ];

  return (
    <section 
      className="relative w-full py-24 bg-transparent overflow-hidden" 
      style={{ transform: "translateZ(0)" }}
    >
      
      {/* Atmosphere Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Atmospheric Glow Blurs */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* ========================================================================= */}
        {/* --- HEADER ROW: CENTERED TITLE --- */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Targeted Industry Sectors
          </div>
          <h2 
            className="text-3xl sm:text-[40px] font-black text-slate-900 tracking-tight leading-tight"
            style={{ transform: "translateZ(0)" }}
          >
            Industry <span 
              className="text-orange-500 inline-block"
              style={{
                textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)"
              }}
            >
              We Serve
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* --- 5-COLUMN HARMONIOUS INTERACTIVE CARDS GRID --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl p-6 shadow-xs transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-md ${ind.glow}`}
              >
                <div className="flex flex-col gap-4">
                  {/* Header row of card: Icon container */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 ${ind.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Description details */}
                  <h4 className="text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-orange-500 transition-colors mt-2">
                    {ind.label}
                  </h4>
                  
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                {/* Expanding bottom highlight line */}
                <div className={`h-[2px] w-0 bg-gradient-to-r ${ind.accent} rounded-full mt-6 group-hover:w-full transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
