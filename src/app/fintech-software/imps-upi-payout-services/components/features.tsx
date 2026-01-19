"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  Code,
  UploadCloud,
  Zap,
  Radio,
  CheckCircle,
  Search,
  ShieldCheck,
  Users,
  GitPullRequest,
  Lock,
  Server,
  FileWarning,
  ShieldAlert,
  FileText,
  Bell,
  ChevronDown,
  ArrowRight
} from "lucide-react";

// Feature Data with mapped images
const features = [
  {
    id: 1,
    title: "Unified Status Tracking",
    description: "Track the fund status hassle-free across Webhooks, APIs, and the dashboard with complete visibility.",
    icon: Activity,
    image: "/fintech/status_tracking.png"
  },
  {
    id: 2,
    title: "Developer REST APIs",
    description: "Get started rapidly with our developer-friendly REST APIs for instant transfers and real-time tracking.",
    icon: Code,
    image: "/fintech/api_developer.png"
  },
  {
    id: 3,
    title: "Bulk File Upload",
    description: "Process thousands of transactions instantly with zero integration by simply uploading a payout file.",
    icon: UploadCloud,
    image: "/fintech/bulk_upload.png"
  },
  {
    id: 4,
    title: "No Beneficiary Delays",
    description: "Send payments immediately without waiting for beneficiary addition or cooling periods.",
    icon: Zap,
    image: "/fintech/instant_transfer.png"
  },
  {
    id: 5,
    title: "Real-Time Webhooks",
    description: "Our infrastructure guarantees funds reach beneficiaries immediately, 24/7/365.",
    icon: Radio,
    image: "/fintech/api_developer.png"
  },
  {
    id: 6,
    title: "Live Payment Status",
    description: "Receive 24/7 transaction updates via secure webhooks without manual tracking.",
    icon: CheckCircle,
    image: "/fintech/status_tracking.png"
  },
  {
    id: 7,
    title: "Smart Search",
    description: "Find any transaction in seconds using Request ID, UTR, or account number.",
    icon: Search,
    image: "/fintech/status_tracking.png"
  },
  {
    id: 8,
    title: "Access Control",
    description: "Secure solutions with detailed role-based access control for your entire team.",
    icon: ShieldCheck,
    image: "/fintech/team_access.png"
  },
  {
    id: 9,
    title: "Multiple Logins",
    description: "Manage team access efficiently with ability to create/reset user logins anytime.",
    icon: Users,
    image: "/fintech/team_access.png"
  },
  {
    id: 10,
    title: "Approval Workflows",
    description: "Define single or multi-level approval flows with maker-checker security protocols.",
    icon: GitPullRequest,
    image: "/fintech/team_access.png"
  },
  {
    id: 11,
    title: "Secure Dashboard",
    description: "Enterprise-grade security with IP whitelisting, 2FA, and encrypted transaction passwords.",
    icon: Lock,
    image: "/fintech/security_shield.png"
  },
  {
    id: 12,
    title: "API Security",
    description: "HTTPS-only mode, signed requests, and server IP whitelisting for bulletproof integrations.",
    icon: Server,
    image: "/fintech/security_shield.png"
  },
  {
    id: 13,
    title: "Duplicate Prevention",
    description: "Intelligent validation prevents accidental double payments and financial loss.",
    icon: FileWarning,
    image: "/fintech/security_shield.png"
  },
  {
    id: 14,
    title: "Fraud Detection",
    description: "Automatically blocks funds to suspect/blacklisted accounts with real-time screening.",
    icon: ShieldAlert,
    image: "/fintech/security_shield.png"
  },
  {
    id: 15,
    title: "Rich Reporting",
    description: "Download comprehensive daily/monthly statements and reconciliation reports.",
    icon: FileText,
    image: "/fintech/bulk_upload.png"
  },
  {
    id: 16,
    title: "Smart Alerts",
    description: "Real-time notifications for low balance, failures, and system thresholds.",
    icon: Bell,
    image: "/fintech/instant_transfer.png"
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const toggleView = () => {
    setVisibleCount((prev) => (prev === 8 ? features.length : 8));
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Centered Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Features of <span className="text-orange-600">Payroll & Payout</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {features.slice(0, visibleCount).map((feature, idx) => (
              <motion.div
                layout
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-[380px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                {/* Background Image - Full Size */}
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                </div>

                {/* Floating Content Card */}
                <motion.div
                  className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/20 overflow-hidden"
                  initial={false}
                  animate={{
                    height: hoveredIndex === idx ? "180px" : "80px",
                    y: 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-center justify-between h-5 mb-4 mt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                        {feature.title}
                      </h3>
                    </div>
                    {/* Arrow that rotates on hover */}
                    <span className={`text-slate-400 group-hover:text-orange-500 transition-colors duration-300 transform group-hover:-rotate-45`}>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Description - Revealed on Expand */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed mb-1 line-clamp-3">
                      {feature.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleView}
            className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full shadow-xl shadow-slate-200 border border-slate-100 font-semibold group hover:border-orange-200 transition-all duration-300"
          >
            {visibleCount === 8 ? "View all features" : "Show less"}
            <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-orange-100 group-hover:text-orange-600 flex items-center justify-center transition-colors">
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${visibleCount > 8 ? "rotate-180" : ""}`} />
            </span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
