import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Award, Globe, TrendingUp } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Faxio IT — who we are, what drives us, and how we help startups and growing companies build better software products.',
};

const founder = {
  name: 'Harsh Gajera',
  role: 'Founder & Full-Stack Developer',
  bio: 'Passionate full-stack developer with 4+ years of experience building web and mobile products. Specializes in Next.js, React, React Native, Firebase, and Shopify. Founder of Faxio IT, helping startups and businesses bring their ideas to life.',
  avatar: 'HG',
  gradient: 'from-blue-500 to-indigo-600',
};

const milestones = [
  { year: '2022', event: 'Faxio IT founded in Ahmedabad, Gujarat by Harsh Gajera' },
  { year: '2023', event: 'Delivered first 2 client projects. Expanded into mobile app development with React Native' },
  { year: '2024', event: 'Launched Shopify & SaaS service offerings. Grew to 5 happy clients' },
  { year: '2025', event: 'Added Firebase integration and AI-powered features to the service stack' },
  { year: '2026', event: 'Serving clients across multiple industries. 100% client satisfaction maintained' },
];

const numbers = [
  { icon: Users, value: '5+', label: 'Happy Clients', color: 'bg-blue-100 text-blue-600' },
  { icon: Award, value: '5+', label: 'Projects Shipped', color: 'bg-green-100 text-green-600' },
  { icon: Globe, value: '4+', label: 'Years Experience', color: 'bg-purple-100 text-purple-600' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', color: 'bg-orange-100 text-orange-600' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4">About Faxio IT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900
                           leading-tight mt-4 mb-6">
              Small Team. <span className="gradient-text">Big Execution.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a boutique software agency that builds products like it's our own startup on
              the line — because usually, it is.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {numbers.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="card p-6 text-center">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold gradient-text font-display mb-1">{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mt-3 mb-6">
                Born from Frustration. Built on Excellence.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Faxio IT was founded in 2022 by Harsh Gajera — a developer who got tired of
                  watching clients struggle with agencies that over-promised and under-delivered.
                  The goal was simple: build software with the same care and urgency you'd bring
                  to your own product.
                </p>
                <p>
                  Starting from Ahmedabad, Gujarat, Faxio IT grew from a solo venture to a
                  focused practice serving clients across web, mobile, e-commerce, and SaaS.
                  The hypothesis — that quality and speed aren't mutually exclusive — has been
                  proven right on every project since.
                </p>
                <p>
                  Today, Faxio IT delivers production-grade web apps, React Native mobile apps,
                  Shopify storefronts, and Firebase-powered SaaS products. Every engagement gets
                  the same intensity as the first — because reputation is built one project at a time.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-5 relative">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center
                                    shrink-0 text-white text-xs font-bold shadow-sm relative z-10">
                      {m.year.slice(2)}
                    </div>
                    <div className="pt-2 pb-4">
                      <span className="text-xs font-semibold text-blue-600 mb-1 block">{m.year}</span>
                      <p className="text-sm text-gray-700">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-4">The Founder</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mt-3">
              Meet the <span className="gradient-text">Founder</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${founder.gradient}
                               flex items-center justify-center text-white text-2xl font-bold
                               mx-auto mb-5 shadow-md`}>
                {founder.avatar}
              </div>
              <h3 className="font-bold text-gray-900 font-display text-xl">{founder.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{founder.bio}</p>
              <a
                href="mailto:gajeraharsh283@gmail.com"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-600
                           hover:text-blue-700 transition-colors"
              >
                gajeraharsh283@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-label mb-4">What We Believe</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mt-3">
                Our <span className="gradient-text">Principles</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: 'Ship Working Software, Not Promises',
                  body: "We demo running code at every stage. No slideshows, no 'almost done.' Real software, real progress.",
                },
                {
                  num: '02',
                  title: 'Code is a Long-Term Asset',
                  body: "Every function we write, we write as if we'll be reading it in three years. Because someone will.",
                },
                {
                  num: '03',
                  title: 'Clients Are Partners, Not Ticket Systems',
                  body: "We push back when we disagree and explain our reasoning. Yes-men build bad products.",
                },
                {
                  num: '04',
                  title: 'Performance is a Feature',
                  body: "Users don't separate your app from its load time. Neither do we.",
                },
              ].map((principle) => (
                <div key={principle.num}
                     className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-200
                                hover:bg-blue-50/30 transition-all duration-300">
                  <span className="text-3xl font-bold font-display text-blue-100 shrink-0 w-12">
                    {principle.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{principle.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{principle.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
