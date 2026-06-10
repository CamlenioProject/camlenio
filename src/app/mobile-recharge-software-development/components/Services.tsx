"use client";

import React from "react";
import { Smartphone, Zap, ShieldCheck, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Recharge Platform Development",
    desc: "Complete mobile recharge platform with real-time processing, secure APIs, and seamless user experience.",
  },
  {
    icon: Zap,
    title: "Instant Recharge API Integration",
    desc: "High-speed API integration for instant mobile and DTH recharge with secure payment processing.",
  },
  {
    icon: Monitor,
    title: "Custom Dashboard Development",
    desc: "Easy dashboard management with transaction monitoring, commission tracking, and business analytics.",
  },
  {
    icon: ShieldCheck,
    title: "B2B Fintech Software Solutions",
    desc: "Complete B2B fintech software development solution with customized technology tailored to your business needs.",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <section className="bg-orange-50/30 py-24 relative overflow-hidden">
      {/* Background decoration lines/blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
              Fintech Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Our Mobile Recharge{" "}
              <span
                className="text-orange-500 relative inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                }}
              >
                Development
              </span>{" "}
              Services
            </h2>
          </div>
          <div className="max-w-md text-left lg:text-right">
            <p className="text-gray-600 font-medium font-sans text-sm sm:text-base">
              We focus on secure payment integration, easy dashboard management, and high-speed APIs to ensure uninterrupted service for your mobile recharge business.
            </p>
          </div>
        </div>

        {/* Services Grid with Overlapping Absolute Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-16 gap-x-8 mt-8 pb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.01)] border border-orange-500/5 hover:border-orange-500/20 hover:shadow-[0_20px_45px_rgba(249,115,22,0.05)] transition-all duration-500 flex flex-col justify-between cursor-pointer group"
              >
                {/* Overlapping Absolute Icon wrapper */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/15 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-5 h-5 group-hover:rotate-[15deg] transition-transform duration-300" />
                </div>

                <div className="pt-4 space-y-4">
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom colored bar element */}
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-6 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
