"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  Server,
  Settings,
  Users,
  Banknote,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  Scale
} from "lucide-react";
import React from "react";

const keyBenefits = [
  { text: "Help for UPI, IMPS, NEFT & RTGS", icon: Zap },
  { text: "Accurate time transactions tracking", icon: Clock },
  { text: "Secure and fast Payout API integration", icon: ShieldCheck },
  { text: "Automated bulk payouts", icon: Settings },
  { text: "Scalable framework for growing business", icon: Scale },
];

export default function BulkPayoutInfos(): React.JSX.Element {
  const smoothTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">

        {/* HEADER SECTION */}
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200"
            >
              <Settings className="w-3 h-3" /> Automation First
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Advance <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >Bank Transfer</span> <br />
              & Automations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              Our Bank Account Payout API enables secure fund transfer directly to the beneficiary account.
              As with the Instant Bank Transfer API, companies can process payments in seconds,
              improving employee and partner satisfaction.
            </motion.p>
          </div>

          {/* Automated System Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-white overflow-hidden"
          >
            {/* Abstract Grid BG */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/30">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-Bank System</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our Multi Bank Payout System guarantees the highest success rates and uninterrupted services through intelligent routing. Manual processing issues are eliminated, maximizing operational efficiency.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1 bg-slate-700/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                    className="h-full bg-green-400"
                  />
                </div>
                <span className="text-xs font-bold text-green-400">98.9% Success</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SALARY & COMMISSION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition }}
          className="border border-slate-100 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden"
        >
          <div className="md:grid md:grid-cols-12 gap-12 items-center relative z-10">
            <div className="md:col-span-7 mb-10 md:mb-0">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs mb-4">
                <Users className="w-4 h-4" /> Commission Management
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Salary Payout Software & Commission Management Made Easy
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Camlenio went beyond basic payouts by delivering customised solutions like the Commission Payout system and Salary Payout Software.
                Automate monthly payroll, incentive payouts, and partner commissions effortlessly via our robust Payout API.
              </p>
              <p className="text-slate-500 leading-relaxed border-l-4 border-orange-200 pl-6 italic">
                "Perfect for companies that manage large teams, agents, gig workers and affiliates across different locations."
              </p>
            </div>

            {/* Visual Graphic Side */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Banknote className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Gig Workers</h4>
                  <p className="text-xs text-slate-500">Instant Daily Payouts</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow ml-6">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Affiliate Agents</h4>
                  <p className="text-xs text-slate-500">Real-time Commission</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Employees</h4>
                  <p className="text-xs text-slate-500">Monthly Salary Automation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KEY BENEFITS GRID */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Key Benefits of Camlenio Payout</h3>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {keyBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <p className="font-medium text-slate-700 text-sm leading-snug">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-20 text-center">
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            With Camlenio, companies increase <span className="text-slate-900 font-bold">full control over their payout ecosystem</span> while providing quick and more reliable payout experiences.
          </p>
        </div>

      </div>
    </section>
  );
}
