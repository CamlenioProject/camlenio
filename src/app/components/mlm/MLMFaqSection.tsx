"use client";

import { useState } from "react";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: "What is MLM software?",
    answer:
      "MLM (Multi-Level Marketing) software is a digital platform that helps network marketing businesses manage distributors, genealogy trees, commission calculations, payouts, and overall business operations in an automated and secure way.",
  },
  {
    question: "Do you provide custom MLM software development?",
    answer:
      "Yes. At Camlenio Software Pvt. Ltd., we develop 100% customized MLM software based on your business model, compensation plan, workflow, and scalability requirements.",
  },
  {
    question: "Which MLM compensation plans do you support?",
    answer: [
      "Binary Plan",
      "Matrix Plan",
      "Unilevel Plan",
      "Board Plan",
      "Generation Plan",
      "Monoline Plan",
      "Stair-Step Plan",
      "Hybrid & Custom Plans",
    ],
  },
  {
    question: "Is your MLM software scalable for future growth?",
    answer:
      "Absolutely. Our MLM software is built using scalable architecture, allowing your business to grow from hundreds to millions of users without performance issues.",
  },
  {
    question: "Do you provide MLM software with mobile app support?",
    answer:
      "Yes. We develop MLM web portals and mobile applications (Android & iOS) with user-friendly interfaces for distributors, admins, and customers.",
  },
  {
    question: "Can you integrate payment gateways and wallets?",
    answer: [
      "Payment gateways",
      "E-wallet systems",
      "Bank transfers",
      "SMS & Email services",
      "KYC & verification APIs",
    ],
  },
  {
    question: "How secure is your MLM software?",
    answer: [
      "Role-based access control",
      "Encrypted data storage",
      "Secure transaction handling",
      "Fraud prevention mechanisms",
    ],
  },
  {
    question: "Do you offer MLM software upgrade or migration services?",
    answer:
      "Yes. We can upgrade existing MLM software or migrate data from legacy systems to a modern and high-performance platform without data loss.",
  },
  {
    question: "How long does it take to develop MLM software?",
    answer: [
      "Basic MLM software: 2–4 weeks",
      "Advanced custom MLM software: 4–8 weeks",
    ],
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes. We provide ongoing technical support, maintenance, and feature enhancements after deployment to ensure smooth business operations.",
  },
  {
    question: "Is the MLM software suitable for global businesses?",
    answer:
      "Yes. Our MLM solutions support multi-currency, multi-language, and tax configurations, making them ideal for international MLM businesses.",
  },
  {
    question: "How can I get a demo of your MLM software?",
    answer:
      "You can request a FREE demo by calling +91 97733 23812 or visiting www.camlenio.com.",
  },
];

export default function MLMFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <LazyMotion features={domMax}>
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-7xl mx-auto">
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
                Everything you need to know about our ecommerce development
                services.
              </p>
            </m.div>

            <div className="space-y-2 touch-pan-y">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <m.div
                    key={index}
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
                            {Array.isArray(faq.answer) ? (
                              <ul className="list-disc pl-5 space-y-2">
                                {faq.answer.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{faq.answer}</p>
                            )}
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
