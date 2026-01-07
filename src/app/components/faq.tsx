"use client";

import { useState } from "react";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string | string[] | { intro?: string; list?: string[]; outro?: string };
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  className?: string;
  singleOpen?: boolean;
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  highlightedTitle = "Questions",
  subtitle,
  className = "",
  singleOpen = false,
}: FAQProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (singleOpen) {
      setActiveIndices((prev) => (prev.includes(index) ? [] : [index]));
    } else {
      setActiveIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  return (
    <LazyMotion features={domMax}>
      <section className={`relative overflow-hidden py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {title?.split(highlightedTitle)?.[0]}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                {highlightedTitle}
              </span>
              {title?.split(highlightedTitle)?.[1]}
            </h2>
            {subtitle && (
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 touch-pan-y items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => {
                const isOpen = activeIndices.includes(index);

                return (
                  <m.div
                    key={`faq-left-${index}`}
                    className={`rounded-2xl border bg-orange-50 overflow-hidden transition-all duration-300
                            ${isOpen
                        ? "border-orange-400 shadow-md bg-white"
                        : "border-gray-200 hover:border-orange-300"
                      }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-5 py-3 text-left group"
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {faq.question}
                      </span>

                      <m.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ml-4
                                  ${isOpen
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-600 group-hover:bg-orange-50"
                          }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </m.span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: "easeOut" },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                            {typeof faq.answer === "string" ? (
                              <p>{faq.answer}</p>
                            ) : Array.isArray(faq.answer) ? (
                              <ul className="list-disc pl-5 space-y-2">
                                {faq.answer.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <div className="space-y-3">
                                {faq.answer.intro && <p>{faq.answer.intro}</p>}
                                {faq.answer.list && (
                                  <ul className="list-disc pl-5 space-y-2">
                                    {faq.answer.list.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                                {faq.answer.outro && <p>{faq.answer.outro}</p>}
                              </div>
                            )}
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, i) => {
                const index = Math.ceil(faqs.length / 2) + i;
                const isOpen = activeIndices.includes(index);

                return (
                  <m.div
                    key={`faq-right-${index}`}
                    className={`rounded-2xl border bg-orange-50 overflow-hidden transition-all duration-300
                            ${isOpen
                        ? "border-orange-400 shadow-md bg-white"
                        : "border-gray-200 hover:border-orange-300"
                      }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-5 py-3 text-left group"
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {faq.question}
                      </span>

                      <m.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ml-4
                                  ${isOpen
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-600 group-hover:bg-orange-50"
                          }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </m.span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: "easeOut" },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                            {typeof faq.answer === "string" ? (
                              <p>{faq.answer}</p>
                            ) : Array.isArray(faq.answer) ? (
                              <ul className="list-disc pl-5 space-y-2">
                                {faq.answer.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <div className="space-y-3">
                                {faq.answer.intro && <p>{faq.answer.intro}</p>}
                                {faq.answer.list && (
                                  <ul className="list-disc pl-5 space-y-2">
                                    {faq.answer.list.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                                {faq.answer.outro && <p>{faq.answer.outro}</p>}
                              </div>
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
