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
    question: "What is Camlenio HRMS Software?",
    answer:
      "Camlenio HRMS is a complete Human Resource Management Software designed to automate HR processes like recruitment, payroll, attendance, leave, and employee performance management.",
  },
  {
    question: "Who can use Camlenio HRMS?",
    answer:
      "Camlenio HRMS is ideal for startups, SMEs, enterprises, IT companies, and organizations of all sizes looking to streamline HR operations.",
  },
  {
    question: "What HR functions does Camlenio HRMS cover?",
    answer:
      "It includes employee management, payroll processing, attendance & leave management, recruitment, performance tracking, reporting, and compliance management.",
  },
  {
    question: "Is Camlenio HRMS customizable?",
    answer:
      "Yes, Camlenio offers fully customizable HRMS solutions based on your business requirements and organizational workflow.",
  },
  {
    question: "Does Camlenio HRMS support payroll automation?",
    answer:
      "Yes, it automates payroll calculations, salary slips, deductions, and statutory compliance to reduce errors and save time.",
  },
  {
    question: "Is employee data secure in Camlenio HRMS?",
    answer:
      "Absolutely. Camlenio HRMS follows strict security standards to ensure data privacy, secure access, and role-based permissions.",
  },
  {
    question: "Can Camlenio HRMS integrate with other systems?",
    answer:
      "Yes, it integrates with third-party software, accounting tools, biometric devices, and external APIs.",
  },
  {
    question: "Is Camlenio HRMS cloud-based or on-premise?",
    answer:
      "Camlenio HRMS is available as cloud-based, on-premise, or hybrid solutions depending on your business needs.",
  },
  {
    question: "Does Camlenio provide support and maintenance?",
    answer:
      "Yes, Camlenio offers ongoing technical support, regular updates, and maintenance after deployment.",
  },
  {
    question: "How can I get a demo of Camlenio HRMS?",
    answer:
      "You can request a free demo by contacting Camlenio through the website or by reaching out to the sales team.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <LazyMotion features={domMax}>
      <section className="py-10">
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
              Camlenio Human Resource Management Software
            </p>
          </m.div>

          {/* FAQ List */}
          <div className="space-y-2 touch-pan-y">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <m.div
                  key={index}
                  className={`rounded-2xl border overflow-hidden transition-all
                    ${
                      isOpen
                        ? "border-orange-400 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
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
                        <div className="px-6 pb-6 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                          {faq.answer}
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
