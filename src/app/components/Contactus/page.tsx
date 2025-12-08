"use client";
import React, { useState } from "react";
import axios from "axios";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { Button } from "../submit-button-ui";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "Web Development",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setSubmitError(null);

    const payload = {
      type: "contact",
      ...formData,
      source: "contact",
    };

    try {
      await axios.post("/api/enquiry", payload);
      // Clear form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "Web Development",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(
          err.message || "An error occurred while submitting the application."
        );
      } else {
        setSubmitError(
          String(err) || "An error occurred while submitting the application."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-20 px-8 md:px-16 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent border-1 border-gray-300 p-8 rounded-2xl shadow-lg ">
          <div className="order-2 md:order-1">
            {loading && (
              <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-500 text-white shadow-lg animate-slide-in font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white animate-spin"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Sending your message...</span>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Name Field */}
              <div className="relative w-full">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                    <FiUser className="text-gray-900 text-xl" />
                    <span className="ml-2 h-6 border-r border-gray-300"></span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full pl-16 pr-3 py-3 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 ml-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative w-full">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                    <HiOutlineMail className="text-gray-900 text-xl" />
                    <span className="ml-2 h-6 border-r border-gray-300"></span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full pl-16 pr-3 py-3 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 ml-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative w-full">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                    <FiPhone className="text-gray-900 text-xl" />
                    <span className="ml-2 h-6 border-r border-gray-300"></span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full pl-16 pr-3 py-3 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 ml-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Project Field - No error handling needed */}
              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                  <MdOutlineWork className="text-gray-900 text-xl" />
                  <span className="ml-2 h-6 border-r border-gray-300"></span>
                </div>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full pl-16 pr-3 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none text-gray-600"
                >
                  <option value={"web-development"}>Web Development</option>
                  <option value={"mobile-app-development"}>
                    Mobile App Development
                  </option>
                  <option value={"game-app-development"}>
                    Game App Development
                  </option>
                  <option value={"ui-ux-design"}>UI/UX Design</option>
                  <option value={"idea-based-website-development"}>
                    Idea Based Website Development
                  </option>
                  <option value={"ecommerce-development"}>
                    E-commerce Development
                  </option>
                  <option value={"others"}>Others</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative w-full">
                <div className="relative">
                  <div className="absolute left-0 top-4 flex items-start h-full px-3">
                    <TbMessageDots className="text-gray-900 text-xl" />
                    <span className="ml-2 h-6 border-r border-gray-300"></span>
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        document.getElementById("animated-submit-btn")?.click();
                      }
                    }}
                    placeholder="About Your Project"
                    className={`w-full pl-16 pr-3 py-3 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 ml-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center">
                    {submitError}
                  </p>
                </div>
              )}

              <Button
                disabled={loading}
                id="animated-submit-btn"
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 hover:ring-orange-500 cursor-pointer text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </div>

          <div className="order-1 md:order-2 relative flex flex-col justify-center bg-gray-900 text-white rounded-2xl p-8 min-h-[500px]">
            <div className="absolute inset-0 bg-[url('/navcompany/support.png')] bg-cover bg-center opacity-20 rounded-2xl"></div>
            <div className="max-w-full relative z-10 space-y-4 text-center">
              <h2
                className="text-3xl md:text-6xl font-bold text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #3f4653, 4px 6px 0px #ff582336",
                }}
              >
                Get in Touch
              </h2>
              <p className="text-white text-base md:text-3xl">
                Mail to our sales teams
              </p>
              <p className="text-xl md:text-2xl font-semibold text-orange-50">
                business@camlenio.com
              </p>
              <div className="mt-6">
                <h3 className="text-2xl text-orange-500 font-semibold">
                  Our Address
                </h3>
                <p className="text-gray-300 text-xs md:text-xl">
                  ground Floor, Gopi Tower, Ajmer Rd,
                  <br />
                  Near Kamla Devi Govt. School, Satya Colony,
                  <br />
                  Tagore Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
