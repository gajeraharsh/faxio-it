'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Code2, MessageSquare, TrendingUp, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const reasons = [
  {
    icon: Code2,
    title: 'Senior-Only Execution',
    description:
      'No junior devs on your project. Every engineer we assign has 5+ years of hands-on production experience in their domain.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Predictable Delivery',
    description:
      "We break projects into 2-week sprints with clear milestones. You always know what's done, what's next, and why.",
    color: 'green',
  },
  {
    icon: Shield,
    title: 'Code You Own Forever',
    description:
      'We write clean, documented, well-tested code. No vendor lock-in, no proprietary frameworks. You own the IP.',
    color: 'purple',
  },
  {
    icon: MessageSquare,
    title: 'Radical Transparency',
    description:
      'Daily async updates, weekly video syncs, and an always-on Slack channel. You\'re never left wondering about your project status.',
    color: 'orange',
  },
  {
    icon: TrendingUp,
    title: 'Performance as a Feature',
    description:
      'Sub-1s LCP, 95+ Lighthouse scores, and optimized database queries are standard deliverables — not add-ons.',
    color: 'teal',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description:
      '65% of our clients continue with us after the initial project. We become embedded in your team\'s muscle memory.',
    color: 'indigo',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  teal: 'bg-teal-100 text-teal-600',
  indigo: 'bg-indigo-100 text-indigo-600',
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          label="Why Faxio IT"
          title="Built Different. "
          highlight="Shipped Better."
          description="We're not the cheapest option — we're the one that doesn't cost you twice."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-gray-100 bg-white
                           hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Hover accent */}
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r
                                from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300" />

                <div className={`w-11 h-11 ${colorMap[reason.color]} rounded-xl flex items-center
                                 justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-display">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white"
        >
          <p className="text-sm font-medium text-blue-200 mb-2">Ready to get started?</p>
          <h3 className="text-2xl sm:text-3xl font-bold font-display mb-4">
            Let's scope your project — free consultation, no obligation.
          </h3>
          <a
            href="mailto:gajeraharsh283@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50
                       font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
