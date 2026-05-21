"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaShieldHalved } from "react-icons/fa6";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

const FloatingBubble = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -15, 0],
    }}
    className={`absolute z-30 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-xl flex items-center gap-3 ${className}`}
  >
    {children}
  </motion.div>
);

export default function WebDevHero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-20">

          {/* Text Column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8"
            >
              Build a Custom Web Development <br className="hidden sm:block" />
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                }}
              >With Camlenio</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 text-justify"
            >
              In today’s technology world, businesses require more than a basic website as they need customized digital solutions, which drive engagement, improve performance, and help long-term growth. Camlenio provides high-quality custom web development services, which are designed to meet the essential needs of modern businesses across industries.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <Button onClick={() => router.push("/contact")} size="xl" className="w-full sm:w-auto">
                Start Your Project
                <FaArrowRight className="text-white text-sm" />
              </Button>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 mt-12 lg:mt-0">
            <div className="relative w-full max-w-2xl mx-auto">

              {/* Floating Bubbles Cluster - Hidden on small mobile to avoid overflow */}
              <div className="hidden sm:block">
                <FloatingBubble className="-left-[5%] md:-left-[10%] top-[10%]" delay={0.2}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    <FaCode className="text-sm md:text-base" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Expertise</p>
                    <h4 className="text-xs md:text-sm font-bold text-gray-800">Custom UI/UX</h4>
                  </div>
                </FloatingBubble>

                <FloatingBubble className="-right-[5%] md:-right-[10%] top-[45%]" delay={0.5}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <FaRocket className="text-sm md:text-base" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Performance</p>
                    <h4 className="text-xs md:text-sm font-bold text-gray-800">Scalable Architecture</h4>
                  </div>
                </FloatingBubble>

                <FloatingBubble className="-left-[5%] bottom-[15%]" delay={0.8}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <FaShieldHalved className="text-sm md:text-base" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Security</p>
                    <h4 className="text-xs md:text-sm font-bold text-gray-800">Enterprise Ready</h4>
                  </div>
                </FloatingBubble>
              </div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20"
              >
                <Image
                  src="/ServiceDropdown/webdevpage/webdev1.webp"
                  alt="Web Development Solutions"
                  width={1200}
                  height={800}
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl"
                  priority
                />
              </motion.div>

              {/* Background Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-orange-100/40 blur-[60px] md:blur-[100px] rounded-full z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
