import React from "react";
import {
  Briefcase,
  Users,
  ShieldCheck,
  MessageCircle,
  Clock,
  LifeBuoy,
} from "lucide-react";
import { LazyMotion, domMax, m } from "framer-motion";

const features = [
  {
    title: "Business-centric approach",
    icon: Briefcase,
    description:
      "We focus on understanding your core business goals to build solutions that drive real value, not just code.",
  },
  {
    title: "Experienced development team",
    icon: Users,
    description:
      "Our team consists of seasoned professionals with deep expertise across diverse technology stacks.",
  },
  {
    title: "Secure & scalable solutions",
    icon: ShieldCheck,
    description:
      "Security is baked in from day one, ensuring your application grows safely as your user base expands.",
  },
  {
    title: "Transparent communication",
    icon: MessageCircle,
    description:
      "We keep you in the loop at every stage with regular updates, demos, and open lines of communication.",
  },
  {
    title: "On-time project delivery",
    icon: Clock,
    description:
      "We respect deadlines through rigorous project management and agile methodologies.",
  },
  {
    title: "Dedicated post-launch support",
    icon: LifeBuoy,
    description:
      "Our partnership doesn't end at launch. We provide ongoing maintenance to keep things running smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <LazyMotion features={domMax}>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-gray-950">
              Why Choose{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Camlenio Software?
              </span>
            </h2>
            <p className=" mt-4 text-gray-600 text-sm md:text-base font-sans text-justify">
              We don&apos;t just build software; we build partnerships tailored
              for success.
            </p>
            <div className="w-20 h-1 bg-orange-500 mt-6"></div>
          </m.div>

          {/* Clean List Grid Section */}
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <m.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  // New Layout: Flex row for side-by-side icon and text
                  className="flex items-start group"
                >
                  {/* Icon Section - Clean, no box background */}
                  <div className="flex-shrink-0 mr-6">
                    <IconComponent
                      className="h-10 w-10 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-500">
                      {feature.title}
                    </h3>

                    <p className="text-base text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default WhyChooseUs;
