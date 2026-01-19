"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const services = [
  {
    name: "React JS Expert",
    icon: <FaReact size={30} className="text-sky-500" />,
    content:
      "Our qualified React JS engineers develop outstanding interactive UIs. They leverage the virtual DOM for high-performance rendering and component reusability.",
  },
  {
    name: "Angular Expert",
    icon: <FaAngular size={30} className="text-red-600" />,
    content:
      "Our seasoned Angular developers deliver robust, enterprise-grade applications. We utilize Angular's comprehensive framework for scalable frontend architecture.",
  },
  {
    name: "Vue JS Expert",
    icon: <FaVuejs size={30} className="text-green-500" />,
    content:
      "Our experienced Vue JS developers create lightweight and flexible user interfaces. We build fast applications with Vue's progressive adoption capabilities.",
  },
  {
    name: "Next JS Expert",
    icon: <SiNextdotjs size={30} className="text-black" />,
    content:
      "We build superior server-side rendered and static web applications using Next.js. Optimized for performance and SEO, ensuring your site ranks better and loads faster.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} className="text-cyan-500" />,
    content:
      "Our developers utilize Tailwind CSS to rapidly build custom designs. We create highly responsive and modern interfaces with utility-first CSS.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} className="text-blue-600" />,
    content:
      "We use TypeScript to build scalable and maintainable applications. By adding static types, we reduce runtime errors and enhance code quality for large projects.",
  },
];

export default function FrontendExperts() {
  const [selected, setSelected] = useState(0);

  return (
    <div
      id="next-section"
      className=" scroll-mt-30 bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove "
    >
      <div className=" max-w-7xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-orange-500">
          Technologies We Master
        </h2>

        <p className="text-center text-xs md:text-lg text-gray-600 max-w-lg md:max-w-3xl mx-auto mb-12">
          Camlenio employs top-tier talent proficient in the modern modern frontend stack.
          We select the right technology to ensure your application is fast, responsive, and future-proof.
        </p>

        <div className="flex justify-start md:justify-center gap-4 mb-10 overflow-x-auto scroll-smooth scrollbar-hide py-2">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`flex items-center whitespace-nowrap gap-2 px-6 py-3 rounded-xl text-base font-medium border transition-all duration-500 ${selected === idx
                  ? "bg-orange-100 border-orange-300 text-orange-500 shadow-sm"
                  : "bg-white/50 border-gray-300 text-gray-700 hover:bg-orange-50"
                }`}
            >
              {service.icon}
              {service.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-sm shadow-sm p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-4">
              {services[selected].icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2">
              {services[selected].name}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {services[selected].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
