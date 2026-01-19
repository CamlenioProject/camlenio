"use client";

import { motion } from "framer-motion";
import FAQ from "@/app/components/faq";

const payoutFaqs = [
  {
    question: "What is Payout API?",
    answer:
      "The Payout API is a technology software that allows businesses to automate fund transfers from direct bank accounts or UPI IDs. This software enables secure and fast payment for salaries, commissions and refunds without manual processing.",
  },
  {
    question: "How does Camlenio API help businesses?",
    answer:
      "Here, the Camlenio Payout API simplifies payment solutions by providing automated payments, accurate time status tracking, and helping banking channels.",
  },
  {
    question: "Which Payout modes are helped by Camlenio?",
    answer:
      "The Camlenio provides reliable support, such as UPI payout services, NEFT Payout API, RTGS Payout API, IMPS Payout API, to guarantee the flexibility for all types of transactions.",
  },
  {
    question: "How Secure are Payout Services?",
    answer:
      "The Camlenio follows strict security and compliance ideals. As all transactions via a Payout API are encrypted, watched in real-time and processed by trustworthy banking channels.",
  },
  {
    question: "Does Camlenio help multiple banks?",
    answer:
      "The Camlenio provides the Multi bank Payout system that combines with several banks to guarantee high success rates and uninterrupted payout services.",
  },
];

export default function faqSection() {
  const smoothTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={smoothTransition}
    >
      <FAQ
        faqs={payoutFaqs}
        title="Frequently Asked Questions"
        highlightedTitle="Questions"
        subtitle="Everything you need to know about our Payout Services."
        singleOpen
      />
    </motion.div>
  );
}
