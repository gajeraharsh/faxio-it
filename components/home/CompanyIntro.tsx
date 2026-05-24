'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Target, Rocket, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    description: 'We stay ahead of the curve, adopting proven modern tech before it becomes mainstream.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: "We measure success by your KPIs — conversions, performance scores, user retention.",
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Rocket,
    title: 'Ship Fast',
    description: 'Our streamlined processes and reusable systems let us move fast without cutting corners.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: HeartHandshake,
    title: 'True Partnership',
    description: 'We embed into your team, share context openly, and treat your product like our own.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900
                           leading-tight mt-3 mb-6">
              A Team That Builds Products{' '}
              <span className="gradient-text">People Actually Use</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Faxio IT is a boutique software development agency founded by engineers who got tired
              of bloated teams and slow delivery cycles. We keep our team small, our standards high,
              and our communication direct.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              From fintech dashboards to fashion storefronts, logistics apps to LMS platforms —
              we've shipped across industries and we bring that cross-domain experience to every
              engagement. Our clients don't just get working software; they get a partner who
              understands product strategy.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — value cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card p-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className={`w-11 h-11 ${value.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
