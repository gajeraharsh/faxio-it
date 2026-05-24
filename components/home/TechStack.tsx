'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/lib/data/technologies';
import SectionHeader from '@/components/ui/SectionHeader';

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-50 text-blue-700 border-blue-100',
  Language: 'bg-purple-50 text-purple-700 border-purple-100',
  Styling: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  Mobile: 'bg-sky-50 text-sky-700 border-sky-100',
  Backend: 'bg-green-50 text-green-700 border-green-100',
  API: 'bg-pink-50 text-pink-700 border-pink-100',
  Database: 'bg-orange-50 text-orange-700 border-orange-100',
  Cloud: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  Commerce: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export default function TechStack() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <SectionHeader
          label="Our Tech Stack"
          title="Technologies We "
          highlight="Master"
          description="We choose the right tool for each job — and we go deep, not wide."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group card p-5 text-center hover:-translate-y-1.5 transition-all duration-300
                         cursor-default"
            >
              {/* Color dot */}
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center
                           text-white font-bold text-xs shadow-sm"
                style={{ backgroundColor: tech.color === '#000000' ? '#374151' : tech.color }}
              >
                {tech.name.slice(0, 2)}
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-1.5">{tech.name}</p>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium
                            ${categoryColors[tech.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}
              >
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Second row — descriptive text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-10 max-w-lg mx-auto"
        >
          Plus Docker, Redis, Elasticsearch, Stripe, Twilio, and many more as your project requires.
        </motion.p>
      </div>
    </section>
  );
}
