"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlansPricing() {
  const router = useRouter();

  return (
    <section id="pricing" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Card: Vibrant Blue Gradient Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white rounded-[2.2rem] p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

          {/* Top Pill & Pricing */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                Most Popular Plan
              </span>
              <span className="text-xl sm:text-2xl font-black text-white">
                Custom / Enterprise
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
              Pro Enterprise Suite
            </h3>
          </div>

          {/* Feature Pills Grid */}
          <div className="my-8 flex flex-wrap gap-2.5">
            {[
              "+ Unlimited Agents",
              "+ Auto Settlement API",
              "+ White-Label Mobile App",
              "+ Master Admin Control",
              "+ 24/7 Priority Manager",
              "+ Bank-Grade Encrypted Ledger",
            ].map((feature, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-sky-50 border border-white/25 shadow-xs"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-sky-100 font-medium">
              Turnkey deployment in 7-14 business days.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-white text-blue-900 hover:bg-sky-50 text-xs font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get Custom Quote</span>
              <ArrowUpRight className="w-4 h-4 text-blue-900" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Text & Plan Options */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            Flexible Deployment
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight font-sans tracking-tight">
            Three refined deployment plans — elevate your fintech platform.
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed font-sans">
            Whether you need a lightweight retail agent portal, a multi-tier distributor framework, or a fully custom white-label enterprise system, we provide tailored software architecture with zero compromise.
          </p>

          <div className="space-y-3 w-full pt-2">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">Startup &amp; Agent License</h4>
                <p className="text-[11px] text-gray-500">Perfect for emerging fintech startups &amp; regional distributors.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-gray-900">White-Label Enterprise Suite</h4>
                <p className="text-[11px] text-gray-500">Full source code customization, custom branding &amp; API keys.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
