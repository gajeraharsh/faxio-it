export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'CloudVault Inc.',
    quote:
      'Faxio Tech transformed our legacy platform into a modern SaaS product in under 4 months. Their Next.js architecture cut our page load times by 70% and the team communicated every step of the way.',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CTO',
    company: 'NovaTrade',
    quote:
      'The mobile app they built for us handles 50,000+ daily active users without a hiccup. Clean code, excellent TypeScript practices, and they delivered 2 weeks early. Truly world-class team.',
    rating: 5,
    avatar: 'DC',
  },
  {
    id: '3',
    name: 'Olivia Reynolds',
    role: 'Founder',
    company: 'Luminary Boutique',
    quote:
      "Our Shopify conversion rate jumped 38% after Faxio Tech rebuilt our storefront. The headless architecture they chose was exactly what we needed for the performance gains we'd been chasing for years.",
    rating: 5,
    avatar: 'OR',
  },
  {
    id: '4',
    name: 'James Okafor',
    role: 'Product Manager',
    company: 'HealthFirst',
    quote:
      'Working with Faxio Tech on our HIPAA-compliant platform gave us confidence at every level — architecture, security, and execution. They think like product engineers, not just coders.',
    rating: 5,
    avatar: 'JO',
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Director of Engineering',
    company: 'ScaleOps',
    quote:
      'Faxio Tech built our GraphQL API layer and analytics dashboard in 6 weeks. The code quality was exceptional — our internal engineers were impressed with the structure and test coverage they left behind.',
    rating: 5,
    avatar: 'PS',
  },
];
