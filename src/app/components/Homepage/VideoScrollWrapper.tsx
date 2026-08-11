"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { itSolutionData } from "@/config/homepage";
import ItSolution from "./Itsolution";

const VideoScrollWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const itSolutionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const itSolutionEl = itSolutionRef.current;
    const videoWrapperEl = videoWrapperRef.current;
    const containerEl = containerRef.current;
    const bgTextEl = bgTextRef.current;

    if (!containerEl || !videoWrapperEl || !itSolutionEl || !bgTextEl) return;

    const target = itSolutionEl.querySelector("[data-video-target]") as HTMLElement;
    if (!target) return;

    const boxes = itSolutionEl.querySelectorAll("[data-anim]");

    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        if (!isDesktop) {
          gsap.set(videoWrapperEl, { display: "none", opacity: 0 });
          gsap.set(itSolutionEl, { opacity: 1 });
          gsap.set(boxes, { opacity: 1, y: 0 });
          return;
        }

        // Helper to compute target card coordinates relative to pinned container
        const getTargetCoords = () => {
          const targetRect = target.getBoundingClientRect();
          const containerRect = containerEl.getBoundingClientRect();
          return {
            width: targetRect.width,
            height: targetRect.height,
            left: targetRect.left - containerRect.left + targetRect.width / 2,
            top: targetRect.top - containerRect.top + targetRect.height / 2,
          };
        };

        const getStartCoords = () => {
          const t = getTargetCoords();
          const targetRatio = t.width > 0 && t.height > 0 ? t.width / t.height : 16 / 9;
          const startWidth = Math.min(window.innerWidth * 0.65, 840);
          const startHeight = startWidth / targetRatio;
          return {
            width: startWidth,
            height: startHeight,
            left: containerEl.clientWidth / 2,
            top: containerEl.clientHeight / 2,
          };
        };

        // 1. Initial Desktop Floating Video State (Hero/Cinematic size in center)
        gsap.set(videoWrapperEl, {
          display: "block",
          width: () => getStartCoords().width,
          height: () => getStartCoords().height,
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "2.5rem",
          opacity: 0,
          scale: 1,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
          force3D: true,
          willChange: "transform, width, height, left, top",
        });

        gsap.set(itSolutionEl, { opacity: 0 });
        gsap.set(boxes, { y: 30, opacity: 0 });

        // 2. Auto-Sliding Marquee (Independent of scroll)
        gsap.to(bgTextEl, {
          xPercent: -50,
          duration: 30,
          repeat: -1,
          ease: "none",
        });

        // Desktop Entrance - Fade in floating card as user approaches section
        gsap.to(videoWrapperEl, {
          opacity: 1,
          scrollTrigger: {
            trigger: containerEl,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        });

        // 3. Main Cinematic Pinning & Morph Sequence
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerEl,
            start: "top top",
            end: "+=180%",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        // Morph video card to exact size & position of the grid slot smoothly
        tl.fromTo(
          videoWrapperEl,
          {
            width: () => getStartCoords().width,
            height: () => getStartCoords().height,
            left: () => getStartCoords().left,
            top: () => getStartCoords().top,
            xPercent: -50,
            yPercent: -50,
          },
          {
            width: () => getTargetCoords().width,
            height: () => getTargetCoords().height,
            left: () => getTargetCoords().left,
            top: () => getTargetCoords().top,
            xPercent: -50,
            yPercent: -50,
            borderRadius: "2rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            ease: "power2.inOut",
            duration: 1,
          },
          0
        );

        // Fade out marquee, fade & reveal grid content
        tl.to(bgTextEl, { opacity: 0, duration: 0.4 }, 0.4);
        tl.to(itSolutionEl, { opacity: 1, duration: 0.5 }, 0.8).to(
          boxes,
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "power2.out",
            duration: 0.5,
          },
          1.0
        );
      }
    );

    ScrollTrigger.refresh();
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-fit md:min-h-screen bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-x-hidden"
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Auto-Sliding Marquee Layer - Desktop Only */}
      <div className="absolute inset-0 hidden md:flex items-center pointer-events-none z-10 select-none overflow-hidden">
        <div ref={bgTextRef} className="flex whitespace-nowrap opacity-20">
          <span className="text-[15vw] font-black text-gray-500/20 uppercase tracking-tighter px-10">
            DIGITAL SOLUTIONS • CAMLENIO • INNOVATION • STRATEGY • TECHNOLOGY •
          </span>
        </div>
      </div>

      {/* Floating Cinematic Video Wrapper (Always mounted in DOM) */}
      <div
        ref={videoWrapperRef}
        className="absolute z-30 pointer-events-none overflow-hidden shadow-2xl"
      >
        <video
          src={itSolutionData.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
      </div>

      {/* The Grid Target Container */}
      <div
        ref={itSolutionRef}
        className="relative w-full min-h-fit md:min-h-screen flex items-center justify-center py-10 md:py-20 z-20"
      >
        <ItSolution />
      </div>
    </div>
  );
};

export default VideoScrollWrapper;

