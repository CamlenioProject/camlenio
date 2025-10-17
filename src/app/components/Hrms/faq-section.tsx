"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Camlenio HRMS?",
    answer:
      "Camlenio HRMS is a cloud-based Human Resource Management Software that automates HR operations like recruitment, payroll, performance, and employee tracking.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes, Camlenio HRMS is fully scalable and works perfectly for startups, SMEs, and enterprises.",
  },
  {
    question: "Can it integrate with other tools?",
    answer:
      "Yes, Camlenio HRMS supports easy integration with payroll, accounting, and communication tools.",
  },
  {
    question: "How secure is the data?",
    answer:
      "Your data is protected with enterprise-grade security and regular backups.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow-md p-5 cursor-pointer border border-gray-200 bg-orange-100"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="/ServiceDropdown/hrmssoftware/FAQ.png"
              alt="FAQ Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
