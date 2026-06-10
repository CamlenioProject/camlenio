"use client";

import React from "react";
import { Receipt, Cloud, Code, UtensilsCrossed, Hotel, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Receipt,
    title: "Restaurant POS Software Development",
    desc: "Lightning fast billing system with multi-payment support and offline functionality.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Restaurant Management Software",
    desc: "Access your restaurant data from anywhere in the world with secure cloud infrastructure.",
  },
  {
    icon: Code,
    title: "Custom Restaurant Software Development",
    desc: "Unique features built specifically for your business's proprietary workflow needs.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Ordering Software Development",
    desc: "Direct white-labeled website and mobile app ordering to save on aggregator commissions.",
  },
  {
    icon: Hotel,
    title: "Hotel and Restaurant Management Software",
    desc: "Unified platform for managing guest rooms, dining, and banquets in one place.",
  },
  {
    icon: Layers,
    title: "Restaurant Inventory Management Software",
    desc: "Comprehensive tracking and optimization of your restaurant's inventory and supply chain.",
  },
];

export default function Services() {
  return (
    <section className="bg-orange-50/30 py-24 relative overflow-hidden">
      {/* Background decoration lines/blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Services We Offer
            </h2>
            <p className="text-gray-655 font-medium font-sans text-sm sm:text-base mt-4">
              Our complete restaurant software solutions for billing, ordering, inventory, and customer management. Here are our reliable services:
            </p>
          </div>
        </div>

        {/* Services Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.01)] border border-orange-500/5 hover:border-orange-500/20 hover:shadow-[0_25px_50px_rgba(249,115,22,0.06)] transition-all duration-500 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-8 border border-orange-500/15 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
