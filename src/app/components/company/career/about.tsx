"use client";

import {
  Lightbulb,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Clock,
  Filter,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
  const benefits = [
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Innovation-Driven Projects",
      description:
        "Work on cutting-edge technology solutions that shape the future of IT",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Flexible Remote Culture",
      description:
        "Enjoy the freedom to work from anywhere with our remote-first approach",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Career Growth",
      description:
        "Accelerate your professional development with mentorship and learning opportunities",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Team Collaboration",
      description:
        "Join a supportive team that values creativity, diversity, and innovation",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      description:
        "Lead development of scalable web applications using modern technologies",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      description:
        "Build and maintain CI/CD pipelines and cloud infrastructure",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      description:
        "Create intuitive and beautiful user experiences for our products",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      description:
        "Drive product strategy and work closely with engineering teams",
      location: "On-site",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      description:
        "Build responsive and performant user interfaces with React and TypeScript",
      location: "Remote",
      type: "Contract",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex datasets and build machine learning models",
      location: "Hybrid",
      type: "Full-time",
    },
  ];

  const lifeAtCamlenio = [
    {
      image: "/modern-office-workspace-with-developers-collaborat.jpg",
      title: "Collaborative Workspace",
    },
    {
      image: "/team-meeting-with-diverse-professionals-brainstorm.jpg",
      title: "Innovation Sessions",
    },
    { image: "/outdoor-team-building.png", title: "Team Building" },
    {
      image: "/professional-development-workshop-with-laptops.jpg",
      title: "Learning & Growth",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build Your Career with{" "}
            <span className="text-orange-500">Camlenio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Innovate, Grow, and Shape the Future of Tech.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-8 py-3 text-lg transition">
            View Open Roles
          </button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white shadow-sm hover:shadow-md transition p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Join our team and make an impact
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              <Filter className="h-4 w-4" />
              All Roles
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              Engineering
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              Design
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              Product
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              Remote
            </button>
          </div>

          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white hover:shadow-md transition p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                        <MapPin className="h-3 w-3" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                        <Clock className="h-3 w-3" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition shrink-0">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Camlenio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Life at Camlenio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtCamlenio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg border hover:border-orange-500 transition-all duration-300">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join <span className="text-orange-500">Camlenio</span>?{" "}
            <br />
            {"Let's Build the Future Together."}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the next step in your career and become part of our innovative
            team.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-8 py-3 text-lg transition">
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Camlenio</h3>
              <p className="text-gray-600 mb-4">
                Innovating the future of technology with cutting-edge solutions
                and exceptional talent.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Camlenio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
