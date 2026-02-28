"use client";
import Image from "next/image";
import { RiTeamFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const cards = [
  {
    icon: <RiTeamFill />,
    number: "20+",
    text: "Expert Team",
  },
  {
    icon: "/Homepage/web_design_orange.png",
    number: "50+",
    text: "Clients Retention Rate",
  },
  {
    icon: <FaStar />,
    number: "30+",
    text: "Star Rating",
  },
  {
    icon: <FaLaptopCode />,
    number: "55+",
    text: "Active Softwares",
  },
];

const AboutTheCompany = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <p className="max-w-6xl mx-auto text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans ">
          Camlenio Software believes in creating technology that changes
          businesses, and enables people. Awarded as one of the best in the
          Fintech and Custom Software Development categories, we deliver secure,
          scalable, and innovative solutions based on specific client needs.
          With the vision to help clients develop, we started incorporating
          modern technology into their businesses. Shortly after starting as a
          startup Web Development Company, we expanded to become a leading IT
          company and a leader in servicing many big brands. To be more
          specific, we are digital natives with a unique approach to e-commerce
          solutions, web development, web designing, software development,
          software consulting, digital marketing, mobile app development,
          graphic designing, and a plethora of IT solutions.
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group bg-transparent border-2 border-gray-200 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="mb-4">
                  {typeof card.icon === "string" ? (
                    <Image
                      src={card.icon}
                      alt={card.text}
                      width={70}
                      height={70}
                      className="object-contain group-hover:scale-80 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-orange-500 text-6xl group-hover:scale-80 transition-transform duration-500">
                      {card.icon}
                    </div>
                  )}
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-950 group-hover:-translate-y-1 transition-transform duration-500">
                  {card.number}
                </h2>
                <p className="text-gray-600 cursor-pointer group-hover:-translate-y-1 transition-transform duration-500 ">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default AboutTheCompany;
