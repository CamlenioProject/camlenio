"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecommendSection = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const mediumImageRef = useRef<HTMLImageElement>(null);
  const smallImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const textEl = textContainerRef.current;
    const mainImg = mainImageRef.current;
    const mediumImg = mediumImageRef.current;
    const smallImg = smallImageRef.current;
    const triggerElement = textContainerRef.current?.parentElement;

    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    const scrollTriggerConfig = {
      trigger: triggerElement,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      markers: false,
      anticipatePin: 1,
    };

    gsap.fromTo(
      mainImg,
      {
        y: "30%", 
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        y: "0%", 
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power2.out",
        clearProps: "transform, opacity, filter",
        scrollTrigger: scrollTriggerConfig,
      }
    );

    gsap.fromTo(
      mediumImg,
      {
        y: "30%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      smallImg,
      {
        y: "30%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      textEl,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-orange-200 to-gray-50 bg-[length:200%_200%] animate-gradientMove">
      <div className="w-full max-w-7xl mx-auto lg:min-h-[80vh] px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start">
          <div className="relative w-[500px] h-[420px]">
            <div
              ref={mainImageRef}
              className="absolute bottom-0 left-0 w-[420px] h-[400px] rounded-[3rem] border border-gray-100 overflow-hidden shadow-lg"
            >
              <Image
                src="/ServiceDropdown/hrmssoftware/bg-hrms.jpg"
                alt="Main"
                width={800}
                height={400}
                className="object-cover object-left-top w-full h-full"
              />
            </div>

            <div
              ref={mediumImageRef}
              className="absolute -bottom-10 right-0 w-[260px] h-[280px] rounded-[3rem] border border-gray-100 overflow-hidden shadow-md"
            >
              <Image
                src="/ServiceDropdown/hrmssoftware/bg-hrms.jpg"
                alt="Medium"
                width={400}
                height={400}
                className="object-cover object-left-top w-full h-full"
              />
            </div>

            <div
              ref={smallImageRef}
              className="absolute top-14 -right-10 w-[160px] h-[180px] rounded-[3rem] border border-gray-100 overflow-hidden shadow-md"
            >
              <Image
                src="/ServiceDropdown/hrmssoftware/bg-hrms.jpg"
                alt="Small"
                width={300}
                height={300}
                className="object-cover object-left-top w-full h-full"
              />
            </div>
          </div>
        </div>

        <div
          ref={textContainerRef}
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <p className="text-orange-500 font-medium">About —</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We Recommend <br /> Beautiful Destinations <br /> Every Month
          </h2>
          <p className="text-gray-600 max-w-lg">
            Let&apos;s choose your dream destinations here! We provide many
            destinations and offer the best experiences every week.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <div className="bg-orange-100 rounded-2xl px-6 py-4 text-center shadow-sm">
              <h3 className="text-xl font-bold">2000+</h3>
              <p className="text-gray-600 text-sm">Our Explorers</p>
            </div>
            <div className="bg-orange-100 rounded-2xl px-6 py-4 text-center shadow-sm">
              <h3 className="text-xl font-bold">100+</h3>
              <p className="text-gray-600 text-sm">Destinations</p>
            </div>
            <div className="bg-orange-100 rounded-2xl px-6 py-4 text-center shadow-sm">
              <h3 className="text-xl font-bold">20+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendSection;
