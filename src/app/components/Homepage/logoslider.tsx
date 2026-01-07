"use client";

import { m, domMax, LazyMotion } from "framer-motion";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "/ServiceDropdown/ecommercedevelopment/icici-logo.png",
    alt: "ICICI Bank",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/paysprint-logo.svg",
    alt: "Paysprint",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/logo-sbmbank.webp",
    alt: "SBM Bank",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/instantpay-logo.svg",
    alt: "InstantPay",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/idfc-logo.svg",
    alt: "IDFC Bank",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/hdfc-logo.svg",
    alt: "HDFC Bank",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/cashfree-logo.svg",
    alt: "Cashfree",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export function LogoSlider() {
  // Duplicate logos for seamless infinite scroll
  const unlimitedLogos = [...logos, ...logos];

  return (
    <LazyMotion features={domMax}>
      <section className=" overflow-hidden ">
        <div className="w-full max-w-[85rem] mx-auto px-2">
          <div className=" rounded-3xl shadow-[0_10px_40px_-10px_rgba(249,115,22,0.1)] py-12 px-4 md:px-12 relative overflow-hidden border border-orange-100">
            <div className="flex relative overflow-hidden">
              <m.div
                className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 25,
                }}
              >
                {unlimitedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center h-12 md:h-16 w-32 md:w-40 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 120px, 160px"
                    />
                  </div>
                ))}
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
