export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  accentColor: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'launchpad-crm',
    title: 'LaunchPad CRM',
    description:
      'A full-featured CRM platform for B2B SaaS startups with pipeline management, email automation, and analytics.',
    longDescription:
      'LaunchPad CRM is a modern customer relationship management platform designed specifically for growth-stage SaaS companies. It features deal pipeline management, automated email sequences, contact enrichment, and a powerful analytics dashboard that gives sales teams real-time visibility into their funnel.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'SaaS',
    image: '/images/project-crm.svg',
    accentColor: 'blue',
  },
  {
    id: 'nova-shop',
    title: 'Nova Shop',
    description:
      'A headless Shopify storefront for a fashion brand with 3D product previews, AR try-on, and blazing-fast performance.',
    longDescription:
      'Nova Shop is a custom headless commerce experience built on Shopify Hydrogen and Next.js Commerce. The project included a fully custom design system, 3D product visualization powered by Three.js, real-time inventory sync, and a sub-1-second LCP score — resulting in a 38% lift in conversion rate.',
    technologies: ['Next.js', 'Shopify', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    category: 'E-commerce',
    image: '/images/project-shop.svg',
    accentColor: 'green',
  },
  {
    id: 'trackwise-mobile',
    title: 'TrackWise Mobile',
    description:
      'A React Native logistics app enabling real-time shipment tracking, driver management, and delivery proof for a freight company.',
    longDescription:
      'TrackWise is a cross-platform mobile application deployed to 200+ fleet drivers across North America. The app integrates live GPS tracking, push notifications for delivery milestones, digital proof of delivery with photo capture, and an offline-first architecture powered by SQLite and background sync.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Node.js', 'Google Maps'],
    category: 'Mobile',
    image: '/images/project-mobile.svg',
    accentColor: 'purple',
  },
  {
    id: 'insightiq-analytics',
    title: 'InsightIQ Analytics',
    description:
      'A multi-tenant SaaS analytics dashboard with real-time data pipelines, custom report builder, and white-label support.',
    longDescription:
      'InsightIQ is a white-label analytics SaaS enabling agencies to deliver branded dashboards to their clients. Built with a multi-tenant Next.js frontend, a GraphQL API layer, and AWS Lambda data pipelines, it processes over 2M events per day and provides sub-second query times via ElasticSearch.',
    technologies: ['Next.js', 'GraphQL', 'AWS', 'MongoDB', 'Tailwind CSS'],
    category: 'SaaS',
    image: '/images/project-analytics.svg',
    accentColor: 'orange',
  },
  {
    id: 'medbook-health',
    title: 'MedBook Health',
    description:
      'A HIPAA-compliant telemedicine platform with video consultations, appointment booking, and EHR integration.',
    longDescription:
      'MedBook Health connects patients with licensed physicians through secure video consultations, real-time chat, and digital prescription management. The platform integrates with major EHR systems, implements HIPAA-compliant data storage on AWS, and uses WebRTC for encrypted video calls — serving 15,000+ monthly active users.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC'],
    category: 'HealthTech',
    image: '/images/project-health.svg',
    accentColor: 'teal',
  },
  {
    id: 'fluentflow-lms',
    title: 'FluentFlow LMS',
    description:
      'A language learning platform with AI-powered lesson generation, spaced repetition, and gamified progress tracking.',
    longDescription:
      'FluentFlow is a modern learning management system for language education companies. It features AI-generated lesson content, adaptive spaced repetition algorithms, streaks and achievements, and a live tutoring marketplace. Built on Next.js with Firebase for real-time features and OpenAI for content generation.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'OpenAI API', 'Stripe'],
    category: 'EdTech',
    image: '/images/project-lms.svg',
    accentColor: 'indigo',
  },
];
