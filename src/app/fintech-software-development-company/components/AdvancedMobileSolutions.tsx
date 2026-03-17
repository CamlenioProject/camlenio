"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Globe, Lock, Zap, Users } from 'lucide-react';

const AdvancedMobileSolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  const features = [
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "Strong Encryption",
      description: "Enterprise-grade security protocols protecting every transaction."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Scalable Architecture",
      description: "Built to grow with your user base without compromising performance."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Secure Payments",
      description: "Seamless digital payments and real-time financial tracking."
    }
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.1]">
                Advanced <span className="text-orange-500" style={{ textShadow: "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336" }}>FinTech Mobile</span> App Development
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                We provide complete FinTech Mobile App Development services that allow businesses to start feature-rich mobile applications for iOS, Android, and web software. Our experienced developers create secure and user-friendly apps that enable seamless digital payments, account management, and real-time financial transactions.

              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-orange-200/50 transition-all hover:shadow-md group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">iOS & Android</h3>
                <p className="text-sm text-gray-600">Native and cross-platform mobile experiences.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-orange-200/50 transition-all hover:shadow-md group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Web Software</h3>
                <p className="text-sm text-gray-600">Powerful web-based financial management tools.</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-600 text-sm italic border-l-4 border-orange-500 pl-4">
                "Our applications are created with strong encryption, scalable architecture, and modern UI/UX to guarantee high performance and increase user engagement."
              </p>
            </div>
          </motion.div>

          {/* Right Visual/Cards Area */}
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }} className="relative">
            <div className="relative z-10 grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-orange-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] transition-all duration-300"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-50 -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-70 -z-10" />
          </motion.div>
        </motion.div>

        {/* Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gray-900 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Solutions for Every Scale</h3>
              <p className="text-gray-400">
                With our FinTech Application Development expertise, we create solutions that meet all requirements of NBFCs, fintech businesses, beginners, and payment providers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Secure', 'User-Friendly', 'High Performance'].map((tag) => (
                <span key={tag} className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedMobileSolutions;
