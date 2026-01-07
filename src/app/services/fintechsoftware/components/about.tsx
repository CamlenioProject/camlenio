"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove">
      <div className="w-full max-w-7xl mx-auto lg:min-h-[80vh] px-6 py-10 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="relative hidden flex-shrink-0 w-full lg:w-1/2 md:flex justify-start lg:justify-start items-start lg:items-start">
          <div className="relative w-[500px] h-[420px]">
            <div
              ref={mainImageRef}
              className="absolute bottom-0 left-0 w-[420px] h-[400px] rounded-[3rem] border border-gray-100 overflow-hidden shadow-lg"
            >
              <Image
                src="/ServiceDropdown/fintechsoftware/about-main.jpg"
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
                src="/ServiceDropdown/fintechsoftware/about-medium.jpg"
                alt="Medium"
                width={400}
                height={400}
                className="object-cover object-right-bottom w-full h-full"
              />
            </div>

            <div
              ref={smallImageRef}
              className="absolute top-14 -right-10 w-[160px] h-[180px] rounded-[3rem] border border-gray-100 overflow-hidden shadow-md"
            >
              <Image
                src="/ServiceDropdown/fintechsoftware/about-smal.jpg"
                alt="Small"
                width={300}
                height={300}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>

        <div
          ref={textContainerRef}
          className="lg:w-1/2 space-y-6 text-left lg:text-left"
        >
          <p className="text-orange-500 font-medium">About —</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Build the Future of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Finance <br />
            </span>
            with Us
          </h2>

          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base  font-sans text-justify">
            Whether you’re launching a new fintech product or upgrading an
            existing platform, our team helps you innovate faster, reduce risks,
            and scale efficiently.
            <br />
            Contact us today to discuss your fintech software requirements Book
            a demo and start your digital finance journey
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <div className="min-w-[140px] max-w-[180px] flex-1 bg-orange-100 rounded-2xl px-2 md:px-4 py-3 text-center shadow-sm">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold">2000+</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Our Explorers</p>
            </div>

            <div className="min-w-[140px] max-w-[180px] flex-1 bg-orange-100 rounded-2xl px-2 md:px-4 py-3 text-center shadow-sm">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold">100+</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Destinations</p>
            </div>

            <div className="min-w-[140px] max-w-[180px] flex-1 bg-orange-100 rounded-2xl px-2 md:px-4 py-3 text-center shadow-sm">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold">20+</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
