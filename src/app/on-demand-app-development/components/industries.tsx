"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Layers
} from "lucide-react";

export default function IndustriesOnDemand() {

  return (
    <section
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >

      {/* Tech Dot Grid Background Overlay */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ========================================================================= */}
        {/* --- UNIFIED LARGE TABLET DASHBOARD CANVAS --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/70 backdrop-blur-md rounded-[40px] border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 items-stretch overflow-hidden relative">

          {/* Subtle grid light background element inside dashboard */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-orange-500/5 to-transparent blur-xl pointer-events-none" />

          {/* LEFT PANEL: Comprehensive Services & Copy (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8 p-4 md:p-6"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                Full-Lifecycle Development
              </div>

              <h2
                className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-tight"
                style={{ transform: "translateZ(0)" }}
              >
                Comprehensive Mobile <br />
                <span
                  className="text-orange-500 inline-block"
                  style={{
                    textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)"
                  }}
                >
                  App Development
                </span> <br />
                Services
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-2">
                The leading provider of On Demand Mobile App Development, we provide end-to-end services such as development, testing, maintenance, and UI/UX Design. We create high-performance applications for both Android and iOS platforms. Being a top Mobile App Development India, we merge global standards with cost-effective solutions. Our expert guarantees quality assurance, delivery, and continuously helps your business succeed in the competitive demand.
              </p>
            </div>

            {/* Innovation & Affordability Banner */}
            <div className=" bg-orange-50/40 border border-orange-100/50 rounded-2xl flex items-start gap-3 mt-4">
              <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                We merge innovation with affordability, creating high-quality app development available to all sizes of businesses
              </p>
            </div>
          </motion.div>

          {/* RIGHT PANEL: Visual Asset Card (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative rounded-[32px] overflow-hidden border border-slate-100/80 bg-slate-50 flex items-center justify-center min-h-[420px]"
          >
            {/* Main Background Product Image */}
            <img
              src="/ServiceDropdown/ondemand/ondemand-1.webp"
              alt="Comprehensive Mobile App Services"
              className="w-full h-full object-cover rounded-[32px] transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
