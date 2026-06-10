"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Headphones, Building2 } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Brain,
    title: "Experienced Development Team",
    desc: "We develop customized software tailored to your business model and working needs.",
  },
  {
    icon: Cpu,
    title: "Latest Technology Stack",
    desc: "We use modern structure and efficient architecture for high-performance applications.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From planning and UI/UX design to utilization and maintenance, we aim to offer you complete support.",
  },
  {
    icon: Building2,
    title: "Industry Focused Solutions",
    desc: "Our solutions are developed specifically for builders, agencies, and property management companies.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 text-white bg-[#0b0f19] border-y border-orange-500/10 relative overflow-hidden">
      {/* Glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Context copy & Image */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Why Choose Us?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Trust the Best Real Estate{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #0b0f19, 4px 6px 0px #ff582336",
              }}
            >
              Software Developers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans font-medium leading-relaxed">
            Camlenio is the top reliable real estate software company in India, offering creative and customized software solutions. Our MLS Software Development Company team understands the challenges of the modern property market and creates platforms that improve efficiency and customer satisfaction.
          </p>

          <div className="relative w-full h-[250px] rounded-3xl overflow-hidden border border-white/10 shadow-lg mt-8">
            <Image
              src="/ServiceDropdown/healthbenefits/health-Benefits.avif"
              alt="Real Estate Development Team"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>

        {/* Right Column: Grid of 4 why cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 border border-orange-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans font-medium">
                    {reason.desc}
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
