"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { itSolutionData } from "@/config/homepage";
import clsx from "clsx";
import ItSolution from "./Itsolution";

const VideoScrollWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const itSolutionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const [isHandoffComplete, setIsHandoffComplete] = useState(false);

  useGSAP(() => {
    const itSolutionEl = itSolutionRef.current;
    const videoWrapperEl = videoWrapperRef.current;
    const containerEl = containerRef.current;
    const bgTextEl = bgTextRef.current;

    if (!containerEl || !videoWrapperEl || !itSolutionEl || !bgTextEl) return;

    const target = itSolutionEl.querySelector("[data-video-target]") as HTMLElement;
    if (!target) return;

    const boxes = itSolutionEl.querySelectorAll("[data-anim]");

    // 1. Initial State
    gsap.set(videoWrapperEl, {
      width: "50%",
      height: "auto",
      aspectRatio: "16/9",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      borderRadius: "2rem",
      opacity: 0,
      scale: 0.8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      force3D: true,
      willChange: "transform, width, height"
    });

    gsap.set(itSolutionEl, { opacity: 0 });
    gsap.set(boxes, { y: 30, opacity: 0 });

    // 2. Auto-Sliding Marquee (Independent of scroll)
    gsap.to(bgTextEl, {
      xPercent: -50,
      duration: 30,
      repeat: -1,
      ease: "none"
    });

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };

      if (!isDesktop) {
        setIsHandoffComplete(true);
        gsap.set(itSolutionEl, { opacity: 1 });
        gsap.set(boxes, { opacity: 1, y: 0 });
        return;
      }

      // Desktop-only Entrance - Fade in card
      gsap.to(videoWrapperEl, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerEl,
          start: "top 90%",
          end: "top 40%",
          scrub: true
        }
      });

      // Desktop-only Main Cinematic Sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          onRefresh: () => tl.invalidate(),
        },
        onUpdate: function () {
          const progress = this.progress();
          setIsHandoffComplete(progress > 0.99);
        }
      });

      // Stage 1: Floating
      tl.to(videoWrapperEl, {
        scale: 1,
        duration: 0.5
      }, 0);

      // Stage 2: Precision Handoff to Grid
      tl.to(videoWrapperEl, {
        width: () => target.offsetWidth,
        height: () => target.offsetHeight,
        aspectRatio: "auto",
        left: () => target.getBoundingClientRect().left - containerEl.getBoundingClientRect().left + target.offsetWidth * 0.5,
        top: () => target.getBoundingClientRect().top - containerEl.getBoundingClientRect().top + target.offsetHeight * 0.5,
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        borderRadius: "2rem",
        boxShadow: "0 0px 0px rgba(0,0,0,0)",
        ease: "power2.inOut",
        duration: 1.5
      } as any, 0.5);

      // Stage 3: Reveal Content & Hide Marquee
      tl.to(bgTextEl, { opacity: 0, duration: 0.5 }, 1.0);
      tl.to(itSolutionEl, { opacity: 1, duration: 0.5 }, 1.5)
        .to(boxes, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.6
        }, 1.8);
    });

    // Ensure layout is stable before refreshing
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

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
        div::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Auto-Sliding Marquee Layer - Desktop Only */}
      <div className="fixed inset-0 hidden md:flex items-center pointer-events-none z-10 select-none overflow-hidden">
        <div
          ref={bgTextRef}
          className="flex whitespace-nowrap opacity-20"
        >
          <span className="text-[15vw] font-black text-gray-500/20 uppercase tracking-tighter px-10">
            DIGITAL SOLUTIONS • CAMLENIO • INNOVATION • STRATEGY • TECHNOLOGY •
          </span>
        </div>
      </div>

      {/* The Floating/Fixed Cinematic Video Wrapper (No Border) */}
      <div
        ref={videoWrapperRef}
        className={clsx(
          "absolute z-50 pointer-events-none overflow-hidden shadow-2xl",
          isHandoffComplete ? "opacity-0 invisible" : "opacity-100 visible"
        )}
      >
        <video
          src={itSolutionData.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* The Grid Target Container */}
      <div
        ref={itSolutionRef}
        className="relative w-full min-h-fit md:min-h-screen flex items-center justify-center py-10 md:py-20 z-20"
      >
        <ItSolution isAnimated={!isHandoffComplete} />
      </div>
    </div>
  );
};

export default VideoScrollWrapper;
