"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 py-26 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl absolute top-[-200px] left-[-150px]" />
        <div className="w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-3xl absolute bottom-[-200px] right-[-150px]" />
      </div>

      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            src="/ecommercedevelopment/ecommerce.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-w-md rounded-2xl border border-gray-700"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 px-2"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Smart E-Commerce Solutions That Drive Sales
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg">
          From sleek UI/UX to secure checkouts, we build e-commerce platforms
          that grow your business.
        </p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 flex gap-4 justify-center md:justify-start"
        >
          <button className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition">
            🚀 Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-gray-200 text-white font-bold rounded-xl shadow-lg hover:bg-white/10 transition">
            📞 Talk to Our Experts
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
