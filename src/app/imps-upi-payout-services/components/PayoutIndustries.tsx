"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Store,
  Layers,
  MapPin,
  Car,
  Sprout,
  Briefcase,
  Landmark,
  Shield,
  CreditCard,
  ShoppingBag,
  Zap,
  MoreHorizontal
} from "lucide-react";
import React from "react";

const industries = [
  { name: "Marketplace", icon: Store, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Service Aggregator", icon: Layers, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Hyper Local Delivery", icon: MapPin, color: "text-red-500", bg: "bg-red-50" },
  { name: "Ride Hailing Service", icon: Car, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "Agritech", icon: Sprout, color: "text-green-500", bg: "bg-green-50" },
  { name: "B2B Business", icon: Briefcase, color: "text-slate-600", bg: "bg-slate-100" },
  { name: "NBFC", icon: Landmark, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Insurance", icon: Shield, color: "text-teal-500", bg: "bg-teal-50" },
  { name: "Payment Gateways", icon: CreditCard, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "E-Commerce", icon: ShoppingBag, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Quick Commerce", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "And Others", icon: MoreHorizontal, color: "text-slate-500", bg: "bg-slate-50" },
];

export default function PayoutIndustries() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500 opacity-10 blur-[120px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Glass Overlay Pane */}
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 border border-white/60 shadow-2xl shadow-slate-200/40 relative overflow-hidden">

          {/* Top Decorative Line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white border border-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest shadow-sm mb-6"
            >
              Versatile Applications
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              Empowering Every <span className="text-orange-600">Industry</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              From gig economies to enterprise marketplaces, our payout infrastructure scales effortlessly to meet diverse sector needs.
            </motion.p>
          </div>

          {/* Advanced Interactive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((item, idx) => (
              <IndustryCard key={idx} item={item} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function IndustryCard({ item, idx }: { item: typeof industries[0], idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-100/50 bg-white/80 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-500"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(234, 88, 12, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Animated Icon Container */}
      <div className={`
         w-16 h-16 rounded-2xl flex items-center justify-center 
         ${item.bg} ${item.color} mb-6 
         group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out shadow-sm
      `}>
        <item.icon className="w-8 h-8" />
      </div>

      {/* Text Content */}
      <h3 className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors z-10 text-center">
        {item.name}
      </h3>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 rounded-full bg-orange-400" />
      </div>
    </motion.div>
  );
}
