import FAQ, { FAQItem } from "@/app/components/faq";

const faqs: FAQItem[] = [
  {
    question: "What is customized software development?",
    answer:
      "Customized software development is the process of building software tailored specifically to your business needs, workflows, and goals, instead of using ready-made solutions.",
  },
  {
    question: "Why should I choose customized software for my business?",
    answer:
      "Custom software fits your exact requirements, improves efficiency, reduces manual work, offers better security, and scales easily as your business grows.",
  },
  {
    question: "What types of customized software do you develop?",
    answer:
      "We develop custom web applications, mobile apps, enterprise software, SaaS platforms, fintech systems, ERP, CRM, MLM, and industry-specific solutions.",
  },
  {
    question: "Can you integrate custom software with existing systems?",
    answer:
      "Yes. We provide seamless integration with CRMs, ERPs, payment gateways, APIs, third-party tools, and legacy systems.",
  },
  {
    question: "Is customized software scalable?",
    answer:
      "Absolutely. Our custom software solutions are designed with scalable architecture, allowing you to add users, features, and integrations as your business grows.",
  },
  {
    question: "How long does it take to develop customized software?",
    answer:
      "Project timelines depend on features and complexity. Small projects may take 3–5 weeks, while large or enterprise-level solutions may take 2–4 months or more.",
  },
  {
    question: "Is customized software secure?",
    answer:
      "Yes. We follow industry-standard security practices, including data encryption, secure APIs, role-based access, and regular testing to ensure high security.",
  },
  {
    question: "Do you provide support after software delivery?",
    answer:
      "Yes. We offer ongoing maintenance, updates, bug fixes, and technical support after project deployment.",
  },
  {
    question: "Which technologies do you use for custom software development?",
    answer:
      "We use modern technologies such as React, Angular, Node.js, Java, PHP, Python, Flutter, AWS, and cloud-based solutions.",
  },
  {
    question: "How much does customized software development cost?",
    answer:
      "The cost depends on requirements, features, and technology. We provide flexible pricing and a detailed quote after understanding your business needs.",
  },
  {
    question: "How can I get started with Camlenio Software?",
    answer:
      "You can contact us for a free consultation, where our experts will understand your requirements and suggest the best custom software solution.",
  },
];

export default function FAQSection() {
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions"
      highlightedTitle="Questions"
      subtitle="Everything you need to know about our customized software development services."
      singleOpen={true}
      className="py-0 lg:py-10"
    />
  );
}
