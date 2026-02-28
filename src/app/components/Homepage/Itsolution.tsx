"use client";
import { LazyMotion, m, domMax, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, FC } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import awardAnimation from "@/animations/award.json";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Counter component
const Counter: FC<{ target: number; trigger: boolean }> = ({
  target,
  trigger,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval);
          return target;
        }
        const step = Math.max(1, Math.ceil((target - prevCount) / 10));
        return prevCount + step;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [trigger, target]);

  return <span>{count}</span>;
};

const ItSolution: FC = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  // Intersection observer for triggering counters
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.2);
    }
  }, []);

  const handleMouseEnter = () => {
    lottieRef.current?.goToAndPlay(0);
  };

  return (
    <LazyMotion features={domMax}>
      <div ref={ref} className="relative scroll-mt-10 py-10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-left md:text-center">

          <m.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Your trusted{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Mobile App Development
            </span>{" "}
            Company in India
          </m.h2>

          <m.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify"
          >
            The Camlenio is the top leading Mobile App Development Company in India, it delivers high-performance digital solutions for beginners, SMEs and enterprises. Here, Camelino Custom Development Company in India is a trustworthy software development company with several years of experience. As our expert team supports the business with smooth solutions, increases consumer engagement and levels quickly via innovative technology.
            <br />
            As the global spending on business software crossed the USD 856B in 2024. Also, proving how essential custom digital operations have become for advanced companies. Align with the growing needs by providing secure and focused business software solutions customised to the real-world demands.
          </m.p>

          <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {/* Year */}
            <div className="relative bg-white rounded-xl p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1 z-20">
              <h3 className="text-4xl font-extrabold text-orange-600">2022</h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                We&apos;re epic since
              </p>
            </div>

            {/* YouTube Video - Optimized Embed */}
            <div className="h-60 bg-gray-200 relative rounded-xl shadow-xl overflow-hidden md:col-span-2 lg:col-span-2">
              <video
                src="https://res.cloudinary.com/dxpbriwey/video/upload/f_auto,q_auto/v1767704386/video_3_kug49x.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-lg absolute inset-0 pointer-events-none"
              />
              {/* Clickable overlay to open video popup */}
              <div
                className="absolute inset-0 cursor-pointer hover:bg-white/10 transition-colors z-10"
                onClick={() => setIsVideoPopupOpen(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Video Popup Modal */}
            <AnimatePresence>
              {isVideoPopupOpen && (
                /* Backdrop */
                <m.div
                  key="video-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
                  onClick={() => setIsVideoPopupOpen(false)}
                >
                  {/* Modal Content */}
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsVideoPopupOpen(false)}
                      className="absolute -top-12 right-0 w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                      <XMarkIcon className="w-6 h-6 text-gray-900" />
                    </button>

                    {/* Full Player with Optimization */}
                    <video
                      src="https://res.cloudinary.com/dxpbriwey/video/upload/f_auto,q_auto/v1767704386/video_3_kug49x.mp4"
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      className="w-full h-full"
                    />
                  </m.div>
                </m.div>
              )}
            </AnimatePresence>

            {/* Clients */}
            <div className="relative bg-white rounded-xl p-6 flex flex-col items-center justify-center z-20">
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={115} trigger={inView} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Clients around the globe
              </p>
            </div>

            {/* Completed Projects */}
            <div className="relative bg-white rounded-xl p-6 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={150} trigger={inView} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Successfully completed projects
              </p>
            </div>

            {/* Award-winning Lottie */}
            <div
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center z-20"
              onMouseEnter={handleMouseEnter}
            >
              <h3 className="text-gray-700 font-semibold font-sans">
                Award-winning solution
              </h3>
              <div className="w-16 h-16">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={awardAnimation}
                  loop={false}
                  className="w-full h-full"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium font-sans">
                We&apos;ve got a few awards thanks to our amazing clients.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
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
            <div className="bg-white rounded-xl  p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={20} trigger={inView} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Business Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion >
  );
};

export default ItSolution;
