"use client";
import React, { useState } from "react";
import axios from "axios";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "@/utils/validators";

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
  const [successPopup, setSuccessPopup] = useState(false);

  const validateContactForm = () => {
    const newErrors: { [key: string]: string } = {};

    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async () => {
    const newErrors = validateContactForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSubmitError(null);

    try {
      await axios.post("/api/enquiry", {
        type: "contact",
        ...formData,
        source: "contact",
      });
      console.log("FORM SUBMIT SUCCESS >>>", formData);
      setSuccessPopup(true); // show success message

      setTimeout(() => {
        setSuccessPopup(false); // hide after 3 sec
      }, 5000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "Web Development",
        message: "",
      });
    } catch (err: unknown) {
      setSubmitError("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-20 px-8 md:px-16 scroll-smooth">
      <AnimatePresence>
        {successPopup && (
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              scale: { duration: 0.3 },
            }}
            className="
        fixed top-6 left-1/2 -translate-x-1/2
        bg-gradient-to-r from-green-50 to-emerald-50/80
        backdrop-blur-xl text-gray-900 
        px-6 py-4 rounded-2xl shadow-2xl shadow-green-200/50
        border border-green-200/60 border-t-white/20 border-l-white/20
        font-semibold z-[9999]
        text-sm md:text-base flex items-center gap-3
        max-w-[90vw] md:max-w-md
      "
          >
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-400/20 blur-md rounded-full"></div>
              <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Text with gradient */}
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm md:text-base">
                Thank you! 🎉
              </span>
              <span className="text-gray-700 text-xs md:text-sm font-normal">
                Our team will contact you shortly.
              </span>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSuccessPopup(false)}
              className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Animated progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 origin-left rounded-b-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent border-1 border-gray-300 p-8 rounded-2xl shadow-lg ">
          <div className="order-2 md:order-1 relative">
            {/* {loading && (
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
            )} */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
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
                    onBlur={() => {
                      const err = validateName(formData.name);
                      if (err) setErrors((prev) => ({ ...prev, name: err }));
                    }}
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
                    onBlur={() => {
                      const err = validateEmail(formData.email);
                      if (err) setErrors((prev) => ({ ...prev, email: err }));
                    }}
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
                    onBlur={() => {
                      const err = validatePhone(formData.phone);
                      if (err) setErrors((prev) => ({ ...prev, phone: err }));
                    }}
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

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`
        w-full rounded-2xl shadow-sm sm:text-sm font-semibold
        flex items-center justify-center gap-2
        text-white transition-all duration-300 py-3
        ${
          loading
            ? "bg-orange-400 cursor-not-allowed opacity-80"
            : "bg-orange-600 hover:bg-orange-700 hover:shadow-lg active:scale-[0.98]"
        }
      `}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
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
