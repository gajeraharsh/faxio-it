import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BASE_URL = 'https://faxio.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Faxio Tech — Web & Mobile App Development Agency in India',
    template: '%s | Faxio Tech',
  },
  description:
    'Faxio Tech is a software development agency in Ahmedabad, India specialising in Next.js, React, React Native, Shopify, SaaS, Firebase, and AI integration. We build fast, scalable, production-ready digital products.',
  keywords: [
    // Core service keywords
    'web development agency India',
    'software development company Ahmedabad',
    'Next.js development agency',
    'React development company India',
    'mobile app development India',
    'React Native app development',
    'Shopify development agency India',
    'SaaS development company',
    'Firebase development',
    'UI UX design agency India',
    // AI keywords
    'AI chatbot development',
    'AI integration for web apps',
    'OpenAI API integration',
    'AI SaaS development',
    'business automation AI',
    // Long-tail
    'hire Next.js developer India',
    'custom web app development Ahmedabad Gujarat',
    'Shopify custom theme development',
    'full stack developer India',
    'software agency Gujarat',
    'web development company Gujarat',
    'app development company Ahmedabad',
    'freelance web developer India',
    'MVP development agency',
    'startup software development India',
  ],
  authors: [{ name: 'Harsh Gajera', url: BASE_URL }],
  creator: 'Faxio Tech',
  publisher: 'Faxio Tech',
  category: 'Technology',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Faxio Tech',
    title: 'Faxio Tech — Web & Mobile App Development Agency in India',
    description:
      'We build fast, scalable web apps, mobile apps, Shopify stores, SaaS platforms, and AI-powered solutions. Based in Ahmedabad, India — serving clients globally.',
    images: [
      {
        url: `${BASE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Faxio Tech — Web & Mobile App Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faxio Tech — Web & Mobile App Development Agency in India',
    description:
      'We build fast, scalable web apps, mobile apps, Shopify stores, SaaS platforms, and AI-powered solutions.',
    creator: '@faxiotech',
    images: [`${BASE_URL}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-token',  // Replace with real token from Search Console
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Faxio Tech',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.svg`,
    width: 172,
    height: 44,
  },
  image: `${BASE_URL}/og-image.svg`,
  description:
    'Faxio Tech is a software development agency in Ahmedabad, India specialising in Next.js, React, React Native, Shopify, SaaS, Firebase, and AI integration.',
  email: 'hello@faxio.in',
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    name: 'Harsh Gajera',
    jobTitle: 'Founder & Full-Stack Developer',
    url: `${BASE_URL}/about`,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Thakkar Ba Nagar',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380001',
    addressCountry: 'IN',
  },
  areaServed: ['Worldwide'],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '1-10' },
  sameAs: [
    'https://github.com/faxiotech',
    'https://linkedin.com/company/faxiotech',
    'https://twitter.com/faxiotech',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Faxio Tech',
  description: 'Web & Mobile App Development Agency in India',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-mark.svg" type="image/svg+xml" />
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
