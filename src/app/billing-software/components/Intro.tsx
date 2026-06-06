"use client";

import { motion } from "framer-motion";
import { Sliders, Zap, Percent, Shield, Activity, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Overlapping Phone Mockups */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center">

            {/* Phone 1 (Back left, tilted) */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="absolute left-4 sm:left-10 w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] rounded-[36px] border-[8px] border-slate-900 bg-white shadow-xl overflow-hidden flex flex-col justify-between p-3 z-10 origin-bottom"
            >
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-2" />

              {/* Internal Screen Mockup (Sales Growth) */}
              <div className="space-y-3 flex-1 text-left pt-2">
                <div className="text-[10px] font-bold text-gray-400">Total Sales</div>
                <div className="text-xl font-bold text-slate-800">₹4,20,900</div>
                <div className="w-full bg-slate-100 rounded-lg h-24 p-2 flex items-end justify-between">
                  <div className="w-3 bg-orange-400 h-[20%] rounded-sm" />
                  <div className="w-3 bg-orange-400 h-[40%] rounded-sm" />
                  <div className="w-3 bg-orange-500 h-[30%] rounded-sm" />
                  <div className="w-3 bg-red-400 h-[65%] rounded-sm" />
                  <div className="w-3 bg-orange-600 h-[85%] rounded-sm" />
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] font-bold text-gray-400 block">Performance Index</span>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-orange-500 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="w-16 h-1 bg-slate-900 rounded-full mx-auto" />
            </motion.div>

            {/* Phone 2 (Front right, slightly overlapping, straight) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="absolute right-4 sm:right-10 top-10 w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] rounded-[36px] border-[8px] border-slate-900 bg-white shadow-2xl overflow-hidden flex flex-col justify-between p-3 z-20 origin-bottom"
            >
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-2" />

              {/* Internal Screen Mockup (Stock tracker) */}
              <div className="space-y-4 flex-1 text-left pt-2">
                <div className="text-[10px] font-bold text-gray-400">Inventory Status</div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-1.5 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-[8px] font-bold text-green-700">In Stock</div>
                    <span className="text-[9px] font-bold text-green-800">4,280 items</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 bg-red-50 rounded-lg border border-red-100">
                    <div className="text-[8px] font-bold text-red-700">Low Stock</div>
                    <span className="text-[9px] font-bold text-red-800">12 items</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="text-[9px] font-bold text-gray-700">Top Categories</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="p-1 bg-gray-50 rounded text-[7px] font-bold text-center">Retail</div>
                    <div className="p-1 bg-gray-50 rounded text-[7px] font-bold text-center">Pharma</div>
                    <div className="p-1 bg-gray-50 rounded text-[7px] font-bold text-center">Grocery</div>
                    <div className="p-1 bg-gray-50 rounded text-[7px] font-bold text-center">POS</div>
                  </div>
                </div>
              </div>

              <div className="w-16 h-1 bg-slate-900 rounded-full mx-auto" />
            </motion.div>

          </div>

          {/* RIGHT SIDE: Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Simplify Your Business Processes <br />
                With{" "}
                <span className="text-orange-500">
                  Advanced Billing Software
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                As per the competitive market, every business needs fast, accurate, and automated billing systems. Camlenio provides advanced billing software development services developed to simplify billing, stock tracking, payment management, and GST compliance. As a top billing software development company, we offer customized solutions for retail stores, pharmacies, restaurants, clinics, wholesalers, and service-based businesses.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                Our powerful billing and inventory software helps businesses manage daily operations efficiently while reducing manual issues. Whether you require an online invoice billing software or cloud-based POS systems, we develop advanced GST billing software solutions with automated tax calculations, reporting, and invoice generation.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
