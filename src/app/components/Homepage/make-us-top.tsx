"use client";
import Image from "next/image";
import React from "react";
import { m, LazyMotion, domMax } from "framer-motion";
import Divider from "../devider";

const cardsData = [
  {
    icon: "/Homepage/makeustop/settings.svg",
    title: "Web Application development",
    bgImage: "/Homepage/makeustop/bg/ai-driven.png",
    description:
      "Web Application development Company services for a quick, responsive platform.",
  },
  {
    icon: "/Homepage/makeustop/B2B.svg",
    title: "B2B Software Development",
    bgImage: "/Homepage/makeustop/bg/b2b.png",
    description:
      "B2B Software Development Company operations for complicated workflows.",
  },
  {
    icon: "/Homepage/makeustop/Reseller.svg",
    title: "API integration services",
    bgImage: "/Homepage/makeustop/bg/reseller.png",
    description:
      "API integration services for hassle-free system connectivity.",
  },
  {
    icon: "/Homepage/makeustop/Travel.svg",
    title: "Enterprises Software Development",
    bgImage: "/Homepage/makeustop/bg/travel.png",
    description:
      "Enterprises Software Development for large-scale business solutions.",
  },
  {
    icon: "/Homepage/makeustop/B2C.svg",
    title: "Cloud-based software development",
    bgImage: "/Homepage/makeustop/bg/b2c.png",
    description:
      "Cloud-based software development for flexibility and scalability.",
  },
  {
    icon: "/Homepage/makeustop/Crm.svg",
    title: "CRM software development",
    bgImage: "/Homepage/makeustop/bg/ai-driven.png",
    description:
      "CRM software development to increase consumer relationships.",
  },
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgImage: string;
}

const MakeUsTop = () => {
  return (
    <LazyMotion features={domMax}>
      <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden py-22">
        <Divider />
        <div className="max-w-7xl mx-auto text-center px-4">
          {" "}
          <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Camlenio Software Development Company
          </div>
          <h5 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Comprehensive
            </span>{" "}
            Software Development Services
          </h5>
          <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans">
            As an IT software company in Jaipur, a business-specific software development method guarantees that each operation aligns with your goals while helping the scalable software operations for future growth. We provide several types of services to meet the various business needs:

          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {cardsData.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                bgImage={card.bgImage}
              />
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bgImage,
}) => (
  <div className="relative border-2 border-orange-200 bg-orange-200/30 shadow-md group rounded-2xl hover:shadow-3xl p-6 flex flex-col text-left overflow-hidden">
    {/* Subtle background image */}
    <div className="absolute inset-0 opacity-[0.08]">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover mix-blend-multiply"
      />
    </div>
    <div className="relative z-10 w-20 h-20 group-hover:scale-80 py-4 mb-6 transition-all duration-300">
      <Image
        src={icon}
        alt={title}
        height={60}
        width={60}
        className="object-contain"
      />
    </div>
    <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-6 ">
      <m.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-xl font-extrabold text-gray-900 mb-1"
      >
        {title}
      </m.h3>
      <m.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-500 text-base font-normal font-sans text-justify"
      >
        {description}
      </m.p>
    </div>
  </div>
);

export default MakeUsTop;
