import FAQ, { FAQItem } from "@/app/components/faq";

const faqs: FAQItem[] = [
  {
    question: "What is Hotel Management Software Development?",
    answer:
      "Hotel Management Software Development refers to building customized digital systems that automate hotel operations such as booking, front desk, billing, housekeeping, reporting, guest engagement, and more — helping hotels run efficiently and improve customer experiences.",
  },
  {
    question: "What features should a hotel management software include?",
    answer: {
      intro: "A modern hotel management software solution typically includes:",
      list: [
        "Reservation & booking system",
        "Front desk & check-in/out",
        "Billing & invoicing",
        "Housekeeping & maintenance",
        "Inventory control",
        "CRM & guest profiles",
        "Reporting & analytics",
        "Mobile and web integration",
      ],
      outro:
        "These features help hotels streamline workflows and increase productivity.",
    },
  },
  {
    question: "What are the benefits of custom hotel software development?",
    answer: {
      intro: "Custom hotel management software offers:",
      list: [
        "Tailored workflows to match your business model",
        "Scalability as your hotel grows",
        "Integration with third-party systems (e.g., OTA channels)",
        "Better guest experience with personalized services",
        "Secure data handling and compliance",
      ],
      outro:
        "This makes custom hotel software solutions more effective than off-the-shelf options.",
    },
  },
  {
    question: "How long does hotel management software development take?",
    answer:
      "Development timelines vary based on scope and complexity. A standard hotel management software development project can take anywhere from 8 to 20 weeks from analysis and design to development and deployment.",
  },
  {
    question: "What platforms can hotel management software run on?",
    answer: {
      intro:
        "Modern hotel software solutions are often web-based and mobile-compatible. This includes:",
      list: [
        "Web applications for admin & staff",
        "Mobile apps for guests",
        "Cloud-based access for managers and owners",
      ],
      outro: "This ensures convenience for both hotels and guests.",
    },
  },
  {
    question: "Can the software integrate with third-party services?",
    answer: {
      intro:
        "Yes! We build hotel software solutions that integrate seamlessly with:",
      list: [
        "Online Travel Agents (OTAs)",
        "Payment gateways",
        "Channel managers",
        "CRM systems",
        "Accounting and reporting tools",
      ],
      outro:
        "These integrations improve efficiency and centralize your hotel technology stack.",
    },
  },
  {
    question: "Is custom hotel management software more expensive?",
    answer:
      "Custom development may have a higher upfront cost than generic systems, but custom hotel software delivers long-term ROI through automation, reduced manual effort, better decision-making data, and tailored workflows specific to your business needs.",
  },
  {
    question: "Do you provide support and maintenance?",
    answer:
      "Yes! Our hotel management software development services include ongoing support, updates, feature enhancements, and technical assistance to ensure your software stays up-to-date, secure, and reliable.",
  },
  {
    question: "How will hotel software improve guest satisfaction?",
    answer: {
      intro: "With features like:",
      list: [
        "Online bookings & mobile check-in",
        "Guest profile management",
        "Personalized recommendations",
        "Automated alerts and services",
      ],
      outro:
        "…your guests enjoy faster service, better communication, and a smoother overall hotel experience.",
    },
  },
  {
    question: "Which businesses need hotel management software?",
    answer: {
      intro: "Hotel management software benefits:",
      list: [
        "Boutique hotels",
        "Luxury resorts",
        "Hotel chains",
        "Hostels & lodges",
        "Serviced apartments",
        "Vacation rentals",
      ],
      outro:
        "…and any hospitality operation looking to streamline operations and elevate guest service.",
    },
  },
];

export function FAQSection() {
  return (
    <FAQ
      faqs={faqs}
      title="Frequently Asked Questions (FAQs)"
      highlightedTitle="Questions (FAQs)"
      singleOpen={true}
    />
  );
}
