"use client";

import Image from "next/image";
import { m, LazyMotion, domMax } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const IndustriesSection = () => {
  return (
    <LazyMotion features={domMax}>
      <div className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative text-left md:text-center">
          <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            From Ideas to Impact
          </div>
          <m.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Creating Value by Innovating More, and{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                WebkitFontSmoothing: "antialiased"
              }}
            >
              Experience More
            </span>
          </m.h3>

          <m.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify"
          >
            We firmly believe that living by our core values allows us to create
            a bigger impact in the world—more innovation, more growth, more
            opportunities, and more support for businesses. In the realm of
            software development, this philosophy translates to empowering
            companies with solutions that help them achieve their goals, scale
            efficiently, and lead confidently in their industry.
          </m.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Who We Are?",
                img: "/Homepage/IndustriesSection/who-we-are.webp",
                text: "We are passionate and innovative developers, designers, and strategists. Camlenio has been founded to promise to deliver solutions that really transform businesses digitally. With quality, creativity, and problem-solving attributes, we give ideas life and make technology simple, effective, and ready for the future for every client we serve.",
              },
              {
                title: "The origin of smart solutions",
                img: "/Homepage/IndustriesSection/come-from.webp",
                text: "Founded in Jaipur, India, Camlenio was born with the vision of bridging the gap between technology and business. Starting as a small team with big dreams, we have grown into a trusted IT solutions provider. By combining local insights with global expertise, we deliver world-class software, fintech platforms, and digital solutions tailored to modern business needs.",
              },
              {
                title: "What We Do?",
                img: "/Homepage/IndustriesSection/what-we-do.jpg",
                text: "Camlenio gives the entire range of technology solutions fitting every business, however big or small. From custom software, mobile apps, fintech, and responsive websites, we develop platforms that are secure, scalable, and user-friendly. Our goal is to empower businesses to survive, innovate, and grow in this fast-paced, now digital-first economy.",
              },
            ].map((card, i) => (
              <m.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-xl shadow-md overflow-hidden group bg-white transform-gpu"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative overflow-hidden aspect-[5/3]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 
                        opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out backdrop-blur-[2px]"
                  >
                    <div className="flex items-center gap-2 text-white font-medium text-base transform-gpu group-hover:scale-105 transition-transform">
                      {card.title}
                      <MdArrowRightAlt className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-orange-500 text-lg md:text-xl font-bold">
                    <h2>{card.title}</h2>
                  </div>
                  <div className="text-gray-700 text-sm font-sans">
                    <p className="text-justify leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
        <div className="absolute top-10 left-10 w-26 pointer-events-none hidden md:block opacity-40">
          <Image
            src="/Homepage/round_star.png"
            alt="Shape2"
            width={100}
            height={100}
            className="animate-[spin_20s_linear_infinite]"
          />
        </div>
      </div>
    </LazyMotion>
  );
};

export default IndustriesSection;
