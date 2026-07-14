"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Mail, Globe, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Welcome to Camlenio Software Pvt. Ltd. We value your privacy and are committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, store, and safeguard the information you share with us when using our website and services, including website development, mobile application development, AI development, software solutions, and digital marketing services.",
    },
    {
      title: "Information We Collect",
      content:
        "Camlenio may collect personal information such as your name, email address, phone number, company details, billing information, and project requirements when you contact us or use our services. We may also collect technical information, including IP address, browser type, device information, and website usage data, to improve user experience and service performance.",
    },
    {
      title: "How We Use Your Information",
      content:
        "The information collected is used to provide services, manage projects, process payments, improve customer support, communicate project updates, and enhance our website and business operations. We may also use your information for marketing communications, promotional offers, and service-related notifications, unless you opt out of such communications.",
    },
    {
      title: "Data Protection & Security",
      content:
        "We implement reasonable security measures to protect your personal and business information from unauthorized access, misuse, loss, or disclosure. While we strive to maintain secure systems, no online platform or digital transmission can be guaranteed completely secure.",
    },
    {
      title: "Third-Party Services",
      content:
        "Our services may involve third-party tools, payment gateways, hosting providers, analytics platforms, or advertising services. These third-party providers may collect and process information under their own privacy policies. Camlenio is not responsible for the privacy practices of external platforms or websites.",
    },
    {
      title: "Cookies Policy",
      content:
        "Our website may use cookies and tracking technologies to improve website functionality, analyze traffic, and personalize user experience. Users may choose to disable cookies through their browser settings; however, certain features of the website may not function properly.",
    },
    {
      title: "Information Sharing",
      content:
        "Camlenio does not sell, rent, or trade your personal information to third parties. Information may only be shared with trusted service providers, legal authorities, or partners when required for service delivery, legal compliance, or business operations.",
    },
    {
      title: "Client Confidentiality",
      content:
        "We respect the confidentiality of client projects, business data, credentials, and proprietary information shared during service engagement. Confidential information is handled with appropriate care and is not disclosed without permission unless required by law.",
    },
    {
      title: "Your Rights",
      content:
        "Users may request access, correction, or deletion of their personal information by contacting us directly. Users may also opt out of promotional communications at any time.",
    },
    {
      title: "Changes to Privacy Policy",
      content:
        "Camlenio reserves the right to update or modify this Privacy Policy at any time. Updated policies will be published on our official website.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-slate-50 text-slate-800 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.04)] p-8 sm:p-12 md:p-16"
        >
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-orange-100">
              <Shield className="w-3.5 h-3.5" />
              Privacy Policy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-orange-500 font-bold mt-2 text-lg">
              Camlenio Software Pvt. Ltd.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
                  {section.content}
                </p>
              </motion.section>
            ))}

            {/* Contact Info Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-50/50 to-amber-50/30 border border-orange-500/10"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                For questions regarding this Privacy Policy or data-related concerns, please contact:
              </p>
              
              <div className="space-y-4">
                <div className="font-semibold text-slate-900 text-base sm:text-lg">
                  Camlenio Software Pvt. Ltd.
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-orange-100 text-orange-500">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Website</p>
                      <Link 
                        href="https://camlenio.com" 
                        target="_blank"
                        className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-300"
                      >
                        camlenio.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-orange-100 text-orange-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email</p>
                      <a 
                        href="mailto:info@camlenio.com"
                        className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-300"
                      >
                        info@camlenio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="p-2.5 rounded-xl bg-white border border-orange-100 text-orange-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Location</p>
                      <span className="text-sm font-semibold text-slate-700">
                        Rajasthan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
