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
      source: "contact-us",
    };

    try {
      await axios.post("/api/enquiry", payload);
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent border-1 border-gray-300 p-8 rounded-2xl shadow-lg">
          <div>
            {loading && (
              <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-500 text-white shadow-lg animate-slide-in font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 012 0v4a1 1 0 01-2 0V6zm1 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Sending your message...</span>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                  <FiUser className="text-gray-900 text-xl" />
                  <span className="ml-2 h-6 border-r border-gray-300"></span>{" "}
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="relative w-full">
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
                  className={`w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none  placeholder:text-gray-600 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                  <FiPhone className="text-gray-900 text-xl" />
                  <span className="ml-2 h-6 border-r border-gray-300"></span>
                </div>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                  <MdOutlineWork className="text-gray-900 text-xl" />
                  <span className="ml-2 h-6 border-r border-gray-300"></span>
                </div>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full pl-16 pr-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none text-gray-600"
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Game App Development</option>
                  <option>UI/UX Design</option>
                  <option>Idea Based Website Development</option>
                  <option>E-commerce Development</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-start h-full px-3 pt-2">
                  <TbMessageDots className="text-gray-900 text-xl mt-1" />
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
                  className={`w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-200 focus:outline-none placeholder:text-gray-600 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}

              <Button
                disabled={loading}
                id="animated-submit-btn"
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 hover:ring-orange-500"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="relative flex flex-col justify-center bg-gray-900 text-white rounded-2xl p-8">
            <div className="absolute inset-0 bg-[url('/navcompany/support.png')] bg-cover bg-center opacity-20 rounded-2xl"></div>
            <div className=" max-w-full relative z-10 space-y-4 text-center">
              <h2
                className=" text-3xl md:text-6xl font-bold  text-orange-500 "
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
                sales@company.com
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
