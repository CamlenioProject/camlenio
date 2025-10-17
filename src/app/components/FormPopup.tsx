"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const data = Object.fromEntries(formData.entries());
    data.source = "popup-form";
    console.log(data);

    const payload = {
      type: "popup", // 👈 required for your merged route
      name,
      email,
      phone,
      message,
      source: "popup-form",
    };

    try {
      await axios.post("/api/enquiry", payload);

      alert("Thanks for applying! We received your application.");
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while submitting the application."
        );
      } else {
        setError(
          String(err) || "An error occurred while submitting the application."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="relative bg-white rounded-2xl shadow-xl w-80 h-auto md:w-full max-w-4xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-white/70 transition-colors z-10 rounded-full"
              aria-label="Close popup"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>

            <div className="flex flex-col-reverse md:flex-row bg-white">
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-xs md:text-sm mb-1">
                  Fill out the form and we&apos;ll get back to you.
                </p>
                <form onSubmit={onSubmit} className="space-y-1">
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
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] placeholder-opacity-40 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white placeholder-opacity-40 border  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side (Image) */}
              <div className="w-full md:w-1/2">
                <Image
                  src="/happy-diwali.webp"
                  alt="Contact us"
                  width={600}
                  height={600}
                  className="w-100 md:w-full md:h-full object-fill md:rounded-r-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormPopup;
