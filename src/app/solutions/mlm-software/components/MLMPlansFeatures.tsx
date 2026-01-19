"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  BarChart3,
  Calculator,
  Users,
  Wallet,
  Smartphone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { MdPayment } from "react-icons/md";

const MLMPlansFeatures = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    "Binary Plan",
    "Matrix Plan",
    "Unilevel Plan",
    "Board Plan",
    "Generation Plan",
    "Stair-Step Plan",
    "Monoline Plan",
    "Hybrid & Custom Plans",
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Scalable Architecture",
      description:
        "Built with advanced security standards and scalable infrastructure.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Reports & Analytics",
      description:
        "Live dashboards for income, growth, performance, and payouts.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Automated Commission Calculation",
      description:
        "Accurate and instant commission calculation based on plan logic.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Distributor Management",
      description:
        "Manage users, genealogy trees, ranks, and downlines effortlessly.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "E-Wallet & Payout Management",
      description: "Multiple wallet support with automated payout processing.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-Friendly Interface",
      description: "Fully responsive design for web and mobile devices.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Currency & Multi-Language Support",
      description: "Ideal for global MLM businesses.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <MdPayment className="w-6 h-6" />,
      title: "Easy API & Payment Integration",
      description:
        "Integrate payment gateways, KYC, SMS, email, and third-party APIs.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="min-h-screen py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
          >
            MLM Compensation Plans{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              We Support
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center text-gray-600 text-sm md:text-base mb-12 font-sans"
          >
            Our MLM software supports all major and hybrid compensation plans
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  },
                },
              }}
              whileHover={{
                scale: 1.06,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.4 },
              }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative bg-white rounded-xl shadow-sm p-4 sm:p-5 cursor-pointer overflow-hidden group"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`w-5 h-5 transition-colors duration-300 ${
                      hoveredPlan === index
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {plan}
                  </span>
                </div>
                <motion.div
                  animate={hoveredPlan === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Key Features of Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              MLM Software
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center"
          >
            Powerful features designed to streamline your MLM business
            operations
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="bg-orange-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 sm:p-6 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 shrink-0 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-sm`}
                >
                  {feature.icon}
                </motion.div>

                {/* CONTENT */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-left">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-tight text-justify font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MLMPlansFeatures;
