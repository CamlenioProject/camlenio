"use client";

import React from "react";
import { ClipboardCheck, CreditCard, Users, FileText, Cloud, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ClipboardCheck,
    text: "Easy student attendance and performance tracking",
  },
  {
    icon: CreditCard,
    text: "Secure fee management and online payment integration",
  },
  {
    icon: Users,
    text: "Enhanced communication between students, teachers, and parents",
  },
  {
    icon: FileText,
    text: "Real - time access to academic records and reports",
  },
  {
    icon: Cloud,
    text: "Cloud accessibility for remote learning and management",
  },
  {
    icon: ShieldCheck,
    text: "Improve data security and centralized management",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Value Proposition
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Benefits of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Education Software Development
            </span>
          </h2>
          <p className="text-gray-600 font-sans font-medium text-sm md:text-base leading-relaxed">
            As a professional school ERP software company in Jaipur, we help educational institutions reduce manual work and improve operational efficiency with smart technology solutions.
          </p>
        </div>

        {/* Benefits Grid (6 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="relative bg-gradient-to-br from-white/95 to-white/40 p-8 rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.08)] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 group cursor-pointer"
              >

                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-[20px] bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-500/15 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-left flex-grow">
                  <p className="text-sm sm:text-base font-bold text-gray-800 leading-relaxed group-hover:text-orange-600 transition-colors duration-200">
                    {benefit.text}
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
