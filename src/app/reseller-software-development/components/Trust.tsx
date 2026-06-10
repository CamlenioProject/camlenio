"use client";

import React from "react";
import { Wrench, ShieldCheck, Coins, Headphones, Zap, Layout } from "lucide-react";
import { motion } from "framer-motion";

const trustFactors = [
  {
    icon: Wrench,
    title: "Customized Solutions for Every Industry",
    desc: "Tailored to your specific dealership, utility, SaaS, or B2B reseller models.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Scalable technology stack",
    desc: "Built using modular high-performance architectures to support growing networks.",
  },
  {
    icon: Coins,
    title: "Affordable Development and Support",
    desc: "Premium reseller platforms engineered within cost-efficient budgets.",
  },
  {
    icon: Headphones,
    title: "Dedicated Technical Assistance",
    desc: "24/7 technical assistance and maintenance support from our Jaipur engineering team.",
  },
  {
    icon: Zap,
    title: "Fast Deployment and Maintenance Support",
    desc: "Rapid onboarding configurations with minimum downtime for reseller operations.",
  },
  {
    icon: Layout,
    title: "User Friendly UI/UX Design",
    desc: "Buttery-smooth reseller portals requiring zero technical training for partners.",
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
              Why Partner With Us?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Why Do Businesses{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Prefer Camlenio
              </span>{" "}
              For Reseller Software?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed">
              Camlenio combines creativity, technical expertise, and business focused development to deliver reliable reseller software solutions in Jaipur. We understand B2B requirements and build a secure, easy-to-manage platform.
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
              <div className="text-[11px] font-bold text-gray-500 mt-2 tracking-wider uppercase">Partners Onboarded</div>
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

        {/* Right Column: Grid of 6 trust cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {trustFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-br from-white/95 to-white/40 p-8 rounded-3xl border border-orange-500/10 hover:border-orange-500/30 hover:bg-white shadow-sm hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:text-white transition-all duration-300 border border-orange-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200 leading-snug">
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
