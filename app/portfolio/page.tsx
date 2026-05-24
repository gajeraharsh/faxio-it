import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/data/portfolio';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Portfolio — SaaS, Mobile Apps, Shopify & Web Projects',
  description:
    'Explore real projects built by Faxio Tech — SaaS platforms, headless Shopify e-commerce stores, React Native mobile apps, analytics dashboards, and AI-powered web applications.',
  keywords: [
    'software development portfolio India',
    'web app portfolio',
    'SaaS project examples',
    'Shopify development portfolio',
    'React Native app portfolio',
    'mobile app projects India',
    'Next.js project examples',
    'Faxio Tech projects',
    'software agency work Ahmedabad',
    'web development case studies India',
  ],
  alternates: { canonical: 'https://faxio.in/portfolio' },
  openGraph: {
    title: 'Portfolio — SaaS, Mobile Apps, Shopify & Web Projects | Faxio Tech',
    description:
      'Real projects: SaaS platforms, Shopify stores, React Native apps, dashboards, and AI-powered solutions built by Faxio Tech.',
    url: 'https://faxio.in/portfolio',
    images: [{ url: 'https://faxio.in/og-image.svg', width: 1200, height: 630, alt: 'Faxio Tech Portfolio' }],
  },
};

const accentMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-700',
  green: 'from-green-500 to-emerald-700',
  purple: 'from-purple-500 to-purple-700',
  orange: 'from-orange-500 to-orange-700',
  teal: 'from-teal-500 to-teal-700',
  indigo: 'from-indigo-500 to-indigo-700',
};

const categories = ['All', 'SaaS', 'E-commerce', 'Mobile', 'HealthTech', 'EdTech'];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4">Our Work</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900
                           leading-tight mt-4 mb-6">
              Products That <span className="gradient-text">Move Numbers</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A selection of the projects we've shipped. Each one came with real constraints,
              real users, and a real deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs — static since we're doing SSG */}
      <section className="pb-20 bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border cursor-default
                             ${cat === 'All'
                               ? 'bg-blue-600 text-white border-blue-600'
                               : 'bg-white text-gray-600 border-gray-200'}`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group card overflow-hidden hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Hero image */}
                <div className={`h-52 bg-gradient-to-br ${accentMap[project.accentColor] || accentMap.blue}
                                 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <p className="text-2xl font-bold font-display">{project.title}</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-lg font-bold font-display text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1
                                   rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
