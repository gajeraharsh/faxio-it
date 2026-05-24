'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4+', label: 'Years Experience' },
  { value: '5+', label: 'Happy Clients' },
];

const highlights = [
  'Web & Mobile Development',
  'AI API Integration',
  'On-Time Delivery',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
                        bg-gradient-radial from-blue-50 to-transparent opacity-50 rounded-full" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100
                         text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Available for new projects in 2026
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display
                         text-gray-900 leading-[1.1] mb-6"
            >
              We Build{' '}
              <span className="gradient-text">Digital Products</span>{' '}
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              We build modern web applications and AI-powered solutions using advanced APIs —
              helping businesses automate workflows, scale faster, and deliver smarter digital
              products.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base px-8 py-4">
                <Play className="w-4 h-4 text-blue-600" />
                View Our Work
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 mt-10"
            >
              <div className="flex -space-x-2">
                {['SM', 'DC', 'OR', 'JO', 'PS'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600
                               flex items-center justify-center text-white text-xs font-bold
                               border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Trusted by 40+ clients worldwide</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl
                            p-8 shadow-2xl shadow-blue-200">
              {/* Code snippet mockup */}
              <div className="bg-gray-950 rounded-2xl p-5 mb-4">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-gray-500 text-xs font-mono">app/page.tsx</span>
                </div>
                <pre className="text-xs font-mono text-left space-y-1">
                  <div><span className="text-purple-400">export default</span> <span className="text-yellow-300">async function</span> <span className="text-blue-300">Page</span><span className="text-gray-300">() {'{'}</span></div>
                  <div><span className="text-gray-500">  // Server Component</span></div>
                  <div><span className="text-gray-300">  </span><span className="text-purple-400">const</span> <span className="text-gray-300">data = </span><span className="text-purple-400">await</span> <span className="text-blue-300">fetchData</span><span className="text-gray-300">();</span></div>
                  <div><span className="text-gray-300">  </span><span className="text-purple-400">return</span> <span className="text-gray-300">{'<'}</span><span className="text-red-400">Dashboard</span><span className="text-gray-300">{' data={data} />'}</span></div>
                  <div><span className="text-gray-300">{'}'}</span></div>
                </pre>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Lighthouse', value: '98', unit: '/100' },
                  { label: 'LCP', value: '0.8', unit: 's' },
                  { label: 'CLS', value: '0.01', unit: '' },
                ].map((m) => (
                  <div key={m.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-white font-bold text-lg">
                      {m.value}<span className="text-blue-200 text-xs">{m.unit}</span>
                    </p>
                    <p className="text-blue-200 text-xs">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Project Shipped</p>
                  <p className="text-xs text-gray-500">2 days early</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {['#3b82f6', '#8b5cf6', '#10b981'].map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">3 devs active</p>
                  <p className="text-xs text-gray-500">Building now</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden
                     border border-gray-100 shadow-sm mb-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-6 text-center hover:bg-blue-50 transition-colors">
              <p className="text-3xl font-bold font-display gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
