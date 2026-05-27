import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, Smartphone, ShoppingBag, Cloud, Palette, Zap, Flame, Store, CheckCircle2, ArrowRight,
  Network, BrainCircuit, Workflow, Bot, LayoutDashboard, Plug, RefreshCw, FileText,
} from 'lucide-react';
import { services } from '@/lib/data/services';
import ContactCTA from '@/components/home/ContactCTA';

const aiServices = [
  {
    icon: Network,
    title: 'MCP Server Development',
    description: 'Build and deploy Model Context Protocol (MCP) servers that give AI models structured access to your databases, APIs, and tools — the backbone of production-ready AI agents.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    badge: 'New',
  },
  {
    icon: BrainCircuit,
    title: 'Autonomous AI Agents',
    description: 'Custom multi-step AI agents that reason, plan, and take action across your systems — scheduling, web browsing, data processing, and complex decision-making without human input.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    badge: 'Popular',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'End-to-end automation of repetitive workflows — customer onboarding, reporting pipelines, invoice processing, and multi-system sync — powered by AI and smart triggers.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    badge: null,
  },
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description: 'Smart chatbots for websites and apps using OpenAI, Claude, and Gemini APIs — handling customer support, lead generation, and automated conversations 24/7.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    badge: null,
  },
  {
    icon: LayoutDashboard,
    title: 'AI SaaS Product Development',
    description: 'End-to-end development of AI-powered SaaS platforms — from idea to launch — with scalable architecture, billing, and intelligent features built in.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    badge: null,
  },
  {
    icon: Plug,
    title: 'AI Integration for Web Apps',
    description: 'Plug AI capabilities into your existing web applications — enhance functionality, automate workflows, and improve user experience using best-in-class APIs.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    badge: null,
  },
  {
    icon: RefreshCw,
    title: 'Workflow Automation (n8n / Zapier)',
    description: 'Design and deploy no-code/low-code automation flows using n8n, Zapier, and Make — connecting your SaaS tools, CRMs, and databases into seamless automated pipelines.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    badge: null,
  },
  {
    icon: FileText,
    title: 'LLM-Powered Data Pipelines',
    description: 'Extract, classify, and transform data from unstructured documents, PDFs, and emails using LLMs with retrieval-augmented generation (RAG) for accurate, scalable results.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    badge: null,
  },
];

export const metadata: Metadata = {
  title: 'Services — Web, Mobile, Shopify, SaaS & AI Development',
  description:
    'Faxio Tech offers web app development, React Native mobile apps, Shopify custom themes & apps, SaaS product development, UI/UX design, Firebase integration, API development, and AI-powered solutions for businesses in India and globally.',
  keywords: [
    'web development services India',
    'mobile app development services',
    'Shopify development services',
    'SaaS product development',
    'UI UX design services India',
    'Firebase integration services',
    'API development services',
    'AI chatbot development service',
    'AI SaaS development',
    'React Native development',
    'Next.js web development',
    'e-commerce development India',
    'headless Shopify development',
    'custom web app development',
    'software development services Ahmedabad',
  ],
  alternates: { canonical: 'https://faxio.in/services' },
  openGraph: {
    title: 'Services — Web, Mobile, Shopify, SaaS & AI Development | Faxio Tech',
    description:
      'From Next.js web apps to React Native mobile apps, Shopify stores, SaaS platforms, and AI integration — Faxio Tech delivers production-ready software.',
    url: 'https://faxio.in/services',
    images: [{ url: 'https://faxio.in/og-image.svg', width: 1200, height: 630, alt: 'Faxio Tech Services' }],
  },
};

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, ShoppingBag, Cloud, Palette, Zap, Flame, Store,
};

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', gradient: 'from-blue-500 to-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', gradient: 'from-indigo-500 to-indigo-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', gradient: 'from-green-500 to-green-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', gradient: 'from-purple-500 to-purple-700' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', gradient: 'from-pink-500 to-pink-700' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-100', gradient: 'from-yellow-500 to-orange-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', gradient: 'from-orange-500 to-orange-700' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100', gradient: 'from-teal-500 to-teal-700' },
};

