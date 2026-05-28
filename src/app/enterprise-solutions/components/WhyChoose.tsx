"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  LockClosedIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Enterprise-Grade Risk Dashboard",
    desc: "Built-in fraud prevention and velocity checks to monitor transaction health in real-time.",
    icon: ShieldCheckIcon,
    accent: "orange"
  },
  {
    title: "100% Audit Trails",
    desc: "Absolute transparency with comprehensive digital payment footprints for every single transaction.",
    icon: DocumentTextIcon,
    accent: "blue"
  },
  {
    title: "Bank-Grade Security",
    desc: "Robust KYC/AML frameworks protecting every transaction tier with industry-standard encryption.",
    icon: LockClosedIcon,
    accent: "orange"
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
          >
            Enterprise-Grade <br className="hidden md:block" />
            <span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}>Trust Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10"
          >
            We build secure, transparent, and compliant software ecosystems that power the world's leading enterprises.
          </motion.p>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-4xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-500 group overflow-hidden"
            >
              {/* Decorative background glow on hover */}
              <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full ${feature.accent === 'orange' ? 'bg-orange-50' : 'bg-blue-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

              <div className={`w-12 h-12 mb-6 rounded-2xl ${feature.accent === 'orange' ? 'bg-orange-100/50 text-orange-600' : 'bg-blue-100/50 text-blue-600'} flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 relative z-10">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
