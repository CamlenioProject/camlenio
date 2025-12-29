"use client";

import { LazyMotion, domMax, m } from "framer-motion";

interface Technology {
  category: string;
  description: string;
  skills: string[];
  color: string;
}

const technologies: Technology[] = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: ["React", "Angular", "Vue"],
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    category: "Backend",
    description: "Robust server-side logic and API management.",
    skills: ["Node.js", "Java", "PHP", "Python", ".NET"],
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    category: "Mobile",
    description: "Cross-platform and native mobile applications.",
    skills: ["Android", "iOS", "Flutter", "React Native"],
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    category: "Database",
    description: "Secure and scalable data storage solutions.",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    category: "Cloud",
    description: "Deployment, hosting, and scalable infrastructure.",
    skills: ["AWS", "Azure", "Google Cloud"],
    color: "bg-sky-100 text-sky-800 border-sky-200",
  },
];

export default function TechStack() {
  return (
    <LazyMotion features={domMax}>
      <section className="py-0 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-gray-950">
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Technologies {"  "}
              </span>
              We Use
            </h2>
            <p className="max-w-5xl mx-auto mt-4 text-gray-600 text-sm md:text-base font-sans">
              We leverage the latest frameworks and platforms to build scalable,
              high-performance solutions.
            </p>
          </m.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <m.div
                key={tech.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="bg-orange-100/20 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tech.category}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 font-sans">
                    {tech.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${tech.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
