"use client";

import React from "react";
import { Users, Globe, Smartphone, Briefcase, Layers, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "Customer Reseller Portal",
    desc: "Tailored portal for resellers to manage their agents, view orders, and coordinate margins.",
  },
  {
    icon: Globe,
    title: "White Label Reseller Software",
    desc: "Fully customized white-label B2B setups ready to be deployed under your partners' brands.",
  },
  {
    icon: Smartphone,
    title: "Recharge Reseller Software",
    desc: "Integrated panels for processing utility bills, prepaid recharges, and payout options.",
  },
  {
    icon: Briefcase,
    title: "Dealer Management Software",
    desc: "Robust control panels to track dealer updates, document approvals, and orders.",
  },
  {
    icon: Layers,
    title: "Distributor Management Software",
    desc: "End-to-end stock and supply chain tracking for bulk distribution networks.",
  },
  {
    icon: Workflow,
    title: "Multi Reseller Software Development",
    desc: "Multi-tiered reseller infrastructure designed to automate commission sharing and nesting.",
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
              Our Reseller Software Services
            </h2>
            <p className="text-gray-655 font-medium font-sans text-sm sm:text-base mt-4">
              We develop reliable software services as per customer-specific requirements. Here we offer reliable development services, including:
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
