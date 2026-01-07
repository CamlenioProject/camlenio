import FAQ, { FAQItem } from "@/app/components/faq";

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
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions"
      highlightedTitle="Questions"
      subtitle="Everything you need to know about our ecommerce development services."
      singleOpen={true}
      className="py-10"
    />
  );
}
