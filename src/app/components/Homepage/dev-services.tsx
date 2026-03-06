"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Mobile App Development",
    cardtitle: "Software Development Consulting",
    desc: "We intended to build excellent mobile applications that convey ease of performance and reflexive functionality. For the Android and IOS users, our apps are designed for scalability, security, and user engagement across both platforms. Through merging creation with usability, our experts support businesses that connect with users anytime or anywhere with automatic Web and Mobile App development solutions.",
    icon: (
      <Image
        src="/Homepage/svg/mobile-development.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/mobile-development-w.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/apple.svg", name: "iPhone App Development" },
      { src: "/Homepage/svg/android.svg", name: "Android App Development" },
      { src: "/Homepage/svg/flutter-o.svg", name: "Flutter App Development" },
      {
        src: "/Homepage/svg/react1-o.svg",
        name: "React Native App Development",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    cardtitle: "Web Development",
    desc: "Our web development services focus on building fast, responsive, and secure websites that affect your brand’s originality. As a design of a custom operation that is optimized for performance and scalability, guaranteeing a hassle-free user journey. From the corporate websites to complex objectives also delivers a reliable digital experience that aligns with the modern business requirements",
    icon: (
      <Image
        src="/Homepage/svg/web-development.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/web-development-w.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/nodejs_development-o.svg",
        name: "Nodejs Development",
      },
      {
        src: "/Homepage/svg/laravel_development-w.svg",
        name: "Laravel Development",
      },
      {
        src: "/Homepage/svg/expressJs_development-o.svg",
        name: "ExpressJs Development",
      },
      {
        src: "/Homepage/svg/wordpress_development.svg",
        name: "Wordpress Development",
      },
    ],
  },
  {
    id: 3,
    title: "Ecommerce Development",
    cardtitle: "Ecommerce Development",
    desc: "We deliver strong E commerce software operations that are intended to increase online sales and streamline solutions. Our expert designs secure, user-friendly e-commerce platforms with easy navigation, smart integrations, and scalable designs. As our supporting solutions that grow your business customer experience while maximizing the conversation and operations planning.",
    icon: (
      <Image
        src="/Homepage/svg/ecommerce-development.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ecommerce-development-w.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/shopify_development-o.svg",
        name: "Shopify Development",
      },
      {
        src: "/Homepage/svg/woocommerce_development-o.svg",
        name: "Woocommerce Development",
      },
      {
        src: "/Homepage/svg/magento_development-o.svg",
        name: "Magento Development",
      },
      {
        src: "/Homepage/svg/wix-o.svg",
        name: "Wix",
      },
    ],
  },
  {
    id: 4,
    title: "UI UX Design",
    cardtitle: "UI UX Design",
    desc: "Our UI UX Design services focus on creating a visual request, an intuitive, and customer-driven experience with perfect drive engagement. As we merge the research, creativity, and usability principles to craft experiences that prove interaction, boost retention, and provide a valuable experience across web and mobile platforms.",
    icon: (
      <Image
        src="/Homepage/svg/ui-design.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ui-design-w.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/figma_designer-o.svg", name: "Figma Designer" },
      { src: "/Homepage/svg/uiux_designer-o.svg", name: "UI/UX Designer" },
      { src: "/Homepage/svg/react1-o.svg", name: "ReactJs Designer" },
      {
        src: "/Homepage/svg/nextJs_designer-o.svg",
        name: "NextJs Designer",
      },
    ],
  },
  {
    id: 5,
    title: "Digital Marketing",
    cardtitle: "Creative Digital Excellence",
    desc: "As a reliable Digital Marketing Company, we support the brands that grow visibility and generate eligible leads. The strategies help your business grow, which include our methods of SEO, social media, content marketing, and paid campaigns. As with dependent data performance, we guarantee measurable growth, stronger engagement, and consistent brand presence across the digital platforms.",
    icon: (
      <Image
        src="/Homepage/svg/custom-development.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/custom-development-w.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/devServices/smo.svg",
        name: "Social Media Optimization",
      },
      { src: "/Homepage/devServices/smm.svg", name: "Social Media Marketing" },
      {
        src: "/Homepage/devServices/ppc.svg",
        name: "Pay Per Click",
      },
      { src: "/Homepage/devServices/seo.svg", name: "SEO" },
    ],
  },
];

