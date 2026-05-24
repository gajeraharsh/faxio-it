export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'We build blazing-fast, scalable web applications using the latest frameworks like Next.js, React, and Node.js — engineered for performance and SEO.',
    icon: 'Globe',
    features: [
      'Next.js & React SPAs',
      'Server-Side Rendering',
      'Performance Optimization',
      'SEO-First Architecture',
    ],
    color: 'blue',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps built with React Native that deliver native-quality experiences on both iOS and Android from a single codebase.',
    icon: 'Smartphone',
    features: [
      'React Native Cross-Platform',
      'iOS & Android Deployment',
      'Push Notifications',
      'Offline-First Design',
    ],
    color: 'indigo',
  },
  {
    id: 'shopify-development',
    title: 'Shopify Development',
    description:
      'Custom Shopify themes, apps, and headless storefronts that convert visitors into customers and scale with your brand.',
    icon: 'ShoppingBag',
    features: [
      'Custom Theme Development',
      'Shopify App Development',
      'Headless Commerce',
      'Payment Integration',
    ],
    color: 'green',
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    description:
      'End-to-end SaaS product development — from MVP to enterprise scale — with multi-tenant architecture, billing, and analytics baked in.',
    icon: 'Cloud',
    features: [
      'Multi-tenant Architecture',
      'Subscription Billing',
      'Analytics Dashboard',
      'Role-Based Access',
    ],
    color: 'purple',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Research-driven design systems and interfaces that users love — from wireframes and prototypes to polished pixel-perfect handoffs.',
    icon: 'Palette',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Design Systems',
      'Figma & Framer',
    ],
    color: 'pink',
  },
  {
    id: 'api-development',
    title: 'API Development',
    description:
      'Robust RESTful and GraphQL APIs with OpenAPI documentation, rate limiting, authentication, and the scalability your integrations demand.',
    icon: 'Zap',
    features: [
      'RESTful & GraphQL APIs',
      'JWT Authentication',
      'Rate Limiting & Caching',
      'OpenAPI Documentation',
    ],
    color: 'yellow',
  },
  {
    id: 'firebase-integration',
    title: 'Firebase Integration',
    description:
      'Full Firebase setup including Firestore, Auth, Cloud Functions, Storage, and real-time capabilities — shipped fast without ops overhead.',
    icon: 'Flame',
    features: [
      'Firestore & Realtime DB',
      'Firebase Authentication',
      'Cloud Functions',
      'Firebase Hosting & Storage',
    ],
    color: 'orange',
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description:
      'Feature-rich e-commerce platforms built for conversion — with product management, cart, checkout, and third-party logistics integrations.',
    icon: 'Store',
    features: [
      'Product & Inventory Mgmt',
      'Stripe / PayPal Checkout',
      'Order Management System',
      'SEO & Performance',
    ],
    color: 'teal',
  },
];
