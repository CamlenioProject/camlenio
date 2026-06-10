"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Transform() {
  return (
    <section className="py-24 bg-orange-50/30 overflow-hidden relative">
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-100/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Image (order-2 on mobile, order-1 on desktop) */}
        <div className="lg:col-span-6 order-2 lg:order-1 relative w-full flex justify-center">
          <div className="absolute inset-4 bg-orange-500/5 rounded-3xl blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-[3rem] overflow-hidden border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 cursor-pointer group"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD9zxJp7Ysh51Oqq3lRnOdI0B1AE6fA2J4uAmjfJQnAznCZtA7_99WWkApp4ldW9b8t5Dy94WerYkPdyDBrHOuA3a6gubAdwfGmqNLT3afa3Q15ELqDRL8dtvc7fpcMK2-kuUpYzAMhXwdnru2V_AN5TmfthmCfUA4bTfx88WsjjyMqMGzeP3URkqoNUwkrw7FEOEfaPs7lBhNB2RX467DQ6LqoR4Ftagr5UxyOT_1ZAiKeuXg1BvHzKhYo2TqxK-MqZTBURPJfc0"
                alt="Teachers collaborating around a tablet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content (order-1 on mobile, order-2 on desktop) */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
              Institutional Upgrade
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Transform Your Institution with{" "}
              <span
                className="text-orange-500 relative"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Advanced Education Software
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-650 font-sans font-medium leading-relaxed">
              In today’s advanced digital era, educational institutions require smart technology to manage operations efficiently. Camlenio is a reliable school management software development company in Jaipur, offering advanced digital solutions for schools, colleges, coaching centers, and universities. As experienced school management software developers, we develop a comprehensive platform that automates your daily administrative tasks and enhances overall productivity.
            </p>
          </motion.div>

          <ul className="space-y-4 pt-2">
            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-orange-500/5 shadow-sm hover:border-orange-500/20 transition-all duration-300 select-none cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="font-sans font-bold text-gray-800 text-sm sm:text-base">Seamless cloud migration for existing records.</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-orange-500/5 shadow-sm hover:border-orange-500/20 transition-all duration-300 select-none cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="font-sans font-bold text-gray-800 text-sm sm:text-base">Real-time data synchronization across departments.</span>
            </motion.li>
          </ul>
        </div>

      </div>
    </section>
  );
}
