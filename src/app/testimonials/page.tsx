"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/app/components/animated-testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 selection:bg-orange-100 overflow-x-hidden pt-16 md:pt-20 pb-12 md:pb-12">
      {/* Hero Section */}
      <section className="pt-10 md:pt-16 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Testimonials</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-black text-[#1A1A1A] leading-[1.1] md:leading-none tracking-tighter uppercase"
          >
            CLIENT <span className="text-transparent inline-block font-outline-2">STORIES</span> <br />
            <span className="relative inline-block mt-1 md:mt-2">
              REAL <span className="text-orange-500">I</span>MPACT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mt-8 text-gray-600 text-sm md:text-base font-medium"
          >
            Don&apos;t just take our word for it. Explore stories from businesses that have transformed their digital presence and scaled operations with Camlenio&apos;s cutting-edge software solutions.
          </motion.p>

          <style jsx>{`
            .font-outline-2 {
              -webkit-text-stroke: 1.5px #1A1A1A;
            }
            @media (min-width: 768px) {
              .font-outline-2 {
                -webkit-text-stroke: 2px #1A1A1A;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 -mt-10">
        <AnimatedTestimonials autoplay={true} />
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-10 relative">
        <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-3xl border border-white rounded-[3rem] p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Ready to create your own <span className="text-orange-500">success story?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Join hundreds of companies that trust Camlenio to deliver exceptional digital experiences and scalable enterprise solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-orange-500/30 gap-2"
            >
              Get in touch today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
