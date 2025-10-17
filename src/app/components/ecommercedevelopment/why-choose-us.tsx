"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaLock,
  FaBolt,
  FaChartBar,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Custom Online Stores",
    icon: <FaShoppingCart className="text-pink-400 text-2xl" />,
    desc: "Every business is unique, and so are its e-commerce needs. We build tailor-made online stores designed around your brand and your customers, ensuring the perfect shopping experience.",
    img: "/ecommercedevelopment/first1.png",
  },
  {
    id: 2,
    title: "Mobile-First Design",
    icon: <FaMobileAlt className="text-purple-400 text-2xl" />,
    desc: "With more than 70% of online shopping happening on mobile, we design for mobile first. This ensures seamless browsing and checkout experiences across all devices.",
    img: "/ecommercedevelopment/second2.png",
  },
  {
    id: 3,
    title: "Secure Payments & Checkout",
    icon: <FaLock className="text-blue-400 text-2xl" />,
    desc: "Trust is everything in e-commerce. We integrate encrypted, PCI-compliant payment gateways with a simple, frictionless checkout flow to make transactions safe and smooth.",
    img: "/ecommercedevelopment/third3.png",
  },
  {
    id: 4,
    title: "Fast & Optimized Performance",
    icon: <FaBolt className="text-yellow-400 text-2xl" />,
    desc: "Speed matters. We deliver lightning-fast load times with optimized code, images, CDN integration, and caching—keeping your store smooth and SEO-friendly.",
    img: "/ecommercedevelopment/fourth4.png",
  },
  {
    id: 5,
    title: "Analytics & Conversion Tracking",
    icon: <FaChartBar className="text-green-400 text-2xl" />,
    desc: "We integrate advanced analytics and conversion tracking tools so you can understand customer behavior, optimize your sales funnel, and increase ROI.",
    img: "/ecommercedevelopment/fifth5.png",
  },
  {
    id: 6,
    title: "Ongoing Support & Maintenance",
    icon: <FaTools className="text-orange-400 text-2xl" />,
    desc: "An e-commerce store needs constant care. We provide continuous updates, bug fixes, feature enhancements, and security patches to keep your store reliable and secure.",
    img: "/ecommercedevelopment/sixth6.png",
  },
];

export default function WhyChooseUsInteractive() {
  const [active, setActive] = useState(1);
  const activeFeature = features.find((f) => f.id === active);

  return (
    <div className="relative px-6 py-20  text-gray-800 bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Your e-commerce website isn’t just an online shop — it’s your brand
          experience. We make sure it’s fast, scalable, and user-friendly.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActive(feature.id)}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 text-left p-4 rounded-xl transition ${
                active === feature.id
                  ? "bg-orange-100 border border-orange-500 shadow-lg"
                  : "bg-transparent hover:bg-white/5"
              }`}
            >
              {feature.icon}
              <span className="font-medium text-lg">{feature.title}</span>
            </motion.button>
          ))}
        </div>
        <div className="w-full md:w-2/3 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature?.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gray-800 border border-white/10 backdrop-blur-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {activeFeature?.title}
              </h3>
              <p className="text-gray-300 mb-6">{activeFeature?.desc}</p>
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden ">
                <Image
                  src={activeFeature?.img || ""}
                  alt={activeFeature?.title || ""}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
