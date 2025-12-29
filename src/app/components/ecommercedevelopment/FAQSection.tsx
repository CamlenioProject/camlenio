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
    question: "What is Ecommerce Software Development?",
    answer:
      "Ecommerce Software Development involves creating secure, scalable online platforms that allow businesses to sell products or services digitally. It includes product management, payment gateways, order processing, inventory tracking, and customer management.",
  },
  {
    question: "Do you provide custom ecommerce software solutions?",
    answer:
      "Yes. We specialize in fully customized ecommerce software development tailored to your business model, industry, and growth goals. From unique workflows to advanced integrations, everything is built as per your requirements.",
  },
  {
    question: "Which ecommerce platforms do you work with?",
    answer:
      "We work with Shopify, WooCommerce, Magento (Adobe Commerce), OpenCart, PrestaShop, and also build custom ecommerce solutions from scratch.",
  },
  {
    question: "Can you develop both B2B and B2C ecommerce platforms?",
    answer:
      "Absolutely. We build B2B, B2C, and multi-vendor marketplaces with role-based access, pricing models, bulk ordering, and advanced admin controls.",
  },
  {
    question: "Is payment gateway integration included?",
    answer:
      "Yes. We integrate Razorpay, Stripe, PayPal, UPI, and other regional or international payment gateways with complete transaction security.",
  },
  {
    question: "Will the ecommerce website be mobile-friendly?",
    answer:
      "Yes. All our ecommerce solutions are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "How long does it take to develop an ecommerce platform?",
    answer:
      "Timelines depend on complexity. Basic ecommerce projects take 3–5 weeks, while advanced or custom solutions take 6–10 weeks or more.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. We offer ongoing maintenance, technical support, feature upgrades, and performance optimization after launch.",
  },
  {
    question: "How much does ecommerce software development cost?",
    answer:
      "Costs depend on features, platform, integrations, and customization. We provide a detailed quote after understanding your requirements.",
  },
  {
    question: "Can I scale my ecommerce business in the future?",
    answer:
      "Yes. Our solutions are built to scale, allowing you to add features, products, users, and integrations as your business grows.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact us for a free consultation. Our experts will analyze your needs and recommend the best ecommerce solution.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <LazyMotion features={domMax}>
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
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
                    className="w-full flex items-center justify-between px-5 py-4 text-left group cursor-pointer"
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
      </section>
    </LazyMotion>
  );
}
