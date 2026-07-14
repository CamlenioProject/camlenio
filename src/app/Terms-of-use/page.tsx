"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Mail, Globe, MapPin } from "lucide-react";

export default function TermsOfUsePage() {
  const sections = [
    {
      title: "Welcome to Camlenio Software Pvt. Ltd.",
      content:
        "These Terms & Conditions govern the use of our website and services. By accessing our website or hiring our services, you agree to comply with the terms mentioned below. If you do not agree with any part of these terms, please discontinue the use of our services immediately.",
    },
    {
      title: "Services We Offered",
      content:
        "Camlenio provides professional Fintech and digital solutions, including website and mobile application development, AI development, digital marketing services, software development, UI/UX design, e-commerce solutions, and custom business software. All services are provided in accordance with mutually agreed-upon project requirements, timelines, and pricing.",
    },
    {
      title: "Project Scope & Approval",
      content:
        "Every project is executed based on the approved proposal, quotation, agreement, email communication, or invoice shared with the client. Any additional functionality, modifications, or revisions requested outside the agreed project scope may incur additional charges and result in revised delivery timelines.",
    },
    {
      title: "Payment Terms",
      content:
        "Clients are required to make payments according to the agreed milestones or invoices shared by the company. Advance payments may be required before starting the project. Delayed or incomplete payments may lead to temporary suspension of services or project delivery delays. All payments made to Camlenio are non-refundable unless otherwise agreed in writing.",
    },
    {
      title: "Client Responsibilities",
      content:
        "Clients are responsible for providing accurate project information, content, credentials, approvals, and feedback on time. Delays in communication or pending approvals from the client side may affect project delivery schedules. Clients must ensure that all materials provided do not violate any copyright, trademark, or legal rights.",
    },
    {
      title: "Intellectual Property Rights",
      content:
        "All project files, source code, designs, and deliverables remain the property of Camlenio until full payment is received. Upon complete payment clearance, ownership rights for the final approved project will be transferred to the client unless otherwise specified. The company reserves the right to showcase completed work in its portfolio for promotional purposes.",
    },
    {
      title: "Confidentiality",
      content:
        "Both parties agree to maintain confidentiality regarding sensitive business information, project data, login credentials, and proprietary information shared during the project. Camlenio does not sell, distribute, or misuse client information without consent, except where required by law.",
    },
    {
      title: "AI Development Services",
      content:
        "AI-based applications and solutions provided by Camlenio are developed using available technologies and third-party integrations. While we strive for accuracy and efficiency, we do not guarantee error-free AI outputs, automated decisions, or predictive accuracy. Clients are advised to verify AI-generated results before business or public use.",
    },
    {
      title: "Digital Marketing Disclaimer",
      content:
        "We offer reliable digital marketing services based on the client's business requirements. We include SEO, social media marketing, paid advertising, and online promotions. Results may vary depending on market competition, industry trends, platform algorithms, and audience behavior. Camlenio does not guarantee fixed rankings, leads, sales, or revenue growth.",
    },
    {
      title: "Third-Party Services",
      content:
        "Projects may involve third-party software, APIs, hosting services, payment gateways, plugins, or cloud platforms. Camlenio is not responsible for downtime, service interruptions, policy changes, pricing updates, or technical issues caused by third-party providers.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Camlenio shall not be liable for any direct, indirect, incidental, or consequential damages, including business loss, profit-loss, data loss, or service interruptions, arising from the use of our services. Clients use our services at their own risk and discretion.",
    },
    {
      title: "Cancellation & Termination",
      content:
        "Either party may terminate a project or service agreement by providing written notice. In such cases, completed work and pending dues up to the termination date will remain payable. Advance payments already made are non-refundable unless otherwise agreed.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms & Conditions shall be governed and interpreted according to the laws of India. Any disputes arising from the use of our services shall fall under the jurisdiction of the courts located in Rajasthan.",
    },
    {
      title: "Updates to Terms",
      content:
        "Camlenio reserves the right to modify or update these Terms & Conditions at any time without prior notice. Updated terms will be published on our official website.",
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
              <FileText className="w-3.5 h-3.5" />
              Legal Agreements
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
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
                For any questions regarding these Terms & Conditions, you may contact:
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
                      <div className="flex flex-col">
                        <a 
                          href="mailto:info@camlenio.com"
                          className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-300"
                        >
                          info@camlenio.com
                        </a>
                        <a 
                          href="mailto:support@camlenio.com"
                          className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-300"
                        >
                          support@camlenio.com
                        </a>
                      </div>
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