const DevServices = () => {
  const router = useRouter();
  const [active, setActive] = useState(1);
  const activeFeature = features.find((f) => f.id === active);
  return (
    <LazyMotion features={domMax}>
      <div className="relative py-16 overflow-hidden bg-gray-800">
        <div className="mx-auto px-8 md:px-16 relative -mb-[60px]">
          <div className="max-w-6xl mx-auto text-center mb-4">
            <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-gray-100 shadow-sm text-xs md:text-sm font-medium text-black mb-4 z-20">
              <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
              Innovating the Future Together
            </span>
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
              Build a Digital Product That {" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
                }}
              >
                Grows Your Business
              </span>
            </h4>
            <p className="max-w-5xl mx-auto text-gray-50 text-sm md:text-base mb-12 font-sans text-justify">
              We turn the ideas into scalable digital solutions that drive accurate outcomes. Our expertise delivers secure, successful items that are customized to your business needs, whether you are a beginner enterprise. Our integrated approach connects technology and marketing to create proactive platforms that scale with your business while maintaining reliability.
            </p>
          </div>
          <div className="relative pb-10 text-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 border-2 border-black/20  p-6 rounded-2xl   bg-gradient-to-r from-gray-900 via-gray-500/10 to-transparent backdrop-blur-3xl shadow-[0_-2px_28px_rgba(255,255,255,0.1)]">
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                {features.map((feature) => (
                  <m.button
                    key={feature.id}
                    onClick={() => setActive(feature.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center group gap-3 text-left p-2 rounded-xl cursor-pointer transition-colors duration-300 ${active === feature.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white"
                      }`}
                  >
                    <div className="relative w-[50px] h-[50px] flex-shrink-0">
                      <span
                        className={`absolute inset-0 transition-opacity duration-300 ${active === feature.id ? "opacity-0" : "opacity-100"
                          } group-hover:opacity-0`}
                      >
                        {feature.icon}
                      </span>
                      <span
                        className={`absolute inset-0 transition-opacity duration-300 ${active === feature.id ? "opacity-100" : "opacity-0"
                          } group-hover:opacity-100`}
                      >
                        {feature.hoverIcon}
                      </span>
                    </div>
                    <span className="font-medium text-sm md:text-base lg:text-lg ">
                      {feature.title}
                    </span>
                  </m.button>
                ))}
              </div>
              <div className="w-full md:w-2/3 relative">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeFeature?.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl"
                  >
                    <h3 className="text-[1.3rem] md:text-2xl lg:text-4xl font-bold mb-2 text-orange-500">
                      {activeFeature?.cardtitle}
                    </h3>
                    <p className="text-gray-300 text-[.85rem] md:text-base mb-4 font-sans text-justify">
                      {activeFeature?.desc}
                    </p>

                    <button
                      onClick={() => {
                        router.push("/contact");
                      }}
                      className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-gray-100 rounded-full group text-sm sm:text-base lg:text-lg cursor-pointer"
                    >
                      <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                        Talk to Experts <FaLongArrowAltRight />
                      </span>
                    </button>
                    {activeFeature?.subImages && (
                      <div className="grid grid-cols-4 gap-4 mt-8">
                        {activeFeature.subImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center group"
                          >
                            <div className="w-12 h-12 relative group-hover:scale-80 transition-transform duration-500 overflow-hidden">
                              <Image
                                src={img.src}
                                alt={img.name}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:rotate-y-360"
                              />
                            </div>
                            <span className="mt-2 text-[.50rem] lg:text-sm text-gray-50 text-center">
                              {img.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};
export default DevServices;