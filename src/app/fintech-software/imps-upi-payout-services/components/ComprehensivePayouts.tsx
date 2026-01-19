"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Zap,
  Clock,
  PieChart,
  Globe,
  Smartphone,
  LayoutDashboard,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "imps",
    title: "IMPS Payout Service",
    subtitle: "Instant 24x7 Transfers",
    description: "The gold standard for immediate interbank electronic fund transfers. Available 24/7/365, ensuring your business never sleeps even on holidays.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },

  {
    id: "neft",
    title: "NEFT Payout API",
    subtitle: "Scheduled Bulk Amounts",
    description: "Perfect for handling large-volume, non-time-critical transfers. Automate your scheduled bulk payouts like salaries and vendor settlements securely.",
    icon: Clock,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "rtgs",
    title: "RTGS Payout API",
    subtitle: "High-Volume Transactions",
    description: "Designed for high-value fund transfers that need to be settled individually and instantly. The preferred choice for large B2B supply chain payments.",
    icon: PieChart,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "upi",
    title: "UPI Payout Services",
    subtitle: "Fastest & Cost-effective",
    description: "Experience the fastest real-time payments directly to bank accounts via UPI ID. Ideal for micropayments and high-frequency transactions with zero failure rates.",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
  },

];

export default function ComprehensivePayouts() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">

      {/* Abstract Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1 }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <LayoutDashboard className="w-3 h-3" /> All-In-One Platform
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Comprehensive Payouts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Under One Platform
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:max-w-sm text-slate-400 text-base md:text-lg leading-relaxed"
          >
            We offer a complete suite of Payout Services that support multiple payment networks to meet the delivery company’s requirements, such as:
          </motion.p>
        </div>

        {/* Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <SpotlightCard key={service.id} service={service} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SpotlightCard({ service, idx }: { service: typeof services[0], idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative border border-slate-800 bg-slate-900/50 overflow-hidden rounded-3xl"
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content Container */}
      <div className="relative h-full p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

        {/* Icon Box */}
        <div className={`
             shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center 
             bg-gradient-to-br ${service.color} shadow-lg shadow-orange-500/20
             group-hover:scale-110 transition-transform duration-500
         `}>
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
              {service.title}
            </h3>
            {/* <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-orange-400 -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" /> */}
          </div>

          <p className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            {service.subtitle}
          </p>

          <p className="text-slate-400 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
