"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "$99",
    popular: false,
  },
  {
    title: "Professional",
    price: "$199",
    popular: false,
  },
  {
    title: "Enterprise",
    price: "$399",
    popular: false,
  },
];

const features = [
  "5,000 Monthly Word Limit",
  "50+ Languages",
  "Advance Editor Tool",
  "50 Accounts",
];

export default function PricingPage() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="  min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block text-gray-900 font-semibold mb-2 text-2xl">
          Pricing Plan
        </span>
        <h2 className="text-3xl text-gray-900 md:text-5xl font-semibold my-2">
          Ready to Get Started? Don’t Worry,
          <br /> We’ll Keep You Under Budget
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Get started with a 5-day trial, 25% off for Yearly Plan, Cancel
          anytime.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[85rem] mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="group bg-transparent text-center md:text-left text-black rounded-2xl shadow-lg p-8 border-orange-200 border-2 relative  hover:text-gray-900"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
            <div className="text-4xl font-bold mb-1">{plan.price}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              per monthly
            </div>

            <button className="group-hover:bg-orange-500 bg-orange-500 text-black group-hover:text-black border-2 border-gray-300 group-hover:border-2 font-semibold px-6 py-3 rounded-full w-full transition duration-300">
              Get started →
            </button>

            <div className="mt-6 text-sm">
              <h4 className="font-semibold mb-3">What’s included</h4>
              <ul className="space-y-2 text-left">
                {features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-lime-500 mt-[2px]"
                      size={18}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
