"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, Layers, CheckCircle2, TrendingUp } from "lucide-react";

export default function FeaturesTechOnDemand() {
  return (
    <section
      className="relative w-full py-28 bg-transparent overflow-hidden"
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

      {/* Background Atmosphere Spheres */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* ========================================================================= */}
        {/* --- TOP ROW: CENTERED TITLE SECTION --- */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Reliable Scaling Partner
          </div>
          <h2
            className="text-3xl sm:text-[40px] font-black text-slate-900 tracking-tight leading-tight"
            style={{ transform: "translateZ(0)" }}
          >
            On Demand App <span
              className="text-orange-500 inline-block"
              style={{
                textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)"
              }}
            >
              Development Company
            </span> <br />
            For Scalable Apps
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* --- ASYMMETRIC MASONRY DASHBOARD GRID --- */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-8">

          {/* Row 1: 60% Left Card, 40% Right Image Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Card A: 60% width - Smart Applications & Digital Products */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white/70 backdrop-blur-md rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Digital Performance
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mt-2">
                  Are you looking to build smart applications to meet your specific business requirements? Camlenio is a reliable On Demand App Development Company offering high-quality digital products for beginners and growing businesses. We focus on creation and performance, specializing in creating powerful applications that meet real-time user requirements and market demands.
                </p>
              </div>

              {/* Minimal sub-check design */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Performance Focused</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Beginner & Growth Ready</span>
                </div>
              </div>
            </motion.div>

            {/* Card B: 40% width - Image Showcase ondemand-3.webp */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 relative rounded-[32px] overflow-hidden border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 aspect-[4/3] lg:aspect-auto flex items-center justify-center"
            >
              <img
                src="/ServiceDropdown/ondemand/ondemand-3.webp"
                alt="Camlenio Scalable Apps Core"
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>

          </div>

          {/* Row 2: 35% Left Category checklist, 65% Right Agile Solutions Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Card C: 35% width - Platform category list visual */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 bg-white/70 backdrop-blur-md rounded-[32px] border border-slate-100 p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Future-Ready Launch
                  </span>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50/50 border border-orange-100/50 rounded-xl font-bold text-xs text-orange-700">
                    <span>Delivery App</span>
                    <span className="text-[8px] font-black uppercase bg-orange-500 text-white px-1.5 py-0.5 rounded">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50/50 border border-amber-100/50 rounded-xl font-bold text-xs text-amber-700">
                    <span>Service Marketplace</span>
                    <span className="text-[8px] font-black uppercase bg-amber-500 text-white px-1.5 py-0.5 rounded">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50/50 border border-purple-100/50 rounded-xl font-bold text-xs text-purple-700">
                    <span>Booking Platform</span>
                    <span className="text-[8px] font-black uppercase bg-purple-500 text-white px-1.5 py-0.5 rounded">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card D: 65% width - Agile & Responsive Solutions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-orange-100/50 rounded-[32px] p-8 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Agile Delivery
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mt-2">
                  The businesses need agile and responsive solutions to meet the digital demands. Our On Demand App Development Services are designed to help you launch your feature-ready applications that offer a seamless user experience. If you require a delivery app, service marketplace, or booking platform, we guarantee your product is future-ready.
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100/80 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <span>Services Framework V2.0</span>
                <span className="text-emerald-600">Agile Deployment Guaranteed</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
