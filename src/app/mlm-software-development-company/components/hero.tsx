"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

export default function HeroSection() {
  const router = useRouter();
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Scalable & Secure{" "}<br />
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                MLM Software {" "}
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl text-justify">
              Camlenio is a reliable  MLM Software Development Company in Jaipur delivering smart and customizable solutions for modern direct selling businesses. We build an advanced MLM software with automation, real-time analytics, secure payment integration, and mobile-friendly features to help your network marketing business grow faster.
            </p>

            {/* feature fillers */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Secure Architecture
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Real-Time Analytics
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Mobile Friendly
              </div>
            </div>

            <div className="mt-8">
              <Button
                size="xl"
                className="w-full sm:w-auto"
                onClick={() => router.push('/contact')}
              >
                Get Started
              </Button>
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
                src="/ServiceDropdown/mlmsoftware/mlm-hero-1.webp"
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
