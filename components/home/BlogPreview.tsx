'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/data/blogs';
import SectionHeader from '@/components/ui/SectionHeader';

const categoryColors: Record<string, string> = {
  'Web Development': 'bg-blue-50 text-blue-700',
  'E-commerce': 'bg-green-50 text-green-700',
  'SaaS': 'bg-purple-50 text-purple-700',
  'AI & Technology': 'bg-orange-50 text-orange-700',
};

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          label="From the Blog"
          title="Insights & "
          highlight="Expertise"
          description="Practical articles from our engineering team on modern web development, tools, and architecture."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100
                                flex items-center justify-center">
                  <span className="text-6xl opacity-20">
                    {post.category === 'Web Development' ? '⚡' :
                     post.category === 'E-commerce' ? '🛍️' :
                     post.category === 'SaaS' ? '☁️' : '🤖'}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full
                                    ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 font-display mb-2 leading-snug
                               group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600
                             hover:text-blue-700 transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/blog" className="btn-secondary">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
