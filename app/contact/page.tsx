import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — Hire a Web & App Developer in Ahmedabad, India',
  description:
    'Contact Faxio Tech to discuss your web app, mobile app, Shopify store, SaaS product, or AI integration project. Email hello@faxio.in — based in Ahmedabad, Gujarat, India. Fast response guaranteed.',
  keywords: [
    'contact web developer India',
    'hire web developer Ahmedabad',
    'software development inquiry India',
    'Next.js developer for hire',
    'React developer Ahmedabad',
    'Shopify developer India contact',
    'SaaS developer India',
    'AI developer for hire India',
    'software agency contact Ahmedabad Gujarat',
    'get web app quote India',
  ],
  alternates: { canonical: 'https://faxio.in/contact' },
  openGraph: {
    title: 'Contact Faxio Tech — Hire a Web & App Developer in India',
    description:
      'Reach out to Faxio Tech for web development, mobile apps, Shopify, SaaS, or AI integration. Ahmedabad, Gujarat, India.',
    url: 'https://faxio.in/contact',
    images: [{ url: 'https://faxio.in/og-image.svg', width: 1200, height: 630, alt: 'Contact Faxio Tech' }],
  },
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://faxio.in/contact/#webpage',
  url: 'https://faxio.in/contact',
  name: 'Contact Faxio Tech',
  description: 'Contact page for Faxio Tech software development agency in Ahmedabad, India.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://faxio.in' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://faxio.in/contact' },
    ],
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Faxio Tech',
    url: 'https://faxio.in',
    email: 'hello@faxio.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thakkar Ba Nagar',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380001',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 23.0225, longitude: 72.5714 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label mb-4">Let's Talk</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900
                           leading-tight mt-4 mb-6">
              Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind or just want to say hello? Reach out — we respond to every
              message personally, usually within a few hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Three contact info cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-12">
              {/* Email */}
              <a
                href="mailto:hello@faxio.in"
                className="group card p-7 text-center hover:-translate-y-1.5 transition-all
                           duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center
                                justify-center mx-auto mb-4 group-hover:bg-blue-600
                                group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Email
                </p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600
                              transition-colors break-all">
                  hello@faxio.in
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+917801959924"
                className="group card p-7 text-center hover:-translate-y-1.5 transition-all
                           duration-300 hover:border-green-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center
                                justify-center mx-auto mb-4 group-hover:bg-green-600
                                group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Phone
                </p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600
                              transition-colors">
                  +91 7801959924
                </p>
              </a>

              {/* Location */}
              <div className="group card p-7 text-center hover:-translate-y-1.5 transition-all
                              duration-300 hover:border-purple-200 hover:shadow-lg">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center
                                justify-center mx-auto mb-4 group-hover:bg-purple-600
                                group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Location
                </p>
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  Thakkar Ba Nagar,<br />Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            {/* CTA banner */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800
                            p-10 text-center text-white relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center
                                mx-auto mb-5">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">
                  Drop Us an Email
                </h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto leading-relaxed">
                  The fastest way to reach us. Tell us about your project and we'll reply within
                  4 business hours.
                </p>
                <a
                  href="mailto:hello@faxio.in"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50
                             font-semibold px-8 py-4 rounded-xl transition-all duration-200
                             shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@faxio.in
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">Follow us on social media</p>
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center
                               text-gray-600 hover:bg-blue-600 hover:text-white transition-all
                               duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
