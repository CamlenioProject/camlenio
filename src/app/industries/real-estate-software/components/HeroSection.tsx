"use client";

import { m } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:pl-20 lg:pl-28 py-24 md:py-0 relative z-20">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold mb-4 border border-orange-200">
            <FaBuilding className="text-orange-500" />
            Expert Real Estate Software Provider
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Real Estate <br className="hidden sm:block" />
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Software Development
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            At Camlenio Software, we build custom real estate software that helps brokers, agents, and property managers work smarter. Our secure, scalable solutions simplify daily operations, improve customer engagement, and support business growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <m.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.push("/contact")} className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-orange-600 shadow-lg shadow-orange-500/30">
              Get Free Consultation
            </m.button>
          </div>
        </m.div>
      </div>

      {/* Right Hero Visual - Background Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative flex items-center justify-center md:rounded-bl-[100px] overflow-hidden group border-l-0 md:border-l-4 border-white">
        {/* Main Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
          style={{ backgroundImage: "url('/real_estate_hero.webp')" }}
        />

        {/* Shading & Opacity Overlays */}
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
        {/* Desktop Only Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/10 to-transparent hidden md:block" />
      </div>
    </section>
  );
};
