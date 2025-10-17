"use client";

import { motion } from "framer-motion";
import {
  FaStore,
  FaShoppingCart,
  FaPalette,
  FaCreditCard,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaStore className="text-4xl text-orange-500" />,
    title: "Custom E-Commerce Development",
    desc: "Tailor-made platforms designed to match your exact business model and customer needs.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-indigo-500" />,
    title: "Shopify / WooCommerce / Magento Setup",
    desc: "Quick setup and deep customization to launch your online store without compromise.",
  },
  {
    icon: <FaPalette className="text-4xl text-pink-500" />,
    title: "UI/UX Design for E-Commerce",
    desc: "Engaging, conversion-driven designs that turn visitors into loyal customers.",
  },
  {
    icon: <FaCreditCard className="text-4xl text-green-500" />,
    title: "Payment Gateway Integration",
    desc: "Seamless integration with Stripe, Razorpay, PayPal, and other gateways.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-500" />,
    title: "Marketplace Development",
    desc: "Multi-vendor platforms with Amazon/Flipkart-style features and scalability.",
  },
  {
    icon: <FaRocket className="text-4xl text-purple-500" />,
    title: "Headless E-Commerce",
    desc: "Next.js + APIs for lightning-fast, modern, and scalable e-commerce solutions.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 overflow-hidden">
      {/* Floating Animated Shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-orange-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 drop-shadow-lg">
          📦 Our Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Cutting-edge e-commerce services with modern technology, smooth UI,
          and high performance.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="group relative p-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 hover:border-orange-400 hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-700">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
