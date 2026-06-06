"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, LifeBuoy, DollarSign, Headphones, Shield } from "lucide-react";

interface TrustItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const trustItems: TrustItem[] = [
  {
    title: "Experienced Development Team",
    desc: "Our highly qualified software developers possess extensive experience building high-performance e-commerce platforms using modern architectures.",
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Industry-Specific Solutions",
    desc: "Recognized as the best Grocery Delivery App Development Company in Jaipur, we deliver tailored solutions optimized for local and global market requirements.",
    icon: <ShoppingBag className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "End-to-End Project Support",
    desc: "From blueprint planning, user-experience design, development to deployment, security audits, and scale management, we stand with you at every step.",
    icon: <LifeBuoy className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "No hidden costs, no surprise fees. We offer transparent and cost-effective development plans tailored to startups and enterprise models.",
    icon: <DollarSign className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Dedicated Customer Support",
    desc: "Get constant help, maintenance updates, and operational support from our dedicated technical team whenever you need it.",
    icon: <Headphones className="w-6 h-6 text-orange-500" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WhyChoose() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Decorative gradient blur blobs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Why E-Commerce Businesses{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Trust Us?
            </span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center">
            Camlenio stands out as the provider of the best e-commerce development software and services in Jaipur. Our methodology prioritizes custom tailoring, continuous creation, and long-term infrastructure scalability.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto justify-center"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-orange-100/50 shadow-lg shadow-orange-200/5 hover:bg-white/90 transition-all duration-300 flex flex-col text-left justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-655 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion / Banner Block */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 rounded-[2rem] bg-slate-900 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base md:text-lg font-sans font-medium text-slate-200 leading-relaxed">
                We understand local market dynamics and deliver cutting-edge software solutions that support businesses to scale rapidly and thrive in competitive digital environments.
              </p>
            </div>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
