"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  ShieldCheck,
  Smartphone,
  Zap,
  Sliders,
  Cloud,
} from "lucide-react";

export default function BenefitsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const benefits = [
    {
      title: "User-friendly UI/UX",
      description: "Crafted for higher customer engagement, ensuring visitors stay longer and convert faster.",
      icon: <Layout className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Secure Payment Gateway Integration",
      description: "Encrypted checkout workflows protecting vendor and customer transactions seamlessly.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Mobile Responsive & App Ready",
      description: "Optimized mobile layout that easily transitions to native iOS & Android shopping applications.",
      icon: <Smartphone className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Faster Load Speed & Optimization",
      description: "Lightning fast response times that reduce bounce rates and boost SEO ranking signals.",
      icon: <Zap className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Custom Tailored Features",
      description: "Bespoke e-commerce tools mapped directly to your business logic and transaction workflows.",
      icon: <Sliders className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Scalable Cloud Architecture",
      description: "Powered by modern cloud computing to handle traffic surges and high volumes of concurrent orders.",
      icon: <Cloud className="w-6 h-6 text-orange-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
      },
    },
  };

  return (
    <div className="w-full relative z-10 bg-transparent py-12">
      <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              E-Commerce Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        <motion.div
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : "visible"}
          whileInView={isMounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={isMounted ? itemVariants : undefined}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-orange-100/50 shadow-lg shadow-orange-100/5 hover:bg-white/90 transition-all duration-300 flex flex-col text-left"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-sm text-slate-650 leading-relaxed text-justify">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
