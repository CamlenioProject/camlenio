import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/app/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const leftContentRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftContentRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        imageContainerRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-20 md:py-22 lg:py-28">
        <div
          ref={leftContentRef}
          className="flex-1 max-w-2xl text-center lg:text-left lg:mb-0 mt-8 lg:mt-0"
        >
          <h1 className="text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-4">
            Smart Billing{" "}
            <span
              className="block text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Made Effortless
            </span>
          </h1>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify">
            Simplify your invoicing, track payments in real-time, and manage
            clients all from one intuitive billing platform.
          </p>

          <div className="flex xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              size="xl"
              className="min-w-[140px] text-sm xs:text-base border-none"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="min-w-[140px] text-sm xs:text-base bg-white/80 hover:bg-white text-gray-900 hover:text-gray-900 border-gray-200"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={imageContainerRef}
          className="flex-1 flex items-center justify-center w-full max-w-2xl relative"
        >
          <div className="relative w-full max-w-[160px] h-[220px] sm:max-w-[220px] sm:h-[300px] md:max-w-[240px] md:h-[330px] lg:max-w-[300px] lg:h-[400px] xl:max-w-[410px] xl:h-[550px] 2xl:max-w-[450px] 2xl:h-[600px] mx-auto">
            <div className="overflow-hidden rounded-full w-full h-full">
              <Image
                src="/ServiceDropdown/fintechsoftware/line33.png"
                alt="Decorative circular SVG background"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute -top-4 md:-top-10 -left-0 md:-left-20 overflow-visible">
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80">
              <Image
                src="/ServiceDropdown/fintechsoftware/start1.svg"
                alt="Man holding laptop illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 480px) 128px, (max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-5 w-20 h-20 opacity-10 sm:opacity-20 sm:left-10 sm:bottom-20">
        <div className="w-full h-full bg-orange-500 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-5 w-16 h-16 opacity-10 sm:opacity-20 sm:right-10 sm:top-32">
        <div className="w-full h-full bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
