import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import ServicesOverview from '@/components/home/ServicesOverview';
import AIServices from '@/components/home/AIServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ClientFirst from '@/components/home/ClientFirst';
import TechStack from '@/components/home/TechStack';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Faxio Tech — Web & Mobile App Development Agency in India',
  description:
    'Faxio Tech is a software development agency in Ahmedabad, India. We build fast, scalable web apps, mobile apps, Shopify stores, SaaS platforms, and AI-powered solutions using Next.js, React, React Native, and Firebase.',
  keywords: [
    'web development agency India',
    'software development company Ahmedabad',
    'Next.js development company',
    'React development agency India',
    'mobile app development Ahmedabad',
    'Shopify development India',
    'SaaS development agency',
    'AI web app development',
    'Firebase development India',
    'full stack developer Ahmedabad Gujarat',
    'hire web developer India',
    'startup app development India',
  ],
  alternates: { canonical: 'https://faxio.in' },
  openGraph: {
    title: 'Faxio Tech — Web & Mobile App Development Agency in India',
    description:
      'We build fast, scalable web apps, mobile apps, Shopify stores, SaaS platforms, and AI-powered solutions. Ahmedabad, India — serving clients globally.',
    url: 'https://faxio.in',
    images: [{ url: 'https://faxio.in/og-image.svg', width: 1200, height: 630, alt: 'Faxio Tech' }],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://faxio.in/#localbusiness',
  name: 'Faxio Tech',
  image: 'https://faxio.in/og-image.svg',
  url: 'https://faxio.in',
  telephone: '+91-XXXXXXXXXX',
  email: 'hello@faxio.in',
  priceRange: '$$',
  description:
    'Software development agency in Ahmedabad, India specialising in web apps, mobile apps, Shopify, SaaS, and AI integration.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Thakkar Ba Nagar',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <AIServices />
      <WhyChooseUs />
      <ClientFirst />
      <TechStack />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
