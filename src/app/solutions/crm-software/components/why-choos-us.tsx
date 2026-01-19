"use client";
import {
  CheckCircle,
  Award,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Database,
  Workflow,
  BarChart3,
  Heart,
  Cpu,
  Search,
  Clock,
  DollarSign,
  Rocket,
  Target,
} from "lucide-react";
import { m, LazyMotion, domMax } from "framer-motion";

export default function WhyChooseUsComplete() {
  const sections = [
    {
      title: "Why Choose Us as Your CRM Development Company?",
      description:
        "Choosing the right CRM development company is critical to long-term success. ",
      features: [
        {
          icon: <Award className="w-5 h-5" />,
          text: "Proven expertise as a CRM software development company",
        },
        {
          icon: <Cpu className="w-5 h-5" />,
          text: "Custom-built CRM tailored to your workflows",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          text: "Scalable architecture for future growth",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          text: "Enterprise-grade security & compliance",
        },
        {
          icon: <Users className="w-5 h-5" />,
          text: "User-friendly interface with high adoption rates",
        },
      ],
      stats: [
        {
          value: "40%",
          label: "Conversion Rate Increase",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          value: "35%",
          label: "Cost Reduction",
          icon: <DollarSign className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Benefits of Our Custom CRM Software Solutions",
      description:
        "Our CRM solutions help businesses work smarter and grow faster.",
      features: [
        {
          icon: <Database className="w-5 h-5" />,
          text: "Centralized customer data management",
        },
        {
          icon: <Target className="w-5 h-5" />,
          text: "Improved lead conversion & sales tracking",
        },
        {
          icon: <Workflow className="w-5 h-5" />,
          text: "Automated workflows & task management",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          text: "Real-time analytics & reporting dashboards",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          text: "Enhanced customer engagement & retention",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          text: "Secure, scalable, and future-proof CRM",
        },
      ],
      stats: [
        {
          value: "99.9%",
          label: "Uptime Guarantee",
          icon: <Shield className="w-4 h-4" />,
        },
        {
          value: "24/7",
          label: "Support Available",
          icon: <Clock className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Why We Are a Trusted CRM Development Company",
      description:
        "We are committed to delivering high-ROI CRM software development services that drive measurable business results.",
      features: [
        {
          icon: <Users className="w-5 h-5" />,
          text: "Experienced CRM software developers",
        },
        {
          icon: <Search className="w-5 h-5" />,
          text: "SEO-friendly CRM architecture",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          text: "Agile development methodology",
        },
        {
          icon: <DollarSign className="w-5 h-5" />,
          text: "Transparent pricing & timelines",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          text: "Dedicated post-launch support",
        },
      ],
      stats: [
        {
          value: "150+",
          label: "Projects Delivered",
          icon: <CheckCircle className="w-4 h-4" />,
        },
        {
          value: "98%",
          label: "Client Satisfaction",
          icon: <Heart className="w-4 h-4" />,
        },
      ],
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen py-8 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate="visible"
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              The Ultimate{" "}
              <span className="relative inline-block">
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  CRM Development
                </span>
              </span>{" "}
              Partner
            </h1>

            <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base font-sans text-center">
              We deliver custom CRM solutions that transform businesses, drive
              growth, and create lasting competitive advantages.
            </p>
          </m.div>

          {/* Main Sections */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-20"
          >
            {sections.map((section, sectionIndex) => (
              <m.div
                key={sectionIndex}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="group"
              >
                <div className="relative h-full rounded-2xl p-6 sm:p-8 border-2 border-orange-100 shadow-sm hover:shadow-base transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-transparent"></div>
                  </div>

                  {/* Section Header */}
                  <div className="relative mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                        {sectionIndex === 0 && (
                          <Rocket className="w-6 h-6 text-white" />
                        )}
                        {sectionIndex === 1 && (
                          <Zap className="w-6 h-6 text-white" />
                        )}
                        {sectionIndex === 2 && (
                          <Award className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-lg">
                        {sectionIndex + 1}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-[1.2rem] font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-sans">{section.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {section.features.map((feature, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: sectionIndex * 0.1 + index * 0.05,
                        }}
                        className="flex items-start gap-2 group/feature"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/feature:scale-102 transition-transform duration-300">
                          <div className="text-orange-600">{feature.icon}</div>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm font-sans mt-2">
                            {feature.text}
                          </p>
                        </div>
                      </m.div>
                    ))}
                  </div>

                  {/* Stats Section */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      {section.stats.map((stat, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: sectionIndex * 0.1 + index * 0.1,
                          }}
                          className="bg-orange-100/40 shadow-sm rounded-xl p-2"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-orange-600">{stat.icon}</div>
                            <div className="text-base font-bold text-gray-900">
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.label}
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
