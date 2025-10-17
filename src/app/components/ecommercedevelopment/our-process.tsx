"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discovery & Strategy",
    description: "Understand your business goals.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design & Prototyping",
    description: "UI/UX wireframes & mockups.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description: "Scalable backend + optimized frontend.",
  },
  {
    icon: <FaBug />,
    title: "Testing & QA",
    description: "Bug-free & secure launch.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Support",
    description: "Continuous updates & growth.",
  },
];
export default function OurProcess() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          🚀 Our Process
        </motion.h2>
      </div>
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-orange-400"></div>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-white w-[300px] md:w-[380px] p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="text-4xl text-indigo-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Timeline Dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 border-4 border-white rounded-full shadow-md"></span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
