import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ClientFirst from '@/components/home/ClientFirst';
import TechStack from '@/components/home/TechStack';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Faxio IT — Modern Software Development Agency',
  description:
    'Faxio IT builds fast, scalable web apps, mobile apps, Shopify stores, and SaaS platforms. Next.js, React, Firebase, and TypeScript specialists based in Gujarat, India.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientFirst />
      <TechStack />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
