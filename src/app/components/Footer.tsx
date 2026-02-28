"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, LazyMotion, domMax } from "framer-motion";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import CookieSettings from "./CookieSettings";

const footerData = [
  {
    title: "Mobile App Development",
    links: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "Flutter App Development",
    ],
  },
  {
    title: "Industries",
    links: [
      "Healthcare",
      "Real Estate",
      "Travel and Tourism",
      "Food Delivery",
      "Ecommerce",
    ],
  },
  {
    title: "Expertise",
    links: [
      "PHP Web Development",
      "Asp.Net Development",
      "Python Web Development",
      "ReactJS Development",
      "NodeJS Development",
    ],
  },
  {
    title: "Fintech Software",
    links: [
      "API Panel",
      "B2C Software",
      "B2B Fintech Software",
      "Reseller Fintech Software",
      "Custom Finance Software",
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on portfolio page
  if (pathname === '/portfolio') return null;

  return (
    <LazyMotion features={domMax}>
      <div className="relative bg-gray-800 text-white px-6 pt-6 pb-2">
        <div
          className="max-w-7xl mx-auto"
        >
          <div className="w-full flex items-center justify-center bg-transparent rounded-[1.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between w-full">
              {/* LEFT — TITLE */}
              <div className="text-left space-y-1 py-8">
                <h2 className="text-[1.62rem] md:text-4xl lg:text-[2.9rem] font-extrabold leading-tight text-gray-50">
                  Build smarter.
                </h2>
                <h2 className="text-[1.62rem] md:text-4xl lg:text-[2.9rem] font-extrabold leading-tight text-gray-50">
                  Scale faster with Camlenio.
                </h2>
              </div>

              {/* RIGHT — CONTACT SECTION */}
              <div className="space-y-1 bg-gray-600 text-gray-100 rounded-2xl p-4 inline-block ">
                <div
                  className="flex items-start gap-4 group"
                >
                  <div className="text-white text-2xl group-hover:scale-110 transition-all duration-300">
                    <GiRotaryPhone />
                  </div>
                  <div className="text-white border-l border-white/20 pl-4">
                    <p className=" text-sm md:text-xl tracking-wide">
                      +91-9773323814
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 group"
                >
                  <div className="text-white text-2xl group-hover:scale-110 transition-all duration-300">
                    <MdEmail />
                  </div>
                  <div className="text-white border-l border-white/20 pl-4">
                    <p className="font-semibold text-lg md:text-xl tracking-wide break-all">
                      business@camlenio.com
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 group"
                >
                  <div className="text-white text-2xl group-hover:scale-110 transition-all duration-300">
                    <ImLocation2 />
                  </div>
                  <div className="text-white border-l border-white/20 pl-4">
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      Ground Floor, Gopi Tower, Ajmer Rd, Near Kamla Devi Govt.
                      School, Satya Colony, Tagore Nagar, Jaipur, Rajasthan
                      302021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-500 my-6" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-base">
            <div className="col-span-2 md:col-span-1 w-full  flex  flex-col items-start sm:items-center mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-w.png"
                  alt="Camlenio"
                  width={200}
                  height={80}
                  className="w-30 md:w-40 h-auto object-contain"
                />
              </Link>
              <div className="flex mt-4 space-x-4">
                <Link
                  href="https://x.com/camlenio"
                  className="transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
                  <X size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/camlenio/"
                  className="transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/camleniosoftware/"
                  className="transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/camleniosoftware/"
                  className="transition-all duration-300 hover:text-orange-500 hover:scale-105"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
            {footerData.map((section, i) => (
              <div key={i}>
                <h6 className="text-base md:text-lg font-semibold mb-3 ">
                  {section.title}
                </h6>
                <ul className="space-y-1 ">
                  {section.links.map((link, j) => (
                    <li key={j} className="relative text-xs md:text-sm">
                      <Link
                        href="#"
                        className="hover:text-orange-500 transition-all  hover:translate-x-2 duration-500"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-500 my-4" />

          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 ">
            <div>
              <h3>Copyright © 2022-26 All Right Reserved</h3>
            </div>

            <div className="flex space-x-2 md:mt-0">
              <Link
                className="hover:text-orange-500 transition-color duration-500"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-orange-500 transition-color duration-500"
                href="/Terms-of-use"
              >
                Terms of Use
              </Link>
              <Link
                className="hover:text-orange-500 transition-color duration-500"
                href="/Cookie-policy"
              >
                Cookie policy
              </Link>{" "}
              {/* <Link
              className="hover:text-orange-500 transition-color duration-500"
              href="#"
            >
              Cookie Settings
            </Link> */}
              <CookieSettings />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <h1
              className="flex items-end justify-center text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] font-bold  select-none pointer-events-none tracking-wider bg-gradient-to-b from-gray-100/90 via-gray-800 to-transparent bg-clip-text text-transparent -mb-40"
            >
              Camlenio
            </h1>
          </div>
        </div>
      </div >
    </LazyMotion >
  );
}
