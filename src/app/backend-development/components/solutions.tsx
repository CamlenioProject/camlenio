"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  ShieldCheck,
  Cpu,
  GitMerge
} from "lucide-react";

export default function SmartSolutions() {
  const services = [
    {
      id: "database",
      title: "Advanced Database Development Services for optimized data management",
      icon: Database,
      color: "bg-blue-50 text-blue-500 border-blue-100",
      accentGlow: "from-blue-500/10 to-indigo-500/5"
    },
    {
      id: "infra",
      title: "End-to-end Backend Infrastructure Development",
      icon: Server,
      color: "bg-orange-50 text-orange-500 border-orange-100",
      accentGlow: "from-orange-500/10 to-amber-500/5"
    },
    {
      id: "api",
      title: "Secure and scalable Backend API Development",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-500 border-emerald-100",
      accentGlow: "from-emerald-500/10 to-teal-500/5"
    },
    {
      id: "logic",
      title: "Custom Backend Development to match your business logic",
      icon: Cpu,
      color: "bg-purple-50 text-purple-500 border-purple-100",
      accentGlow: "from-purple-500/10 to-pink-500/5"
    },
    {
      id: "integration",
      title: "Reliable Backend Integration Services for seamless platform connectivity",
      icon: GitMerge,
      color: "bg-rose-50 text-rose-500 border-rose-100",
      accentGlow: "from-rose-500/10 to-red-500/5"
    }
  ];

  return (
    <section
      className="relative w-full pt-10 pb-20 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Soft glowing ambient backdrops */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-orange-500/5 to-orange-300/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* ========================================================================= */}
        {/* --- PART 1: THE CORE DASHBOARD CARD (LIGHT THEME PANEL) --- */}
        {/* ========================================================================= */}
        <div
          className="relative bg-white/80 backdrop-blur-md border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col gap-8"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Subtle light accent glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient from-orange-500/5 to-transparent blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">

              <h2 className="text-3xl sm:text-[42px] font-black text-[#0f172a] leading-[1.15] tracking-tight">
                Smart Backend <br className="hidden sm:block" />
                <span
                  className="text-orange-500 inline-block mt-1"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Development Solutions
                </span>
              </h2>

              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-xl">
                As a full service Backend App Development Company, it provides a wide range of services, such as:
              </p>

            </div>

            {/* Right Illustration Column (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full flex items-center justify-center relative">

              {/* Full Width Borderless Picture Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative w-full aspect-[1.4] sm:aspect-[1.5] rounded-[32px] overflow-hidden shadow-sm flex items-center justify-center bg-transparent border-0"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Subtle clean tech overlay inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent z-10 pointer-events-none" />

                {/* High-Resolution Unsplash Image */}
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                  alt="Smart Backend Development Solutions"
                  className="w-full h-full object-cover rounded-[32px] transform group-hover:scale-102 transition-transform duration-700"
                  style={{ transform: "translateZ(0)" }}
                />
              </motion.div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* --- PART 2: THE 5 SERVICES GRID LIST (LIGHT THEME WHITE CARDS) --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white/80 border border-slate-100 hover:bg-white rounded-3xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[170px]"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Subtle visual hover corner glow */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${svc.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-[60px] pointer-events-none -z-10`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${svc.color} flex items-center justify-center shadow-2xs`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-black text-slate-700 group-hover:text-slate-900 leading-snug transition-colors">
                    {svc.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
