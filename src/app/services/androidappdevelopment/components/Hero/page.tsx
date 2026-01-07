"use client";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "@/app/components/BackToTopButton";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove scroll-smooth">
      <Image
        src="/bg-hero.webp"
        alt="Background"
        width={300}
        height={300}
        className="object-cover absolute object-center z-0"
        priority
      />
      <div className="relative z-20 px-4 sm:px-6 sm:py-22  md:py-0">
        <div className="max-w-[80rem] min-h-screen  mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full text-center md:text-left md:w-3/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6 leading-snug md:leading-tight">
              Empower Your Mobile App
              <br />
              Development Services With Us!
            </h1>
            <p className="text-base sm:text-lg text-center md:text-left text-gray-800 font-normal">
              Empower your mobile app development services with us! Our company
              specializes in designing customized business-oriented apps capable
              of providing cutting-edge operational support...
            </p>
            <button className="mt-8  hover:bg-orange-500 border-1 border-orange-500 text-orange-500 hover:text-white text-base sm:text-lg font-normal px-6 py-3  rounded-xl transition duration-300 capitalize">
              hire developer →
            </button>
          </div>
          <div className="w-full md:w-2/5 max-w-lg mx-auto relative">
            <Image
              src="/mobappdev/mob-app-hero.webp"
              alt="Hero"
              width={500}
              height={500}
              className="rounded-xl  object-contain"
              priority
            />
          </div>
        </div>
        <div className="text-center z-10">
          <button
            onClick={handleScroll}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow-xl hover:bg-orange-500 hover:text-white font-bold transition-all duration-300 "
          >
            Explore More <FaArrowDownLong />
          </button>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
