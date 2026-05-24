'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe, Smartphone, ShoppingBag, Cloud, Palette, Zap, Flame, Store, ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/data/services';
import SectionHeader from '@/components/ui/SectionHeader';

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, ShoppingBag, Cloud, Palette, Zap, Flame, Store,
};

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100',
  green: 'bg-green-50 text-green-600 group-hover:bg-green-100',
  purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  pink: 'bg-pink-50 text-pink-600 group-hover:bg-pink-100',
  yellow: 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
  teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
};

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <SectionHeader
          label="What We Do"
          title="Full-Stack Services, "
          highlight="One Team"
          description="From ideation to deployment and beyond — we cover every layer of your product with deep expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const colorClass = colorMap[service.color] || colorMap.blue;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group card p-6 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                 transition-colors duration-300 ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 font-display">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 2).map((f) => (
                    <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/services" className="btn-primary">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
