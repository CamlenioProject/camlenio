"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ERPGrid() {
  return (
    <section className="py-24 bg-orange-50/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Description & Stats */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Enterprise School ERP
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Professional School{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              ERP Software
            </span>{" "}
            Company in Jaipur
          </h2>

          <p className="text-sm sm:text-base text-gray-650 font-sans font-medium leading-relaxed">
            Our ERP solutions are not one-size-fits-all. We understand the unique challenges faced by local institutions in Jaipur and globally. By integrating every aspect of your school—from admission cycles and fee management to academic reporting and library logistics—into one cohesive dashboard, we provide clarity and control that was previously impossible.
          </p>

          {/* Stats Badges */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/90 p-5 rounded-[2rem] border border-orange-500/10 shadow-sm hover:border-orange-500/20 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent block">98%</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 font-sans block mt-1">Efficiency Gain</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/90 p-5 rounded-[2rem] border border-orange-500/10 shadow-sm hover:border-orange-500/20 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent block">24/7</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 font-sans block mt-1">Expert Support</span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: ERP Diagram/Image */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
          <div className="absolute inset-4 bg-orange-500/5 rounded-3xl blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-[3rem] overflow-hidden border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 cursor-pointer group"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvkcN0BHH1sjHI2CmrgdzbuNsP7XRqbvAaZT0BTvfObyrdvAlUe4gdeYR1ay9SyaxnZjFLhrjk4O6QvmAhAO55h2xdmlo1JX61GNdnhEUZg8TMjkohwZtO2KOeXQ06buYdiEBX3dXFBprCnufcAAnPIjvnKceJh3d4e1imMVLN97ch9vX-pqT1D_4Ih8b8LKXRVVpVi5fJx92x-lN6lv5D__DFyCiwKmgMwkSBqIT1ImdCP9g4fBUL-ajMTioBwSMG1Tn23HdKzL0"
                alt="School ERP workflow diagram on dashboard monitor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
