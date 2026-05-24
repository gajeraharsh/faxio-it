'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, BadgeCheck, TrendingUp } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Quality First, Always',
    description:
      'Every line of code is reviewed, tested, and held to production standards before it leaves our hands.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Handshake,
    title: 'Pay After Satisfaction',
    description:
      'For selected projects, payment is requested only after the initial delivery and your sign-off — because we stand behind our work.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent by Default',
    description:
      'No surprises, no hidden costs. We communicate openly at every stage so you always know exactly where your project stands.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Built for Real Business Value',
    description:
      'We don\'t just complete projects — we deliver scalable, modern, and reliable digital solutions that move your business forward.',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function ClientFirst() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Our Client Promise
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900
                           leading-tight mt-3 mb-5">
              Client Satisfaction Is{' '}
              <span className="gradient-text">Not Optional</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Quality and client satisfaction are our top priorities. We believe in building
              long-term relationships through trust, transparency, and high-quality development.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              For selected projects, we follow a <strong className="text-gray-900">client-first
              approach</strong> where payment is requested only after the initial project
              delivery and client satisfaction. Our focus is not just completing projects —
              it's delivering scalable, modern, and reliable digital solutions that create
              real business value.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['100% Satisfaction Focus', 'Pay After Delivery*', 'Long-Term Partnership'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100
                             text-blue-700 text-sm font-medium px-4 py-2 rounded-full"
                >
                  <BadgeCheck className="w-3.5 h-3.5" />
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Pay-after-delivery applies to selected project types. Ask us about eligibility.
            </p>
          </motion.div>

          {/* Right — feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white
                             hover:border-blue-200 hover:shadow-lg transition-all duration-300
                             relative overflow-hidden"
                >
                  {/* Top accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500
                                  to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity
                                  duration-300 rounded-t-2xl" />

                  <div className={`w-11 h-11 ${point.color} rounded-xl flex items-center
                                   justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-display">{point.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom full-width highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border
                     border-blue-100 p-8 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center
                          shrink-0 shadow-lg shadow-blue-200">
            <Handshake className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-gray-900 font-display text-lg mb-1">
              We're invested in your success — not just your payment.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every project is a partnership. When your product succeeds, that's the real measure
              of our work.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 btn-primary text-sm py-3 px-6"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
