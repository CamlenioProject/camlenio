"use client";

import Image from "next/image";
import Link from "next/link";
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
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const FreeDemo = () => {
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
      <div className="relative py-24 overflow-hidden">

        <AnimatePresence>
          {popup && (
            <m.div
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.9 }}
              className={`fixed top-12 left-1/2 -translate-x-1/2 z-[2000] px-6 py-4 rounded-2xl border backdrop-blur-2xl shadow-smflex items-center gap-4 min-w-[320px] ${popup.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${popup.type === "success" ? "bg-emerald-500/20" : "bg-rose-500/20"
                }`}>
                {popup.type === "success" ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg">
                  {popup.type === "success" ? "Success!" : "Action Required"}
                </p>
                <p className="text-sm opacity-80">{popup.message}</p>
              </div>
              <m.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${popup.type === "success" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
              />
            </m.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Every <span className="text-orange-500" style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}>Great Discovery</span> Starts With A Single Step.
              </h2>

              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-sans">
                Take the decision today that will redefine your business tomorrow. Our expert team is ready to bring your vision to life.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">100+</h4>
                  <p className="text-slate-500 text-sm">Successful Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">24/7</h4>
                  <p className="text-slate-500 text-sm">Expert Support</p>
                </div>
              </div>
            </m.div>

            {/* Right: Premium Form Container */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/80 border border-black/5 shadow-sm overflow-hidden"
            >
              {/* Inner Glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Demo</h3>
                  <p className="text-slate-500 text-sm font-sans">Submit your details and we'll reach out within 24 hours.</p>
                </div>

                <form className="space-y-5" onSubmit={onSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input
                      type="text"
                      id="home_name"
                      name="home_name"
                      label="Full Name"
                      placeholder="Your Name"
                      error={errors.name}
                    />

                    <Input
                      type="tel"
                      id="home_phone"
                      name="home_phone"
                      label="Phone Number"
                      placeholder="10-digit phone number"
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const target = e.currentTarget;
                        target.value = target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                      error={errors.phone}
                    />
                  </div>

                  <Input
                    type="email"
                    id="home_email"
                    name="home_email"
                    label="Email Address"
                    placeholder="Your Email Address"
                    error={errors.email}
                  />

                  <Input
                    type="textarea"
                    id="home_message"
                    name="home_message"
                    label="How can we help?"
                    placeholder="Tell us about your project..."
                    error={errors.message}
                  />

                  <div className="py-2">
                    <CustomCaptcha
                      key={captchaKey}
                      onValidate={setIsCaptchaValid}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    size="xl"
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-full text-[14px] font-bold shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all duration-300 active:scale-95 disabled:opacity-70 group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? "Processing..." : "Secure Your Free Demo"}
                      <FaLongArrowAltRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default FreeDemo;
