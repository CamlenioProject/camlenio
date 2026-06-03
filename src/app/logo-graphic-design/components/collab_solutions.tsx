"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function CollabSolutions() {
  const router = useRouter();

  return (
    <section
      id="collab-section"
      className="relative text-gray-900 px-8 py-24 md:px-16 overflow-hidden  scroll-mt-20"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: High-Fidelity Copy panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Why Do People Like to <br />
            <span
              className="text-orange-500 inline-block mt-1"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
              }}
            >
              Collab With Us?
            </span>
          </h2>

          <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed font-semibold italic">
            Visual excellence built on reliability, trust, and business-focused results.
          </p>

          <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed">
            Our services are a reliable name among logo designers in Jaipur, providing creative branding, social media creatives, and digital graphic solutions.
          </p>

          <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed">
            We help businesses build powerful brand identities through customized, visually impactful designs that enhance consumer engagement and business growth. We also provide web development services to meet customer requirements.
          </p>
        </motion.div>

        {/* Right Column: 3D Visual Asset Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/3] max-w-xl mx-auto flex items-center justify-center"
        >
          {/* Background glowing bubble */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-500/5 blur-[80px] rounded-full -z-10 animate-pulse pointer-events-none" />

          <motion.div
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
            className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-100/80 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] bg-white"
          >
            <Image
              src="/ServiceDropdown/logo&graphicdesign/graphicdesign.webp"
              alt="Dynamic Graphic Design Creative Collaboration Showcase"
              fill
              className="object-cover rounded-[2rem]"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
