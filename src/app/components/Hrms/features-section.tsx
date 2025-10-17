// app/components/FeaturesSection.jsx
import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Employee Database",
      items: [
        "Centralized employee records",
        "Digital employee files",
        "Easy access to personnel data",
      ],
    },
    {
      title: "Leave Management",
      items: [
        "Automated time tracking",
        "Leave request approvals",
        "Real-time attendance reports",
      ],
    },
    {
      title: "Payroll Processing",
      items: [
        "Automated salary calculations",
        "Tax compliance management",
        "Multiple payment methods",
      ],
    },
    {
      title: "Performance Management",
      items: [
        "Goal setting and tracking",
        "Performance reviews",
        "Employee feedback system",
      ],
    },
    {
      title: "Recruitment & Onboarding",
      items: [
        "Applicant tracking system",
        "Automated onboarding workflows",
        "Digital document signing",
      ],
    },
    {
      title: "Employee Self-Service",
      items: [
        "Personal information updates",
        "Leave applications",
        "Payslip access",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Everything You Need in{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            One Platform
          </span>
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
          Comprehensive HR solutions designed to streamline your operations and
          boost productivity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
