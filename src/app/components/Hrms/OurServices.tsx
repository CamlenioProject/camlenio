"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Users,
  CalendarCheck,
  Wallet,
  UserPlus,
  Target,
  GraduationCap,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

interface HRMSServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const hrmsServices: HRMSServiceItem[] = [
  {
    id: 1,
    title: "Employee Information Management",
    description:
      "Centralized employee database with secure access to personal details, job roles, documents, and employment history.",
    icon: Users,
  },
  {
    id: 2,
    title: "Attendance & Leave Management",
    description:
      "Automated attendance tracking, shift scheduling, leave requests, approvals, and real-time balance reporting.",
    icon: CalendarCheck,
  },
  {
    id: 3,
    title: "Payroll Management System",
    description:
      "Accurate payroll processing including salary calculations, deductions, bonuses, tax handling, and statutory compliance.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Recruitment & Onboarding Software",
    description:
      "Manage job postings, candidate pipelines, interviews, hiring decisions, and seamless onboarding workflows.",
    icon: UserPlus,
  },
  {
    id: 5,
    title: "Performance Management System",
    description:
      "Define goals, track KPIs, conduct performance reviews, appraisals, and monitor employee growth effectively.",
    icon: Target,
  },
  {
    id: 6,
    title: "Training & Skill Management",
    description:
      "Track employee training programs, certifications, learning records, and skill development initiatives.",
    icon: GraduationCap,
  },
  {
    id: 7,
    title: "Compliance & Policy Management",
    description:
      "Ensure statutory compliance, internal policies, audit readiness, and secure documentation management.",
    icon: ShieldCheck,
  },
  {
    id: 8,
    title: "HRMS Web & Mobile App Development",
    description:
      "Access HR operations anytime with responsive web and mobile HRMS applications built for modern teams.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section className="relative pt-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left editorial column */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky top-30"
            >
              <span className="text-sm font-semibold tracking-widest ml-1 text-orange-500">
                HRMS SERVICES
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-950">
                Our{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                  }}
                >
                  HRMS
                </span>{" "}
                Development
                <br className="hidden sm:block" />
                Services
              </h2>

              <p className="mt-4 text-gray-600 text-sm md:text-base font-sans text-justify">
                We deliver end-to-end HR management software solutions tailored
                to your business needs—helping you automate HR operations,
                improve workforce productivity, and ensure compliance.
              </p>
            </m.div>

            {/* Right flowing content */}
            <div className="lg:col-span-7 space-y-12">
              {hrmsServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-orange-500 shrink-0 mt-1" />

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-gray-600 text-sm md:text-base font-sans text-justify">
                          {item.description}
                        </p>

                        <span className="mt-4 block h-px w-0 bg-orange-600 transition-all duration-300 group-hover:w-24" />
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
