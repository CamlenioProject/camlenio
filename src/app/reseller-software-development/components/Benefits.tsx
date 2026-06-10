"use client";

import React from "react";
import { Users, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Users,
    title: "Manage dealers, distributors, and agents in one platform",
    desc: "Coordinate B2B updates, orders, margins, and agent accounts from a centralized system.",
  },
  {
    icon: TrendingUp,
    title: "Expand operations using scalable multi reseller software",
    desc: "Easily grow your distribution channels and add nested reseller tiers with zero performance bottlenecks.",
  },
  {
    icon: ShieldCheck,
    title: "Launch branded platforms with white label reseller software",
    desc: "Enable your partners to resell solutions under their own domains, custom logos, and branded colors.",
  },
  {
    icon: BarChart3,
    title: "Enhance productivity by advanced reporting and Analytics",
    desc: "Gain deep visibility into reseller commissions, total volume, payouts, and customer retention metrics.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Value Proposition
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Key Advantages of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Reseller Management
            </span>{" "}
            Software
          </h2>
          <div className="text-gray-600 font-medium font-sans text-sm sm:text-base max-w-3xl mx-auto space-y-4 text-center">
            <p>
              Choosing the right reseller management software can transform the way your business operates. Camlenio solutions help businesses automate manual tasks, enhance reseller communication, and manage multiple distributors. Our B2B reseller software helps businesses:
            </p>
          </div>
        </div>

        {/* Benefits Grid (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative bg-gradient-to-br from-white/95 to-white/40 p-8 rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] transition-all duration-500 flex flex-col items-center text-center gap-5 group cursor-pointer"
              >
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-500/15 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-center flex-grow">
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-200">
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
