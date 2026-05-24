export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-nextjs-is-best-for-modern-web-development',
    title: 'Why Next.js Is the Best Choice for Modern Web Development in 2026',
    excerpt:
      'Next.js has cemented itself as the gold standard for production web apps. We break down exactly why — from the App Router to Server Components and beyond.',
    author: 'Alex Carter',
    authorRole: 'Lead Frontend Engineer',
    authorAvatar: 'AC',
    publishDate: 'May 10, 2026',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Performance', 'SEO'],
    featured: true,
    image: '/images/blog-nextjs.svg',
    content: `
## Introduction

When React first emerged in 2013, it changed how developers thought about building UIs. But React alone is a library — not a framework. It doesn't tell you how to handle routing, data fetching, or server rendering. That's where **Next.js** steps in, and in 2026 it has become the undisputed framework of choice for production web development.

Whether you're building a marketing site, a complex SaaS dashboard, or a high-traffic e-commerce store, Next.js provides the architecture and tooling to ship fast and scale confidently.

## 1. The App Router: A Paradigm Shift

Introduced in Next.js 13 and fully stable in 14+, the **App Router** fundamentally changed how you structure Next.js applications. Based on React Server Components (RSC), it lets you co-locate your UI, data fetching, and server logic in a single file — without sacrificing the rich interactivity of client components.

\`\`\`tsx
// app/dashboard/page.tsx
async function DashboardPage() {
  // This runs on the server — no useEffect, no loading state
  const data = await fetchDashboardData();
  return <Dashboard data={data} />;
}
\`\`\`

The result: dramatically smaller JavaScript bundles, faster initial page loads, and better Core Web Vitals scores — all without sacrificing developer experience.

## 2. Server Components and the End of Over-Fetching

React Server Components (RSC) allow you to render components on the server and stream them to the client. This means:

- **Zero client-side JS** for components that don't need interactivity
- **Direct database access** inside components without an API round trip
- **Better security** — secrets and database connections never reach the browser

For data-heavy dashboards and content sites, this is transformative. A page that previously required three API calls and a loading spinner can now render fully on the server in a single request.

## 3. Hybrid Rendering: The Best of All Worlds

Next.js supports multiple rendering strategies out of the box:

| Strategy | When to Use |
|----------|-------------|
| **Static (SSG)** | Marketing pages, blogs, documentation |
| **Server-Side (SSR)** | Personalized pages, authenticated views |
| **Incremental Static Regeneration (ISR)** | High-traffic pages with infrequent updates |
| **Streaming** | Large pages with async data |

No other framework makes it this easy to mix rendering strategies at the page or even component level.

## 4. Built-in Performance Wins

Next.js ships with performance baked in:

- **\`next/image\`**: Automatic WebP conversion, lazy loading, and correct sizing
- **\`next/font\`**: Zero-layout-shift font loading with automatic self-hosting
- **\`next/script\`**: Controlled third-party script loading strategies
- **Route prefetching**: Links are prefetched when they enter the viewport

These features alone can take a web.dev performance score from 60 to 95+ without manual optimization.

## 5. The Vercel Ecosystem and Edge Deployment

While Next.js is framework-agnostic and runs on any Node.js host, the Vercel platform was purpose-built for it. Features like Edge Middleware, Edge Functions, and global CDN distribution make deploying a Next.js app trivially simple and globally fast.

In 2026, Edge rendering — running your SSR code in data centers closest to your users — is mainstream, and Next.js supports it natively.

## 6. TypeScript and DX

Next.js has first-class TypeScript support. The App Router is typed end-to-end, including route parameters, search params, and metadata. The Next.js team continuously improves type inference to catch errors at build time rather than runtime.

## 7. SEO: Still the Gold Standard

With Server Components rendering full HTML before the browser receives it, Next.js gives you perfect SEO out of the box. The new \`generateMetadata\` API lets you produce dynamic, per-page meta tags, Open Graph images, and structured data — all server-rendered.

\`\`\`tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.ogImage] },
  };
}
\`\`\`

## Conclusion

Next.js in 2026 isn't just a good framework — it's a complete platform for web development. Its hybrid rendering model, Server Components, performance tooling, and world-class DX make it the right choice for virtually every production web application. If you're starting a new project, the question isn't *whether* to use Next.js — it's how to make the most of it.

At **Faxio Tech**, every web project we ship is built on Next.js. [Get in touch](/contact) to see how we can help you build something fast, scalable, and beautiful.
    `,
  },
  {
    id: '2',
    slug: 'benefits-of-shopify-custom-app-development',
    title: 'The Real Benefits of Shopify Custom App Development for Growing Brands',
    excerpt:
      'Off-the-shelf Shopify apps work — until they don\'t. Here\'s why custom Shopify app development is the smartest investment a scaling e-commerce brand can make.',
    author: 'Jordan Blake',
    authorRole: 'E-commerce Architect',
    authorAvatar: 'JB',
    publishDate: 'April 28, 2026',
    readTime: '7 min read',
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Custom Apps', 'Commerce'],
    featured: false,
    image: '/images/blog-shopify.svg',
    content: `
## Introduction

Shopify's app ecosystem is impressive — over 10,000 apps cover everything from email marketing to inventory management. For a brand just starting out, third-party apps are a godsend. But as your store scales past $1M in annual revenue, the cracks in that approach begin to show.

Custom Shopify app development is where serious brands draw the line between good and great commerce experiences.

## The Limits of Off-the-Shelf Apps

Third-party Shopify apps share a common set of problems at scale:

**1. Performance Overhead**
Each installed app injects its own JavaScript, API calls, and Liquid snippets into your storefront. A store with 12 apps might be loading 400KB of third-party scripts — directly hurting your Core Web Vitals and conversion rate.

**2. Feature Gaps**
Generic apps are built for the average merchant. Your business logic — custom pricing tiers, complex subscription models, B2B account management — is never "average." You'll spend hours forcing a round peg into a square hole.

**3. Data Silo Problems**
Third-party apps store data in their own silos. Correlating customer behavior across three different apps requires painful manual exports or expensive middleware.

**4. Unpredictable Costs**
App subscription fees compound. A store with 15 apps might be paying $2,000+/month before writing a single line of custom code.

## What Custom Shopify Apps Unlock

### Tailored Business Logic
A custom app built for your store understands your catalog, your customers, and your workflows. Need a dynamic pricing engine that adjusts based on customer tier, purchase history, and inventory levels? That's a custom app.

### Native Shopify Integration
Custom apps built on the Shopify Admin API and Storefront API have access to the full depth of Shopify's data model — metaobjects, metafields, markets, B2B companies, and more — without the limitations imposed by third-party app sandboxes.

### Performance-First Architecture
A custom app ships exactly the JavaScript your storefront needs. Combined with Shopify Hydrogen (the headless React framework), you can achieve near-perfect Lighthouse scores even on complex storefronts.

### Shopify Functions
Shopify Functions is one of the most powerful features available to custom app developers. It lets you run custom logic directly inside Shopify's infrastructure — for discounts, payment customizations, shipping rules, and order routing — with sub-millisecond latency.

\`\`\`javascript
// Example: Custom discount function logic
export function run(input) {
  const vipCustomer = input.cart.buyerIdentity?.customer?.tags?.includes('VIP');
  if (!vipCustomer) return { discountApplicationStrategy: 'FIRST', discounts: [] };

  return {
    discounts: [{ value: { percentage: { value: '15.0' } }, targets: [{ orderSubtotal: {} }] }],
    discountApplicationStrategy: 'FIRST',
  };
}
\`\`\`

### Custom Admin Experiences
Shopify's App Bridge lets you embed custom UI directly into the Shopify Admin. Your team gets purpose-built tools — bulk order editors, custom reporting, branded communication workflows — without leaving the platform they already know.

## When to Invest in Custom App Development

Here are the clear signals that it's time:

- Your store generates $500K+ annually and app fees are climbing
- You've hit feature limits in 2+ apps for the same workflow
- Your merchandising or fulfillment logic is too complex for generic tools
- You're building B2B commerce with custom pricing and account management
- You want headless performance with full Shopify data access

## The ROI Case

A mid-sized fashion brand we worked with was paying $1,800/month in app subscriptions. After replacing five of those apps with a single custom Shopify app, their monthly tool cost dropped to $200, their storefront's Largest Contentful Paint improved from 4.2s to 1.1s, and conversion rate increased by 22%.

The development investment paid back in under four months.

## Conclusion

Custom Shopify app development isn't just for enterprise merchants. For any growing brand that's hitting the ceiling of what off-the-shelf tools can deliver, it's the highest-ROI tech investment you can make.

At **Faxio Tech**, we specialize in Shopify app development using the full stack — Remix, React, Shopify Functions, and the Admin API. [Talk to our team](/contact) about what's possible for your store.
    `,
  },
  {
    id: '3',
    slug: 'react-vs-nextjs-2026',
    title: 'React vs Next.js in 2026: Which One Should You Actually Use?',
    excerpt:
      'The React vs Next.js debate has evolved significantly. With Server Components now mainstream, here\'s the honest breakdown of when to use each in 2026.',
    author: 'Alex Carter',
    authorRole: 'Lead Frontend Engineer',
    authorAvatar: 'AC',
    publishDate: 'April 14, 2026',
    readTime: '6 min read',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Frontend', 'Architecture'],
    featured: false,
    image: '/images/blog-react.svg',
    content: `
## Introduction

The question "React or Next.js?" is a bit of a trick question — Next.js *is* React. But the real question most developers are asking is: should I use bare React (via Vite, Create React App, or another bundler) or should I use the Next.js framework?

In 2026, with Server Components stable and the App Router mature, the answer has become much clearer. Let's walk through it honestly.

## Understanding the Relationship

React is a UI library. It handles components, state, and rendering. It makes no decisions about routing, data fetching, bundling, or deployment.

Next.js is a framework built on React. It adds:
- **File-based routing** (App Router or Pages Router)
- **Server-side rendering** and React Server Components
- **Built-in optimizations** (image, font, scripts)
- **API routes** (serverless functions)
- **Middleware** (Edge runtime logic)

Choosing "bare React" means you're choosing to configure all of that yourself — or leave it unconfigured.

## When Bare React Still Makes Sense

There are legitimate cases for using React without Next.js in 2026:

### 1. Internal Tools and Admin Panels
If your app lives behind authentication, won't be crawled by search engines, and performance isn't a top concern, a Vite + React SPA is fast to set up and easy to deploy anywhere.

### 2. Embedded Widgets
If you're building a React component that will be injected into third-party sites (chatbots, review widgets, embedded apps), you want a standalone React bundle — not a Next.js app.

### 3. Native Shell Apps (Electron / Capacitor)
React Native covers mobile, but for Electron desktop apps or Capacitor hybrid apps, bare React with Vite is often cleaner than fighting Next.js's server-centric assumptions.

### 4. Highly Custom Webpack Configurations
Some enterprise apps have unusual build requirements that conflict with Next.js's opinionated build pipeline. Raw Vite or Webpack gives you full control.

## When Next.js Is the Clear Winner

For the vast majority of web projects, Next.js wins — and in 2026 it's not close:

### Public-Facing Websites
Any site that needs SEO needs server rendering. Period. Next.js's App Router makes this trivial with React Server Components. A bare React SPA renders blank HTML to crawlers.

### E-commerce
Fast Time to First Byte (TTFB), rich metadata, and structured data are table stakes for commerce. Next.js plus Shopify or a headless platform is the standard stack.

### SaaS Dashboards with Public Marketing Pages
Most SaaS products have both a public marketing site and an authenticated dashboard. Next.js handles both under one roof — server-rendered for marketing, client-heavy for the app — with zero configuration.

### Anything Performance-Sensitive
Next.js's \`next/image\`, \`next/font\`, and built-in code splitting are worth the framework overhead for any site where a 1-second latency improvement translates to business impact.

## The Server Components Consideration

In 2026, the biggest architectural consideration is Server Components. React Server Components (RSC) are now the default in Next.js App Router. They let you:

- Query your database directly inside a component
- Ship zero JavaScript for components that don't need interactivity
- Stream large pages progressively

Here's what that looks like:

\`\`\`tsx
// Server Component — runs on server, zero client JS
async function ProductList({ category }: { category: string }) {
  const products = await db.product.findMany({ where: { category } });
  return (
    <ul>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </ul>
  );
}

// Client Component — only where interactivity is needed
'use client';
function AddToCartButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  // ...
}
\`\`\`

Bare React cannot use Server Components — they're a Next.js (and framework) feature. This is a significant advantage in 2026.

## The Verdict

| Use Case | Recommendation |
|----------|---------------|
| Public website / blog | **Next.js** |
| E-commerce storefront | **Next.js** |
| SaaS product | **Next.js** |
| Internal admin panel | React + Vite |
| Embedded widget | React + Vite |
| Electron app | React + Vite |

If you're starting a new project today and it has a public-facing URL, use Next.js. The framework overhead is minimal, the performance benefits are immediate, and the DX has never been better.

Reach out to the team at **Faxio Tech** if you'd like guidance on which architecture makes sense for your specific use case.
    `,
  },
  {
    id: '4',
    slug: 'how-firebase-speeds-up-saas-development',
    title: 'How Firebase Speeds Up SaaS Development Without Sacrificing Scalability',
    excerpt:
      'Firebase has a reputation as a "toy" backend. In 2026, that reputation is outdated. Here\'s how we use Firebase to ship production SaaS products fast — and keep them running at scale.',
    author: 'Morgan Lee',
    authorRole: 'Backend Architect',
    authorAvatar: 'ML',
    publishDate: 'March 22, 2026',
    readTime: '9 min read',
    category: 'SaaS',
    tags: ['Firebase', 'SaaS', 'Backend', 'Cloud'],
    featured: false,
    image: '/images/blog-firebase.svg',
    content: `
## Introduction

When developers hear "Firebase," they often picture rapid prototyping — a quick NoSQL database and auth for a hackathon project. And while Firebase absolutely excels at getting you to v1 fast, dismissing it as a non-production technology is a mistake that costs teams months of unnecessary infrastructure work.

Firebase, used correctly, can power SaaS applications serving millions of users. Here's the honest breakdown.

## Why Firebase Accelerates SaaS Development

### 1. Authentication in Under an Hour

Building auth from scratch — hashing passwords, refresh tokens, password reset flows, MFA, OAuth providers — is weeks of work. Firebase Authentication handles all of it out of the box.

\`\`\`typescript
// Sign in with Google — 10 lines of code
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();

async function signIn() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const token = await user.getIdToken();
  // Send token to your backend for verification
}
\`\`\`

Beyond the basics, Firebase Auth integrates directly with Firestore security rules, giving you row-level authorization without a dedicated authorization service.

### 2. Firestore: The Right NoSQL for SaaS

Firestore isn't just a key-value store. Its document-collection model, real-time listeners, and compound queries cover most SaaS data access patterns. Combined with the offline persistence SDK, you get an optimistic UI practically for free.

For multi-tenant SaaS, the standard pattern is clean:

\`\`\`
/organizations/{orgId}/
  /members/{userId}
  /projects/{projectId}
  /invoices/{invoiceId}
\`\`\`

Security rules enforce tenant isolation at the database layer:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /organizations/{orgId}/{document=**} {
      allow read, write: if request.auth.token.orgId == orgId;
    }
  }
}
\`\`\`

### 3. Cloud Functions: Serverless Without the Boilerplate

Firebase Cloud Functions let you run backend logic without managing servers. For a SaaS product, common use cases include:

- **Webhook processing**: Stripe payment events, GitHub webhooks
- **Background jobs**: Nightly email digests, usage aggregations
- **API endpoints**: When you need server-side validation before a Firestore write

The Firebase emulator suite lets you run all of this locally with hot reload — dramatically faster than deploying to staging for every iteration.

### 4. Real-Time as a First-Class Feature

Real-time functionality — collaborative editing, live dashboards, instant notifications — is notoriously hard to build with traditional REST APIs. With Firestore listeners, it's three lines of code:

\`\`\`typescript
const unsubscribe = onSnapshot(
  doc(db, 'projects', projectId),
  (doc) => setProject(doc.data())
);
\`\`\`

For SaaS products, real-time activity feeds, collaborative features, and live analytics are table-stakes differentiators that Firebase makes trivially easy.

### 5. Firebase Storage + CDN

Handling file uploads, serving user-generated content, and managing access controls for files is a solved problem with Firebase Storage — backed by Google Cloud Storage with automatic CDN distribution.

## Addressing the Scalability Concern

The common critique: "Firestore doesn't scale." Let's address it directly.

**Firestore's real limits:**
- 1 write/second per document (hot document problem)
- Complex relational queries require denormalization
- Pricing scales with reads/writes (can surprise you at scale)

**How we handle them:**

For high-write documents (counters, leaderboards), use distributed counters or Firebase's built-in aggregation. For complex queries, maintain denormalized indexes. For pricing predictability, implement client-side caching aggressively and use Firestore bundle snapshots for public data.

Companies like Duolingo, New York Times, and Alibaba run on Firebase at massive scale. The tool is capable — the key is understanding its data model and designing for it.

## When to Graduate Away from Firebase

Firebase is the right choice until one or more of these applies:

- You need complex relational queries with JOINs that Firestore can't support
- Your write volume is high enough that Firestore costs exceed a dedicated PostgreSQL instance
- You need full-text search beyond what Algolia/Typesense integration provides
- Your team has strong SQL expertise and PostgreSQL would actually be faster to develop against

At that point, migrating critical data to PostgreSQL while keeping Firebase for auth and real-time features is a common and sensible hybrid architecture.

## Our Firebase SaaS Stack

At Faxio Tech, our standard Firebase SaaS stack looks like this:

- **Next.js** (App Router) for the frontend
- **Firebase Auth** for authentication
- **Firestore** for application data
- **Cloud Functions** (2nd gen) for backend logic
- **Firebase Storage** for user files
- **Stripe** (via webhook Cloud Function) for billing
- **Algolia** for search

This stack lets a team of three engineers ship a production SaaS product in 8–10 weeks. We've done it repeatedly.

[Get in touch](/contact) to talk about how we can help you build your next SaaS faster.
    `,
  },
  {
    id: '5',
    slug: 'future-of-ai-in-web-and-mobile-development',
    title: 'The Future of AI in Web & Mobile Development: What\'s Actually Changing in 2026',
    excerpt:
      'AI in software development has moved past the hype. Here\'s what\'s genuinely transforming how web and mobile products are built — and what it means for engineering teams.',
    author: 'Priya Nair',
    authorRole: 'Product Engineer',
    authorAvatar: 'PN',
    publishDate: 'March 5, 2026',
    readTime: '10 min read',
    category: 'AI & Technology',
    tags: ['AI', 'Machine Learning', 'Web Development', 'Future'],
    featured: true,
    image: '/images/blog-ai.svg',
    content: `
## Introduction

Two years ago, AI in development meant autocomplete in your IDE and maybe a GPT wrapper for content generation. In 2026, AI is embedded in nearly every layer of the software development lifecycle — from requirement gathering to deployment monitoring. And the pace of change is still accelerating.

This isn't a hype piece. Let's look at what's actually changing, what's genuinely useful, and what still falls short.

## 1. AI-Assisted Development: From Autocomplete to Agentic Coding

The evolution of AI coding tools has been rapid:

**2022-2023**: GitHub Copilot — single-line completions that occasionally saved a few keystrokes.

**2024**: Cursor, Codeium — whole-function generation with context awareness across files.

**2025-2026**: Agentic tools — AI that reads your codebase, understands your architecture, writes multi-file changes, runs tests, interprets failures, and iterates.

Modern agentic coding tools like Claude Code, Cursor Composer, and Devin can handle well-scoped tasks end-to-end: "add pagination to this API endpoint and write the tests." For experienced engineers, this is a genuine 2-3x productivity multiplier — not because AI replaces judgment, but because it handles boilerplate and mechanical work.

The key insight: AI tools in 2026 are best understood as **extremely capable junior engineers**. They write correct code in well-understood domains. They struggle with novel architecture decisions, business logic inference, and debugging subtle race conditions. Human oversight is still essential.

## 2. AI-Powered UX and Personalization

AI is changing what users expect from web and mobile applications:

### Generative UI
Instead of building static screens, teams now build **component libraries + AI orchestration**. The UI assembles itself based on user context. E-commerce sites that once showed the same layout to every visitor now render personalized product arrangements, descriptions, and even color schemes based on behavior signals.

### Conversational Interfaces in Every App
In 2026, a chat interface isn't a novelty — it's expected. Users ask their accounting software questions in plain English. They describe the report they want; the app generates and explains it. The "AI command palette" pattern has replaced the traditional search bar in many enterprise tools.

### Semantic Search
Vector databases (Pinecone, Weaviate, pgvector) have made semantic search — finding results by meaning, not exact keyword match — a standard feature. Building it today requires connecting an embedding model, a vector store, and a retrieval pipeline. It takes a week, not a quarter.

## 3. AI in Mobile Development

Mobile development is seeing specific, high-impact AI applications:

### On-Device Models
With Apple's Neural Engine and Qualcomm's NPU, 7B+ parameter models run efficiently on mobile devices. This enables:
- Real-time language translation in mobile apps without network round trips
- Offline voice commands and transcription
- On-device content moderation for user-generated content
- Personalized recommendations computed locally (no data leaves the device)

### React Native and AI SDKs
The React Native ecosystem has caught up. Libraries like \`react-native-whisper\` (speech to text), \`react-native-llama\` (local LLM inference), and direct CoreML/TFLite bridges make it practical to ship AI features in cross-platform apps.

### Intelligent Camera Features
Computer vision in mobile apps is mainstream in 2026. Barcode scanning, document detection, skin condition screening, product identification — these features no longer require a specialized ML team. Pre-trained models from Google's ML Kit and Apple's Vision framework handle most standard cases.

## 4. AI in the Development Workflow

Beyond code generation, AI has transformed the surrounding process:

### Automated Code Review
AI code reviewers (Sourcery, CodeRabbit, custom GPT-4 pipelines) now flag security vulnerabilities, performance anti-patterns, and logic errors in pull requests before a human reviewer even looks. At Faxio Tech, our CI pipeline catches ~40% of review issues automatically.

### AI-Generated Tests
Writing unit and integration tests is a task AI handles well. Given a function and a description of its behavior, modern models generate comprehensive test suites with edge cases that human developers frequently miss.

### Observability and Incident Response
AI-powered observability platforms (Datadog AI, New Relic Grok) now surface anomalies, correlate incidents across services, and suggest root causes — dramatically reducing mean time to resolution (MTTR).

## 5. What Still Requires Human Engineers

AI excels at well-defined, pattern-matching tasks. Human engineers remain essential for:

- **Architectural decisions**: What's the right data model? Should we use event sourcing? How do we handle this consistency requirement?
- **Business logic inference**: Translating ambiguous business requirements into correct software behavior
- **Novel debugging**: Race conditions, distributed systems failures, and performance profiling still require deep human expertise
- **Security and trust**: Deciding what AI-generated code to trust in a security-sensitive context requires judgment that models don't yet have reliably

## The Practical Takeaway for Engineering Teams

If you're building a web or mobile product in 2026:

1. **Adopt AI coding tools** for your team. The productivity gains are real and the tools are stable.
2. **Build AI features** expecting them. Users increasingly expect semantic search, conversational interfaces, and intelligent defaults.
3. **Invest in your data infrastructure**. Vector stores, embedding pipelines, and structured data are the foundation AI features are built on.
4. **Don't skip human review**. AI-generated code has subtle failure modes that require experienced eyes.

The future of web and mobile development isn't AI *replacing* engineers — it's AI *multiplying* what small, excellent engineering teams can build and ship.

At **Faxio Tech**, we build AI-native web and mobile products that leverage these capabilities pragmatically. [Let's talk](/contact) about what's possible.
    `,
  },
];
