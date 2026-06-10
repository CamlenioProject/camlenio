"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sliders, Smartphone, Coins, Users, Headphones, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Sliders,
    text: "Customized and scalable solutions",
  },
  {
    icon: Smartphone,
    text: "User-friendly interface and advanced features",
  },
  {
    icon: Coins,
    text: "Affordable development and maintenance services",
  },
  {
    icon: Users,
    text: "Experienced school ERP software developers in India",
  },
  {
    icon: Headphones,
    text: "Dedicated Technical support and regular updates",
  },
  {
    icon: ShieldCheck,
    text: "Secure cloud integrations and data protection",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 text-white bg-[#0b0f19] border-y border-orange-500/10 relative overflow-hidden">
      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-50/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Title Block */}
        <div className="text-center max-w-4xl mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Institutional Growth Partner
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Why do Most Schools and Institutes{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Trust Us
            </span>
            ?
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-400 font-sans font-medium leading-relaxed max-w-3xl mx-auto">
            Camlenio stands among the best school management software development company in Jaipur, because of our creative method, industry expertise, and customer-focused development process. Our experienced team offers secure and future-ready education solutions that help institutions grow digitally. Here are the reasons institutions trust us:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-orange-500/20 rounded-[2.5rem] p-8 transition-all duration-500 relative overflow-hidden group text-left shadow-lg shadow-black/20"
              >
                {/* Highlight top border transition on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm border border-orange-500/10">
                  <Icon className="w-5 h-5" />
                </div>

                <p className="text-sm sm:text-base font-bold text-gray-200 leading-relaxed font-sans group-hover:text-orange-400 transition-colors duration-200">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section >
  );
}
