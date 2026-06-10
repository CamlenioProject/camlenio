"use client";

import React from "react";
import { Home, UserPlus, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Home,
    title: "Improved Property Management",
    desc: "Our software customer records, manages listings, bookings, payments, and property details in one centralized system.",
  },
  {
    icon: UserPlus,
    title: "Better Customer Experience",
    desc: "It offers seamless online bookings and property searches, and is mobile-friendly for users.",
  },
  {
    icon: TrendingUp,
    title: "Higher Sales and ROI",
    desc: "The smart integration and marketing tools help to increase conversions and enhance overall productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable & Secure Platforms",
    desc: "Our solutions are designed with advanced security and scalable architecture to help business growth.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Value Proposition
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Reasons for Choosing a{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Real Estate Software
            </span>{" "}
            Development Company
          </h2>
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
