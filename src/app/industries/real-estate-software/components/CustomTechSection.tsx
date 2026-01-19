"use client";

import { m } from "framer-motion";
import { RevealSection } from "./RevealSection";
import {
  FaVrCardboard,
  FaLink,
  FaNetworkWired,
  FaCogs,
  FaGlobeAmericas,
  FaChartPie
} from "react-icons/fa";

const specializedTech = [
  {
    title: "Immersive VR/AR Experiences",
    desc: "Enable remote property walkthroughs with high-fidelity 3D tours and augmented reality staging.",
    icon: <FaVrCardboard />,
  },
  {
    title: "Predictive Market Analytics",
    desc: "Leverage big data and machine learning to forecast trends, valuation, and investment opportunities.",
    icon: <FaChartPie />,
  },
  {
    title: "Smart Building (IoT) Integration",
    desc: "Directly connect property management software with smart locks, sensors, and building systems.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Blockchain & Smart Contracts",
    desc: "Ensure transparent, tamper-proof property transactions and secure digital ownership records.",
    icon: <FaLink />,
  },
  {
    title: "Multi-Market Inventory Sync",
    desc: "Real-time synchronization of listings across global marketplaces and MLS platforms.",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Proprietary Workflow Automation",
    desc: "Custom-engineered workflows that perfectly match your unique operational model.",
    icon: <FaCogs />,
  }
];

export const CustomTechSection = () => {
  return (
    <section className="py-28 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 mb-20 items-start">
          <div className="w-full md:w-1/3">
            <RevealSection>
              <h4 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-4">
                Innovation First
              </h4>
              <h3 className="text-4xl font-black text-gray-900 leading-tight mb-6">
                Beyond the <br /> Standard.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Off-the-shelf software rarely fits the ambitious goals of market leaders. We engineer specialized capabilities that give you a distinct technological edge.
              </p>
              <button className="text-orange-600 font-bold border-b border-orange-200 hover:border-orange-600 transition-colors pb-1">
                Discuss Your Vision &rarr;
              </button>
            </RevealSection>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {specializedTech.map((item, idx) => (
                <RevealSection key={idx}>
                  <div className="group">
                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-orange-600 text-xl mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-500 font-normal font-sans text-justify leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
