"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Cpu, Database, ShieldAlert, Cloud, Activity, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-28 pb-16 bg-transparent"
      style={{ transform: "translateZ(0)" }}
    >

      {/* Tech Circuit Geometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Atmospheric Glow Blurs */}
      <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* --- HERO CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* --- LEFT COLUMN: CONTENT & ACTION --- */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Heading with custom text-shadow styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0f172a] leading-[1.12] tracking-tight"
              style={{ transform: "translateZ(0)" }}
            >
              Reliable <br />
              <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Backend Development
              </span> <br />
              Services for Modern Applications
            </h1>
          </motion.div>

          {/* Subheading text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mt-6"
          >
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Camlenio is a leading Backend Development Company India, offering custom Backend Development and cloud-based solutions for seamless performance.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="default"
              size="xl"
              onClick={() => router.push("/contact")}
            >
              Get Backend Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>

        {/* --- RIGHT COLUMN: HIGH-FIDELITY CLOUD INFRASTRUCTURE IMAGE --- */}
        <div className="lg:col-span-5 flex items-center justify-center relative">

          <div className="relative w-full max-w-[440px] aspect-[1.1] flex items-center justify-center">

            {/* Ambient visual overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-amber-500/10 blur-[100px] rounded-full -z-10 animate-pulse" />

            {/* Premium Glassmorphic Picture Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full bg-white/5 border border-white/10 rounded-[32px] p-2 shadow-sm overflow-hidden backdrop-blur-xs flex items-center justify-center"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Inner picture slot */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden group select-none">

                {/* High-Resolution Unsplash Image */}
                <img
                  src="/ServiceDropdown/backenddevelopment/reliable-backend-hero.webp"
                  alt="Reliable Backend & Cloud Server Infrastructure"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  style={{ transform: "translateZ(0)" }}
                />

                {/* Floating telemetry metrics overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div className="bg-slate-950/80 border border-white/10 backdrop-blur-md p-2 rounded-xl text-right hidden sm:block">
                    <span className="text-[8px] font-black text-slate-400 block uppercase">SYSTEM UPTIME</span>
                    <span className="text-[10px] font-extrabold text-emerald-400">99.99%</span>
                  </div>
                </div>
                {/* Dynamic API status badge */}
                <div className="absolute top-4 right-4 z-20">
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
