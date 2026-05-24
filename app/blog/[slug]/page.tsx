import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/data/blogs';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };

  const postUrl = `https://faxio.in/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'Faxio Tech blog',
      'software development article India',
      'web development tips',
      'Next.js tutorial',
      post.category,
    ],
    authors: [{ name: post.author }],
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
      siteName: 'Faxio Tech',
      images: [
        {
          url: 'https://faxio.in/og-image.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@faxiotech',
      images: ['https://faxio.in/og-image.svg'],
    },
  };
}

const categoryColors: Record<string, string> = {
  'Web Development': 'bg-blue-50 text-blue-700 border-blue-100',
  'E-commerce': 'bg-green-50 text-green-700 border-green-100',
  'SaaS': 'bg-purple-50 text-purple-700 border-purple-100',
  'AI & Technology': 'bg-orange-50 text-orange-700 border-orange-100',
};

const avatarGradients = [
  'from-blue-400 to-blue-600',
  'from-green-400 to-green-600',
  'from-purple-400 to-purple-600',
  'from-orange-400 to-orange-600',
  'from-pink-400 to-pink-600',
];

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const postIndex = blogPosts.indexOf(post);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const avatarGradient = avatarGradients[postIndex % avatarGradients.length];

  // Simple markdown-like rendering (convert ## headers, **bold**, `code`, etc.)
  function renderContent(content: string) {
    return content.trim();
  }

  const postUrl = `https://faxio.in/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}/#article`,
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: { '@type': 'Organization', name: 'Faxio Tech', url: 'https://faxio.in' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Faxio Tech',
      url: 'https://faxio.in',
      logo: { '@type': 'ImageObject', url: 'https://faxio.in/logo.svg' },
    },
    image: { '@type': 'ImageObject', url: 'https://faxio.in/og-image.svg', width: 1200, height: 630 },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'Blog', name: 'Faxio Tech Blog', url: 'https://faxio.in/blog' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://faxio.in' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://faxio.in/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900
                         transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-5">
              <span className={`inline-flex text-xs font-semibold px-3 py-1.5 rounded-full border
                                ${categoryColors[post.category] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900
                           leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradient}
                                 flex items-center justify-center text-white text-sm font-bold`}>
                  {post.authorAvatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Featured image placeholder */}
            <div className="h-64 sm:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl
                            mb-10 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <span className="text-7xl opacity-20 block mb-2">
                  {post.category === 'Web Development' ? '⚡' :
                   post.category === 'E-commerce' ? '🛍️' :
                   post.category === 'SaaS' ? '☁️' : '🤖'}
                </span>
                <p className="text-gray-400 text-sm">Featured Image</p>
              </div>
            </div>

            {/* Prose content */}
            <article className="prose max-w-none">
              {post.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (trimmed.startsWith('## ')) {
                  return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
                }
                if (trimmed.startsWith('### ')) {
                  return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('```')) {
                  return null; // code blocks handled by surrounding lines
                }
                if (trimmed === '') return <br key={i} />;
                // Inline formatting
                const formatted = trimmed
                  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
                return (
                  <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />
                );
              })}
            </article>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag) => (
                <span key={tag}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full
                                 hover:bg-blue-50 hover:text-blue-700 cursor-default transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarGradient}
                                 flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                  {post.authorAvatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-blue-600 text-sm font-medium mb-2">{post.authorRole}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Member of the Faxio Tech engineering team. Writes about modern web development,
                    architecture, and building software products that scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`}
                      className="card p-5 hover:-translate-y-1 transition-all duration-300 group">
                  <p className="text-xs text-gray-500 mb-1.5 flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous Article
                  </p>
                  <p className="font-semibold text-gray-900 text-sm leading-snug
                                group-hover:text-blue-600 transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`}
                      className="card p-5 hover:-translate-y-1 transition-all duration-300 group sm:text-right">
                  <p className="text-xs text-gray-500 mb-1.5 flex items-center gap-1 sm:justify-end">
                    Next Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                  <p className="font-semibold text-gray-900 text-sm leading-snug
                                group-hover:text-blue-600 transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`}
                      className="group card overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="h-36 bg-gradient-to-br from-gray-50 to-gray-100
                                  flex items-center justify-center overflow-hidden">
                    <span className="text-5xl opacity-25">
                      {related.category === 'Web Development' ? '⚡' :
                       related.category === 'E-commerce' ? '🛍️' :
                       related.category === 'SaaS' ? '☁️' : '🤖'}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {related.readTime}
                    </p>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug
                                   group-hover:text-blue-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
