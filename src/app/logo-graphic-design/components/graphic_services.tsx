"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GraphicServices() {
  return (
    <section
      id="services-intro"
      className="relative text-gray-900 px-8 pb-20 md:px-16 overflow-hidden bg-transparent"
      style={{ transform: "translateZ(0)" }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] flex items-center justify-center"
        >
          <motion.div
            style={{ transform: "translateZ(0)", willChange: "transform" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src="/ServiceDropdown/logo&graphicdesign/graphic-design-image.webp"
              alt="Camlenio Professional Graphic Design Services in Jaipur"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Content panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{ transform: "translateZ(0)", willChange: "transform" }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Your Professional Complete <br />
            <span
              className="text-orange-500 inline-block mt-1"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336"
              }}
            >
              Graphic Design Services
            </span>{" "}
            in Jaipur
          </h2>

          <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed">
            A logo is more than a symbol, it is the identity of your business. We specialize in designing effective custom logos that make a strong impression. We understand market trends, colors, and branding methods to offer logos that connect with your customers. Our expert logo designers in Jaipur focus on creating professional product logos tailored for websites, social media, packaging, and marketing materials.
          </p>

          <p className="text-sm md:text-base font-sans text-justify text-slate-500 leading-relaxed">
            We offer comprehensive graphic design services in Jaipur, delivering creative solutions for businesses across industries. Our design services help brands improve customer trust and engagement.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
