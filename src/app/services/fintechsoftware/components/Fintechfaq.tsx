import FAQ, { FAQItem } from "@/app/components/faq";

const faqs: FAQItem[] = [
  {
    question: "What is fintech software development?",
    answer:
      "Fintech software development involves creating secure digital solutions for financial services such as payments, banking, lending, wallets, KYC, APIs, and financial management systems.",
  },
  {
    question: "What types of fintech solutions do you develop?",
    answer:
      "We develop digital wallets, payment gateways, fintech mobile apps, banking APIs, loan management systems, KYC & verification solutions, and custom financial software.",
  },
  {
    question: "Who can benefit from fintech software development services?",
    answer:
      "Fintech startups, banks, NBFCs, payment providers, lending companies, insurance firms, and enterprises can benefit from our fintech development services.",
  },
  {
    question: "Do you build custom fintech software solutions?",
    answer:
      "Yes, we specialize in fully customized fintech software tailored to your business model, compliance needs, and scalability requirements.",
  },
  {
    question: "How do you ensure security in fintech applications?",
    answer:
      "We follow bank-grade security standards, including data encryption, secure APIs, role-based access control, and compliance with financial regulations.",
  },
  {
    question: "Do you develop fintech mobile and web applications?",
    answer:
      "Yes, we develop high-performance fintech applications for web, Android, and iOS platforms with seamless user experiences.",
  },
  {
    question: "Can your fintech software integrate with third-party APIs?",
    answer:
      "Absolutely. Our solutions support integration with banking systems, payment gateways, KYC services, Aadhaar/PAN APIs, and other third-party platforms.",
  },
  {
    question: "Is your fintech software scalable for future growth?",
    answer:
      "Yes, all our fintech solutions are designed with scalable architecture to handle growing users, transactions, and business expansion.",
  },
  {
    question: "Do you provide support and maintenance after deployment?",
    answer:
      "Yes, we offer complete post-launch support, system upgrades, performance monitoring, and ongoing maintenance.",
  },
  {
    question: "How long does it take to develop fintech software?",
    answer:
      "Project timelines vary based on features and complexity. A basic fintech solution may take a few weeks, while advanced platforms require several months.",
  },
  {
    question: "Do you help with compliance and regulatory requirements?",
    answer:
      "Yes, we design fintech software that aligns with industry regulations, KYC norms, and data protection standards.",
  },
  {
    question:
      "How can I start a fintech software development project with you?",
    answer:
      "You can contact us through our website to discuss requirements, get a consultation, and request a demo or proposal.",
  },
];

export default function FAQSection() {
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions"
      highlightedTitle="Questions"
      subtitle="Fintech Software Development Company"
      singleOpen={true}
    />
  );
}
