"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  ShieldCheck,
  CircleDollarSign,
  Users,
  ArrowRight
} from "lucide-react";

export default function WhyCamlenio() {
  const reasons = [
    { title: "Agile Development Process", icon: Activity, color: "bg-blue-50 text-blue-500 border-blue-100/50" },
    { title: "Scalable and Secure Solutions", icon: ShieldCheck, color: "bg-emerald-50 text-emerald-500 border-emerald-100/50" },
    { title: "Affordable Offshore Development Model", icon: CircleDollarSign, color: "bg-amber-50 text-amber-500 border-amber-100/50" },
    { title: "Experienced Full Stack Team", icon: Users, color: "bg-purple-50 text-purple-500 border-purple-100/50" }
  ];

  return (
    <section
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ========================================================================= */}
          {/* --- LEFT COLUMN: WORKSPACE GRAPHIC (col-span-5) --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            {/* Visual background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-gradient-radial from-orange-500/[0.03] via-transparent to-transparent blur-2xl pointer-events-none" />

            <div className="relative w-full aspect-[0.9] sm:aspect-[1.1] lg:aspect-[0.85/1] rounded-[32px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] border border-slate-100/40">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent z-10 pointer-events-none" />

              <Image
                src="/ServiceDropdown/fullstackdev/fullstack.webp"
                alt="Full Stack Workspace Capability"
                fill
                className="object-cover transform hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* --- RIGHT COLUMN: THE MINIMAL CAPABILITY PANEL (col-span-7) --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-slate-100/90 rounded-[32px] p-6 md:p-8 flex flex-col justify-between"
            style={{ transform: "translateZ(0)" }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us As a <br />
                <span
                  className="text-orange-500 inline-block mt-1"
                  style={{
                    textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
                  }}
                >
                  Full Stack Development Company?
                </span>
              </h2>

              <p className="text-sm md:text-base font-sans text-justify mb-5 text-slate-500">
                Camlenio stands out as a trustworthy Full Stack Web Development Company India, providing complete End to End Development Services. Our experts merge technical expertise with industry features to provide high-performance applications. Reasons to choose Camlenio:
              </p>
            </div>

            {/* Checklist styled as premium horizontal reason bars */}
            <div className="flex flex-col gap-2.5">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 p-3 bg-slate-50/40 hover:bg-white rounded-xl border border-slate-100/60 hover:border-slate-200/60 shadow-3xs hover:shadow-2xs transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-2 rounded-lg border ${reason.color} flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 flex items-center justify-between gap-4">
                      <span className="text-xs sm:text-sm font-black text-slate-700 group-hover:text-slate-900 transition-colors">
                        {reason.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
