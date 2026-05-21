"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiLayout, FiSearch, FiCode, FiActivity, FiZap, FiSmartphone, FiShield, FiTrendingUp, FiCpu } from "react-icons/fi";

const approach = [
  {
    title: "Requirement Analysis",
    desc: "Understanding users and your business requirements.",
    icon: <FiSearch />,
    tag: "Phase 01"
  },
  {
    title: "Design & Prototyping",
    desc: "Making engaging UI/UX Designs.",
    icon: <FiLayout />,
    tag: "Phase 02"
  },
  {
    title: "Development",
    desc: "Implementing powerful Frontend Web Development Solutions.",
    icon: <FiCode />,
    tag: "Phase 03"
  },
  {
    title: "Testing & Optimization",
    desc: "Guaranteeing performance and responsiveness.",
    icon: <FiActivity />,
    tag: "Phase 04"
  },
  {
    title: "Deployment & Support",
    desc: "Easy launch with ongoing support.",
    icon: <FiZap />,
    tag: "Phase 05"
  }
];

const benefits = [
  {
    title: "Cross browser compatibility",
    icon: <FiCpu className="text-orange-500" />,
    desc: "Flawless performance across Chrome, Safari, Firefox & more."
  },
  {
    title: "Mobile-ready interfaces",
    icon: <FiSmartphone className="text-orange-500" />,
    desc: "Pixel-perfect layouts for smartphones and tablets."
  },
  {
    title: "Improved user engagement",
    icon: <FiTrendingUp className="text-orange-500" />,
    desc: "Modern UI patterns that convert visitors into customers."
  },
  {
    title: "Fast loading speed",
    icon: <FiZap className="text-orange-500" />,
    desc: "Lightning-fast interactions with optimized frontend code."
  },
  {
    title: "SEO-friendly structure",
    icon: <FiShield className="text-orange-500" />,
    desc: "Semantic HTML built for search engine visibility."
  }
];

const cardTransition = {
  type: "spring" as const,
  stiffness: 70,
  damping: 20,
  mass: 1
};

export default function FrontendApproach() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[0.95]"
            >
              Our Frontend Development <br />
              <span className="text-orange-500" style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}>Approach & Benefits</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-lg border-l border-zinc-300 pl-8 leading-relaxed"
          >
            We follow a strategic approach to guarantee a successful project delivery for every digital product.
          </motion.p>
        </div>

        {/* Part 1: Horizontal Approach Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-32">
          {approach.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                ...cardTransition,
                delay: idx * 0.15
              }}
              whileHover={{
                y: -12,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
              }}
              className="relative p-8 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] transition-all duration-500 group"
            >
              <div className="text-orange-500 text-3xl mb-12 group-hover:scale-110 transition-transform duration-700 ease-out">
                {item.icon}
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connector line (Desktop only) */}
              {idx < approach.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-100" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Part 2: Benefits Section */}
        <div className="relative">
          <div className="max-w-2xl mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
            >
              Benefits of Our Services
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg"
            >
              Our team guarantees your websites offer a seamless experience across all devices and platforms.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ...cardTransition,
                  delay: idx * 0.1
                }}
                className="flex items-start gap-6 p-8 rounded-[2rem] bg-zinc-50/50 border border-zinc-100 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-zinc-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Unified Call-to-Action Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...cardTransition, delay: 0.6 }}
              className="flex flex-col p-8 rounded-[2rem] bg-zinc-50/50 border border-zinc-100 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-orange-500 group-hover:scale-110 transition-transform duration-500">
                  <FiCheck />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-zinc-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                    Seamless Performance
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Optimized for global performance and scale.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
