"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ServicesShowcase() {
  const router = useRouter();

  return (
    <section id="solutions" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Heading & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start space-y-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200 mb-6">
              Solutions &amp; Modules
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight font-sans tracking-tight">
              Explore our full range of cash deposit, withdrawal, and merchant settlement software. From first QR scan to final ledger payout — we&apos;ve got the right engine for you.
            </h2>
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-all shadow-md active:scale-95"
          >
            <span>Explore All Modules</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Right Column: 2 Modern Feature Service Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Service Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[2rem] overflow-hidden min-h-[340px] shadow-lg border border-gray-200 flex flex-col justify-between p-6 text-white group"
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
              alt="Agent & Distributor Software Suite"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/30" />

            {/* Top Pill Tag */}
            <div className="relative z-10 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                Agent &amp; Distributor Portal
              </span>
            </div>

            {/* Bottom Content & Circle Button */}
            <div className="relative z-10 flex items-end justify-between gap-4 text-left">
              <div>
                <p className="text-xs font-semibold text-orange-300">Multi-Tier Admin Suite</p>
                <h4 className="text-base font-bold text-white mt-1 leading-snug">
                  Software engineered for all agent sizes &amp; retail networks.
                </h4>
              </div>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-orange-500 group-hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[2rem] overflow-hidden min-h-[340px] shadow-lg border border-gray-200 flex flex-col justify-between p-6 text-white group"
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1470&auto=format&fit=crop"
              alt="Dynamic QR Code Engine"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />

            {/* Top Pill Tag */}
            <div className="relative z-10 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                Dynamic QR Engine
              </span>
            </div>

            {/* Bottom Content & Navigation Slider Arrows */}
            <div className="relative z-10 flex flex-col space-y-3 text-left">
              <div>
                <p className="text-xs font-semibold text-sky-300">Instant Cash Withdrawals</p>
                <h4 className="text-base font-bold text-white mt-1 leading-snug">
                  High-speed QR code generation &amp; auto-reconciliation.
                </h4>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  aria-label="Previous service card"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next service card"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
