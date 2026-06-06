"use client";

import React from "react";
import { Users, Lock, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    icon: Users,
    title: "Patient Management Challenges",
    desc: "Inefficient scheduling, fragmented patient records, and disconnected communication channels result in long waiting times and reduced patient satisfaction.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Lock,
    title: "Critical Data Vulnerability",
    desc: "Healthcare data breaches and compliance failures put patient privacy at risk while exposing medical organizations to heavy legal and financial liabilities.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Settings,
    title: "Fragmented Operations",
    desc: "Disconnected pharmacy, billing, and clinical workflows create severe bottlenecks, increasing manual data entry errors and escalating operational overheads.",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-transparent py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle background overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #f97316 1.5px, transparent 1.5px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section title */}
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Overcome <span className="text-orange-500" style={{
            textShadow:
              "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
          }}> Healthcare Challenges </span>with Advanced Technology
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base font-medium font-sans leading-relaxed">
          Traditional healthcare systems struggle with workflow inefficiencies and data leaks. We design secure, integrated platforms to optimize patient care and clinical operations.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/95 rounded-[2rem] border border-orange-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-start items-start text-left hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] hover:border-orange-500/30 transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative w-full h-48 bg-orange-50/50 overflow-hidden">
                  <Image
                    src={prob.image}
                    alt={prob.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8">
                  {/* Icon Container with subtle animation */}
                  <div className="p-3.5 rounded-2xl bg-orange-50 text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm border border-orange-500/5 inline-flex">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors duration-200">
                    {prob.title}
                  </h3>

                  <p className="mt-4 text-sm text-gray-500 leading-relaxed font-sans font-medium">
                    {prob.desc}
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
