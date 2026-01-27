"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AnimatePresence, m, domMax, LazyMotion } from "framer-motion";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "../../../../lib/validators";
import CustomCaptcha from "../CustomCaptcha";

const FreeQuotation = () => {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [popup, setPopup] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);

  const showPopup = (type: "error" | "success", message: string) => {
    setPopup({ type, message });
    setTimeout(() => setPopup(null), 3000);
  };

  const validateDemoForm = (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    const newErrors: { [key: string]: string } = {};

    const nameErr = validateName(data.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateEmail(data.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validatePhone(data.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const msgErr = validateMessage(data.message);
    if (msgErr) newErrors.message = msgErr;

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formElement = e.currentTarget;

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("home_name") as string,
      email: form.get("home_email") as string,
      phone: form.get("home_phone") as string,
      message: form.get("home_message") as string,
    };

    const validationErrors = validateDemoForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    if (!isCaptchaValid) {
      showPopup("error", "Please complete the captcha.");
      setLoading(false);
      return;
    }

    setErrors({});

    try {
      await axios.post("/api/enquiry", {
        type: "demo",
        ...data,
        source: "demo",
      });

      showPopup("success", "Demo request sent successfully!");
      formElement.reset();
      setCaptchaKey((prev) => prev + 1);
      setIsCaptchaValid(false);
    } catch (err) {
      console.log(err);
      showPopup("error", "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LazyMotion features={domMax}>
      <div className="relative py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
        <AnimatePresence>
          {popup && (
            <m.div
              initial={{ y: -15, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -15, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`fixed top-6 left-1/2 -translate-x-1/2 z-[2000] !important ${popup.type === "success"
                ? "bg-gradient-to-r from-green-50 to-emerald-50/80 border-green-200/60 shadow-2xl shadow-green-200/50"
                : "bg-gradient-to-r from-red-50 to-rose-50/80 border-red-200/60 shadow-2xl shadow-red-200/50"
                } backdrop-blur-xl text-gray-900 px-6 py-3 rounded-xl border border-t-white/20 border-l-white/20 font-semibold text-sm md:text-base flex items-center gap-3 max-w-[90vw] md:max-w-md`}
            >
              {/* Animated Icon */}
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className={`relative flex items-center justify-center w-7 h-7 rounded-full ${popup.type === "success"
                  ? "bg-gradient-to-br from-green-500 to-emerald-600"
                  : "bg-gradient-to-br from-red-500 to-rose-600"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  {popup.type === "success" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </m.div>

              {/* Message Content */}
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm md:text-base">
                  {popup.type === "success" ? "Success! 🎉" : "Error!"}
                </span>
                <m.span
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className="text-gray-700 text-xs md:text-sm font-normal"
                >
                  {popup.message}
                </m.span>
              </div>

              {/* Close button */}
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPopup(null)}
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
              </m.button>

              {/* Animated progress bar */}
              <m.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className={`absolute bottom-0 left-0 right-0 h-1 origin-left rounded-b-xl ${popup.type === "success"
                  ? "bg-gradient-to-r from-green-400 to-emerald-500"
                  : "bg-gradient-to-r from-red-400 to-rose-500"
                  }`}
              />
            </m.div>
          )}
        </AnimatePresence>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h6 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Every Great, Big thing starts with a decision{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #323d4e, 4px 6px 0px #ff582336",
                }}
              >
                that you take today
              </span>
            </h6>
          </div>

          <div className="relative text-center border-2 border-blue-400 p-8 rounded-2xl bg-transparent">
            <div className="mb-6">
              <h5 className="text-3xl font-semibold text-white">
                Get a Free Demo
              </h5>
              <p className="text-xl text-white/90 font-light mb-6 font-sans">
                Don’t worry your data and business ideas are safe with us.
              </p>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              onSubmit={onSubmit}
            >
              <div className="w-full col-span-3 md:col-span-1">
                <input
                  aria-label="Full Name"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-gray-50 placeholder-blue-400 ${errors.name ? "border-red-500" : "border-blue-400"
                    }`}
                  id="home_name"
                  name="home_name"
                  type="text"
                  placeholder="Enter Full Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="w-full col-span-3 md:col-span-1">
                <input
                  aria-label="Email Address"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-gray-50 placeholder-blue-400 ${errors.email ? "border-red-500" : "border-blue-400"
                    }`}
                  id="home_email"
                  name="home_email"
                  type="email"
                  placeholder="Email Id"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="w-full col-span-3 md:col-span-1">
                <input
                  aria-label="Phone Number"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-transparent text-gray-50 placeholder-blue-400 ${errors.phone ? "border-red-500" : "border-blue-400"
                    }`}
                  id="home_phone"
                  name="home_phone"
                  type="tel"
                  placeholder="Contact Number"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="w-full col-span-3">
                <textarea
                  aria-label="Message"
                  className={`w-full px-4 py-3 rounded-lg border-2 border-b-8 bg-transparent text-gray-50 placeholder-blue-400 outline-none ${errors.message ? "border-red-500" : "border-blue-400"
                    }`}
                  id="home_message"
                  name="home_message"
                  rows={4}
                  placeholder="Message"
                ></textarea>

                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="w-full col-span-3">
                <CustomCaptcha
                  key={captchaKey}
                  onValidate={setIsCaptchaValid}
                />
              </div>

              <div className="w-full col-span-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-white rounded-full text-sm sm:text-base lg:text-lg transition-all"
                >
                  <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10 group-hover:text-white transition-all duration-500 flex items-center gap-2 group-hover:scale-x-108">
                    {loading ? "Sending..." : "Book Your Demo"}{" "}
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <Image
          src="/Homepage/shapes/global_shap.png"
          alt="Global Shape"
          width={600}
          height={600}
          className="absolute -left-80 top-10 opacity-100 animate-spin [animation-duration:50s]"
          unoptimized
        />

        <Image
          src="/Homepage/shapes/shape-3.png"
          alt="Shape Bg"
          width={400}
          height={400}
          className="absolute right-0 bottom-0 opacity-50"
        />
      </div>
    </LazyMotion>
  );
};

export default FreeQuotation;
