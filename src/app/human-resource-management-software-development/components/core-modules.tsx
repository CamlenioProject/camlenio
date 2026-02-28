// app/components/CoreModules.jsx
import React from "react";

const CoreModules = () => {
  const modules = [
    {
      title: "Employee Management",
      items: [
        "Complete employee profiles",
        "Organization hierarchy",
        "Document management",
        "Role-based access",
      ],
    },
    {
      title: "Time & Attendance",
      items: [
        "Biometric integration",
        "GPS tracking",
        "Shift management",
        "Overtime calculations",
      ],
    },
    {
      title: "Payroll System",
      items: [
        "Automated tax calculations",
        "Bonus and deduction management",
        "Bank transfer integration",
        "Compliance reporting",
      ],
    },
    {
      title: "Performance Tracking",
      items: [
        "KPI monitoring",
        "360-degree feedback",
        "Skill gap analysis",
        "Career progression planning",
      ],
    },
    {
      title: "Recruitment",
      items: [
        "Job posting to multiple portals",
        "Resume parsing",
        "Interview scheduling",
        "Offer letter generation",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Core Modules
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
            Comprehensive HR modules designed to handle every aspect of your
            workforce management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.title}
              </h3>
              <ul className="space-y-2">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreModules;
