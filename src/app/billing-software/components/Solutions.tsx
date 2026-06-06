"use client";

import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Percent,
  Store,
  Activity,
  Cloud,
  Layers,
  Globe,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

interface SolutionItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const solutions: SolutionItem[] = [
  {
    title: "Custom Billing Software",
    icon: <Code className="w-5 h-5 text-orange-500" />,
    desc: "Bespoke billing platforms designed around your specific business logic, user roles, and custom fields.",
  },
  {
    title: "POS Billing Software",
    icon: <Laptop className="w-5 h-5 text-orange-500" />,
    desc: "High-speed point-of-sale systems with barcode scanning, barcode printing, and cash drawer integrations.",
  },
  {
    title: "GST Billing Software",
    icon: <Percent className="w-5 h-5 text-orange-500" />,
    desc: "Automated CGST/SGST/IGST tax calculation, HSN code database, and dynamic e-way bill generation.",
  },
  {
    title: "Retail Billing Software",
    icon: <Store className="w-5 h-5 text-orange-500" />,
    desc: "Quick invoicing, batch pricing, scheme/discount management, and customer loyalty program settings.",
  },
  {
    title: "Pharmacy Billing Software",
    icon: <Activity className="w-5 h-5 text-orange-500" />,
    desc: "Track medicine batch numbers, drug expiry dates, salt names, and doctor referral indexes easily.",
  },
  {
    title: "Cloud Billing Software",
    icon: <Cloud className="w-5 h-5 text-orange-500" />,
    desc: "Access your dashboard databases securely from anywhere, allowing remote stock updates and backups.",
  },
  {
    title: "Inventory Billing Software",
    icon: <Layers className="w-5 h-5 text-orange-500" />,
    desc: "Sync stock counts directly with invoice generation to dynamically trigger low stock alerts.",
  },
  {
    title: "Online Billing Software",
    icon: <Globe className="w-5 h-5 text-orange-500" />,
    desc: "Send invoice links via WhatsApp or email, allowing fast checkout via UPI or cards.",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* BOTTOM BLOCK: 8 Solutions Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Comprehensive Billing Software <br />
              <span className="text-orange-500">
                Solutions We Offer
              </span>
            </h3>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-[2rem] bg-white border border-orange-100 shadow-xl shadow-orange-100/5 hover:border-orange-200 hover:shadow-orange-200/10 transition-all duration-300 flex flex-col justify-between text-left min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-650 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
