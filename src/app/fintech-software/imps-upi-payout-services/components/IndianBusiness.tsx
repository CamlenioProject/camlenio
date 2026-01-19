"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Activity, Globe, Scale, ArrowUpRight } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Support for All Modes",
    desc: "Comprehensive coverage for UPI, IMPS, NEFT, and RTGS protocols, ensuring you never miss a payment channel.",
    className: "lg:col-span-2 bg-gradient-to-br from-orange-50 to-white",
  },
  {
    icon: Activity,
    title: "Accurate Time Tracking",
    desc: "Real-time transaction monitoring with precise timestamps for audit trails.",
    className: "lg:col-span-1 bg-white",
  },
  {
    icon: Zap,
    title: "Fast API Integration",
    desc: "Go live in less than 24 hours with our developer-friendly documentation.",
    className: "lg:col-span-1 bg-white",
  },
  {
    icon: CheckCircle2,
    title: "Automated Bulk Payouts",
    desc: "Effortlessly handle thousands of transactions at once. Just upload a CSV or use our batch API.",
    className: "lg:col-span-2 bg-gradient-to-br from-blue-50 to-white",
  },
  {
    icon: Scale,
    title: "Scalable Framework",
    desc: "Built to grow with your business, handling millions of requests without latency.",
    className: "lg:col-span-3 bg-slate-900 text-white",
    dark: true,
  },
];

export default function IndianBusiness() {
  const smoothTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-3 h-3" /> Trusted Partner
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Trusted Payout Service in <br />
            <span className="text-orange-600">Delhi & Across India</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            We deliver business solutions all over India with a secure and scalable payment infrastructure. Our platform adheres to banking ideals and guarantees data security, transaction liquidity, and regulatory compliance.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: idx * 0.1 }}
              className={`relative group rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 overflow-hidden flex flex-col justify-between ${item.className}`}
            >
              {/* Hover Effect Background */}
              {item.dark ? (
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              ) : (
                <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 ${item.dark ? "text-orange-400" : "text-orange-600"}`}>
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${item.dark ? "text-white" : "text-slate-900"}`}>
                  {item.title}
                </h3>

                <p className={`text-base leading-relaxed ${item.dark ? "text-slate-400" : "text-slate-600"}`}>
                  {item.desc}
                </p>
              </div>

              <div className={` flex justify-end ${item.dark ? "text-orange-500" : "text-orange-600"}`}>
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