const process = [
  { step: '01', title: 'Discovery', description: 'We audit your requirements, goals, and constraints. No templates — every engagement starts with listening.' },
  { step: '02', title: 'Architecture', description: 'We design the technical foundation: data model, API structure, deployment strategy, and component hierarchy.' },
  { step: '03', title: 'Development', description: '2-week sprints with daily async updates and weekly video demos. You see real progress every week.' },
  { step: '04', title: 'QA & Testing', description: 'Automated tests, manual QA, accessibility audits, and Lighthouse performance benchmarks before any release.' },
  { step: '05', title: 'Launch', description: 'We handle deployment, DNS, monitoring, and go-live. Zero-downtime launches as standard.' },
  { step: '06', title: 'Growth Support', description: 'Post-launch retainers, feature development, and scaling support as your product grows.' },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://faxio.in/services/#webpage',
  url: 'https://faxio.in/services',
  name: 'Software Development Services — Faxio Tech',
  description: 'Web, mobile, Shopify, SaaS, AI development services by Faxio Tech, Ahmedabad, India.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://faxio.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://faxio.in/services' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Web Development', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'Next.js, React, Node.js web application development.' } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Mobile App Development', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'React Native iOS and Android mobile app development.' } },
      { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Shopify Development', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'Custom Shopify themes, apps, and headless storefronts.' } },
      { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'SaaS Development', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'End-to-end SaaS product development with multi-tenant architecture.' } },
      { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'AI Integration', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'AI chatbots, agents, and automation using OpenAI, Claude, and Gemini APIs.' } },
      { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'UI/UX Design', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'Research-driven design systems, wireframes, and prototypes.' } },
      { '@type': 'ListItem', position: 7, item: { '@type': 'Service', name: 'Firebase Integration', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'Firestore, Auth, Cloud Functions, and Firebase hosting setup.' } },
      { '@type': 'ListItem', position: 8, item: { '@type': 'Service', name: 'E-commerce Development', provider: { '@type': 'Organization', name: 'Faxio Tech' }, areaServed: 'Worldwide', description: 'Feature-rich e-commerce platforms with Stripe/PayPal checkout.' } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900
                           leading-tight mt-4 mb-6">
              Services Built for{' '}
              <span className="gradient-text">Product Teams</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're not a generalist agency. Every service we offer is backed by deep specialization
              and a track record of production results.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Globe;
              const colors = colorMap[service.color] || colorMap.blue;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="card p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center
                                     justify-center shrink-0`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI & Automation Services */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                          bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
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
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20
                             text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-Powered Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-3 mb-4">
              AI Agents, MCP &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automation
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From MCP servers and autonomous agents to full business automation — we build
              AI-powered systems that plug into your stack and run without you lifting a finger.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-white/5 bg-white/3
                             p-6 hover:-translate-y-1.5 transition-all duration-300
                             hover:border-white/10 hover:bg-white/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    {service.badge && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full
                        ${service.badge === 'New'
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-white font-display mb-2 text-sm leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-4">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mt-3">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              A clear, repeatable process that delivers predictably — every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step}
                   className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200
                              hover:shadow-md transition-all duration-300">
                <span className="text-5xl font-bold font-display text-blue-100 block mb-3">
                  {step.step}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              One simple rate for everything we build — no tiers, no surprises, no hidden fees.
            </p>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700
                            text-white p-10 shadow-xl shadow-blue-200">
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-3">
                Hourly Rate
              </p>
              <p className="text-7xl font-bold font-display text-white leading-none mb-1">$8</p>
              <p className="text-blue-200 text-lg mb-6">/ hour</p>
              <p className="text-blue-100 text-sm mb-8">
                Every service, every project — web, mobile, AI, automation, design.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700
                           hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl
                           transition-colors duration-200"
              >
                Start Your Project →
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need a fixed-price quote?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">
                Let's talk →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
