"use client";

import React from "react";
import { ShieldCheck, Zap, TrendingUp, Monitor, Palette, Handshake, CreditCard, Receipt } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure and Scalable Bharat Bill Payment Software",
    desc: "Enterprise-grade security with scalable architecture built to handle high-volume bill payment transactions.",
  },
  {
    icon: Zap,
    title: "Easy BBPS API Integration for Faster Transactions",
    desc: "Seamless API integration enabling fast and reliable bill payment processing across multiple utility services.",
  },
  {
    icon: Monitor,
    title: "Advanced BBPS Admin Panel with Real-Time Monitoring",
    desc: "Full administrative dashboard control to monitor daily transactions, commissions, and system performance in real-time.",
  },
  {
    icon: Palette,
    title: "White Label BBPS Software for Branding Flexibility",
    desc: "Launch your own branded BBPS platform with fully customizable white label solutions tailored to your business identity.",
  },
  {
    icon: CreditCard,
    title: "Fast and Secure Utility Bill Payment Software",
    desc: "Quick and secure payment processing for electricity, gas, water, credit cards, and many more utility services.",
  },
  {
    icon: Handshake,
    title: "High Commission Opportunities with B2B BBPS Software",
    desc: "Maximize revenue with our B2B BBPS software featuring attractive commission structures and multi-tier distributions.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Multi-Service Platform",
    desc: "Robust server architecture designed to support your growing business needs with multiple service categories.",
  },
  {
    icon: Receipt,
    title: "Comprehensive Reporting & Analytics",
    desc: "Detailed transaction reports, settlement summaries, and analytics dashboards to track business performance.",
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
              BBPS Software Solutions
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-655 font-medium font-sans text-sm md:text-base leading-relaxed">
            Our BBPS software development services help businesses streamline bill payment solutions, enhancing customer experience and revenue generation. We help businesses establish a powerful digital payment ecosystem with modern, secure technology.
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
