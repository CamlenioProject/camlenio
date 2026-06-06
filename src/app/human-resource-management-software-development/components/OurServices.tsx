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
    title: "Custom HRMS",
    description:
      "Tailor-made HRMS platforms built to match your unique business processes, workflows, and organisational structure.",
    icon: Users,
  },
  {
    id: 2,
    title: "HR Payroll Software",
    description:
      "Automated payroll processing with accurate salary calculations, deductions, bonuses, tax compliance, and payslip generation.",
    icon: Wallet,
  },
  {
    id: 3,
    title: "Attendance Management", 
    description:
      "Real-time attendance tracking integrated with biometric devices, shift scheduling, and automated reporting.",
    icon: CalendarCheck,
  },
  {
    id: 4,
    title: "Leave Management System",
    description:
      "Streamlined leave requests, multi-level approvals, leave balance tracking, and policy-based leave management.",
    icon: CalendarCheck,
  },
  {
    id: 5,
    title: "HR Helpdesk Software",
    description:
      "A dedicated HR helpdesk to resolve employee queries, grievances, and requests efficiently through ticketing systems.",
    icon: Smartphone,
  },
  {
    id: 6,
    title: "Recruitment and Onboarding Modules",
    description:
      "End-to-end recruitment pipeline management with seamless onboarding workflows for new hires.",
    icon: UserPlus,
  },
  {
    id: 7,
    title: "HRMS Cloud-Based Platforms",
    description:
      "Secure, scalable, and accessible cloud-based HRMS platforms designed for modern remote and hybrid workforces.",
    icon: ShieldCheck,
  },
  {
    id: 8,
    title: "Performance Management Solutions",
    description:
      "Define KPIs, conduct performance reviews, track appraisals, and monitor employee growth in one unified system.",
    icon: Target,
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
                We offer a reliable service that meets your essential business requirements. Our services include:
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
