"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, m, domMax, LazyMotion } from "framer-motion";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "../../../lib/validators";
import CustomCaptcha from "./CustomCaptcha";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const isMobile = useIsMobile();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [gmailError, setGmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);

  const [countryCode, setCountryCode] = useState("+91");

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+41", country: "Switzerland" },
    { code: "+93", country: "Afghanistan" },
  ];

  const validatePopupForm = (
    name: string,
    email: string,
    fullPhone: string,
    message: string
  ): string | null => {
    const nameErr = validateName(name);
    if (nameErr) return nameErr;

    const emailErr = validateEmail(email);
    if (emailErr) return emailErr;

    const phoneErr = validatePhone(fullPhone);
    if (phoneErr) return phoneErr;

    const messageErr = validateMessage(message);
    if (messageErr) return messageErr;

    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const fullPhone = countryCode + phoneNumber;

    const validationError = validatePopupForm(name, email, fullPhone, message);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    if (!isCaptchaValid) {
      setError("Please complete the captcha.");
      setLoading(false);
      return;
    }

    const payload = {
      type: "popup",
      name,
      email,
      phone: fullPhone,
      message,
      source: "popup",
    };

    try {
      await axios.post("/api/enquiry", payload);

      setSuccess("ok");

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setGmailError(null);
      setGmailError(null);
      setPhoneError(null);
      setCaptchaKey((prev) => prev + 1);
      setIsCaptchaValid(false);

      setTimeout(() => {
        router.push("/");
      }, 4000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [error, success]);

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const update = () => setIsMobile(window.innerWidth < 768);
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);

    return isMobile;
  }

  useEffect(() => {
    if (isOpen) {
      window.__lenis?.stop(); // Stop smooth scrolling
      document.body.style.overflow = "hidden"; // Hard lock fallback
    } else {
      window.__lenis?.start(); // Resume smooth scrolling
      document.body.style.overflow = ""; // Restore scroll
    }
  }, [isOpen]);

  return (
    <LazyMotion features={domMax}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 z-[2000] backdrop-blur-xs"
              onClick={onClose}
            />
            <div className="relative">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center"
                onClick={() => onClose()}
              >
                <div className="relative">
                  <button
                    onClick={() => {
                      onClose();
                    }}
                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-white/90 rounded-full cursor-pointer shadow-md flex items-center justify-center z-[2200] hover:scale-110 transition-transform"
                    aria-label="Close popup"
                  >
                    <XMarkIcon className="w-5 h-5 text-black cursor-pointer" />
                  </button>

                  <m.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    className="relative bg-white rounded-2xl shadow-xl w-[75vw] h-auto sm:w-full sm:h-auto overflow-x-hidden overflow-y-auto overscroll-contain pointer-events-auto "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AnimatePresence>
                      {(error || success) && (
                        <m.div
                          initial={{ y: -15, opacity: 0, scale: 0.95 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: -15, opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] ${error
                            ? "bg-gradient-to-r from-red-50 to-rose-50/80 border-red-200/60 shadow-2xl shadow-red-200/50"
                            : "bg-gradient-to-r from-green-50 to-emerald-50/80 border-green-200/60 shadow-2xl shadow-green-200/50"
                            } backdrop-blur-xl text-gray-900 px-6 py-3 rounded-xl border border-t-white/20 border-l-white/20 font-semibold text-sm md:text-base flex items-center gap-3 max-w-[90vw] md:max-w-md`}
                        >
                          {/* Animated Icon */}
                          <m.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className={`relative flex items-center justify-center w-7 h-7 rounded-full ${error
                              ? "bg-gradient-to-br from-red-500 to-rose-600"
                              : "bg-gradient-to-br from-green-500 to-emerald-600"
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
                              {error ? (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              )}
                            </svg>
                          </m.div>

                          {/* Your Specific Message */}
                          <div className="flex flex-col">
                            {success ? (
                              <>
                                <span className="font-bold text-gray-900 text-sm md:text-base">
                                  Thank you!
                                </span>
                                <span className="text-gray-700 text-xs md:text-sm font-normal">
                                  Your form was submitted successfully.
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="font-bold text-gray-900 text-sm md:text-base">
                                  Error
                                </span>
                                <span className="text-gray-700 text-xs md:text-sm font-normal">
                                  {error}
                                </span>
                              </>
                            )}
                          </div>

                          {/* Close button */}
                          <m.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              if (error) setError(null);
                              if (success) setSuccess(null);
                            }}
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
                            className={`absolute bottom-0 left-0 right-0 h-1 origin-left rounded-b-xl ${error
                              ? "bg-gradient-to-r from-red-400 to-rose-500"
                              : "bg-gradient-to-r from-green-400 to-emerald-500"
                              }`}
                          />
                        </m.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-col-reverse md:flex-row bg-white">
                      <div className="w-full sm:w-1/2 p-4 md:p-6 overflow-hidden">
                        <div className="flex justify-between">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                            Get in Touch
                          </h2>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm mb-1">
                          Fill out the form and we&apos;ll get back to you.
                        </p>

                        <form
                          onSubmit={onSubmit}
                          className="h-full space-y-2 sm:space-y-4"
                        >
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              className="mt-1 block w-full px-3 py-1 text-[.7rem] placeholder-opacity-40 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                              placeholder="Your Name"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              onBlur={() => {
                                const err = validateEmail(email);
                                if (err) {
                                  setGmailError(err);
                                } else {
                                  setGmailError(null);
                                }
                              }}
                              className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                              placeholder="you@example.com"
                            />

                            {gmailError && (
                              <p className="text-red-500 text-[0.7rem] mt-1">
                                {gmailError}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                            >
                              Phone
                            </label>

                            <div className="flex gap-2 mt-1">
                              {/* COUNTRY CODE DROPDOWN */}
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="mt-1 px-2 py-1 text-[.7rem] w-14 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-orange-500 focus:border-orange-500"
                              >
                                {countryCodes.map((item) => (
                                  <option key={item.code} value={item.code}>
                                    {item.code} ({item.country})
                                  </option>
                                ))}
                              </select>
                              <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                onBlur={() => {
                                  const full = `${countryCode}${phoneNumber}`;
                                  const err = validatePhone(full);
                                  setPhoneError(err);
                                }}
                                className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                placeholder="Phone Number"
                              />
                            </div>
                            {phoneError && (
                              <p className="text-red-500 text-[0.7rem] mt-1">
                                {phoneError}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                            >
                              Message
                            </label>

                            <textarea
                              name="message"
                              id="message"
                              rows={isMobile ? 2 : 4}
                              value={message}
                              onChange={(e) => {
                                setMessage(e.target.value);

                                const msg = validateMessage(e.target.value);
                                if (msg !== null) {
                                  setMessageError(msg);
                                } else {
                                  setMessageError(null);
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  e.currentTarget.form?.requestSubmit();
                                }
                              }}
                              className={`mt-1 block w-full px-3 py-1 text-[.7rem] bg-white placeholder-opacity-40 border rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm ${messageError
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                              placeholder="Your message..."
                            />

                            {messageError && (
                              <p className="text-red-500 text-[0.7rem] mt-1">
                                {messageError}
                              </p>
                            )}
                          </div>

                          <div>
                            <CustomCaptcha
                              key={captchaKey}
                              onValidate={setIsCaptchaValid}
                              className="!flex-col sm:!flex-row" // Make it column on very small popup
                            />
                          </div>

                          <div>
                            <button
                              type="submit"
                              disabled={loading}
                              className={`w-full rounded-md shadow-sm sm:text-sm flex items-center justify-center gap-2 text-white bg-orange-600 hover:bg-orange-700 transition-all py-2 cursor-pointer ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                              {loading ? (
                                <span className="flex items-center gap-2">
                                  <svg
                                    className="animate-spin h-4 w-4 text-white"
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
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
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

                      <div className="w-full md:w-1/2">
                        <Image
                          src="/Custom-Software-popup-post.webp"
                          alt="Contact us"
                          width={600}
                          height={600}
                          className="w-100 md:w-full md:h-full object-fill md:rounded-r-2xl"
                          priority
                        />
                      </div>
                    </div>
                  </m.div>
                </div>
              </m.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default FormPopup;
