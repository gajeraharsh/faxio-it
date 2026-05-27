'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';

const features = [
  'Web & Mobile Development',
  'AI Agents & Automation',
  'MCP Server Development',
  'SaaS & E-commerce Builds',
  'UI/UX Design',
  'API & Firebase Integration',
  'Daily progress updates',
  'Source code handover',
  'Slack / WhatsApp access',
  'No lock-in contracts',
];

const guarantees = [
  'No hidden fees — ever',
  'Cancel or pause anytime',
  '7-day free trial on new projects',
  'Money-back if not satisfied',
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100
                           text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Transparent Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight
                         text-gray-900 mt-3 mb-4">
            Simple, Honest{' '}
            <span className="gradient-text">Rates</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            One simple rate for everything we build — no tiers, no surprises.
          </p>
        </motion.div>

        {/* Single pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700
                          text-white shadow-2xl shadow-blue-200 p-10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900
                               text-xs font-bold px-5 py-1.5 rounded-full shadow-md">
                Everything Included
              </span>
            </div>

            {/* Icon + name */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-white mb-1 text-center sm:text-left">
                  Hourly Rate
                </h3>
                <div className="flex items-end gap-1.5 justify-center sm:justify-start">
                  <span className="text-6xl font-bold font-display text-white leading-none">$8</span>
                  <span className="text-blue-200 text-lg mb-1">/ hour</span>
                </div>
                <p className="text-blue-100 text-sm mt-2 max-w-sm text-center sm:text-left">
                  Pay only for what you need. Every service, every project — one honest rate.
                </p>
              </div>
            </div>

            {/* Features grid */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-200 shrink-0" />
                  <span className="text-blue-50">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-4 px-8
                         bg-white text-blue-700 hover:bg-blue-50 rounded-xl
                         font-semibold transition-all duration-200 w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Guarantees strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl px-8 py-6 mt-8
                     flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {guarantees.map((g) => (
            <div key={g} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              {g}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Need a fixed-price quote for your project?{' '}
          <Link href="/contact" className="text-blue-600 font-medium hover:underline">
            Let's talk →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
