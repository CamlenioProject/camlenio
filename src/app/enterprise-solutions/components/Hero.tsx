"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden ">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full pt-30 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Scale Your Business with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Intelligent Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-500 text-lg sm:text-xl mb-10 max-w-2xl font-medium leading-relaxed"
          >
            Empowering enterprises with robust, secure, and automated infrastructure designed for high performance and unmatched reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button onClick={() => router.push("/contact")} size="xl" className="w-full sm:w-auto shadow-lg shadow-orange-500/20 group hover:shadow-orange-500/30 transition-all duration-300">
              Get Started
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* Visual Mockup/Dashboard Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-16 sm:mt-24 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200/60 bg-white/40 backdrop-blur-xl shadow-2xl shadow-gray-200/50 overflow-hidden p-2 sm:p-3">
            <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm relative">
              <Image
                src="/ServiceDropdown/enterprisesolutions/enterprise-solutions-hero.webp"
                alt="Enterprise Solutions Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
