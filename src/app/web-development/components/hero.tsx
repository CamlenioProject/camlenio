"use client";
import Image from "next/image";
import gsap from "gsap";

import { motion } from "framer-motion";
import BackToTopButton from "@/app/components/BackToTopButton";
import { FaArrowDownLong } from "react-icons/fa6";
import { Button } from "@/app/components/ui/Button";

export default function Hero() {
  const handleScroll = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: "#next-section",
      ease: "power4.inOut",
    });
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
          <div className="w-full text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6 leading-snug md:leading-tight">
              Custom Web Development
              <br /> Company in India & UK
            </h1>
            <p className="hidden md:block text-base sm:text-lg text-center md:text-left text-gray-800 font-normal ">
              Customized web development involves creating personalized websites
              tailored to client needs. We build solutions that match specific
              requirements, backed by strong expertise in coding, design, and
              modern web technologies.
            </p>
            <p className="md:hidden  text-base sm:text-lg text-center md:text-left text-gray-800 ">
              Customized web development delivers tailored websites for
              businesses and individuals, built to match specific client needs.
              Our team excels in dynamic designs, e-commerce, blogs, and more,
              offering full solutions including hosting and domain services.
              With deep expertise and a focus on modern, secure, user-friendly
              technology, we serve clients across the UK and Bharat to help them
              achieve their digital goals.
            </p>
            <Button
              variant="outline"
              size="xl"
              className="mt-8 capitalize border-1 transition duration-500" // Added transition duration to match original if needed, though default has transition
            >
              hire Web developer →
            </Button>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full  max-w-md mx-auto relative"
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
        <Button
          onClick={handleScroll}
          variant="outline"
          size="xl"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 md:inline-flex items-center gap-2 border-2 rounded-full shadow-xl hover:bg-orange-600 font-bold hidden transition-all duration-300"
        >
          Explore More <FaArrowDownLong />
        </Button>
      </div>
      <BackToTopButton />
    </div>
  );
}
