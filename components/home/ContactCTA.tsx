'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700
                     to-indigo-800 p-10 lg:p-16 text-white text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96
                            rounded-full bg-white/3 border border-white/10" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20
                             text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              Let's Work Together
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight mb-5">
              Have a Project in Mind?
              <br />
              <span className="text-blue-200">Let's Make It Real.</span>
            </h2>

            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need a new product built from scratch, a legacy system modernized, or an
              expert team embedded in your engineering org — we're ready to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50
                           font-semibold px-8 py-4 rounded-xl transition-all duration-200
                           shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Email Us Directly
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white
                           font-semibold px-8 py-4 rounded-xl transition-all duration-200
                           border border-white/20 hover:border-white/40"
              >
                Contact Form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-8">
              Average response time: <strong className="text-white">under 4 hours</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
