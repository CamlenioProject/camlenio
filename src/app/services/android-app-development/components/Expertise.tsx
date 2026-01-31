"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Building2,
  Palette,
  Network,
  ShieldCheck,
  Rocket,
  Wrench
} from "lucide-react";

const expertiseData = [
  {
    title: "Custom Android App Development",
    description: "Tailored solutions designed to meet specific business needs and user requirements.",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Enterprise Android Applications",
    description: "Robust, scalable applications built for large-scale operations and data security.",
    icon: Building2,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "UI/UX Design for Android",
    description: "User-centric designs that drive engagement and provide intuitive experiences.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-50"
  },
  {
    title: "API & Integrations",
    description: "Seamless connection with third-party services and backend systems.",
    icon: Network,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing to ensure bug-free performance across all devices.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    title: "Play Store Deployment",
    description: "End-to-end support for launching and managing your app on the Google Play Store.",
    icon: Rocket,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Maintenance & Optimization",
    description: "Continuous updates and performance tuning to keep your app running smoothly.",
    icon: Wrench,
    color: "text-cyan-500",
    bg: "bg-cyan-50"
  }
];

export default function Expertise() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Custom Android App <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              Development Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            We offer end-to-end Android app development services using modern technologies and industry best practices to ensure performance, security, and scalability.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-orange-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${index === expertiseData.length - 1 ? "lg:col-span-3 lg:w-1/3 lg:mx-auto" : ""}`}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
