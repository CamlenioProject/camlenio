"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Activity, FileText, LayoutDashboard, TrendingUp, ShieldCheck } from "lucide-react";

const features = [
  {
    num: "01",
    colorBg: "bg-orange-50/80 border-orange-200 text-orange-700",
    pinColor: "from-orange-500 to-amber-400 shadow-orange-500/40",
    rotation: "-rotate-2 sm:-rotate-3 hover:rotate-0",
    icon: Users,
    title: "Admin & Agent Management",
    desc: "Manage your complete agent members from the dashboard.",
  },
  {
    num: "02",
    colorBg: "bg-sky-50/80 border-sky-200 text-sky-700",
    pinColor: "from-blue-500 to-cyan-400 shadow-blue-500/40",
    rotation: "rotate-2 sm:rotate-3 hover:rotate-0",
    icon: Activity,
    title: "Real-Time Transaction Processing",
    desc: "Monitor transactions and status updates easily.",
  },
  {
    num: "03",
    colorBg: "bg-purple-50/80 border-purple-200 text-purple-700",
    pinColor: "from-purple-500 to-indigo-400 shadow-purple-500/40",
    rotation: "-rotate-1 sm:-rotate-2 hover:rotate-0",
    icon: FileText,
    title: "Transaction Reports",
    desc: "Track and analyze transaction history with detailed reports.",
  },
  {
    num: "04",
    colorBg: "bg-amber-50/80 border-amber-200 text-amber-700",
    pinColor: "from-amber-500 to-yellow-400 shadow-amber-500/40",
    rotation: "rotate-3 sm:rotate-4 hover:rotate-0",
    icon: LayoutDashboard,
    title: "Easy Dashboard",
    desc: "Get easy access to important business information in one place.",
  },
  {
    num: "05",
    colorBg: "bg-emerald-50/80 border-emerald-200 text-emerald-700",
    pinColor: "from-emerald-500 to-teal-400 shadow-emerald-500/40",
    rotation: "-rotate-2 sm:-rotate-3 hover:rotate-0",
    icon: TrendingUp,
    title: "Scalable Platform",
    desc: "Suitable for growing fintech businesses and partner members.",
  },
  {
    num: "06",
    colorBg: "bg-rose-50/80 border-rose-200 text-rose-700",
    pinColor: "from-rose-500 to-pink-400 shadow-rose-500/40",
    rotation: "rotate-1 sm:rotate-2 hover:rotate-0",
    icon: ShieldCheck,
    title: "Secure Transaction Processing",
    desc: "It is developed with a security-focused design for secure operations.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight font-sans">
            Key Features of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582326",
              }}
            >
              UPI Cash Point Software
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 font-medium font-sans text-sm md:text-base leading-relaxed">
            Here are the essential features of the software that help your platform&apos;s system activity, given below:
          </p>
        </div>

        {/* Pinned Cards Grid Layout (Inspired by Reference UI Layout) */}
        <div className="relative">
          
          {/* Connecting Curved Dashed SVG Path (Desktop view) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M 180 140 C 350 40, 500 240, 650 140 C 800 40, 950 240, 1100 140 M 180 440 C 350 340, 500 540, 650 440 C 800 340, 950 540, 1100 440"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.2"
            />
          </svg>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 relative z-10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`group relative bg-white/95 backdrop-blur-md rounded-[2.2rem] p-7 sm:p-8 border border-gray-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.15)] hover:border-orange-400/60 transition-all duration-500 transform ${feature.rotation} flex flex-col justify-between items-start text-left min-h-[260px] cursor-pointer`}
                >
                  {/* Top 3D Push-Pin Dot */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-tr ${feature.pinColor} shadow-md ring-4 ring-white flex items-center justify-center`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    </div>
                  </div>

                  {/* Inner Content Card Header */}
                  <div className="w-full pt-2">
                    {/* Number Badge Banner */}
                    <div className={`inline-flex items-center justify-between w-full px-4 py-2 rounded-2xl border ${feature.colorBg} mb-5`}>
                      <span className="text-xl sm:text-2xl font-black tracking-tight font-mono">
                        {feature.num}
                      </span>
                      <Icon className="w-5 h-5 opacity-80" />
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug font-sans tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 font-medium font-sans leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Bottom subtle accent indicator */}
                  <div className="mt-5 w-12 h-1 bg-orange-500/20 group-hover:w-full group-hover:bg-orange-500 transition-all duration-500 rounded-full" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
