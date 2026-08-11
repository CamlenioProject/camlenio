"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomSolutions() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-[1300px] mx-auto relative overflow-hidden bg-transparent">
      {/* Ambient background blur blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Split-Screen Open Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Headlines & Paragraphs */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight font-sans"
            >
              Custom Software{" "}
              <span className="inline-block">
                Development for{" "}
                <span
                  className="text-orange-500 relative inline-block"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                  }}
                >
                  UPI Cash Point
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-sm sm:text-base text-gray-650 font-medium font-sans leading-relaxed"
          >
            <p>
              Looking for a UPI Cash Point Software Development Company in Jaipur? Camlenio provides customizable software solutions to build or expand your digital financial service network. We offer solutions according to your business requirements and operations.
            </p>
            <p>
              Whether you need a UPI Cash Point Solution in Jaipur or a reliable software development company in Delhi, Camlenio helps you build a flexible and business-ready platform. Choose us for a secure and easy-to-manage UPI Cash Point solution designed to help your fintech business grow.
            </p>
          </motion.div>
        </div>

        {/* Right Column: QR Scan UPI Cash Withdrawal Illustration */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] group"
          >
            {/* Decorative ambient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 bg-white shadow-2xl shadow-orange-500/10">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/assets/upi-cash-point/upi-qr-withdrawal.png"
                  alt="UPI QR Scan Cash Withdrawal Concept Illustration"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

