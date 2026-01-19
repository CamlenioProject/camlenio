"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PortfolioHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="PortfolioHeader fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      {/* Left: Brand / Back */}
      <div className="flex items-center gap-4">
        <Link href="/" className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-orange-500 transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Center: Brand Name (Optional, usually hidden or minimal) */}
      <div className="hidden md:block font-bold text-xl tracking-tighter">
        CAMLENIO
      </div>

      {/* Right: Menu */}
      <nav className="flex items-center gap-8 text-sm font-mono uppercase tracking-widest">
        <Link href="/company/portfolio" className="hover:text-orange-500 transition-colors">Work</Link>
        <Link href="/company/about" className="hover:text-orange-500 transition-colors">Agency</Link>
        <button className="px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
          Let's Talk
        </button>
      </nav>

    </motion.header>
  );
}
