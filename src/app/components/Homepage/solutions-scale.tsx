"use client";
import Image from "next/image";
import Link from "next/link";
import { m, LazyMotion, domMax } from "framer-motion";

type Industry = {
  id: number;
  title: string;
  text: string;
  img: string;
  icon: string;
  href: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: 1,
    title: "Education",
    text: "We build e-learning software, a student-manager system, apps, interactive software, and other solutions to meet the needs of the modern-day learners and institutions.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627310/education_focdoj.jpg",
    icon: "/Homepage/Industries/svg/Education.svg",
    href: "/services/fintechsoftware",
  },
  {
    id: 2,
    title: "Food & Restaurants",
    text: "From restaurant software to delivery applications, we help businesses streamline the smooth operations for seamless dining experiences.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/food-restaurants_j8sl3s.jpg",
    icon: "/Homepage/Industries/svg/food-safety.svg",
    href: "/services/fintechsoftware",
  },
  {
    id: 3,
    title: "Healthcare",
    text: "We architect telemedicine software, patient management applications, and health platforms while making care delivery simpler and secure.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/healthcare_drftbk.jpg",
    icon: "/Homepage/Industries/svg/healthcare.svg",
    href: "/services/fintechsoftware",
  },
  {
    id: 4,
    title: "Fintech",
    text: "Payment gateways, e-wallets, platforms for lending, built for speed and security, and to establish trust in finance are in our purvey.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627726/fintech_l4mial.jpg",
    icon: "/Homepage/Industries/svg/fintech.svg",
    href: "/services/fintechsoftware",
  },
  {
    id: 5,
    title: "Retail & Ecommerce",
    text: "We create online shopping, ecommerce platforms that increase sales, enhance engagement, and simplify the customer's journey.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/retail-ecommerce_phngbh.jpg",
    icon: "/Homepage/Industries/svg/Retail-Ecommerce.svg",
    href: "/services/fintechsoftware",
  },
  {
    id: 6,
    title: "Travel & Hospitality",
    text: "Our solutions, from booking engines to travel apps, focus on improvements of the user experience and automation of manual processes, thus growing revenues.",
    img: "https://res.cloudinary.com/dxpbriwey/image/upload/v1758627727/travel_z5e0tn.jpg",
    icon: "/Homepage/Industries/svg/Travel-Hospitality.svg",
    href: "/services/fintechsoftware",
  },
];

function Track({
  items,
  reverse = false,
  speed = 28,
}: {
  items: Industry[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-[2.5rem]">
      <div
        className={`flex gap-4 w-max p-2 animate-scrollX`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((card, idx) => (
          <Link key={`${card.id}-${idx}`} href={card.href} className="block">
            <article className="relative group min-w-[40rem] h-[18rem] md:h-[20rem] rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 px-6 cursor-pointer">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
                <div className="inline-flex items-center gap-2 bg-orange-500 rounded-full p-2 w-fit">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={50}
                    height={50}
                    className="w-8 h-8 md:w-12 md:h-12 object-contain bg-white p-2 rounded-full"
                  />
                  <span className="text-gray-50 font-medium text-xs md:text-base transition-all duration-500 group-hover:tracking-wider">
                    {card.title}
                  </span>
                </div>

                <p className="text-gray-200 text-xs md:text-base mt-3 text-justify">
                  {card.text}
                </p>

                <span className="text-orange-400 text-sm font-semibold mt-2 flex items-center gap-1 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Explore more →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsScale() {
  return (
    <LazyMotion features={domMax}>
      <div className="grid gap-6 p-6 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-500 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Solutions That Scale
          </span>
          <m.h6
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Serving a Diverse Range of{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #F3F4F6, 4px 6px 0px #ff582336",
              }}
            >
              Industries
            </span>
          </m.h6>

          <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans ">
            We serve and collaborate with a diverse range of industries. Over
            the years, Camlenio Software has broadened its portfolio by
            partnering with businesses across sectors and empowering them to
            scale in today’s fast-evolving digital world.
          </p>
        </div>
        <Track items={INDUSTRIES} reverse={false} speed={66} />
        <Track items={INDUSTRIES.slice().reverse()} reverse={true} speed={66} />
      </div>
    </LazyMotion>
  );
}
