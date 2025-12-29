"use client";

import { m, LazyMotion, domMax, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Employee Self-Service Portal",
    description:
      "Our HR Management Software includes a user-friendly Employee Self-Service (ESS) portal that empowers employees to manage their own HR-related tasks. Employees can easily view and update personal details, check attendance, access important HR documents anytime, anywhere.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "The system provides advanced role-based access control to ensure data security and confidentiality. Access rights are assigned based on user roles such as Admin, HR Manager, Team Lead, and Employee.",
  },
  {
    title: "Automated Workflows & Approvals",
    description:
      "Our software automates HR workflows such as leave requests, attendance corrections, reimbursements, onboarding, and exit processes. Approval hierarchies can be customized according to company structure, ensuring faster decision-making, reduced paperwork, and elimination of manual errors.",
  },
  {
    title: "Real-Time HR Reports & Analytics",
    description:
      "Gain valuable insights with real-time HR reports and analytics. The system offers comprehensive dashboards and customizable reports for attendance, payroll, employee performance, attrition, and compliance.",
  },
  {
    title: "Secure Document Management",
    description:
      "The HR Management Software includes a secure document management system to store and manage employee documents such as offer letters, ID proofs, contracts, appraisals, and policy documents.",
  },
  {
    title: "Multi-Branch & Multi-Location Support",
    description:
      "Designed for growing organizations, the system supports multiple branches and locations from a single centralized platform. HR teams can manage employees across different offices, regions, or cities while maintaining branch-specific policies, shifts, holidays, and reporting structures.",
  },
  {
    title: "Integration with Biometric & Payroll Systems",
    description:
      "Our HR software seamlessly integrates with biometric devices for accurate attendance tracking and links directly with payroll systems. This ensures error-free salary calculations based on real attendance data, overtime, and leave policies, reducing manual effort and payroll discrepancies.",
  },
  {
    title: "Cloud-Based & On-Premise Deployment",
    description:
      "Camlenio Software offers flexible deployment options to suit your business needs. Choose a cloud-based solution for easy access, scalability, and minimal infrastructure, or an on-premise deployment for enhanced control and compliance.",
  },
];

export default function HRMSFeatures() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <LazyMotion features={domMax}>
      <section
        ref={sectionRef}
        className="relative py-8 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <div className="absolute left-1/2 top-36 bottom-14 -translate-x-1/2 pointer-events-none">
          <div className="relative h-full w-px">
            <m.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(249,115,22,0.9)_0,rgba(249,115,22,0.9)_8px,transparent_8px,transparent_16px)]"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Key Features{" "}
              </span>
              of Our HRMS
            </h2>
          </m.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <m.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative group"
              >
                {/* Content Container */}
                <div
                  className="relative h-auto pl-6 py-5 bg-white/60 rounded-xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_4px_20px_rgba(255,120,0,0.15)] 
                              border-l-4 border-orange-500 rounded-tl-xl rounded-bl-xl
                              before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 before:rounded-l-xl before:shadow-lg before:shadow-orange-500/30 before:transition-all before:duration-300 before:scale-y-0 
                              after:absolute after:top-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:rounded-tl-xl after:rounded-br-xl after:shadow-md after:shadow-orange-500/30 after:transition-all after:duration-300 "
                >
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed pr-6 font-sans text-sm">
                    {service.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
