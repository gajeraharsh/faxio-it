'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

const accentMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-700',
  green: 'from-green-500 to-emerald-700',
  purple: 'from-purple-500 to-purple-700',
  orange: 'from-orange-500 to-orange-700',
  teal: 'from-teal-500 to-teal-700',
  indigo: 'from-indigo-500 to-indigo-700',
};

export default function PortfolioPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          label="Our Work"
          title="Products We've "
          highlight="Shipped"
          description="A selection of projects we're proud to have built — and the results they delivered."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project header / image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${accentMap[project.accentColor] || accentMap.blue}
                               relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium opacity-70 mb-1">{project.category}</p>
                    <p className="text-2xl font-bold font-display opacity-90">{project.title}</p>
                  </div>
                </div>
                {/* Abstract decoration */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/10" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium
                                   px-4 py-2 rounded-full flex items-center gap-1.5">
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-gray-900 font-display text-lg">{project.title}</h3>
                  <span className="shrink-0 text-xs font-medium text-gray-500 bg-gray-100
                                   px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full
                                 font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/portfolio" className="btn-primary">
            See All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
