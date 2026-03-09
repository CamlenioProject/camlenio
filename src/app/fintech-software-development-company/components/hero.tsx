"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = leftContentRef.current?.parentElement;

    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true });
    gsap.config({ force3D: true, autoSleep: 60, nullTargetWarn: false });

    const allElements = [
      leftContentRef.current,
      topLeftRef.current,
      topRightRef.current,
      bottomLeftRef.current,
      bottomRightRef.current,
    ].filter(Boolean);

    gsap.set(allElements, { willChange: "transform, opacity" });

    const scrollTriggerConfig = {
      trigger: triggerElement,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      markers: false,
      anticipatePin: 1,
    };

    gsap.fromTo(
      leftContentRef.current,
      { y: "-30%", opacity: 0, filter: "blur(5px)" },
      {
        y: "0%",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power2.inOut",
        clearProps: "transform, opacity, filter",
        scrollTrigger: scrollTriggerConfig,
      }
    );

    const imgTimeline = gsap.timeline({ scrollTrigger: scrollTriggerConfig });
    const imageRefs = [
      topLeftRef.current,
      topRightRef.current,
      bottomLeftRef.current,
      bottomRightRef.current,
    ].filter(Boolean);

    imgTimeline.fromTo(
      imageRefs,
      { x: "25%", opacity: 0, filter: "blur(3px)" },
      {
        x: "0%",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
        clearProps: "transform, opacity, filter",
      },
      0.2
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto lg:min-h-[80vh] pt-28 md:pt-20 grid grid-cols-1 items-center gap-6 px-4 sm:px-6 md:min-h-screen md:grid-cols-2 lg:gap-12 lg:px-8 xl:px-16">
        <div ref={leftContentRef} className="animation-optimized">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-700 text-xs font-bold uppercase tracking-wider">
              Fintech Software Development
            </span>
          </div>

          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}
            >
              Fintech Software
            </span>{" "}
            Development
          </h1>

          <p className="max-w-md sm:max-w-2xl text-gray-600 text-sm md:text-base my-6 font-sans text-justify leading-relaxed">
            Update your Financial services with creative FinTech Software
            Development designed for modern businesses. We create scalable,
            secure, high-performance fintech platforms, including payment
            systems, digital banking, and financial applications that streamline
            transactions, improve customer experience, and support businesses
            that grow quickly in the digital finance ecosystem.
          </p>

          {/* Mini Feature Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Shield, label: "Secure Platforms" },
              { icon: Zap, label: "High Performance" },
              { icon: TrendingUp, label: "Scalable Solutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <button
                type="button"
                className="group inline-flex items-center justify-center cursor-pointer rounded-full px-7 py-3.5 bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)]"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full animation-optimized">
          <div className="grid grid-cols-2 grid-rows-1 md:grid-rows-2 gap-3 sm:gap-4 lg:gap-6 py-4 md:py-8">
            {/* Top-left: tall image */}
            <div ref={topLeftRef} className="flex justify-end">
              <div className="relative aspect-[3/4] w-full sm:w-4/5 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech1.webp"
                  alt="Fintech Software Development Platform"
                  width={400}
                  height={533}
                  className="h-full w-full object-cover object-bottom"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute left-3 top-3 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-2 shadow-md">
                  <p className="text-xs font-bold text-gray-900">100+ Fintech Projects</p>
                  <p className="text-[10px] text-gray-500">Secure & Scalable Solutions</p>
                </div>
              </div>
            </div>

            {/* Top-right: wide image */}
            <div ref={topRightRef} className="flex justify-start">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech2.webp"
                  alt="Digital Banking Software Development"
                  width={500}
                  height={281}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute left-3 top-3 rounded-xl bg-white/90 backdrop-blur-sm px-3 py-2 text-xs font-bold text-gray-900 shadow-md flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  100% Verified
                </div>
              </div>
            </div>

            {/* Bottom-left: wide image */}
            <div ref={bottomLeftRef} className="hidden md:flex justify-end">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech3.webp"
                  alt="Financial Software Development Services"
                  width={500}
                  height={281}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom-right: tall image */}
            <div ref={bottomRightRef} className="hidden md:flex justify-start">
              <div className="relative aspect-[3/4] w-full sm:w-4/5 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech4.webp"
                  alt="B2B Fintech Software Development"
                  width={400}
                  height={281}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
