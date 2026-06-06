"use client";

import { LazyMotion, m, domMax } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  return (
    <LazyMotion features={domMax}>
      <section ref={ref} className="relative scroll-mt-10 py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <m.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Empower Your HR Operations with{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Intelligent Automation
                </span>
              </m.h2>

              <m.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-xl text-gray-600 text-sm md:text-base font-sans leading-relaxed text-justify"
              >
                In the current competitive business environment, companies need
                a smart and automated HR system to manage employees efficiently.{" "}
                <span className="font-medium text-gray-800">Camlenio</span> is a
                reliable HR software development company Jaipur that several
                businesses                                      ble HR solutions. We specialize in
                developing advanced HRMS software tailored to your business
                operations and workforce requirements.
                <br />
                <br />
                As an experienced HRMS Software Development Company, we create
                user-friendly and feature-rich systems that simplify payroll
                processing, employee attendance monitoring, employee data
                management, and leave tracking. Whether you are running a
                business or a startup, our customized HR solutions help decrease
                manual work and improve operational efficiency.
                <br />
                <br />
                Our HRMS Software Company in India focuses on delivering secure,
                cloud-based, and scalable applications that develop HR software
                best suited for your modern organisations.
              </m.p>
            </div>

            {/* RIGHT IMAGE */}
            <m.div
              initial={{ opacity: 0, scale: 0.15 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-md lg:max-w-xl mx-auto"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/ServiceDropdown/hrmssoftware/hrms-img.png"
                  alt="HRMS Dashboard"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
