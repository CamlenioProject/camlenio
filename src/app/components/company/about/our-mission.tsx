"use client";
import React from "react";
import Image from "next/image";
import { m, LazyMotion, domMax } from "framer-motion";

const OurMission = () => {
  return (
    <LazyMotion features={domMax}>
      <div className="relative py-16 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
        <div className="max-w-7xl mx-auto text-left md:text-center px-8 md:px-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Mission &{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
            >
              Vision
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-left md:text-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans ">
                To build and implement end-to-end fintech and custom software
                products that make things easier. To provide secure and seamless
                technology that is scalable for both businesse and individuals.
                To drive technological innovation to remain ahead of the curve,
                so we can offer our clients a distinct competitive advantage.
              </p>
            </div>

            <m.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center hover:animate-wiggle pl-4"
            >
              <Image
                src="/navcompany/vision.png"
                alt="Our Mission and Vision illustration"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </m.div>

            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className=" text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans">
                To be a global leader in Fintech and Custom Software
                Development, and user-friendly solutions that help businesses of
                all sizes thrive in the digital age.Continue improving our
                product and service offerings to maintain our standing as the
                leading trusted software development company in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default OurMission;
