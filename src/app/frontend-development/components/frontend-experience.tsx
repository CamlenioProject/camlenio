"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiTarget } from "react-icons/fi";

const values = [
  {
    title: "High Performance",
    desc: "Blended speed and efficiency for zero-latency interactions.",
    icon: <FiZap className="text-orange-500" />,
  },
  {
    title: "Business Focused",
    desc: "Responsive solutions customized to your specific objectives.",
    icon: <FiTarget className="text-orange-500" />,
  },
];

export default function FrontendExperience() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/10 rounded-full blur-[120px] -mr-40 -mt-40 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/10 rounded-full blur-[100px] -ml-20 -mb-20 opacity-30" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1C20] leading-[1.1] tracking-tight">
                Build Digital Experiences With <br />
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                  }}
                >Experts Frontend</span> <br />
                Web Development
              </h2>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                Your website should make a strong first impression of your brand in a digital environment.
                Camlenio specializes in Frontend Web Development, which blends performance and user experience
                to create visually appealing, highly functional websites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {values.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-lg shadow-orange-100 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Clean High-End Visual (No Bento Cards) */}
          <div className="flex-1 relative w-full max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Development Workspace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1C20]/40 via-transparent to-transparent" />

              {/* Subtle Decorative Badge */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Optimized For</div>
                <div className="text-lg font-bold">Conversion & Scale</div>
              </div>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-500/10 rounded-[3rem] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
