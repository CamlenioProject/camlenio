"use client";

import React from "react";
import { Wrench, UserCheck, Network, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const trustFactors = [
  {
    icon: Wrench,
    title: "Custom-built software for restaurants and hotels",
    desc: "Modular architecture tailored precisely to your kitchen and front-of-house operations.",
  },
  {
    icon: UserCheck,
    title: "Experienced development team",
    desc: "Software engineers with years of experience specifically in hospitality tech stacks.",
  },
  {
    icon: Network,
    title: "Cloud-based technology secure solutions",
    desc: "Modern infrastructure that ensures data integrity and real-time syncing across branches.",
  },
  {
    icon: TrendingUp,
    title: "Scalable software for beginners and enterprise chains",
    desc: "From a single cafe to nationwide food chains, our platform grows with your business.",
  },
];

export default function Trust() {
  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      {/* Soft glowing blur blobs for light theme */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Context copy & Stats */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
              Why Trust Us?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Why does Hotel &{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Restaurant
              </span>{" "}
              trust us?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed">
              Camlenio merges technology expertise with industry-focused solutions to deliver reliable restaurant software systems. As a trusted management software development company, we create scalable platforms tailored to your business goals.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 border border-orange-500/10 p-6 rounded-3xl shadow-sm backdrop-blur-sm"
            >
              <div className="text-4xl sm:text-5xl font-black text-orange-500 leading-none">500+</div>
              <div className="text-[11px] font-bold text-gray-500 mt-2 tracking-wider uppercase">Venues Managed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/60 border border-orange-500/10 p-6 rounded-3xl shadow-sm backdrop-blur-sm"
            >
              <div className="text-4xl sm:text-5xl font-black text-orange-500 leading-none">99.9%</div>
              <div className="text-[11px] font-bold text-gray-500 mt-2 tracking-wider uppercase">Uptime Rate</div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Grid of 4 trust cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {trustFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-br from-white/95 to-white/40 p-8 rounded-3xl border border-orange-500/10 hover:border-orange-500/30 hover:bg-white shadow-sm hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-white transition-all duration-300 border border-orange-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-medium">
                    {factor.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
