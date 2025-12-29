"use client";

import { useState } from "react";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is customized software development?",
    answer:
      "Customized software development is the process of building software tailored specifically to your business needs, workflows, and goals, instead of using ready-made solutions.",
  },
  {
    question: "Why should I choose customized software for my business?",
    answer:
      "Custom software fits your exact requirements, improves efficiency, reduces manual work, offers better security, and scales easily as your business grows.",
  },
  {
    question: "What types of customized software do you develop?",
    answer:
      "We develop custom web applications, mobile apps, enterprise software, SaaS platforms, fintech systems, ERP, CRM, MLM, and industry-specific solutions.",
  },
  {
    question: "Can you integrate custom software with existing systems?",
    answer:
      "Yes. We provide seamless integration with CRMs, ERPs, payment gateways, APIs, third-party tools, and legacy systems.",
  },
  {
    question: "Is customized software scalable?",
    answer:
      "Absolutely. Our custom software solutions are designed with scalable architecture, allowing you to add users, features, and integrations as your business grows.",
  },
  {
    question: "How long does it take to develop customized software?",
    answer:
      "Project timelines depend on features and complexity. Small projects may take 3–5 weeks, while large or enterprise-level solutions may take 2–4 months or more.",
  },
  {
    question: "Is customized software secure?",
    answer:
      "Yes. We follow industry-standard security practices, including data encryption, secure APIs, role-based access, and regular testing to ensure high security.",
  },
  {
    question: "Do you provide support after software delivery?",
    answer:
      "Yes. We offer ongoing maintenance, updates, bug fixes, and technical support after project deployment.",
  },
  {
    question: "Which technologies do you use for custom software development?",
    answer:
      "We use modern technologies such as React, Angular, Node.js, Java, PHP, Python, Flutter, AWS, and cloud-based solutions.",
  },
  {
    question: "How much does customized software development cost?",
    answer:
      "The cost depends on requirements, features, and technology. We provide flexible pricing and a detailed quote after understanding your business needs.",
  },
  {
    question: "How can I get started with Camlenio Software?",
    answer:
      "You can contact us for a free consultation, where our experts will understand your requirements and suggest the best custom software solution.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <LazyMotion features={domMax}>
      <section className="py-0 lg:py-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Questions
              </span>
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base">
              Everything you need to know about our customized software
              development services.
            </p>
          </m.div>

          {/* FAQ List */}
          <div className="space-y-2 touch-pan-y">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <m.div
                  key={faq.question}
                  className={`rounded-2xl border bg-orange-50 overflow-hidden transition-all
                  ${
                    isOpen
                      ? "border-orange-400 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {faq.question}
                    </span>

                    <m.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                      ${
                        isOpen
                          ? "bg-orange-100 text-orange-600"
                          : "bg-gray-100 text-gray-600 group-hover:bg-orange-50"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </m.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: "easeOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                          <p>{faq.answer}</p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
