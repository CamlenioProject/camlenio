"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="bg-black text-white flex flex-col justify-center px-8 sm:px-14 py-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6">
          <span className="text-orange-500 capitalize text-5xl sm:text-6xl md:text-7xl ">
            p
          </span>
          artner With Camlenio –<br /> Let’s Build Your Next Big Thing
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          From intelligent automation to custom digital platforms,{" "}
          <strong>Camlenio</strong> delivers cutting-edge solutions tailored to
          your business goals. Connect with us today for a{" "}
          <strong>free consulting session</strong>.
        </p>
        <Link
          href="/"
          className="relative inline-block group w-fit px-6 py-3 border border-orange-500 rounded-xl overflow-hidden transition duration-300 active:scale-95"
        >
          <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 " />
          <span className="relative z-10 text-orange-500 group-hover:text-white group-active:text-white font-semibold text-base transition-colors duration-400">
            Discuss Your Project Now!
          </span>
        </Link>
      </div>

      <div className="relative">
        <Image
          src="/ServiceDropdown/fullstackdev/fullstack.webp"
          alt="Business discussion with tech overlay"
          width={800}
          height={800}
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/40 to-transparent" />
      </div>
    </div>
  );
}
