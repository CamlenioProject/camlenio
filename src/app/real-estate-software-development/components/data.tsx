
import {
  FaCity, FaHome, FaChartLine, FaUsers, FaMobileAlt, FaLaptopCode, FaCogs,
  FaMapMarkedAlt, FaRobot, FaSearch, FaFileContract, FaKey, FaHandshake,
  FaBuilding, FaCheckCircle, FaArrowRight, FaShieldAlt, FaGlobe, FaComments,
  FaCalendarCheck, FaFileInvoiceDollar, FaBalanceScale
} from "react-icons/fa";
import { MdRealEstateAgent, MdDashboard, MdAnalytics, MdSecurity, MdOutlineTouchApp, MdCompareArrows } from "react-icons/md";

// --- Data ---
export const solutions = [
  {
    title: "Custom Real Estate Software Development",
    desc: "Tailored solutions are at the heart of what we do. Our Custom Real Estate Software Development services ensure your software matches your business model, workflows, and goals.",
    icon: <FaCogs />,
  },
  {
    title: "Real Estate CRM Software Development",
    desc: "Build stronger relationships with buyers, sellers, and leads. Track interactions, manage leads, automate follow-ups, and grow your property business.",
    icon: <FaUsers />,
  },
  {
    title: "Property Management Software Development",
    desc: "Simplify everyday management tasks for property portfolios. From tenant tracking to maintenance logs, our systems save time and cut costs.",
    icon: <FaCity />,
  },
  {
    title: "Real Estate Mobile App Development",
    desc: "Stay connected with your clients on the go. We build intuitive, secure, and feature rich mobile apps for both iOS and Android.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Real Estate Web Application Development",
    desc: "Custom web portals that handle listings, advanced search, analytics, reporting, and customer interactions with a user-centric design.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Real Estate ERP Software Solutions",
    desc: "Integrated Real Estate ERP solutions help you manage every department finance, HR, operations, sales, and customer service under one system.",
    icon: <FaChartLine />,
  },
];

export const features = [
  { icon: <FaHome />, title: "Property Listing Management", desc: "Efficiently create, edit, and organize property listings with details like images, pricing, features, and location." },
  { icon: <FaSearch />, title: "Advanced Search & Filters", desc: "Let users quickly find properties using filters such as location, price range, property type, size, and amenities." },
  { icon: <FaUsers />, title: "Lead & Customer Management (CRM)", desc: "Track and manage leads, clients, interactions, follow-ups, and customer preferences from a centralized dashboard." },
  { icon: <FaMobileAlt />, title: "Mobile & Web Access", desc: "Access property data and tools from both mobile apps and web platforms, ensuring real-time usability on all devices." },
  { icon: <FaMapMarkedAlt />, title: "Interactive Map & Geo-Location", desc: "Show properties on interactive maps with markers, route directions, and nearby points of interest." },
  { icon: <MdRealEstateAgent />, title: "Agent & Team Management", desc: "Assign listings, track performance, manage commissions, and monitor productivity for agents and teams." },
  { icon: <MdAnalytics />, title: "Analytics & Reporting", desc: "Get insightful reports on leads, sales performance, listing views, user behavior, and financial metrics." },
  { icon: <FaCalendarCheck />, title: "Appointment & Booking System", desc: "Allow users and agents to schedule property visits, open houses, and client meetings directly within the system." },
  { icon: <FaComments />, title: "Communication Tools", desc: "Built-in messaging, notifications, email automation, and user alerts to keep clients and agents connected." },
  { icon: <FaFileInvoiceDollar />, title: "Integrated Payment & Billing", desc: "Secure processing for rent, booking fees, subscription plans, or commission payouts." },
  { icon: <FaFileContract />, title: "Document Management", desc: "Store and manage contracts, agreements, IDs, and legal documents in a secure digital repository." },
  { icon: <FaKey />, title: "User Roles & Access Control", desc: "Configure role-based access permissions for admins, agents, partners, and clients." },
  { icon: <FaGlobe />, title: "Multilingual & Multicurrency", desc: "Essential for global users — support multiple languages and currencies as per business needs." },
  { icon: <FaShieldAlt />, title: "Security & Compliance", desc: "SSL encryption, GDPR compliance, data backups, and secure authentication systems to protect sensitive data." },
  { icon: <FaRobot />, title: "AI & Smart Recommendations", desc: "AI-powered suggestions for clients based on search patterns and preferences." },
  { icon: <MdCompareArrows />, title: "Property Comparison Tools", desc: "Enable users to compare different listings side-by-side based on features, pricing, and ratings." }
];

export const aiCapabilities = [
  { title: "Intelligent Property Recommendations", desc: "AI analyzes user preferences, search history, and behavior patterns to suggest properties that truly match buyer interests." },
  { title: "Predictive Market Insights", desc: "Get accurate forecasts for property values, rental demand, and pricing trends using historical data analysis." },
  { title: "Automated Lead Scoring", desc: "Prioritize high-quality prospects by evaluating incoming leads based on behavior and engagement level." },
  { title: "Smart Chatbots & Assistants", desc: "Provide instant responses to customer queries around the clock with AI-powered chatbots." },
  { title: "Enhanced Property Search", desc: "AI improves search relevance by learning from user interactions, ensuring buyers find the best options faster." },
  { title: "Behavior Analytics", desc: "Deep insights into user engagement patterns help agents personalize outreach and refine marketing strategies." }
];

