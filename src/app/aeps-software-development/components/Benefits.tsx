"use client";

import React from "react";
import { ShieldCheck, Activity, TrendingUp, Settings, Sliders, GitMerge, CreditCard, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure Aadhaar Based Authentication",
    desc: "Aadhaar-linked biometric scans provide secure verification for reliable transactions.",
  },
  {
    icon: Activity,
    title: "Real-Time Transactions Processing",
    desc: "Lightning-fast transaction cycles backed by redundant banking pathways with high uptime.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    desc: "Robust, state-of-the-art server architecture designed to support your growing business needs.",
  },
  {
    icon: Settings,
    title: "Advanced AEPS Admin Panel Software",
    desc: "Full administrative dashboard control to monitor daily transaction volume and logs.",
  },
  {
    icon: Sliders,
    title: "Customizable AEPS Admin Panel",
    desc: "Fully customizable rules, configurations, and commission distribution parameters.",
  },
  {
    icon: GitMerge,
    title: "Seamless Banking API Integration",
    desc: "Robust endpoints that enable smooth integration with core banking systems via stable APIs.",
  },
  {
    icon: CreditCard,
    title: "M-ATM / POS Machine Support",
    desc: "Complete hardware integration pathways to link handheld POS machines and micro-ATMs.",
  },
  {
    icon: Smartphone,
    title: "Responsive App Development",
    desc: "Clean user interfaces designed for both web portal viewports and native Android mobile apps.",
  },
];

export default function Benefits() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <div className="text-center mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Value Proposition
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Key Benefits of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              AEPS Software Development
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-655 font-medium font-sans text-sm md:text-base leading-relaxed">
            Choosing the right AEPS Software Development company can significantly improve your fintech capabilities. Camlenio offers solutions that offer
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ y: -6 }}
                className="relative bg-gradient-to-br from-white/95 to-white/40 p-8 rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] transition-all duration-500 flex flex-col items-center text-center gap-5 group cursor-pointer"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-[16px] bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-500/15 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-center flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-medium">
                    {benefit.desc}
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
