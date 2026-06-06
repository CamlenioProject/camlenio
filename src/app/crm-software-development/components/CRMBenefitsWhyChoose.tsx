"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Database,
  BarChart3,
  Puzzle,
  Award,
  Sliders,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export default function CRMBenefitsWhyChoose() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Management",
      description:
        "Keep track of every lead and make sure they move smoothly through the sales funnel.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automate Sales",
      description:
        "Remove repetitive tasks and let your sales team focus on selling.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Centralized Database",
      description:
        "Access client information, chat logs, and files in one secure place.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description:
        "Make smart decisions using real-time reports and sales analytics.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Integration Support",
      description:
        "Connect your CRM software with email, SMS, and other business apps.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const whyChoose = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Team",
      description:
        "Skilled developers with years of experience building CRM systems.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Sliders className="w-6 h-6" />,
      title: "Customized Features",
      description:
        "Create features designed specifically for your sales and support teams.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description:
        "CRM software that grows as your client base and business scale.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Modern Security",
      description:
        "Multi-level security to protect sensitive customer data and information.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dedicated Support",
      description:
        "Regular updates, maintenance, and support whenever you need it.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* BENEFITS SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Benefits of Using{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Customer Relationship Management
              </span>
              Software
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 text-sm md:text-base font-sans"
            >
              Managing customers and sales data can be difficult as your business grows. Custom CRM software simplifies operations and helps your business grow. Here are some of the key benefits:
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className="bg-orange-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 shrink-0 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center text-white shadow-sm`}
                  >
                    {benefit.icon}
                  </motion.div>

                  {/* CONTENT */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-left font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="space-y-12 pt-12 border-t border-orange-100">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Why{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Camlenio
              </span>{" "}
              Stands Out?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 text-sm md:text-base font-sans"
            >
              We build customized CRM software tailored to your specific operations.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className="bg-orange-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 shrink-0 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-sm`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* CONTENT */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-left font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
