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
      "Architect and build scalable web applications using React, Node.js, and modern cloud infrastructure.",
    location: "Remote",
    type: "Full-time",
    longDescription:
      "We are looking for an experienced Senior Full Stack Developer to lead the development of our core product. You will work across the full stack, from database design to frontend implementation, ensuring high performance and scalability.",
    responsibilities: [
      "Design and implement robust, scalable, and secure web applications using React, Next.js, and Node.js.",
      "Collaborate with cross-functional teams (Product, Design, QA) to define, design, and ship new features.",
      "Architect efficient database schemas and optimize backend performance.",
      "Participate in code reviews, mentor junior developers, and enforce coding standards.",
      "Troubleshoot, debug, and upgrade existing software systems.",
    ],
    requirements: [
      "Minimum 3 years of professional experience in full-stack software development.",
      "Strong proficiency in JavaScript/TypeScript, React.js, Node.js, and modern CSS frameworks.",
      "Experience with database technologies (PostgreSQL, MongoDB) and API design (REST, GraphQL).",
      "Familiarity with cloud platforms (AWS/Azure) and CI/CD pipelines.",
      "Excellent problem-solving skills and ability to work in an Agile environment.",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    description: "Design and maintain secure, scalable cloud infrastructure and CI/CD pipelines.",
    location: "Hybrid",
    type: "Full-time",
    longDescription:
      "Join our infrastructure team to build and maintain the foundation of our technology stack. You will be responsible for automating deployments, scaling infrastructure, and ensuring system reliability.",
    responsibilities: [
      "Design, deploy, and maintain secure and scalable cloud infrastructure on AWS/Azure.",
      "Manage and optimize CI/CD pipelines for automated testing and deployment.",
      "Implement monitoring, logging, and alerting systems to ensure system availability.",
      "Automate repetitive operational tasks using scripting languages (Python, Bash, Go).",
      "Collaborate with development teams to improve developer productivity and tooling.",
    ],
    requirements: [
      "Minimum 3 years of experience in DevOps, SRE, or Cloud Infrastructure roles.",
      "Strong hands-on experience with containerization (Docker, Kubernetes) and orchestration.",
      "Proficiency with Infrastructure as Code tools (Terraform, Ansible, CloudFormation).",
      "Solid understanding of networking, security protocols, and Linux administration.",
      "Experience with monitoring tools like Prometheus, Grafana, or ELK Stack.",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Create intuitive, user-centered designs for web and mobile platforms.",
    location: "Remote",
    type: "Full-time",
    longDescription:
      "We are seeking a creative UI/UX Designer to deliver the best online user experience. You will drive the design process from user research to high-fidelity prototyping, ensuring our products are both beautiful and functional.",
    responsibilities: [
      "Translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
      "Create wireframes, storyboards, user flows, process flows, and site maps.",
      "Develop and maintain the company's design system to ensure consistency across products.",
      "Conduct user research and evaluate user feedback to iterate on designs.",
      "Collaborate closely with developers to ensure high-quality implementation of designs.",
    ],
    requirements: [
      "Minimum 3 years of professional experience in UI/UX design.",
      "Proficiency in visual design and wireframing tools such as Figma, Adobe XD, or Sketch.",
      "Strong portfolio demonstrating expertise in web and mobile design.",
      "Solid understanding of user-centered design principles and responsive design.",
      "Excellent communication skills to articulate design decisions to stakeholders.",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    description:
      "Lead product strategy, roadmap planning, and execution for key product initiatives.",
    location: "On-site",
    type: "Full-time",
    longDescription:
      "As a Product Manager, you will be responsible for the product planning and execution throughout the Product Lifecycle. You will gather and prioritize product and customer requirements and define the product vision.",
    responsibilities: [
      "Define the product strategy and roadmap based on market research and customer needs.",
      "Prioritize the product backlog and coordinate with engineering teams to deliver features on time.",
      "Analyze product metrics and user feedback to identify areas for improvement.",
      "Work closely with marketing, sales, and support teams to ensure successful product launches.",
      "Act as the primary point of contact for product-related queries and stakeholders.",
    ],
    requirements: [
      "Minimum 3 years of experience in Product Management or related roles.",
      "Proven track record of managing all aspects of a successful product throughout its lifecycle.",
      "Strong analytical and problem-solving skills with a data-driven mindset.",
      "Excellent leadership, communication, and stakeholder management skills.",
      "Experience working in Agile/Scrum development environments.",
    ],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Build high-performance, responsive user interfaces using React and modern web technologies.",
    location: "Remote",
    type: "Full-time",
    longDescription:
      "We are looking for a skilled Frontend Developer to join our engineering team. You will be responsible for translating design wireframes into high-quality code and producing the visual elements of our application.",
    responsibilities: [
      "Develop new user-facing features using React.js and Next.js.",
      "Build reusable components and front-end libraries for future use.",
      "Optimize applications for maximum speed and scalability.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Collaborate with backend developers to integrate RESTful APIs.",
    ],
    requirements: [
      "Minimum 3 years of experience in frontend development.",
      "Strong proficiency in JavaScript, TypeScript, HTML5, and CSS3.",
      "Experience with modern React workflows (Hooks, Context, Redux).",
      "Familiarity with frontend build tools, testing frameworks, and code versioning tools (Git).",
      "Understanding of SEO principles and cross-browser compatibility issues.",
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex datasets to derive actionable insights and build ML models.",
    location: "Hybrid",
    type: "Full-time",
    longDescription: "We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. You will build data products to extract valuable business insights.",
    responsibilities: [
       "Identify valuable data sources and automate collection processes.",
       "Pre-process composed and structured/unstructured data.",
       "Analyze large amounts of information to discover trends and patterns.",
       "Build predictive models and machine-learning algorithms.",
       "Present information using data visualization techniques.",
    ],
    requirements: [
       "Minimum 3 years of experience in Data Science or Analytics.",
       "Proficiency in Python/R and libraries like Pandas, NumPy, Scikit-learn.",
       "Experience with SQL and NoSQL databases.",
       "Understanding of machine learning techniques and algorithms.",
       "Strong math skills (e.g. statistics, algebra) and problem-solving aptitude.",
    ],
  },
];