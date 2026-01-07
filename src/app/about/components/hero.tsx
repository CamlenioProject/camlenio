"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["About us"];
  return (
    <div className="relative pt-18 pb-1 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-start bg-[length:200%_200%] animate-gradientMove">
      <div className="relative">
        <Image
          src="/CompanyDropdown/about/about-bg.jpg"
          alt="About Us"
          width={1900}
          height={900}
          className="w-full h-48 sm:h-55 md:h-65 lg:h-68 xl:h-70 object-cover object-top"
        />
        <motion.h1 className="absolute inset-0 flex items-center justify-center text-gray-50 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {words.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.08 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
