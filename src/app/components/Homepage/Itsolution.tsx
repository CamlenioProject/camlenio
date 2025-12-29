"use client";

import { LazyMotion, m, domMax } from "framer-motion";
import { useEffect, useRef, useState, FC } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import awardAnimation from "@/animations/award.json";
import Image from "next/image";

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
      <div
        ref={ref}
        className="relative scroll-mt-10 py-16 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Camlenio Software Development Company
          </div>

          <m.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Excellence – Our foundation for every project{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              We Deliver
            </span>
          </m.h2>

          <m.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify"
          >
            Our journey at Camlenio Software is a testament to what can be
            achieved when people are genuinely committed to making a meaningful
            impact. We are driven by a team of experienced and passionate
            professionals who bring creativity, innovation, and dedication to
            every project.
            <br />
            Each member of our team is focused on delivering high-quality
            digital solutions that empower businesses to grow, adapt, and
            succeed in an ever-evolving technological landscape. From developing
            cutting-edge software to creating seamless user experiences, our
            story is built on innovation, collaboration, and a relentless
            pursuit of excellence.
          </m.p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {/* Year */}
            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
              <h3 className="text-4xl font-extrabold text-orange-600">2022</h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                We&apos;re epic since
              </p>
            </div>

            {/* Video */}
            <div className="h-54 bg-gray-200 relative rounded-xl shadow-xl overflow-hidden md:col-span-2 lg:col-span-2">
              <video
                src="Homepage/itsolution/test1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Clients */}
            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={115} trigger={inView} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Clients around the globe
              </p>
            </div>

            {/* Completed Projects */}
            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-extrabold text-orange-600">
                <Counter target={150} trigger={inView} />+
              </h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Successfully completed projects
              </p>
            </div>

            {/* Award-winning Lottie */}
            <div
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center"
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
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
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
    </LazyMotion>
  );
};

export default ItSolution;
