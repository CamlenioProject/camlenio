"use client";

import { LazyMotion, m, domMax, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, FC } from "react";
import { DotLottieReact, DotLottie } from "@lottiefiles/dotlottie-react";

import { useInView } from "react-intersection-observer";
import awardAnimation from "@/animations/award.json";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { gsap, useGSAP } from "@/lib/gsap";
import { itSolutionData } from "@/config/homepage";

// Optimized Counter using GSAP for smoother animation
const Counter: FC<{ target: number; trigger: boolean }> = ({ target, trigger }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef({ val: 0 });

  useGSAP(() => {
    if (trigger) {
      gsap.to(countRef.current, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => setCount(Math.floor(countRef.current.val))
      });
    }
  }, [trigger, target]);

  return <span>{count}</span>;
};

const ItSolution: FC<{ isAnimated?: boolean }> = ({ isAnimated = false }) => {
  const dotLottieRef = useRef<DotLottie | null>(null);
  // const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  // Intersection observer for triggering counters
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const handleMouseEnter = () => {
    if (dotLottieRef.current) {
      dotLottieRef.current.stop();
      dotLottieRef.current.play();
    }
  };

  return (
    <LazyMotion features={domMax}>
      <div ref={ref} className="relative scroll-mt-10 py-10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-left md:text-center">
          <m.h2
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            {itSolutionData.header.title}{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              {itSolutionData.header.titleAccent}
            </span>{" "}
            {itSolutionData.header.titleSuffix}
          </m.h2>

          <m.p
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base font-sans text-justify mb-12"
          >
            {itSolutionData.header.description}
          </m.p>

          <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {/* Year */}
            <div 
              data-anim="left"
              className="relative bg-white rounded-4xl shadow-sm p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1 z-20"
            >
              <h3 className="text-4xl font-extrabold text-orange-600">{itSolutionData.stats[0].value}</h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                {itSolutionData.stats[0].label}
              </p>
            </div>

            {/* YouTube Video - Optimized Embed */}
            <div 
              data-video-target
              className="h-60 bg-gray-200 relative rounded-4xl shadow-sm overflow-hidden md:col-span-2 lg:col-span-2"
            >
              {!isAnimated && (
                <video
                  src={itSolutionData.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-4xl shadow-sm absolute inset-0 pointer-events-none"
                >
                  <track kind="captions" src="/captions/hero-video.vtt" srcLang="en" label="English" default />
                </video>
              )}
              {/* Clickable overlay to open video popup */}
              {/* <div
                className="absolute inset-0 cursor-pointer hover:bg-white/10 transition-colors z-10"
                onClick={() => setIsVideoPopupOpen(true)}
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Video Popup Modal */}
            {/* <AnimatePresence>
              {isVideoPopupOpen && (
                <m.div
                  key="video-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                  onClick={() => setIsVideoPopupOpen(false)}
                >
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-4xl shadow-sm overflow-hidden shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setIsVideoPopupOpen(false)}
                      className="absolute -top-12 right-0 w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                      <XMarkIcon className="w-6 h-6 text-gray-900" />
                    </button>
                    <video
                      src={itSolutionData.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      className="w-full h-full"
                    >
                      <track kind="captions" src="/captions/hero-video.vtt" srcLang="en" label="English" default />
                    </video>
                  </m.div>
                </m.div>
              )}
            </AnimatePresence> */}

            {/* Clients */}
            <div 
              data-anim="right"
              className="relative bg-white rounded-4xl shadow-sm p-6 flex flex-col items-center justify-center z-20"
            >
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={itSolutionData.stats[1].value as number} trigger={inView || isAnimated} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                {itSolutionData.stats[1].label}
              </p>
            </div>

            {/* Completed Projects */}
            <div 
              data-anim="bottom"
              className="relative bg-white rounded-4xl shadow-sm p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={itSolutionData.stats[2].value as number} trigger={inView || isAnimated} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                {itSolutionData.stats[2].label}
              </p>
            </div>

            {/* Award-winning Lottie */}
            <div
              data-anim="bottom"
              className="bg-white rounded-4xl shadow-sm p-6 flex flex-col items-center justify-center text-center z-20"
              onMouseEnter={handleMouseEnter}
            >
              <h3 className="text-gray-700 font-semibold font-sans">
                Award-winning solution
              </h3>
              <div className="w-16 h-16">
                <DotLottieReact
                  dotLottieRefCallback={(instance) => { dotLottieRef.current = instance; }}
                  data={awardAnimation}
                  speed={0.2}
                  autoplay={true}
                  loop={true}
                  className="w-full h-full"
                />

              </div>
              <p className="mt-3 text-gray-800 font-medium font-sans">
                We&apos;ve got a few awards thanks to our amazing clients.
              </p>
            </div>

            <div 
              data-anim="bottom"
              className="bg-white rounded-4xl shadow-sm p-6 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-gray-700 font-semibold font-sans">
                Award-winning solution
              </h3>
              <div className="relative w-16 h-16">
                <Image
                  src="/Homepage/svg/award.svg"
                  alt="Award"
                  fill
                  className="w-full h-full"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium font-sans">
                We&apos;ve got a few awards thanks to our amazing clients.
              </p>
            </div>

            {/* Business Partners */}
            <div 
              data-anim="bottom"
              className="bg-white rounded-4xl shadow-sm  p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={itSolutionData.stats[3].value as number} trigger={inView || isAnimated} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                {itSolutionData.stats[3].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion >
  );
};

export default ItSolution;
