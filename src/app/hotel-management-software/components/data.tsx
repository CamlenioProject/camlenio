
import { FaBed, FaConciergeBell, FaBroom, FaFileInvoiceDollar, FaUsers, FaBoxes, FaChartBar, FaMobileAlt, FaGlobe, FaCreditCard, FaUserLock, FaBell, FaCloud } from "react-icons/fa";

// Solutions Data
export const solutions = [
  {
    title: "Reservation & Booking System",
    desc: "Manage room inventory, online bookings, availability calendar, and booking confirmations with a seamless interface that integrates with OTA channels and direct booking engines.",
    icon: <FaBed />,
    illustration: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop", // Calendar/Booking metaphor
  },
  {
    title: "Front Desk Operations",
    desc: "Handle guest check-in/check-out, room assignments, walk-ins, and ID verification smoothly with an intuitive front desk module designed for speed and accuracy.",
    icon: <FaConciergeBell />,
    illustration: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1000&auto=format&fit=crop", // Front desk/Reception
  },
  {
    title: "Housekeeping Management",
    desc: "Track housekeeping schedules, room status (clean/dirty), and maintenance requests in real-time — ensuring timely service and superior guest experiences.",
    icon: <FaBroom />,
    illustration: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop", // Cleaning/Hygiene
  },
  {
    title: "Billing & Invoicing",
    desc: "Automate billing, generate invoices, handle multiple payment methods, and manage taxes and discounts accurately for each guest stay.",
    icon: <FaFileInvoiceDollar />,
    illustration: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop", // Finance/Invoicing
  },
  {
    title: "CRM & Guest Profiling",
    desc: "Store guest profiles, preferences, booking history, and communication logs — enabling personalized service and targeted marketing campaigns.",
    icon: <FaUsers />,
    illustration: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop", // People/Connection
  },
  {
    title: "Inventory & Procurement",
    desc: "Monitor supplies, track stock usage in real-time, and streamline procurement processes to reduce waste and optimize inventory levels.",
    icon: <FaBoxes />,
    illustration: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop", // Boxes/Inventory
  },
  {
    title: "Reporting & Analytics",
    desc: "Get real-time dashboards and detailed reports on occupancy, revenue (RevPAR), expenses, and operational KPIs to make data-driven decisions.",
    icon: <FaChartBar />,
    illustration: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Analytics/Growth
  },
  {
    title: "Mobile App Integration",
    desc: "Offer guests mobile check-in, digital keys, room service requests, and feedback forms through branded mobile and web apps for a modern experience.",
    icon: <FaMobileAlt />,
    illustration: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", // Mobile/Tech
  },
];

// Key Features Data (Categorized)
export const featureCategories = {
  "Core Management": [
    {
      title: "Multi-Property Support",
      desc: "Manage multiple hotels, resorts, or outlets from a single centralized dashboard with unified reporting.",
      icon: <FaGlobe />,
    },
    {
      title: "User Roles & Access",
      desc: "Customize access levels for admins, receptionists, housekeeping staff, and managers to ensure data security.",
      icon: <FaUserLock />,
    },
  ],
  "Integration & Automation": [
    {
      title: "Channel Manager Sync",
      desc: "Sync availability and rates automatically with Online Travel Agents (OTAs) like Booking.com, Expedia, and Airbnb.",
      icon: <FaCloud />,
    },
    {
      title: "Payment Gateway",
      desc: "Secure integration with global payment gateways for hassle-free online payments, deposits, and refunds.",
      icon: <FaCreditCard />,
    },
    {
      title: "Automated Alerts",
      desc: "Set up automated SMS/Email reminders for check-ins, booking confirmations, and special guest requests.",
      icon: <FaBell />,
    },
  ],
};

// Software Types / Who Can Benefit
export const softwareTypes = [
  {
    title: "Boutique Hotels",
    desc: "Personalized management software that helps independent boutique hotels deliver unique guest experiences while streamlining back-office tasks.",
    bestFor: "Small to Mid-sized Independent Hotels",
    features: ["Personalized CRM", "Direct Booking Engine", "Mobile Concierge"],
  },
  {
    title: "Luxury Resorts",
    desc: "Comprehensive solutions for complex resort operations, managing spa bookings, activities, dining, and multi-location amenities seamlessly.",
    bestFor: "Resorts & Spas",
    features: ["Activity Scheduling", "POS Integration", "Member Management"],
  },
  {
    title: "Hotel Chains",
    desc: "Scalable enterprise-grade software to manage multiple properties, centralize reservations, and standardize operations across all locations.",
    bestFor: "Multi-Location Brands",
    features: ["Centralized Reservation System (CRS)", "Global Reporting", "Unified Inventory"],
  },
  {
    title: "Serviced Apartments",
    desc: "Software tailored for long-term stays, managing leases, housekeeping schedules, and tenant communication efficiently.",
    bestFor: "Apartments & Extended Stay",
    features: ["Lease Management", "Utility Billing", "Tenant Portal"],
  },
  {
    title: "Vacation Rentals",
    desc: "Agile tools for managing vacation homes and Airbnbs, focusing on channel management, automated check-ins, and cleaning coordination.",
    bestFor: "Airbnb Hosts & Managers",
    features: ["Channel Sync", "Smart Lock Integration", "Auto-Messaging"],
  },
  {
    title: "Hostels & Lodges",
    desc: "Cost-effective management systems optimized for bed-based inventory, dorms, and social guest engagement.",
    bestFor: "Budget Accommodation",
    features: ["Bed Management", "Group Bookings", "Social Events Calendar"],
  }
];

// FAQ Data
export const faqs = [
  {
    question: "What is Hotel Management Software Development?",
    answer: "Hotel Management Software Development refers to building customized digital systems that automate hotel operations such as booking, front desk, billing, housekeeping, reporting, guest engagement, and more — helping hotels run efficiently and improve customer experiences."
  },
  {
    question: "What features should a hotel management software include?",
    answer: "A modern solution typically includes a reservation & booking system, front desk checkout, billing & invoicing, housekeeping management, inventory control, CRM for guest profiles, reporting & analytics, and mobile/web integrations."
  },
  {
    question: "What are the benefits of custom hotel software development?",
    answer: "Custom software offers tailored workflows to match your business model, scalability as you grow, better integration with third-party systems (like OTAs), improved guest experiences via personalization, and superior data security compared to off-the-shelf options."
  },
  {
    question: "How long does development take?",
    answer: "Development timelines vary based on scope, but a standard custom hotel management software project typically takes between 8 to 20 weeks from initial analysis and design to final deployment and training."
  },
  {
    question: "Can the software integrate with third-party services?",
    answer: "Yes! We build solutions that seamlessly integrate with Online Travel Agents (OTAs), payment gateways, Channel Managers, CRM systems, and accounting tools to centralize your hotel technology stack."
  },
  {
    question: "Is custom software more expensive?",
    answer: "While custom development has a higher upfront cost than subscription-based tools, it delivers better long-term ROI through automation, no recurring license fees per user, and workflows that specifically optimize your unique operations."
  },
];
