"use client";

import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/portfolio/bg-portfolio1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5.5rem)] text-center px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-[5rem] font-bold leading-tight"
        >
          The Future of Digital, Built by{" "}
          <span className="text-orange-500">Camlenio</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 max-w-4xl"
        >
          Our portfolio reflects innovation, strategy, and technology working
          together for impact.
        </motion.p>
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-1 px-6 py-3 border-2 border-gray-50 text-gray-100 text-base md:text-lg rounded-full shadow hover:border-gray-500 font-bold transition "
          >
            See Portfolio <FaArrowDownLong />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
