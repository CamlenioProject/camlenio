"use client";

import React from "react";
import { ShieldCheck, Settings, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/Button";

const trustFactors = [
  {
    icon: ShieldCheck,
    title: "Secure Architecture & Compliance",
    desc: "Built with industry-grade security standards, guaranteeing fully secure PAN processing and data protection.",
  },
  {
    icon: Settings,
    title: "Creative & Technical Expertise",
    desc: "Camlenio merges creativity, technical expertise, and customer focused development to deliver high-quality solutions.",
  },
  {
    icon: Zap,
    title: "Reliable Platforms for Growth",
    desc: "Our team understands the growing fintech market and develops reliable platforms tailored for startups and enterprises.",
  },
  {
    icon: Headphones,
    title: "Long-Term Technical Support",
    desc: "We guarantee long-term technical support with regular updates, security patches, and dedicated assistance from our expert teams.",
  },
];

export default function Trust() {
  const router = useRouter();

  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      {/* Soft glowing blur blobs for light theme */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-100/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-100/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Context copy & Stats */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
              Why Partner With Us?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-gray-900">
              Why Do Businesses{" "}
              <span
                className="text-orange-500 relative inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                }}
              >
                Like Us?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed">
              Camlenio merges creativity, technical expertise, and customer focused development to deliver high-quality solutions. We guarantee a secure architecture and long-term technical support. Our team understands the growing fintech market and develops reliable platforms tailored for startups and enterprises. It makes us the preferred PAN Card software company in Jaipur for businesses looking for advanced digital solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 border border-orange-500/10 p-6 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-orange-500 leading-none group-hover:scale-105 transition-transform duration-300">500+</div>
              <div className="text-[10px] font-extrabold text-gray-500 mt-3 tracking-wider uppercase font-sans">Fintech Portals</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/80 border border-orange-500/10 p-6 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-orange-500 leading-none group-hover:scale-105 transition-transform duration-300">99.9%</div>
              <div className="text-[10px] font-extrabold text-gray-500 mt-3 tracking-wider uppercase font-sans">Uptime Ratio</div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Grid of 4 trust cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {trustFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative bg-white/70 backdrop-blur-sm p-8 rounded-[2.2rem_0.6rem_2.2rem_0.6rem] border border-orange-500/10 hover:border-orange-500/35 hover:bg-white/95 shadow-sm hover:shadow-[0_22px_45px_rgba(249,115,22,0.08)] transition-all duration-500 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px_4px_14px_4px] bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 border border-orange-500/15 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-medium">
                    {factor.desc}
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
