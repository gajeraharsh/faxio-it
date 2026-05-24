import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://faxioit.com'),
  title: {
    default: 'Faxio IT — Modern Software Development Agency',
    template: '%s | Faxio IT',
  },
  description:
    'Faxio IT is a US-based software development agency specializing in Next.js, React, React Native, Shopify, SaaS, Firebase, and UI/UX design. We build fast, scalable, production-ready products.',
  keywords: [
    'web development',
    'mobile app development',
    'Next.js agency',
    'React development',
    'Shopify development',
    'SaaS development',
    'Firebase integration',
    'UI/UX design',
    'software agency',
    'TypeScript',
  ],
  authors: [{ name: 'Faxio IT' }],
  creator: 'Faxio IT',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faxioit.com',
    siteName: 'Faxio IT',
    title: 'Faxio IT — Modern Software Development Agency',
    description:
      'We build fast, scalable web and mobile products using Next.js, React, Shopify, and Firebase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faxio IT — Modern Software Development Agency',
    description:
      'We build fast, scalable web and mobile products using Next.js, React, Shopify, and Firebase.',
    creator: '@faxioit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
