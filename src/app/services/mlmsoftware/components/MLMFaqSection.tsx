import FAQ, { FAQItem } from "@/app/components/faq";

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
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions"
      highlightedTitle="Questions"
      subtitle="Everything you need to know about our MLM software development services."
      singleOpen={true}
    />
  );
}
