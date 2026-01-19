"use client";

import React, { useState } from "react";
import {
  Brain,
  Boxes,
  CreditCard,
  ShoppingCart,
  Share2,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { LazyMotion, domMax, motion as m } from "framer-motion";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Brain className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "AI-Powered Product Recommendations",
    description:
      "Intelligent recommendation engines analyze user behavior, purchase history, and browsing patterns to deliver personalized product suggestions that boost engagement, conversions, and average order value.",
  },
  {
    icon: <Boxes className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Smart Inventory & Order Management",
    description:
      "Real-time inventory tracking across multiple warehouses and sales channels with automated order processing to reduce errors, prevent stockouts, and ensure faster fulfillment.",
  },
  {
    icon: <CreditCard className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Secure Multi-Payment Integration",
    description:
      "Seamless integration of UPI, cards, wallets, net banking, COD, and international gateways with advanced encryption and compliance for secure, frictionless transactions.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Optimized Checkout & Cart Recovery",
    description:
      "Fast, frictionless checkout experiences with one-page checkout, auto-filled data, abandoned cart recovery, smart coupons, and dynamic pricing to maximize completed purchases.",
  },
  {
    icon: <Share2 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Omnichannel Selling & Automation",
    description:
      "Sell across web, mobile apps, social platforms, and marketplaces from a unified system with automated emails, push notifications, and marketing workflows.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Advanced Analytics & Admin Dashboard",
    description:
      "Real-time dashboards provide visibility into sales, customer behavior, inventory, and revenue, with custom reports that support data-driven decisions and scalable growth.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WeDeliver() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <LazyMotion features={domMax}>
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <m.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Advanced Ecommerce Features{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              We Deliver
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-3"
          >
            Our ecommerce solutions include the latest capabilities to help you
            stay competitive:
          </m.p>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 max-w-7xl mx-auto"
          >
            {steps.map((step, index) => (
              <m.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 8, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <div className="relative h-full bg-[#FEF3E6] rounded-3xl p-6 sm:p-7 shadow-lg border border-orange-100 overflow-hidden flex flex-col">
                  <div className="absolute -top-2 -left-2 w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  <m.div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg ml-auto"
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.1, rotate: 6 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    {step.icon}
                  </m.div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-left">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-sm leading-relaxed font-sans text-justify">
                      {step.description}
                    </p>
                  </div>

                  <m.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
