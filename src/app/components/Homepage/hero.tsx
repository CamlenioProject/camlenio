"use client";
import Image from "next/image";
import { m, LazyMotion, domMax } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { useState, useEffect, useMemo } from "react";
import { HeroTextAnimate } from "../HeroTextAnimate";
import BackToTopButton from "../BackToTopButton";
import { useRouter } from "next/navigation";
import { LogoSlider } from "./logoslider";
import { Button } from "../ui/Button";

const Hero = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        setActiveIndex((prev) => (prev + 1) % 3);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const cards = useMemo(
    () => [
      {
        id: 1,
        tag: "Customized",
        tagColor: "bg-blue-100 text-blue-600",
        title: "Customized Software Tailored to Your Growth",
        decs: "We develop software solutions that adapt to your unique business needs. Our customized technology evolves as your business grows.",
        image: "/Homepage/hero/Customized.webp",
      },
      {
        id: 2,
        tag: "Fintech",
        tagColor: "bg-pink-100 text-pink-600",
        title: "Empowering Businesses with Smart Fintech Solutions",
        decs: "Fintech blends finance with technology to create smarter, faster, and more secure digital financial Software.",
        image: "/Homepage/hero/fintech.webp",
      },
      {
        id: 3,
        tag: "Innovation",
        tagColor: "bg-orange-100 text-orange-600",
        title: "Artificial Intelligence Solutions by Camlenio Software",
        decs: "We harness the power of Artificial Intelligence (AI) to help businesses automate processes, analyze data intelligently.",
        image: "/Homepage/hero/ai.webp",
      },
    ],
    []
  );

  return (
    <LazyMotion features={domMax}>
      <div className="relative  pt-20 md:py-12 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ willChange: "transform" }}
            className="flex flex-col items-center justify-center w-full md:w-[50%]"
          >
            <div className="max-w-2xl space-y-4 px-4 sm:px-1 md:mt-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-gray-900 leading-tight">
                Camlenio is a Leading Software
                <br />
                Development in{" "}
                <HeroTextAnimate
                  words={[
                    "Custom Solution",
                    "Fintech Software",
                    "Digital Solutions",
                  ]}
                />
              </h1>

              <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-sans">
                <li className="flex items-center gap-3">
                  <GiCheckMark className="text-orange-500 flex-shrink-0" />
                  <span>
                    Trusted by clients for innovation, reliability, and timely
                    delivery
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <GiCheckMark className="text-orange-500 flex-shrink-0" />
                  <span>
                    Businesses with latest technologies and smart digital
                    solutions
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <GiCheckMark className="text-orange-500 flex-shrink-0" />
                  <span>
                    From Startup to Enterprise We Develop Software That Grows
                    With You.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <GiCheckMark className="text-orange-500 flex-shrink-0" />
                  <span>
                    Building secure, scalable, and customizable platforms
                  </span>
                </li>
              </ul>
              <Button
                onClick={() => router.push("/contact")}
                size="xl"
                className="my-6 self-center md:self-start shadow-md"
              >
                Schedule a call
              </Button>
            </div>
          </m.div>
          {/* right */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ willChange: "transform" }}
            className="relative h-[36rem] flex-grow flex flex-col items-center justify-center px-2 py-28 md:py-20 md:rounded-bl-[3rem] md:w-[50%] overflow-hidden"
          >

            {/* Tech Stand Base - Replicating Reference in Orange Theme */}

            {/* 1. Base Glow (Ambient Ground) */}
            <div className="absolute bottom-[0%] md:bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[90px] md:w-[200px] md:h-[80px] bg-orange-500/20 blur-[50px] rounded-full pointer-events-none opacity-50" />

            {/* 2. Outer Dashed Ring (Tech Perimeter) */}
            <div className="absolute bottom-[5%] md:bottom-[5%] left-1/2 -translate-x-1/2 w-[280px] h-[75px] md:w-[380px] md:h-[100px] border-[1.5px] border-dashed border-orange-300/40 rounded-[100%] pointer-events-none" />

            {/* 3. Middle Dot Ring (Digital Markers) */}
            {/* <div className="absolute bottom-[7%] md:bottom-[7%] left-1/2 -translate-x-1/2 w-[240px] h-[65px] md:w-[320px] md:h-[95px] border-[3px] border-dotted border-orange-500/50 rounded-[100%] pointer-events-none" /> */}

            {/* 4. Tier 1 - Main Platform Base */}
            <div className="absolute bottom-[10%] md:bottom-[10%] left-1/2 -translate-x-1/2 w-[200px] h-[50px] md:w-[260px] md:h-[70px] bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-400/50 rounded-[100%] pointer-events-none shadow-[0_0_15px_rgba(249,115,22,0.2)]" />

            {/* 5. Tier 2 - Inner Glowing Ring */}
            <div className="absolute bottom-[12%] md:bottom-[12%] left-1/2 -translate-x-1/2 w-[150px] h-[40px] md:w-[200px] md:h-[55px] border-[2px] border-orange-300 rounded-[100%]  pointer-events-none bg-orange-500/5" />


            {/* Rising Energy Rings - Power Transfer Effect */}
            <m.div
              initial={{ bottom: "25%", opacity: 0, scale: 0.5, width: "140px", height: "40px" }}
              animate={{
                bottom: "55%",
                opacity: [0, 0.4, 0],
                scale: 1.5,
                width: "200px",
                height: "60px",
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 border border-orange-300/30 rounded-[100%] pointer-events-none"
            />
            <m.div
              initial={{ bottom: "25%", opacity: 0, scale: 0.5, width: "100px", height: "30px" }}
              animate={{
                bottom: "50%",
                opacity: [0, 0.3, 0],
                scale: 1.2,
                width: "160px",
                height: "50px",
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
              className="absolute left-1/2 -translate-x-1/2 border border-orange-200/20 rounded-[100%] pointer-events-none"
            />

            {/* 7. Vertical Light Beam - Enhanced Flow */}
            <m.div
              animate={{
                background: [
                  "linear-gradient(to top, rgba(251,146,60,0.3), rgba(253,186,116,0.1), transparent)",
                  "linear-gradient(to top, rgba(251,146,60,0.4), rgba(253,186,116,0.2), transparent)",
                  "linear-gradient(to top, rgba(251,146,60,0.3), rgba(253,186,116,0.1), transparent)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[13%] md:bottom-[13%] left-1/2 -translate-x-1/2 w-[90px] h-[300px] md:w-[120px] blur-[20px] pointer-events-none rounded-full"
            />

            {/* 8. Beam Core - High Intensity Transfer Line */}
            <m.div
              animate={{ height: ["300px", "320px", "300px"], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[13%] md:bottom-[13%] left-1/2 -translate-x-1/2 w-[30px] md:w-[40px] bg-gradient-to-t from-orange-100/50 via-transparent to-transparent blur-[8px] pointer-events-none"
            />
            <div
              className="relative flex justify-center items-center w-full h-full [perspective:1200px]"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {cards.map((card, index) => {
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;

                const relativePos = (index - activeIndex + 3) % 3;
                const isCenter = relativePos === 0;
                const isLeft = relativePos === 2;
                const isRight = relativePos === 1;

                const linearPos = isLeft ? -1 : isCenter ? 0 : 1;

                const hoveredRelativePos = isAnyHovered ? (hoveredIndex! - activeIndex + 3) % 3 : 0;
                const hoveredLinearPos = hoveredRelativePos === 2 ? -1 : hoveredRelativePos === 0 ? 0 : 1;

                const initial = {
                  x: isCenter ? "0%" : isLeft ? "-55%" : "55%",
                  y: isCenter ? -60 : -40, // Lifted up: Center -60, Sides -40 (was -40, -20)
                  z: isCenter ? 40 : 10,
                  rotateY: isCenter ? 0 : isLeft ? 35 : -35,
                  scale: isCenter ? 1.1 : isLeft ? 1 : 1.04,
                  zIndex: isCenter ? 3 : isLeft ? 2 : 1,
                  opacity: isCenter ? 1 : 0.6, // Fade non-center cards
                };
                const hovered = {
                  x: isHovered
                    ? "0%"
                    : linearPos < hoveredLinearPos
                      ? "-65%"
                      : "65%",
                  y: isHovered ? -70 : -20, // Lifted hovered card more (-70, -20)
                  z: isHovered ? 50 : linearPos < hoveredLinearPos ? 40 : -60,
                  rotateY: isHovered
                    ? 0
                    : linearPos < hoveredLinearPos
                      ? 40
                      : -40,
                  scale: isHovered ? 1.15 : 0.9,
                  opacity: 1,
                };
                return (
                  <m.div
                    key={card.id}
                    onHoverStart={() => setHoveredIndex(index)}
                    onTap={() => setHoveredIndex(index)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      ...(isAnyHovered ? hovered : initial),
                      opacity: isAnyHovered ? (isHovered ? 1 : 0.3) : (isCenter ? 1 : 0.6),
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    viewport={{ once: true }}
                    style={{
                      zIndex: isHovered ? 50 : isCenter ? 10 : isLeft ? 5 : 4,
                      willChange: "transform",
                    }}
                    className="absolute bg-white p-5 rounded-2xl shadow-xl flex flex-col w-[12rem] md:w-[10rem] lg:w-[14rem]"
                  >
                    <m.span
                      layout
                      className={`text-[.80rem] font-semibold px-2 py-1 rounded-lg ${card.tagColor} ${isCenter ? "self-center" : isLeft ? "self-start" : "self-end"
                        }`}
                    >
                      {card.tag}
                    </m.span>
                    <h3 className="mt-3 font-semibold text-gray-900 text-xs">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-gray-900 text-[11px] text-justify">
                      {card.decs}
                    </p>
                    {card.image && (
                      <div className="mt-3 w-full h-24 rounded-lg overflow-hidden relative shadow-inner">
                        <Image
                          src={card.image}
                          alt={card.tag}
                          fill
                          className="object-cover"
                          sizes="300px"
                          priority={index === 1}
                        />
                      </div>
                    )}
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>



        <BackToTopButton />
      </div>
    </LazyMotion>
  );
};

export default Hero;