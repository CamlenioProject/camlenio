"use client";

import Image from "next/image";
import BackToTopButton from "@/app/components/BackToTopButton";
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
    link: "#l",
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

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-80, 80]),
    springConfig
  );

  return (
    <>
      <div
        ref={ref}
        className="h-[160vh] xl:[100vh] max-w-7xl mx-auto py-2 relative overflow-hidden antialiased flex flex-col [perspective:500px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 mb-10">
            {firstRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-10 aspect-[5/4] space-x-6">
            {secondRow.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={translateXReverse}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <BackToTopButton />
    </>
  );
}

const Header = () => (
  <div className="max-w-7xl relative mx-auto py-20 px-4 w-full">
    <h1 className="text-2xl md:text-[4.5rem] font-black text-gray-900">
      Simplify Customer Management with Powerful CRM Solutions
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-800">
      Transform your business with our comprehensive CRM platform. Streamline
      sales, automate workflows, and grow your customer relationships
      effortlessly.
    </p>
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
    whileHover={{ y: -10 }}
    className="group w-[30rem] h-[15rem]  relative shrink-0 max-w-3xl"
  >
    <a href={product.link} className="block group-hover:shadow-2xl">
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        className="object-contain w-full object-top rounded-3xl"
        sizes="(max-width: 768px) 100vw, 600px"
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-70 bg-black/40 pointer-events-none rounded-3xl transition-opacity duration-500"></div>
    </a>
    <h2 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
      {product.title}
    </h2>
  </motion.div>
);
