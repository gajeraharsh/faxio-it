'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Cpu, LayoutDashboard, FileText, Plug, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

const aiServices = [
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description:
      'Smart chatbots for websites and apps using advanced AI APIs — handling customer support, lead generation, and automated conversations around the clock.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Cpu,
    title: 'AI Agents & Automation',
    description:
      'Custom AI agents that perform tasks like scheduling, answering queries, processing data, and automating complex business workflows — end to end.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: LayoutDashboard,
    title: 'AI SaaS Product Development',
    description:
      'End-to-end development of AI-powered SaaS platforms using modern APIs to deliver scalable, intelligent software products that grow with your business.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: FileText,
    title: 'Content Generation Systems',
    description:
      'AI-powered tools for generating blogs, marketing copy, emails, product descriptions, and social media content — automatically and at scale.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Plug,
    title: 'AI Integration for Web Apps',
    description:
      'Integrate AI capabilities into your existing web applications using APIs to enhance functionality, automate workflows, and elevate user experience.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Workflow,
    title: 'Business Automation with AI',
    description:
      'Automate repetitive tasks like customer replies, reporting, and data processing using AI-powered API solutions — so your team focuses on what matters.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
];

const aiStack = [
  { name: 'OpenAI API', color: '#10a37f' },
  { name: 'Claude API', color: '#cc785c' },
  { name: 'Gemini API', color: '#4285f4' },
  { name: 'LangChain', color: '#1c3c3c' },
  { name: 'Pinecone', color: '#6c47ff' },
  { name: 'Weaviate', color: '#3fd47c' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Vector DBs', color: '#7c3aed' },
  { name: 'REST APIs', color: '#ef4444' },
];

const positioning = [
  'We integrate AI APIs into real business products',
  'Faster to build and deliver',
  'High demand in the US market',
  'Practical and easy to scale',
];

export default function AIServices() {
  return (
    <section className="section-padding bg-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                        bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
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
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20
                           text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI-Powered Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight
                         mt-3 mb-4">
            AI-Powered Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We build intelligent AI-powered applications using industry-leading APIs and cloud AI
            services — helping businesses automate workflows, improve customer experience, and ship
            smarter digital products quickly.
          </p>

          {/* Positioning badge */}
          <div className="inline-flex items-center gap-2 mt-5 bg-emerald-500/10 border border-emerald-500/20
                           text-emerald-400 text-sm font-medium px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4" />
            We integrate AI APIs into real business products — not train models from scratch
          </div>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl border p-6 ${service.bg}
                            hover:-translate-y-1.5 transition-all duration-300
                            hover:border-white/10`}
              >
                {/* Top glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent
                                via-white/20 to-transparent opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 rounded-t-2xl" />

                <div className={`w-11 h-11 ${service.bg} border ${service.bg.split(' ')[1]}
                                 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${service.color}`} />
                </div>

                <h3 className="font-semibold text-white font-display mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* AI Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/5 bg-white/3 p-8 lg:p-10 mb-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Our AI Tech Stack</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We use the best-in-class AI APIs and infrastructure tools to build reliable,
                production-ready AI features — fast.
              </p>

              {/* Positioning checklist */}
              <ul className="space-y-2.5">
                {positioning.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — tech badges */}
            <div className="flex flex-wrap gap-3">
              {aiStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 bg-white/5 border border-white/10
                             text-gray-200 text-sm font-medium px-4 py-2 rounded-full
                             hover:bg-white/10 transition-colors cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: tech.color }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-5">
            Ready to add AI to your product or business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white
                       font-semibold px-8 py-4 rounded-xl transition-all duration-200
                       shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
          >
            Let's Build Your AI Solution
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
