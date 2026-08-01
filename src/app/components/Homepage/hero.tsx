"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";
import { HeroTextAnimate } from "../HeroTextAnimate";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { heroData } from "@/config/homepage";
import { LogoSlider } from "./logoslider";

const Hero = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative min-h-[82vh] pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden flex flex-col justify-between">
      <div className="flex flex-col md:flex-row w-full flex-grow items-center justify-center">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform" }}
          className="flex flex-col items-center justify-center w-full md:w-[50%]"
        >
          <div className="max-w-2xl space-y-4 px-4 sm:px-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {heroData.titlePrefix}
              <br />
              {heroData.titleSuffix}{" "}
              <HeroTextAnimate
                words={heroData.words}
              />
            </h1>

            <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-sans">
              {heroData.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <GiCheckMark className="text-orange-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => router.push("/contact")}
              size="xl"
              className="my-6 self-center md:self-start shadow-md"
            >
              Schedule a call
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform" }}
          className="relative h-[36rem] w-full md:w-[50%] flex-grow flex flex-col items-center justify-center px-2 py-28 md:py-20 md:rounded-bl-[3rem] overflow-hidden"
        >
          <div
            className="relative flex justify-center items-center w-full h-full [perspective:1200px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {heroData.cards.map((card, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              const relativePos = (index - activeIndex + 3) % 3;
              const isCenter = relativePos === 0;
              const isLeft = relativePos === 2;
              const linearPos = isLeft ? -1 : isCenter ? 0 : 1;
              const hoveredRelativePos = isAnyHovered ? (hoveredIndex! - activeIndex + 3) % 3 : 0;
              const hoveredLinearPos = hoveredRelativePos === 2 ? -1 : hoveredRelativePos === 0 ? 0 : 1;

              const initialStyles = {
                x: isCenter ? "0%" : isLeft ? "-55%" : "55%",
                y: isCenter ? -60 : -40,
                z: isCenter ? 40 : 10,
                rotateY: isCenter ? 0 : isLeft ? 35 : -35,
                scale: isCenter ? 1.1 : isLeft ? 1 : 1.04,
                zIndex: isCenter ? 3 : isLeft ? 2 : 1,
                opacity: isCenter ? 1 : 0.6,
              };

              const hoveredStyles = {
                x: isHovered ? "0%" : linearPos < hoveredLinearPos ? "-65%" : "65%",
                y: isHovered ? -70 : -20,
                z: isHovered ? 50 : linearPos < hoveredLinearPos ? 40 : -60,
                rotateY: isHovered ? 0 : linearPos < hoveredLinearPos ? 40 : -40,
                scale: isHovered ? 1.15 : 0.9,
                opacity: 1,
              };

              return (
                <motion.div
                  key={card.id}
                  onHoverStart={() => setHoveredIndex(index)}
                  onTap={() => setHoveredIndex(index)}
                  initial={{ opacity: isCenter ? 1 : 0.6 }}
                  animate={{
                    ...(isAnyHovered ? hoveredStyles : initialStyles),
                    opacity: isAnyHovered ? (isHovered ? 1 : 0.3) : (isCenter ? 1 : 0.6),
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
                  style={{
                    zIndex: isHovered ? 50 : isCenter ? 10 : isLeft ? 5 : 4,
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute bg-white p-5 rounded-2xl shadow-xl flex flex-col w-[12rem] md:w-[10rem] lg:w-[14rem] transform-gpu"
                >
                  <motion.span
                    layout
                    className={`text-[.80rem] font-semibold px-2 py-1 rounded-lg ${card.tagColor} ${isCenter ? "self-center" : isLeft ? "self-start" : "self-end"}`}
                  >
                    {card.tag}
                  </motion.span>
                  <h3 className="mt-3 font-semibold text-gray-900 text-xs">{card.title}</h3>
                  <p className="mt-3 text-gray-900 text-[11px] text-justify">{card.decs}</p>
                  {card.image && (
                    <div className="mt-3 w-full h-24  overflow-hidden relative shadow-inner pointer-events-none">
                      <Image
                        src={card.image}
                        alt={card.tag}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 192px, (max-width: 1024px) 160px, 224px"
                        priority={isCenter || index === 1}
                        style={{
                          willChange: "opacity, transform, filter",
                          display: "inline-block",
                          backfaceVisibility: "hidden",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="w-full mt-auto relative z-10 py-4">
        <LogoSlider />
      </div>
    </div>
  );
};

export default Hero;