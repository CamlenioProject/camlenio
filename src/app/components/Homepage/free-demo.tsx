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
      <div className="relative py-24 bg-[#080b11] overflow-hidden">
        {/* Advanced Background Elements */}
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <AnimatePresence>
          {popup && (
            <m.div
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.9 }}
              className={`fixed top-12 left-1/2 -translate-x-1/2 z-[2000] px-6 py-4 rounded-2xl border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 min-w-[320px] ${popup.type === "success"
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

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Great Discovery</span> Starts With A Single Step.
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-sans">
                Take the decision today that will redefine your business tomorrow. Our expert team is ready to bring your vision to life.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">100+</h4>
                  <p className="text-gray-500 text-sm">Successful Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                  <p className="text-gray-500 text-sm">Expert Support</p>
                </div>
              </div>
            </m.div>

            {/* Right: Premium Form Container */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-gray-900/50 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden group"
            >
              {/* Inner Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get a Free Demo</h3>
                  <p className="text-gray-400 text-sm font-sans">Submit your details and we'll reach out within 24 hours.</p>
                </div>

                <form className="space-y-5" onSubmit={onSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="home_name" className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                      <input
                        type="text"
                        id="home_name"
                        name="home_name"
                        placeholder="Your Name"
                        className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] ${errors.name ? "border-rose-500/50" : "border-white/5 focus:border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0)] focus:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                          }`}
                      />
                      {errors.name && <p className="text-rose-500 text-[10px] font-bold mt-1 ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="home_phone" className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="home_phone"
                        name="home_phone"
                        placeholder="+91 xxx..."
                        className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] ${errors.phone ? "border-rose-500/50" : "border-white/5 focus:border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0)] focus:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                          }`}
                      />
                      {errors.phone && <p className="text-rose-500 text-[10px] font-bold mt-1 ml-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="home_email" className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                    <input
                      type="email"
                      id="home_email"
                      name="home_email"
                      placeholder=""
                      className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] ${errors.email ? "border-rose-500/50" : "border-white/5 focus:border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0)] focus:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                        }`}
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] font-bold mt-1 ml-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="home_message" className="text-xs font-bold text-gray-500 uppercase ml-1">How can we help?</label>
                    <textarea
                      id="home_message"
                      name="home_message"
                      rows={3}
                      placeholder="Tell us about your project..."
                      className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] resize-none ${errors.message ? "border-rose-500/50" : "border-white/5 focus:border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0)] focus:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                        }`}
                    />
                    {errors.message && <p className="text-rose-500 text-[10px] font-bold mt-1 ml-1">{errors.message}</p>}
                  </div>

                  <div className="py-2">
                    <CustomCaptcha
                      key={captchaKey}
                      onValidate={setIsCaptchaValid}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative group h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all duration-500 overflow-hidden flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? "Processing..." : "Secure Your Free Demo"}
                      <FaLongArrowAltRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  <p className="text-center text-[11px] text-gray-500 font-medium">
                    By submitting, you agree to our <Link href="/privacy-policy" className="text-orange-500/80 hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </m.div>
          </div>
        </div>

        {/* Floating Abstract Shapes */}
        <m.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-20 opacity-20 pointer-events-none"
        >
          <Image src="/Homepage/shapes/global_shap.png" alt="" width={400} height={400} className="w-96 h-96" />
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default FreeQuotation;
