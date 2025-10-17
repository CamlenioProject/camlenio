export type Job = {
  slug: string;
  title: string;
  description: string;
  location: "Remote" | "Hybrid" | "On-site" | string;
  type: "Full-time" | "Contract" | string;
  longDescription?: string;
  responsibilities?: string[];
  requirements?: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    description:
      "Lead development of scalable web applications using modern technologies",
    location: "Remote",
    type: "Full-time",
    longDescription:
      "As a Senior Full Stack Developer at Camlenio, you'll architect, build, and ship modern, scalable products. You will collaborate closely with design and product to deliver delightful experiences.",
    responsibilities: [
      "Design and implement scalable frontend and backend systems",
      "Collaborate with product and design to scope and plan features",
      "Review code and mentor junior engineers",
      "Improve performance, reliability, and developer tooling",
    ],
    requirements: [
      "5+ years of full-stack experience (React/Node/TypeScript preferred)",
      "Experience with cloud platforms and CI/CD",
      "Strong understanding of testing and best practices",
      "Excellent communication and ownership mindset",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    description: "Build and maintain CI/CD pipelines and cloud infrastructure",
    location: "Hybrid",
    type: "Full-time",
    longDescription:
      "Join our infra team to optimize and secure our cloud-native stack. You'll own CI/CD pipelines, observability, and reliability across environments.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Automate infrastructure with IaC",
      "Implement monitoring, alerting, and incident response",
      "Improve deployment speed and reliability",
    ],
    requirements: [
      "3+ years in DevOps/SRE roles",
      "Experience with Docker, Kubernetes, and a major cloud",
      "Strong scripting and automation skills",
      "Security-minded approach to infra",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Create intuitive and beautiful user experiences for our products",
    location: "Remote",
    type: "Full-time",
    longDescription:
      "Shape product direction with user-centered design. You'll own flows from discovery to polished UI and collaborate closely with engineers.",
    responsibilities: [
      "Lead end-to-end design for new features",
      "Create wireframes, prototypes, and high-fidelity UI",
      "Conduct user research and usability testing",
      "Maintain design systems and documentation",
    ],
    requirements: [
      "Strong portfolio of shipped products",
      "Mastery of modern design tools",
      "Understanding of accessibility and UX best practices",
      "Excellent communication and cross-functional collaboration",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    description:
      "Drive product strategy and work closely with engineering teams",
    location: "On-site",
    type: "Full-time",
    longDescription:
      "Own product outcomes from strategy through delivery. Define roadmaps, prioritize work, and partner with engineering and design to ship value.",
    responsibilities: [
      "Define strategy and roadmap for product areas",
      "Write clear specs and align stakeholders",
      "Measure outcomes and iterate based on data",
      "Champion the user and business goals",
    ],
    requirements: [
      "3+ years in product management",
      "Strong communication and stakeholder management",
      "Experience with agile product delivery",
      "Analytical mindset with user empathy",
    ],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Build responsive and performant user interfaces with React and TypeScript",
    location: "Remote",
    type: "Contract",
    longDescription:
      "Bring delightful UIs to life. You'll build accessible, performant components and collaborate closely with designers and backend engineers.",
    responsibilities: [
      "Implement responsive UI with modern React patterns",
      "Ensure accessibility and performance best practices",
      "Collaborate on API contracts and integration",
      "Write clean, maintainable code with tests",
    ],
    requirements: [
      "Strong React/TypeScript skills",
      "Experience with design systems and CSS-in-JS or Tailwind",
      "Accessibility and performance mindset",
      "Good communication and collaboration skills",
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex datasets and build machine learning models",
    location: "Hybrid",
    type: "Full-time",
  },
];
