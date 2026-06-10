"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent flex flex-col justify-center">
      {/* Background cyber grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(249, 115, 22, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
      />

      {/* Floating decorative blobs for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
        {/* Left Column (Headline & CTAs) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold border border-orange-500/15 shadow-sm mb-2"
          >
            <Home className="w-4 h-4 animate-pulse" />
            ENTERPRISE PROPERTY TECH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight relative"
          >
            Real Estate <br />
            <span
              className="text-orange-500 relative inline-flex z-20"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582336",
              }}
            >
              Software Development
              {/* SVG underline highlight effect */}
              <motion.svg
                viewBox="0 0 460 34"
                className="absolute left-0 -bottom-3 w-full h-8 -z-10 opacity-70"
                fill="none"
              >
                <motion.path
                  d="M1 20 C120 10, 270 -4, 480 10"
                  stroke="#f97316"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.9,
                  }}
                />
              </motion.svg>
            </span>{" "}
            <br />
            Company in Jaipur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-655 font-medium font-sans leading-relaxed max-w-xl text-left"
          >
            Transform your real estate business with secure, user-friendly digital solutions. Camlenio is a real estate software development company in Jaipur that offers real estate software development services to builders, brokers, property dealers, and real estate enterprises across India. From property listing website development to real estate mobile app development, we build custom platforms that streamline management and improve customer engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={() => router.push("/contact")}
              size="xl"
              className="w-full sm:w-auto shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Visual dashboard display */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          {/* Main Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/15 to-transparent scale-110 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10" />

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD92hkRsiB7APGzFhBlvgUnZi4QwZ0WARXuIq4L7QmildgtglFwDGZUzxoeyLuRgSZkUR4kMh48ge5SLPMzEEZTWfp_KY0gu363i-DbXeZZXt3ZuliYkKA6JPBLrIga6afAWBwg_L1y9hhoQ85xnlf7vyge56xSY3BkXwbw2du_Cc9b2X-Ocd3MaTIxuYCq2WcGeKBgJtNQrP3jxQtMpKjcbh4GGDNPCdbEWgK1VMqmLXxEkBok83ubDWHVy4wzL5KuRWxkJlpzb20"
                alt="SaaS Real Estate Dashboard mockup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
