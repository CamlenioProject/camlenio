"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/app/components/interactive-hover-button";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "@/app/components/BackToTopButton";
import MetaBalls from "@/app/components/metaBalls";

// const MetaBalls = dynamic(() => import("@/app/components/metaBalls"), {
//   ssr: false,
// });

export default function HeroSection() {
  const handleScroll = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: "#next-section",
      ease: "power4.inOut",
    });
  };
  const images = ["/ServiceDropdown/uiuxdesign/uiuxhero.png"];
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (y / offsetHeight - 0.5) * -20;
    const rotateY = (x / offsetWidth - 0.5) * 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div className="px-6 md:px-16 bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="relative max-w-7xl pt-14 md:min-h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className=" hidden md:block absolute top-1/2 left-1/3 min-w-7xl -translate-y-1/2 z-7">
          <MetaBalls
            color="#A5C9FF"
            cursorBallColor="#A5C9FF"
            cursorBallSize={2}
            ballCount={15}
            animationSize={20}
            enableMouseInteraction={false}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1}
            speed={0.3}
          />
        </div>
        <div className=" w-full text-center md:text-left relative z-10">
          <h1
            className="text-4xl md:text-3xl lg:text-[3.02rem]  font-bold mb-4 
             bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 
             bg-clip-text text-transparent"
          >
            Camlenio Crafts UI/UX
            <br /> with Stunning Animations.
          </h1>

          <p className="text-lg max-w-4xl text-gray-600 mb-6">
            I create user-centered interfaces with a focus on clean design and
            smooth experiences. Not just UI, but full UX journeys.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <InteractiveHoverButton className="px-6 py-3 rounded-xl border border-gray-400 text-gray-800 font-semibold hover:bg-gray-100 transition">
              Get Started
            </InteractiveHoverButton>
          </div>
        </div>
        <div className="w-full max-w-[700px] aspect-[900/680]">
          <motion.div
            className="w-full h-full rounded-2xl relative z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ stiffness: 700, damping: 20 }}
          >
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 1 }}
              whileInView={{ opacity: 1 }}
              animate={{
                y: [-20, 20],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <Image
                src={images[index]}
                alt="UI Mockup"
                width={600}
                height={300}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="text-center z-10">
          <button
            onClick={handleScroll}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow-xl hover:bg-orange-600 hover:text-white font-bold transition-all duration-300 "
          >
            Explore More <FaArrowDownLong />
          </button>
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}
