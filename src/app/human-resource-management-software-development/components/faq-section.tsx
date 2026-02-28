import FAQ, { FAQItem } from "@/app/components/faq";

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
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions"
      highlightedTitle="Questions"
      subtitle="Here are some common questions about our HRMS software solutions."
      singleOpen={true}
      className="py-10"
    />
  );
}
