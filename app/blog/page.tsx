import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data/blogs';

export const metadata: Metadata = {
  title: 'Blog — Next.js, React, Shopify, SaaS & AI Development Insights',
  description:
    'Practical engineering articles from Faxio Tech on Next.js, React, React Native, Shopify development, Firebase, SaaS architecture, and AI integration. No fluff — real insights from production.',
  keywords: [
    'Next.js tutorial blog',
    'React development blog India',
    'Shopify development tips',
    'SaaS development articles',
    'Firebase tutorial',
    'AI web development blog',
    'software engineering blog India',
    'web development insights',
    'React Native tips',
    'TypeScript best practices',
    'Faxio Tech blog',
  ],
  alternates: { canonical: 'https://faxio.in/blog' },
  openGraph: {
    title: 'Blog — Next.js, React, Shopify, SaaS & AI Development Insights | Faxio Tech',
    description:
      'Engineering insights from Faxio Tech on Next.js, Shopify, Firebase, SaaS, and AI development. Practical articles with no fluff.',
    url: 'https://faxio.in/blog',
    type: 'website',
    images: [{ url: 'https://faxio.in/og-image.svg', width: 1200, height: 630, alt: 'Faxio Tech Blog' }],
  },
};

const categoryColors: Record<string, string> = {
  'Web Development': 'bg-blue-50 text-blue-700 border-blue-100',
  'E-commerce': 'bg-green-50 text-green-700 border-green-100',
  'SaaS': 'bg-purple-50 text-purple-700 border-purple-100',
  'AI & Technology': 'bg-orange-50 text-orange-700 border-orange-100',
};

const categoryEmoji: Record<string, string> = {
  'Web Development': '⚡',
  'E-commerce': '🛍️',
  'SaaS': '☁️',
  'AI & Technology': '🤖',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4">The Faxio Tech Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900
                           leading-tight mt-4 mb-6">
              Engineering <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              No fluff. Practical articles from our team on building fast, scalable software products.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="container">
          {/* Featured post */}
          <div className="mb-12">
            <Link href={`/blog/${featured.slug}`} className="group">
              <article className="card overflow-hidden hover:shadow-card-hover transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-gradient-to-br from-blue-50 to-indigo-100
                                  flex items-center justify-center relative overflow-hidden">
                    <span className="text-8xl opacity-30">{categoryEmoji[featured.category] || '📝'}</span>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className={`inline-flex w-fit text-xs font-semibold px-3 py-1 rounded-full
                                      border mb-4 ${categoryColors[featured.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                      {featured.category}
                    </span>
                    <h2 className="text-2xl font-bold font-display text-gray-900 mb-3 leading-snug
                                   group-hover:text-blue-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featured.publishDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featured.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600
                                      flex items-center justify-center text-white text-xs font-bold">
                        {featured.authorAvatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featured.author}</p>
                        <p className="text-xs text-gray-500">{featured.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="card overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100
                                  flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl opacity-25">{categoryEmoji[post.category] || '📝'}</span>
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border
                                        ${categoryColors[post.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-gray-900 font-display mb-2 leading-snug flex-1
                                   group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600
                                        flex items-center justify-center text-white text-xs font-bold">
                          {post.authorAvatar}
                        </div>
                        <span className="text-xs text-gray-600 font-medium">{post.author}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600
                                       group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
