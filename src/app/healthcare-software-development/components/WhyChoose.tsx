"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    num: "01",
    title: "Experienced Healthcare Software Developers",
    desc: "Our experts understand healthcare workflows and build efficient digital solutions tailored to industry requirements.",
  },
  {
    num: "02",
    title: "Customized Development Method",
    desc: "We offer custom healthcare software development services depending on your business model and operational requirements.",
  },
  {
    num: "03",
    title: "Secure and Scalable Technology",
    desc: "As a reliable healthcare software development company in Jaipur, we use advanced technologies to create adaptive systems.",
  },
  {
    num: "04",
    title: "Affordable Development Solutions",
    desc: "Get high-quality healthcare development services at cost-effective pricing for enterprises and startups.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Why Partner With Us
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Why Choose Camlenio for Healthcare Software?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base font-medium font-sans leading-relaxed">
            Camlenio is recognized as one of the top healthcare software development companies in Jaipur for providing creative, secure, and results-driven healthcare solutions.
          </p>
        </div>

        {/* Split layout: Image on Left, 4 reasons list on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Team Image (Stretched to match right column height) */}
          <div className="lg:col-span-5 relative w-full min-h-[450px] lg:min-h-0 flex flex-col justify-stretch">
            {/* Trust statistic badge overlay */}
            <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-500/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                50+
              </div>
              <div className="text-left text-xs font-bold text-gray-800 leading-tight">
                Healthcare Projects<br />
                <span className="text-[10px] text-gray-400 font-normal">Successfully Delivered</span>
              </div>
            </div>

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-orange-500/10 shadow-[0_20px_40px_rgba(249,115,22,0.06)] bg-white/50 flex-grow">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
                alt="Camlenio Healthcare Software Expert Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Reasons List */}
          <div className="lg:col-span-7 space-y-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white/95 p-6 rounded-[2rem] border border-orange-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(249,115,22,0.06)] hover:border-b-2 hover:border-b-orange-500 transition-all duration-300 flex items-start gap-6 group"
              >
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.25)] group-hover:scale-105 transition-transform duration-300">
                  {reason.num}
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed font-sans font-medium">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
