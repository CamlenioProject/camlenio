"use client";

import Image from "next/image";
import BackToTopButton from "../../BackToTopButton";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
  {
    title: "Editorially",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
  {
    title: "Algochurn",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "Creme Digital",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
];

export default function Hero() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smoother spring config for better performance
  const springConfig = { stiffness: 250, damping: 40, bounce: 0 };

  // Responsive scroll transforms
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  // Smoother 3D effects
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-80, 80]),
    springConfig
  );

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div
        ref={ref}
        className="h-[140vh] md:h-[200vh] lg:h-[220vh] xl:h-[200vh] 2xl:h-[160vh] max-w-[100rem] mx-auto py-16 md:py-20 lg:py-24 relative overflow-hidden antialiased flex flex-col [perspective:200px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{ rotateX, rotateZ, translateY, opacity }}
          className="w-full"
        >
          {/* First Row */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-4 lg:space-x-6 mb-4 md:mb-8 lg:mb-10">
            {firstRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div className="flex flex-row mb-4 md:mb-8 lg:mb-10 space-x-2 md:space-x-4 lg:space-x-6">
            {secondRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateXReverse}
              />
            ))}
          </motion.div>

          {/* Third Row */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-4 lg:space-x-6 mb-4 md:mb-8 lg:mb-10">
            {thirdRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <BackToTopButton />
    </div>
  );
}

const Header = () => (
  <div className="max-w-7xl relative mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
    <div className="flex flex-col items-start justify-start text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-tight">
        Simplify Customer Management with Powerful{" "}
        <span
          className="text-orange-500 inline-block"
          style={{
            textShadow:
              "-1px -1px 0px #da5f00, 1px 1px 0px #fff, 2px 3px 0px #ff582336",
          }}
        >
          CRM Solutions
        </span>
      </h1>
      <p className="max-w-2xl sm:max-w-3xl text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 font-sans leading-relaxed">
        Transform your business with our comprehensive CRM platform. Streamline
        sales, automate workflows, and grow your customer relationships
        effortlessly.
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Get Started Free
        </button>
        <button className="border border-gray-300 hover:border-gray-400 bg-transparent text-gray-700 hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
          Watch Demo
        </button>
      </div>
    </div>
  </div>
);

const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{
      y: -8,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    }}
    className="group w-[14rem] xs:w-[18rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem] xl:w-[32rem] 2xl:w-[24rem] h-[14vh] sm:h-[10vh] md:h-[12rem] lg:h-[12rem] xl:h-[16rem] relative shrink-0 rounded-md sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <a href={product.link} className="block w-full h-full">
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, (max-width: 1024px) 200px, (max-width: 1280px) 250px, 300px"
        priority={false}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
    </a>
    <h2 className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-medium text-center transition-opacity duration-300 px-2 w-full">
      {product.title}
    </h2>
  </motion.div>
);
