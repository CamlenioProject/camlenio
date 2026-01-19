import React, { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";

const industries = [
  {
    id: 1,
    title: "Fintech Startups",
    description:
      "We help fintech startups transform innovative ideas into secure, scalable, and market-ready digital products. From MVP development to full-scale fintech platforms, our solutions are designed to support rapid growth, regulatory compliance, and seamless user experiences.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Banks & NBFCs",
    description:
      "We deliver robust and compliant software solutions for banks and NBFCs, enabling secure digital banking, loan management, KYC automation, and real-time reporting. Our systems are built to meet regulatory standards while improving operational efficiency and customer trust.",
    icon: <RiBankFill className="text-gray-500" />,
  },
  {
    id: 3,
    title: "Payment Service Providers",
    description:
      "We build reliable and high-performance platforms for payment service providers, including UPI, wallets, AEPS, and payment gateway integrations. Our solutions ensure secure transactions, faster settlements, fraud prevention, and smooth user experiences across all channels.",
    icon: "💳",
  },
  {
    id: 4,
    title: "Lending & Credit Companies",
    description:
      "We develop end-to-end digital lending solutions covering customer onboarding, credit scoring, loan origination, disbursement, and recovery management. Our platforms help lending companies reduce turnaround time, manage risk efficiently, and scale operations seamlessly.",
    icon: <FaPiggyBank className="text-gray-500"/>,
  },
  {
    id: 5,
    title: "Insurance & Wealth Management Firms",
    description:
      "We create intelligent software solutions for insurance and wealth management firms, including policy management, claims processing, investment tracking, and customer portals. Our technology enhances transparency, compliance, and personalized customer engagement.",
    icon: "📊",
  },
  {
    id: 6,
    title: "Digital Financial Platforms",
    description:
      "We support digital financial platforms with secure, scalable, and API-driven architectures that enable multi-service integration. From user management to analytics and reporting, our solutions are built to handle high transaction volumes and future-ready growth.",
    icon: "🌐",
  },
];

export default function IndustriesWeServe() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl  font-bold text-gray-900 mb-4">
            Industries We{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-orange-100 hover:border-orange-200/60"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-md">
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>

              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}