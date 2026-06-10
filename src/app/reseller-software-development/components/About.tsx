"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/60 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Custom Reseller Software{" "}
              <span
                className="text-orange-500 relative inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Development Solution
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-1 bg-orange-500 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-sm sm:text-base text-gray-655 font-medium leading-relaxed"
            >
              <p>
                Camlenio is a top reseller Software Development Company providing customized digital solutions for businesses that want to manage dealers, agents, and resellers through a single platform. Our smart and scalable systems are developed to enhance workflow automation, increase operational control, and enhance customer management.
              </p>
              <p>
                We specialize in advanced SaaS reseller software, multiple software, and fully customized reseller portals for enterprises, startups, and growing businesses worldwide. Whether you require recharge reseller software, travel reseller software, or a complete B2B ecosystem. Our development team creates solutions customized to your B2B reseller software goals.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-md aspect-[4/3] border-[6px] border-white/80 relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Dealer and Reseller Team Collaboration"
                fill
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