export const whyAiMatters = [
  { text: "Boost Engagement: Personalized experiences keep users coming back." },
  { text: "Improve Conversions: Smarter lead handling increases sales and rentals." },
  { text: "Save Time: Automation reduces manual tasks and accelerates workflows." },
  { text: "Stay Competitive: AI brings intelligent differentiation in a crowded market." }
];

export const softwareTypes = [
  {
    title: "Property Management Software",
    desc: "Helps manage day-to-day property operations.",
    features: ["Tenant & lease management", "Rent collection & invoicing", "Maintenance requests", "Owner reporting"],
    bestFor: "Property managers, landlords"
  },
  {
    title: "Real Estate CRM Software",
    desc: "Manages leads, clients, and sales pipelines.",
    features: ["Lead tracking & follow-ups", "Client communication history", "Sales automation", "Broker & agent management"],
    bestFor: "Real estate agents, brokers"
  },
  {
    title: "Multiple Listing Service (MLS)",
    desc: "Centralized property listing platforms.",
    features: ["Property listing & search", "Agent collaboration", "Location-based filters", "Data syndication"],
    bestFor: "Brokers, real estate associations"
  },
  {
    title: "Real Estate ERP Software",
    desc: "End-to-end business management solution.",
    features: ["Project & inventory management", "Accounting & finance", "Vendor & contractor management", "Compliance tracking"],
    bestFor: "Real estate developers, enterprises"
  },
  {
    title: "Property Listing & Marketplace",
    desc: "Online portals for buying, selling, and renting properties.",
    features: ["Advanced property search", "Image & video galleries", "Inquiry & booking system", "Payment integration"],
    bestFor: "Real estate startups, agencies"
  },
  {
    title: "Real Estate Mobile Applications",
    desc: "On-the-go property access for users.",
    features: ["Property browsing", "Push notifications", "Virtual tours", "Location-based search"],
    bestFor: "Buyers, sellers, agents"
  },
  {
    title: "Rental Management Software",
    desc: "Focused on rental properties and tenants.",
    features: ["Rent scheduling & reminders", "Online payments", "Tenant onboarding", "Lease renewals"],
    bestFor: "Rental property owners"
  },
  {
    title: "Real Estate Analytics & BI",
    desc: "Data-driven decision-making tools.",
    features: ["Market trend analysis", "Pricing insights", "ROI forecasting", "Performance dashboards"],
    bestFor: "Investors, developers"
  },
  {
    title: "Transaction Management Software",
    desc: "Streamlines documentation and legal processes.",
    features: ["Digital contracts", "E-signatures", "Compliance management", "Document storage"],
    bestFor: "Brokers, legal teams"
  }
];

export const featureCategories = {
  "Core Platform": [
    { icon: <FaHome />, title: "Property Listing Management", desc: "Efficiently create, edit, and organize property listings with details like images, pricing, features, and location." },
    { icon: <FaSearch />, title: "Advanced Search & Filters", desc: "Let users quickly find properties using filters such as location, price range, property type, size, and amenities." },
    { icon: <FaMobileAlt />, title: "Mobile & Web Access", desc: "Access property data and tools from both mobile apps and web platforms, ensuring real-time usability on all devices." },
    { icon: <FaMapMarkedAlt />, title: "Interactive Map & Geo-Location", desc: "Show properties on interactive maps with markers, route directions, and nearby points of interest." },
  ],
  "Management": [
    { icon: <FaUsers />, title: "Lead & Customer Management", desc: "Track and manage leads, clients, interactions, follow-ups, and customer preferences from a centralized dashboard." },
    { icon: <MdRealEstateAgent />, title: "Agent & Team Management", desc: "Assign listings, track performance, manage commissions, and monitor productivity for agents and teams." },
    { icon: <FaFileContract />, title: "Document Management", desc: "Store and manage contracts, agreements, IDs, and legal documents in a secure digital repository." },
    { icon: <FaKey />, title: "User Roles & Access Control", desc: "Configure role-based access permissions for admins, agents, partners, and clients." },
  ],
  "Engagement": [
    { icon: <FaCalendarCheck />, title: "Appointment & Booking", desc: "Allow users and agents to schedule property visits, open houses, and client meetings directly within the system." },
    { icon: <FaComments />, title: "Communication Tools", desc: "Built-in messaging, notifications, email automation, and user alerts to keep clients and agents connected." },
    { icon: <FaGlobe />, title: "Multilingual Support", desc: "Essential for global users — support multiple languages and currencies as per business needs." },
    { icon: <MdCompareArrows />, title: "Property Comparison", desc: "Enable users to compare different listings side-by-side based on features, pricing, and ratings." },
  ],
  "Growth & Security": [
    { icon: <MdAnalytics />, title: "Analytics & Reporting", desc: "Get insightful reports on leads, sales performance, listing views, user behavior, and financial metrics." },
    { icon: <FaFileInvoiceDollar />, title: "Payment & Billing", desc: "Secure processing for rent, booking fees, subscription plans, or commission payouts." },
    { icon: <FaShieldAlt />, title: "Security & Compliance", desc: "SSL encryption, GDPR compliance, data backups, and secure authentication systems to protect sensitive data." },
    { icon: <FaRobot />, title: "AI & Smart Recommendations", desc: "AI-powered suggestions for clients based on search patterns and preferences." },
  ]
};
