"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  DollarSign,
  Zap,
  Headphones,
  TrendingUp,
  ShoppingCart,
  Bitcoin,
  Heart,
  GraduationCap,
  Building2,
  Users,
  ClipboardCheck,
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  Wrench,
  ClipboardList,
  Layers,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function MLMWhyChooseProcess() {
  const whyChooseItems = [
    { icon: Award, text: "Experienced MLM Software Developers" },
    { icon: CheckCircle, text: "100% Custom-Built Solutions" },
    { icon: DollarSign, text: "Transparent Pricing" },
    { icon: Zap, text: "Fast Deployment" },
    { icon: Headphones, text: "Dedicated Support & Maintenance" },
    { icon: TrendingUp, text: "Scalable for Future Growth" },
  ];

  const industries = [
    { icon: Users, name: "Network Marketing Companies" },
    { icon: ShoppingCart, name: "Direct Selling Businesses" },
    { icon: Building2, name: "E-commerce MLM Platforms" },
    { icon: Bitcoin, name: "Crypto & Fintech MLM" },
    { icon: Heart, name: "Health & Wellness MLM" },
    { icon: GraduationCap, name: "Education & Training MLM" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      icon: ClipboardList,
      description: "We analyze your business needs and define project scope",
    },
    {
      number: "02",
      title: "Design & Planning",
      icon: Layers,
      description: "Creating detailed architecture and user experience design",
    },
    {
      number: "03",
      title: "Development",
      icon: Code,
      description: "Building your MLM platform with cutting-edge technology",
    },
    {
      number: "04",
      title: "Testing & QA",
      icon: TestTube,
      description: "Rigorous testing to ensure quality and reliability",
    },
    {
      number: "05",
      title: "Deployment",
      icon: Rocket,
      description: "Launching your platform with seamless integration",
    },
    {
      number: "06",
      title: "Support",
      icon: Headphones,
      description: "24/7 dedicated support for your growing business",
    },
    {
      number: "07",
      title: "Optimization",
      icon: TrendingUp,
      description: "Continuous improvements and performance enhancements",
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {/* WHY CHOOSE */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose Camlenio for MLM{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Software Development
            </span>
          </motion.h2>

          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
            We don&apos;t just build software — we build MLM business
            ecosystems.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4 sm:gap-6 lg:gap-8
  "
        >
          {whyChooseItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -4 }}
                className="
          group
          flex items-start gap-4
          bg-orange-50
          border border-gray-100
          rounded-2xl
          p-5 sm:p-6
          shadow-sm hover:shadow-md
          transition-all duration-300
        "
              >
                {/* Icon */}
                <div
                  className="
            w-12 h-12 shrink-0
            rounded-xl
            bg-orange-500/10
            flex items-center justify-center
            text-orange-600
            transition-transform duration-300
            group-hover:scale-110
          "
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* INDUSTRIES */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
            >
              Industries{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                We Serve
              </span>
            </motion.h2>

            <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
              Tailored MLM solutions across diverse business sectors
            </p>
          </div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {industries.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-orange-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* label */}
                  <p className="relative z-10 mt-3 text-sm font-semibold text-gray-800">
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* MLM DEVELOPMENT PROCESS – NEW DESIGN */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 lg:mb-12"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-bold tracking-wider text-orange-600 bg-orange-50 px-4 py-2 rounded-full mb-4 uppercase"
              >
                How We Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Our MLM Development{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Process
                </span>
              </motion.h2>
              <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
                A systematic approach to building your perfect MLM solution with
                precision and excellence
              </p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Animated connecting line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-orange-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 origin-left"
                />
              </div>

              <div className="grid grid-cols-7 gap-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                      className="relative flex flex-col items-center group"
                    >
                      {/* Icon Circle with enhanced effects */}
                      <motion.div
                        whileHover={{ scale: 1, y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-white to-orange-50 border-3 border-orange-400 shadow-xl flex items-center justify-center cursor-pointer overflow-hidden"
                      >
                        {/* Animated background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full" />

                        {/* Pulse effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.3, 1.3],
                            opacity: [0.5, 0, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 0.5,
                          }}
                        />

                        <Icon
                          className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300 relative z-10 group-hover:scale-110"
                          strokeWidth={2}
                        />
                      </motion.div>

                      {/* Step Number Badge */}
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="mt-6 text-xs font-bold tracking-wider text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-1.5 rounded-full shadow-sm group-hover:shadow-md transition-shadow"
                      >
                        {step.number}
                      </motion.span>

                      {/* Title */}
                      <p className="mt-4 text-sm font-bold text-gray-800 text-center leading-tight px-2 group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </p>

                      {/* Description - appears on hover */}
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-xs text-gray-600 text-center leading-relaxed px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Tablet/Mobile Timeline */}
            <div className="lg:hidden relative max-w-2xl mx-auto">
              {/* Vertical animated line */}
              <div className="absolute left-9 top-0 bottom-0 w-1 bg-orange-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400 origin-top h-full"
                />
              </div>

              <div className="space-y-12">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="relative flex items-start gap-6 group"
                    >
                      {/* Icon Circle */}
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-white to-orange-50 border-3 border-orange-400 shadow-xl flex items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full" />

                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-orange-400"
                          animate={{
                            scale: [1, 1.2],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                          }}
                        />

                        <Icon
                          className="w-9 h-9 text-orange-600 group-hover:text-white transition-colors duration-300 relative z-10"
                          strokeWidth={2}
                        />
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex-1 pt-2 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-orange-100"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block text-xs font-bold tracking-wider text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1.5 rounded-full">
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-10 py-4 rounded-full bg-orange-500 text-white text-sm md:text-base font-medium hover:bg-orange-600 transition">
            Start Your MLM Journey Today
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
