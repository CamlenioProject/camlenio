"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DEFAULT_LOGO_COUNT = 8;

type LogoSliderProps = {
  logos?: string[];
};

const LogoSlider = ({ logos }: LogoSliderProps) => {
  const defaultLogos = Array.from(
    { length: DEFAULT_LOGO_COUNT },
    (_, i) => `/coursel/logo${i + 1}.png`
  );
  const useLogos = logos && logos.length ? logos : defaultLogos;
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="relative w-full bg-transparent overflow-hidden py-4">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-transparent z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 bg-transparent z-10" />

        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...useLogos, ...useLogos].map((logo, idx) => (
            <div
              key={idx}
              className="relative w-28 h-10 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                fill
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default LogoSlider;

