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


export function LogoSlider() {
  // Duplicate logos for seamless infinite scroll
  const unlimitedLogos = [...logos, ...logos];

  return (
    <LazyMotion features={domMax}>
      <section className="overflow-hidden py-8">
        <div className="w-full max-w-full mx-auto">
          <div className="flex relative overflow-hidden">
            <m.div
              className="flex gap-16 md:gap-28 items-center whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {unlimitedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center h-10 md:h-12 w-28 md:w-36 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 140px"
                  />
                </div>
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
