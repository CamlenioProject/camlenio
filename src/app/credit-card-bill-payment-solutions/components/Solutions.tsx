"use client";

import { motion } from "framer-motion";
import { Code, Headset, BarChart3, Settings2 } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Code,
      title: "Secure API Integration Services",
      desc: "Robust, secure, and developer-friendly REST APIs that integrate easily into any fintech app, enabling fast transaction processing.",
    },
    {
      icon: Headset,
      title: "Technical Support and Maintenance",
      desc: "Comprehensive 24/7 technical monitoring, troubleshooting, and API version maintenance to ensure uninterrupted payment operations.",
    },
    {
      icon: BarChart3,
      title: "Transaction Monitoring & Reporting",
      desc: "Granular dashboard tracking to audit transaction status, settlement rates, charges, and success frequencies in real-time.",
    },
    {
      icon: Settings2,
      title: "Custom Credit Card Payment Gateway Integration",
      desc: "End-to-end customized credit card gateway setup aligned with bank routers and PCI-DSS compliance regulations.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background glowing highlights */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Fintech Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Comprehensive Solutions{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              We Offer
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            Explore our end-to-end fintech services developed to simplify credit card bill payments, improve security, and enhance customer experiences. We deliver everything your business needs to provide reliable and efficient payment solutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-5 bg-white border border-orange-500/10 hover:border-orange-500/30 rounded-[2rem] p-6 sm:p-8 text-left transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] relative group cursor-pointer"
              >
                {/* Icon Column */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content Column */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-550 leading-relaxed font-sans font-medium">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
