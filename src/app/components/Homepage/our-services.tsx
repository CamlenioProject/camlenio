"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../../lib/utils";
import GsapReveal from "../GsapReveal";

const services = [
  {
    title: "Mobile App Development",
    description:
      "The need for mobile app development is realised by multiple brands today since they find the need to connect with customers on a personal level. At Helpful Insight we provide the best Android and iOS Mobile Applications for your unique business requirements.",
    image: "/Homepage/mobile-app-dev.svg",
    tags: [
      "iOS App Development",
      "Android App Development",
      "React Native Application",
      "Flutter Application",
    ],
    bg: "bg-transparent",
  },
  {
    title: "Web Development",
    description:
      "The need to have a strong digital presence is the need of the hour. At Helpful Insight our expert team helps you with website development according to your needs and preferences. We deliver strategically and aesthetically designed websites for your business.",
    image: "/Homepage/web-dev.svg",
    tags: [
      "React JS Expert",
      "Angular JS Expert",
      "NodeJS Expert",
      "Laravel Expert",
    ],
    bg: "bg-transparent",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Today customers are on the look out for online shopping avenues and hence your brand needs to have an online presence. At Helpful Insight our dedicated team of experts provides the best e-commerce solutions to your business needs and requirements.",
    image: "/Homepage/e-commerce.svg",
    tags: ["Woocommerce", "Shopify", "Magento"],
    bg: "bg-transparent",
  },
  {
    title: "User Experience",
    description:
      "User Experience plays a major role in customer conversion. At Helpful Insight we create the best User Experience journey for your customers that eventually lead to sales conversion. Right from the logos to the layout, your brand will get the personalized feel it deserves.",
    image: "/Homepage/user-experience.svg",
    tags: ["Figma", "Adobe XD"],
    bg: "bg-transparent",
  },
  {
    title: "Digital Transformation",
    description:
      "IOT Development and other digital transformations are on the rise. At Helpful Insight, our team of expert developers think two steps ahead and design a personalized digital transformation offering for your business needs. Crypto and NFT led requirements are also catered to with utmost dedication.",
    image: "/Homepage/digital-transformation.svg",
    tags: ["Vue JS Expert", "Electron JS", "Node JS"],
    bg: "bg-transparent",
  },
  {
    title: "Staff Augmentation",
    description:
      "We provide staff augmentation services to expand your team with qualified and experienced members. Acquire our iOS, Android, and Web developers, DevOps and QA engineers, UI/UX designers in no time.",
    image: "/Homepage/staff-augmentation.svg",
    tags: [],
    bg: "bg-transparent",
  },
];

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div id="next-section" className=" scroll-mt-20 min-h-screen px-6">
      <div className="max-w-[85rem] mx-auto text-center">
        <GsapReveal>
          <span className="inline-block text-gray-900 font-semibold my-2 text-2xl">
            OUR SERVICES
          </span>
        </GsapReveal>
        <GsapReveal>
          <h2 className="text-3xl md:text-5xl font-semibold my-2 text-gray-900">
            Website & Mobile App Development Services
          </h2>
        </GsapReveal>
        <GsapReveal>
          <p className="text-gray-700 max-w-full mx-auto">
            Our offshore IT consulting services along with the AI-powered core
            helps top companies stay competitive, win new markets and increase
            shareholder
            <br />
            value. Choose from a wide range of custom software development
            services and get extensive
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 max-w-[90rem] mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-orange-200 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        opacity: { duration: 0.25, ease: "easeInOut" },
                        layout: {
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                          mass: 0.8,
                        },
                      },
                    }}
                  />
                )}
              </AnimatePresence>
              <GsapReveal>
                <motion.div
                  whileHover={{ transition: { duration: 0.3 } }}
                  className={cn(
                    "relative z-20 h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl  border-1 border-gray-200 bg-transparent flex flex-col"
                  )}
                >
                  <div
                    className={cn(
                      service.bg,
                      "flex items-center justify-center p-6"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain rounded-3xl"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-900 text-center md:text-left">
                      {service.title}
                    </h3>
                    <p className="text-base leading-tight text-gray-700 text-center md:text-left">
                      {service.description}
                    </p>

                    {service.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 hover:bg-orange-900 cursor-pointer text-gray-100 hover:text-gray-900 text-xs font-medium px-3 py-1 rounded shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="px-6 pb-6">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-sm font-medium py-2 rounded-lg flex items-center justify-center gap-2 text-white">
                      EXPLORE NOW <span className="text-lg">→</span>
                    </button>
                  </div>
                </motion.div>
              </GsapReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
