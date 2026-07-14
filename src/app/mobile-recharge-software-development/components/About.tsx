"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/Button";

export default function About() {
  const router = useRouter();

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background soft blur */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white/60 backdrop-blur-md rounded-[4rem_1.5rem_4rem_1.5rem] p-8 md:p-16 border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
                Modern Fintech Platform
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight"
              >
                Mobile Recharge Services{" "}
                <span
                  className="text-orange-500 relative inline-block z-10"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                  }}
                >
                  Modern Fintech Businesses
                </span>
              </motion.h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-sm sm:text-base text-gray-600 font-medium font-sans leading-relaxed"
            >
              <p>
                In the fastest-growing digital environment, mobile recharge services have become an important part of the fintech ecosystem. Camlenio offers a reliable fintech platform that is developed for serving fintech businesses. As a top app development company in Jaipur, we develop user-friendly applications that support mobile recharge with real-time processing.
              </p>
              <p>
                Our development team builds custom fintech software that helps businesses manage transactions efficiently while providing customers with a smooth recharge experience. We focus on secure payment integration, easy dashboard management, and high-speed APIs to ensure uninterrupted service. If you require a startup or complete B2B fintech software development solution, we offer a customized technology solution tailored to your business needs.
              </p>
            </motion.div>

            {/* Button to redirect to contact page */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2"
            >
              <Button
                onClick={() => router.push("/contact")}
                variant="default"
                size="xl"
                className="shadow-md"
              >
                <span>Request Recharge Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-5 relative group cursor-pointer w-full flex justify-center">

            {/* Inner frame containing image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden shadow-xl border border-orange-500/10"
              style={{
                borderRadius: "80px 20px 80px 20px",
              }}
            >
              <Image
                src="/assets/mobile-recharge/mobile-rechage-img2.webp"
                alt="Mobile Recharge Fintech Platform"
                fill
                className="object-cover grayscale-[0.15] group-hover:grayscale-[0.02] group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              {/* Scanning Line overlay */}
              <motion.div
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_15px_#f97316] z-20 pointer-events-none"
              />
            </motion.div>

            {/* Back Decor Box */}
            <div
              className="absolute -inset-2 -z-10 border-2 border-dashed border-orange-500/20 max-w-[420px] w-full aspect-[4/5] pointer-events-none"
              style={{
                borderRadius: "86px 26px 86px 26px",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
