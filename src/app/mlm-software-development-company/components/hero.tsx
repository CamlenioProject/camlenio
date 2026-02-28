"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-12 w-full items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* soft background accent */}
            <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-orange-200 opacity-30 blur-3xl" />

            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-200/50 px-4 py-1 text-xs font-medium text-orange-600 mb-5">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Trusted MLM Software Partner
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              MLM Software Development Company
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              A trusted MLM software development company delivering secure,
              scalable, and high-performance solutions for direct selling
              businesses.
            </p>

            {/* feature fillers */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Secure Architecture
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Scalable Systems
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                24×7 Support
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] flex justify-center items-center">
            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/ServiceDropdown/mlmsoftware/mlm-hero-1.png"
                alt="MLM Software Development Illustration"
                width={360}
                height={520}
                priority
                className="rounded-3xl object-cover"
              />
            </motion.div>

            {/* FLOATING IMAGE 1 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.3, delay: 0.15 },
                y: { duration: 5, ease: "easeInOut", repeat: Infinity },
              }}
              className="absolute top-[30%] right-[16%] z-10 hidden sm:block"
            >
              <Image
                src="/ServiceDropdown/mlmsoftware/mlm-hero-2.png"
                alt="MLM Dashboard Preview"
                width={120}
                height={260}
                className="rounded-2xl"
              />
            </motion.div>

            {/* FLOATING IMAGE 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 14, 0] }}
              transition={{
                opacity: { duration: 0.3, delay: 0.3 },
                y: { duration: 6, ease: "easeInOut", repeat: Infinity },
              }}
              className="absolute top-[6%] right-[38%] z-10 hidden sm:block"
            >
              <Image
                src="/ServiceDropdown/mlmsoftware/mlm-hero-3.png"
                alt="MLM Reports Preview"
                width={120}
                height={240}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
