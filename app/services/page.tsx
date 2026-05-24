import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, Smartphone, ShoppingBag, Cloud, Palette, Zap, Flame, Store, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/data/services';
import ContactCTA from '@/components/home/ContactCTA';

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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We work on project-based fixed-fee engagements and monthly retainers.
              No surprise billing, no scope creep without your approval.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { name: 'MVP Build', price: 'From $15K', desc: 'Validate your idea with a production-ready MVP in 6–8 weeks.' },
                { name: 'Full Product', price: 'From $40K', desc: 'End-to-end product build from design to deployment.', highlight: true },
                { name: 'Monthly Retainer', price: 'From $8K/mo', desc: 'Dedicated team hours for ongoing development and iteration.' },
              ].map((tier) => (
                <div key={tier.name}
                     className={`rounded-2xl p-6 text-center border transition-all duration-300
                                 ${tier.highlight
                                   ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                                   : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'}`}>
                  <p className={`text-sm font-medium mb-2 ${tier.highlight ? 'text-blue-200' : 'text-gray-500'}`}>
                    {tier.name}
                  </p>
                  <p className={`text-2xl font-bold font-display mb-3 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </p>
                  <p className={`text-sm ${tier.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Every project starts with a free 30-minute scoping call.{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">
                Book yours now →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
