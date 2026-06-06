"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Zap,
  Database,
  TrendingUp,
  FileSpreadsheet,
  Sliders,
  ArrowUpRight,
} from "lucide-react";
import clsx from "clsx";

export default function BenefitsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const benefits = [
    {
      title: "Real-Time Inventory & Stock Management",
      description: "Keep track of item counts, low stock alerts, and automated reorder points seamlessly as transactions clear.",
      icon: <Boxes className="w-5 h-5 text-white" />,
      colorClass: "bg-orange-50/60 border-orange-100/60 hover:bg-orange-50",
      iconBg: "bg-orange-500",
      accentColor: "text-orange-500",
    },
    {
      title: "Faster Billing Process with POS Integration",
      description: "Speed up retail transactions, register barcodes, and print layouts with dynamic cash register terminals.",
      icon: <Zap className="w-5 h-5 text-white" />,
      colorClass: "bg-blue-50/60 border-blue-100/60 hover:bg-blue-50",
      iconBg: "bg-blue-500",
      accentColor: "text-blue-500",
    },
    {
      title: "Secure Cloud Access & Data Backup",
      description: "Access inventory, analytics, and customer profiles securely on any device with end-to-end encrypted backup systems.",
      icon: <Database className="w-5 h-5 text-white" />,
      colorClass: "bg-emerald-50/60 border-emerald-100/60 hover:bg-emerald-50",
      iconBg: "bg-emerald-500",
      accentColor: "text-emerald-500",
    },
    {
      title: "Easy Payment Tracking & Report Generation",
      description: "Instantly create reports on sales volume, collected taxes, pending dues, and track payment receipts automatically.",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      colorClass: "bg-rose-50/60 border-rose-100/60 hover:bg-rose-50",
      iconBg: "bg-rose-500",
      accentColor: "text-rose-500",
    },
    {
      title: "Reduced Manual Errors & Paperwork",
      description: "Eliminate arithmetic flaws and reduce clutter with automated digital invoices, tax deductions, and reminders.",
      icon: <FileSpreadsheet className="w-5 h-5 text-white" />,
      colorClass: "bg-purple-50/60 border-purple-100/60 hover:bg-purple-50",
      iconBg: "bg-purple-500",
      accentColor: "text-purple-500",
    },
    {
      title: "Custom Modules For Business Industries",
      description: "Adapts perfectly to pharmacies, retail outlets, restaurants, medical clinics, and service industries alike.",
      icon: <Sliders className="w-5 h-5 text-white" />,
      colorClass: "bg-cyan-50/60 border-cyan-100/60 hover:bg-cyan-50",
      iconBg: "bg-cyan-500",
      accentColor: "text-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <div className="w-full relative z-10 bg-transparent py-16 sm:py-24">
      <section className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Title and Intro side-by-side style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 text-left">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Benefits of Our <br />
              <span className="text-orange-500">Billing Software</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
              We develop reliable software to enhance business efficiency, helping companies manage sales, inventory, taxes, and customer records from a platform. Here are the benefits of using billing software
            </p>
          </div>
        </div>

        {/* 3x2 Grid of pastel-colored cards */}
        <motion.div
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : "visible"}
          whileInView={isMounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={isMounted ? itemVariants : undefined}
              whileHover={{ y: -5 }}
              className={clsx(
                "p-8 rounded-[2.25rem] border backdrop-blur-md shadow-sm transition-all duration-300 flex flex-col text-left justify-between min-h-[250px]",
                benefit.colorClass
              )}
            >
              <div className="space-y-4">
                {/* Circular Icon */}
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center shadow-md", benefit.iconBg)}>
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed text-justify">
                  {benefit.description}
                </p>
              </div>

              {/* Upward arrow at the bottom corner */}
              <div className="pt-6 flex justify-end">
                <div className={clsx("w-8 h-8 rounded-full bg-white/80 border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform", benefit.accentColor)}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
