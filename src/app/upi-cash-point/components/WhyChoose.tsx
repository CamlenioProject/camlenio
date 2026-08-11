"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Cpu, Users, Award } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 md:p-16 border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.06)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Title, Description & Highlight Badges */}
            <div className="lg:col-span-7 text-left space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight font-sans"
              >
                Why We Stand Out As{` `}
                <span
                  className="text-orange-500 relative inline-block"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
                  }}
                >
                  UPI Cash Point Software Company?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-gray-700 font-medium font-sans leading-relaxed"
              >
                As an experienced UPI Cash Point Software Company in Jaipur, we develop reliable software that is designed around business-essential needs. Our software can help partners manage their agents, monitor transactions, and offer reliable services to their customers. The software has a simple control panel, making it easy for administrators to use the system without complete technical knowledge.
              </motion.p>

            </div>

            {/* Right Column: 3D Feature Cards Showcase */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 p-5 rounded-2xl border border-orange-500/15 shadow-md flex items-center gap-4 text-left group hover:border-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-sans">Business-Essential Architecture</h4>
                  <p className="text-xs text-gray-500 font-medium">Reliable software built around real fintech demands</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/90 p-5 rounded-2xl border border-orange-500/15 shadow-md flex items-center gap-4 text-left group hover:border-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-sans">Agent &amp; Transaction Monitoring</h4>
                  <p className="text-xs text-gray-500 font-medium">Complete control over agent network &amp; payouts</p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 p-5 rounded-2xl border border-orange-500/15 shadow-md flex items-center gap-4 text-left group hover:border-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-sans">Simple Admin Operations</h4>
                  <p className="text-xs text-gray-500 font-medium">Easy control panel accessible to non-technical users</p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
