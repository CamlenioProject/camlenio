import React from "react";
import {
  FaLightbulb,
  FaUserCheck,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

const AboutSection = () => {
  const values = [
    {
      label: "Innovation",
      icon: <FaLightbulb className="w-8 h-8 text-gray-700 p-2" />,
    },
    {
      label: "Customer Success",
      icon: <FaUserCheck className="w-8 h-8 text-gray-700 p-2" />,
    },
    {
      label: "Data Security",
      icon: <FaShieldAlt className="w-8 h-8 text-gray-700 p-2" />,
    },
    {
      label: "Continuous Improvement",
      icon: <FaSyncAlt className="w-8 h-8 text-gray-700 p-2" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Story
            </span>
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify">
            Founded in 2020, we&apos;ve helped 500+ companies streamline their
            HR operations. Our mission is to make HR management effortless and
            efficient.
          </p>
        </div>

        <div className="  grid grid-cols-1 gap-12 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-3 bg-gradient-to-r from-orange-500 via-orange-500 to-gray-100 bg-[length:200%_200%] animate-gradientMove rounded-full p-2">
                    <div className="relative flex items-center justify-center bg-white rounded-full">
                      <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 bg-gradient-to-r from-orange-500 to-orange-400"></div>
                      {v.icon}
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium text-sm">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
