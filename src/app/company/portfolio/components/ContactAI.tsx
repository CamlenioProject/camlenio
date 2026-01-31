"use client";

import { motion } from "framer-motion";

const InputField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
  <motion.div
    className="relative mb-6 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <label className="block text-xs font-mono text-cyan-400 mb-1 uppercase tracking-widest">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors peer placeholder-gray-600"
      />
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 transition-all duration-300 peer-focus:w-full"></div>
    </div>
  </motion.div>
);

const ContactAI = () => {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Initialize <span className="text-cyan-500">Handshake</span></h2>
          <p className="text-gray-400">Send a signal through the void.</p>
        </motion.div>

        <form className="p-8 md:p-12 rounded-2xl bg-[#0a0a0a] border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Identity (Name)" placeholder="John Doe" />
            <InputField label="Coordinates (Email)" type="email" placeholder="john@example.com" />
          </div>

          <InputField label="Transmission (Message)" placeholder="Tell us about your project..." />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-4 bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-600 hover:text-white transition-all duration-300 rounded-lg group"
          >
            <span className="group-hover:hidden">Transmit Data</span>
            <span className="hidden group-hover:inline-block">Sending...</span>
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactAI;
