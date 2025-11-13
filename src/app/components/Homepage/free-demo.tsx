"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";

const FreeQuotation = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const showToast = (type: "error" | "success", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2500);
  };

  const validate = (
    name: string,
    email: string,
    phone: string,
    message: string
  ): string | null => {
    if (!name || name.trim().length < 2) return "Enter a valid name.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) return "Enter a valid email.";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone))
      return "Enter a valid 10-digit phone number.";
    if (!message || message.trim().length < 5) return "Enter a valid message.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const name = form.get("home_name") as string;
    const email = form.get("home_email") as string;
    const phone = form.get("home_phone") as string;
    const message = form.get("home_message") as string;

    const error = validate(name, email, phone, message);
    if (error) {
      showToast("error", error);
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/enquiry", {
        type: "demo",
        name,
        email,
        phone,
        message,
        source: "homepage-demo-form",
      });

      showToast("success", "Demo request sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      showToast("error", "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-[3000] px-4 py-3 rounded-lg shadow-md text-white text-sm transition-all ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

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
            className="grid grid-cols-1 mTd:grid-cols-3 gap-6"
            onSubmit={onSubmit}
          >
            <input
              aria-label="Full Name"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400"
              id="home_name"
              name="home_name"
              type="text"
              placeholder="Enter Full Name"
            />

            <input
              aria-label="Email Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400"
              id="home_email"
              name="home_email"
              type="email"
              placeholder="Email Id"
            />

            <input
              aria-label="Phone Number"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400"
              id="home_phone"
              name="home_phone"
              type="tel"
              placeholder="Contact Number"
            />

            <textarea
              aria-label="Message"
              className="w-full md:col-span-3 px-4 py-3 rounded-lg border-2 border-b-8 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400 outline-none"
              id="home_message"
              name="home_message"
              placeholder="Message"
              rows={4}
            ></textarea>

            <div className="md:col-span-3">
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
  );
};

export default FreeQuotation;
