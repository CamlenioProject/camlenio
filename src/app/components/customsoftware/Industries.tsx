import React from "react";
import {
  Landmark,
  Wallet,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Truck,
  Factory,
  Rocket,
} from "lucide-react";

const GlowCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-xl shadow-orange-900/5 ${className}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Glow: Soft Orange */}
        <div className="absolute -top-[150px] -left-[150px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-200/40 to-transparent blur-[60px]" />

        {/* Bottom Right Glow: Peachy/Red accent */}
        <div className="absolute -bottom-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-orange-300/30 to-transparent blur-[80px]" />

        {/* Optional: Very subtle grain for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-8 sm:p-10">{children}</div>
    </div>
  );
};

// --- 2. The Content Component ---
const Industries = () => {
  const industries = [
    { name: "Fintech & Loan Management", icon: Wallet },
    { name: "Banking & ART Bank Systems", icon: Landmark },
    { name: "Education & EdTech", icon: GraduationCap },
    { name: "Healthcare", icon: HeartPulse },
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "Logistics & Supply Chain", icon: Truck },
    { name: "Manufacturing", icon: Factory },
    { name: "Startups & Enterprises", icon: Rocket },
  ];

  return (
    <div className="py-2 md:py-12 px-4 max-w-7xl mx-auto">
      <GlowCard>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            Industries {"  "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              We Serve
            </span>
          </h2>
          {/* Orange Accent Line */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mt-2 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-2xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 hover:bg-gray-100/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-default"
              >
                {/* Icon Circle */}
                <div className="h-14 w-14 rounded-full  flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon
                    className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text */}
                <h3 className="text-gray-700 font-semibold text-center group-hover:text-orange-900 transition-colors">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </GlowCard>
    </div>
  );
};

export default Industries;
