"use client";

import { useRef } from "react";
import { LazyMotion, domMax, m, useInView } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Activity,
  Cloud,
  Users,
  Headphones,
  CheckCircle2,
  Sparkles,
  Banknote,
  Globe,
  Lock,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Secure & Compliant Architecture",
    description:
      "Our solutions are built with enterprise-grade security and follow industry compliance standards to ensure data protection, fraud prevention, and regulatory adherence.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions for Growing Businesses",
    description:
      "We design flexible and scalable systems that grow with your business, handling increased users, transactions, and services without performance issues.",
  },
  {
    icon: Activity,
    title: "Real-Time Data Processing & Analytics",
    description:
      "Get instant access to real-time data, insights, and reports that help you make smarter business decisions and monitor operations effectively.",
  },
  {
    icon: Cloud,
    title: "API-Driven & Cloud-Ready Systems",
    description:
      "Our platforms are developed with API-first architecture and cloud readiness, enabling seamless third-party integrations and high system availability.",
  },
  {
    icon: Users,
    title: "Experienced Fintech Developers",
    description:
      "Our team consists of skilled fintech experts with hands-on experience in building secure, high-performance financial software solutions.",
  },
  {
    icon: Headphones,
    title: "End-to-End Development & Support",
    description:
      "From planning and development to deployment and ongoing maintenance, we provide complete lifecycle support to ensure long-term success.",
  },
];

const keyBenefits = [
  { icon: Sparkles, text: "Customized Custom Fintech Software Development" },
  { icon: Lock, text: "Secure and Scalable Fintech Platforms" },
  { icon: Banknote, text: "Advanced Digital Banking Software Development" },
  { icon: Shield, text: "Trustable Financial Software Development Solutions" },
  { icon: Users, text: "Experienced Fintech Software Developers India" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const Icon = feature.icon;

  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5,
          },
        },
      }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="relative group"
    >
      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-orange-100/50 overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
        {/* Animated Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200/50 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10">
          {/* Icon Container */}
          <m.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex mb-5 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl blur-md opacity-50" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Icon
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </m.div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {feature.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default function WhyChoose() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const benefitsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" });

  return (
    <LazyMotion features={domMax}>
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <m.div
            ref={headerRef}
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <m.h2
              initial={{ y: 30, opacity: 0 }}
              animate={
                isHeaderInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight px-4"
            >
              Why People Choose Camlenio{" "}
              <span className="relative inline-block mt-1 sm:mt-2">
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Fintech Software Development?
                </span>
              </span>
            </m.h2>

            <m.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-6xl mx-auto text-gray-600 text-sm md:text-base font-sans text-justify leading-relaxed px-4"
            >
              Most fintech businesses choose Camlenio because a reliable technology partner provides professional Fintech Software Development. Our expertise focuses on delivering secure and high-quality fintech applications. We aim to offer creative Fintech Software Solutions that boost businesses to succeed in the digital finance sector.
            </m.p>
          </m.div>

          {/* Features Grid */}
          <m.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 md:mb-24"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </m.div>

          {/* Key Benefits Section */}
          <m.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-gradient-to-br from-orange-50 via-white to-orange-50 border border-orange-200/50 p-8 md:p-12 shadow-sm"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Key{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Benefits
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {keyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isBenefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-orange-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">
                      {benefit.text}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}