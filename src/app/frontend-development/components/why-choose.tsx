"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSmartphone, FiCode, FiLayers, FiLayout } from "react-icons/fi";

const features = [
  {
    title: "High-performance Mobile Friendly Website Design",
    icon: <FiSmartphone className="text-orange-500 w-6 h-6" />,
    bg: "bg-[#FDFCF9]",
    textColor: "text-gray-900",
    hasButton: true,
  },
  {
    title: "Clean and efficient HTML CSS Development",
    icon: <FiCode className="text-orange-500 w-6 h-6" />,
    bg: "bg-white",
    textColor: "text-gray-900",
  },
  {
    title: "Responsive layouts using tailwind Development",
    icon: <FiLayers className="text-orange-500 w-6 h-6" />,
    bg: "bg-white",
    textColor: "text-gray-900",
  },
  {
    title: "Custom UI UX Design for Intuitive User Journeys",
    icon: <FiLayout className="text-orange-500 w-6 h-6" />,
    bg: "bg-white",
    textColor: "text-gray-900",
  }
];

export default function WhyChoose() {
  return (
    <section className="relative pt-14 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background Container inspired by reference image */}
      <div className="max-w-[1640px] mx-auto relative rounded-[3rem] overflow-hidden min-h-[700px] flex flex-col justify-between p-8 md:p-16">

        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ServiceDropdown/webdevpage/hero2.webp"
            alt="Office background"
            fill
            className="object-cover brightness-75"
            priority
          />
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Top */}
        <div className="relative z-10 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Why Do People Look For <br />
            Expert Frontend Web Development?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8"
          >
            Our experienced Front End Developers focus on designing seamless digital experiences using modern Frontend Technologies and advanced Frontend Frameworks. If you require a dynamic web application and responsive business website, we guarantee your platform will stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white font-semibold uppercase tracking-widest text-sm"
          >
            What we provide:
          </motion.div>
        </div>

        {/* Content Bottom: Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.bg} p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between h-full min-h-[240px] hover:scale-[1.02] transition-transform duration-300`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${feature.textColor} leading-snug`}>
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
