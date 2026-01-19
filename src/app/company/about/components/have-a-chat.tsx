"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectCTA() {
  const text = "Let’s have a chat";
  const letters = text.split("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % letters.length);
    }, 100);
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-8 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="text-2xl font-medium text-left text-black">
          Want to start a project?
        </div>

        <div className="flex text-center md:text-left flex-wrap my-6">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              animate={{
                scale: activeIndex === i ? 1.15 : 1,
                color: activeIndex === i ? "#F75823" : "#000",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="text-[2.5rem] md:text-[6rem] lg:text-[8rem] font-extrabold leading-none"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 group ">
          <a
            href="mailto:business@camlenio.com"
            className="text-[1rem] md:text-[1.5rem] font-medium relative group"
          >
            <span className=" inline-block text-black group-hover:text-orange-500 transition-all duration-500">
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
              business@camlenio.com
            </span>
          </a>
          <div className="w-12 h-12  flex items-center justify-center rounded-full border-1 border-black cursor-pointer -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out group-hover:border-orange-500">
            <ArrowRight className="w-6 h-6 text-black group-hover:text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
