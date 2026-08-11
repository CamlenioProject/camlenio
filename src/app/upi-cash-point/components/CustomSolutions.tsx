"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, MapPin, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function CustomSolutions() {
  const router = useRouter();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden bg-transparent">
      {/* Ambient background blur blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Split-Screen Open Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        
        {/* Left Column: Headlines, Paragraphs & Main Action */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white shadow-sm">
              Custom Fintech Solutions
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight font-sans"
            >
              Custom Software Development for{" "}
              <span
                className="text-orange-500 relative inline-block"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                }}
              >
                UPI Cash Point
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

        {/* Right Column: Visual Badges & Interactive CTA Container */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Visual Badge 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-orange-500/15 shadow-sm flex items-center gap-4 text-left hover:border-orange-400 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 font-sans">Jaipur &amp; Delhi Presence</h4>
              <p className="text-xs text-gray-500 font-medium">Customizable software development across India</p>
            </div>
          </motion.div>

          {/* Visual Badge 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-orange-500/15 shadow-sm flex items-center gap-4 text-left hover:border-orange-400 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 font-sans">Business-Ready Platform</h4>
              <p className="text-xs text-gray-500 font-medium">Secure and easy-to-manage UPI solutions</p>
            </div>
          </motion.div>

          {/* Call to Action Container using Prebuilt Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 p-8 rounded-3xl text-white text-left space-y-5 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md">
              <Rocket className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-bold text-white font-sans leading-snug">
              Ready to build your UPI Cash Point Platform?
            </h4>

            <Button
              onClick={() => router.push("/contact")}
              size="xl"
              className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold border-none shadow-lg cursor-pointer"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
