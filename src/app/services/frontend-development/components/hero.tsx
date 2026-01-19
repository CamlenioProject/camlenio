"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackToTopButton from "@/app/components/BackToTopButton";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative pt-20 overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Image
        src="/ServiceDropdown/webdevpage/webdevhero.webp"
        alt="Background"
        width={500}
        height={500}
        className="object-contain w-50 absolute z-0 "
        priority
      />
      <div className=" px-8 md:px-16">
        <div className="max-w-7xl min-h-[80vh] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
          <div className="w-full text-center md:text-left z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6 leading-snug md:leading-tight">
              Frontend Development
              <br /> Company in India & UK
            </h1>
            <p className="hidden md:block text-base sm:text-lg text-center md:text-left text-gray-800 font-normal ">
              We specialize in building interactive, responsive, and performance-driven frontend solutions.
              Our expert developers transform designs into seamless digital experiences using the latest technologies.
            </p>
            <p className="md:hidden  text-base sm:text-lg text-center md:text-left text-gray-800 ">
              We specialize in building interactive, responsive, and performance-driven frontend solutions.
              Our expert developers transform designs into seamless digital experiences using the latest technologies.
            </p>
            <button className="mt-8 text-orange-500 hover:bg-orange-500 border-1 border-orange-500 hover:text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl transition duration-500 capitalize">
              hire frontend developer →
            </button>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full  max-w-md mx-auto relative z-10"
          >
            <Image
              src="/ServiceDropdown/webdevpage/webdevhero.webp"
              alt="Hero image"
              width={500}
              height={500}
              className="rounded-xl w-full h-full object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="text-center z-10">
        <button
          onClick={handleScroll}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 md:inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow-xl hover:bg-orange-600 hover:text-white font-bold transition-all duration-300 hidden"
        >
          Explore More <FaArrowDownLong />
        </button>
      </div>
      <BackToTopButton />
    </div>
  );
}
