"use client";

import React from "react";
import { ShieldCheck, Zap, FileCheck, Monitor, Settings, CreditCard, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: FileCheck,
    title: "PAN Verification API Integration",
    desc: "Advanced PAN verification API with NSDL and UTI integration for instant and reliable identity verification.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Gateways",
    desc: "Enterprise-grade secure payment gateways ensuring encrypted transactions and complete data protection.",
  },
  {
    icon: Monitor,
    title: "Real-Time Tracking Systems",
    desc: "Live status tracking for PAN applications, corrections, and document processing with instant updates.",
  },
  {
    icon: Globe,
    title: "NSDL PAN Card Software",
    desc: "Complete NSDL PAN card software with compliance, secure processing, and seamless application management.",
  },
  {
    icon: CreditCard,
    title: "UTI PAN Card Software",
    desc: "Customized UTI PAN card software platforms guaranteeing easy solutions and full regulatory compliance.",
  },
  {
    icon: Settings,
    title: "BBPS Integration Support",
    desc: "Seamless BBPS integration enabling businesses to manage bill payments and PAN services on a single platform.",
  },
  {
    icon: Smartphone,
    title: "Customer Onboarding Platform",
    desc: "Streamlined customer onboarding with document uploads, verification, and digital KYC on one unified platform.",
  },
  {
    icon: Zap,
    title: "Fast Processing & Scalability",
    desc: "High-performance architecture designed for fast processing and scalable to handle growing business demands.",
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
            Key Features of Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              PAN Card Software
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-655 font-medium font-sans text-sm md:text-base leading-relaxed">
            Our PAN card software development services help businesses digitize operations and increase efficiency with secure, scalable, and compliant solutions.
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
