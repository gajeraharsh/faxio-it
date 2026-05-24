# Faxio IT — Company Website

A modern, production-ready website for **Faxio IT**, a US-based software development agency.
Built with Next.js 15, Tailwind CSS, TypeScript, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Syne (Google Fonts) |
| Deployment | Vercel (static export) |

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero, Services, Why Us, Tech Stack, Portfolio, Testimonials, Blog, CTA) |
| `/about` | About Us (Story, Team, Values, Timeline) |
| `/services` | Services (All 8 services + Process + Pricing) |
| `/portfolio` | Portfolio (6 projects with tech stack) |
| `/blog` | Blog listing (5 articles) |
| `/blog/[slug]` | Single blog post (full article, author, related posts) |
| `/contact` | Contact (form + contact info + FAQs) |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |

---

## Project Structure

```
faxio-it/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Navbar + Footer
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + Tailwind + fonts
│   ├── not-found.tsx             # 404 page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Single post (SSG)
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms-and-conditions/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky responsive navbar + mobile menu
│   │   └── Footer.tsx            # Full footer with links + newsletter
│   ├── home/
│   │   ├── Hero.tsx              # Hero section with CTA + stats
│   │   ├── CompanyIntro.tsx      # Who we are + value cards
│   │   ├── ServicesOverview.tsx  # Services grid (8 services)
│   │   ├── WhyChooseUs.tsx       # 6 differentiators + CTA strip
│   │   ├── TechStack.tsx         # 12 technology cards
│   │   ├── PortfolioPreview.tsx  # 4 project cards
│   │   ├── Testimonials.tsx      # 6 client testimonials
│   │   ├── BlogPreview.tsx       # 3 latest blog posts
│   │   └── ContactCTA.tsx        # Full-width CTA banner
│   ├── contact/
│   │   └── ContactForm.tsx       # Client-side contact form with validation
│   └── ui/
│       └── SectionHeader.tsx     # Reusable animated section header
│
├── lib/
│   ├── utils.ts                  # cn(), formatDate(), slugify()
│   └── data/
│       ├── services.ts           # 8 services with features
│       ├── portfolio.ts          # 6 projects with descriptions
│       ├── technologies.ts       # 12 tech stack entries
│       ├── testimonials.ts       # 6 client testimonials
│       └── blogs.ts              # 5 full blog articles
│
├── public/                       # Static assets
├── .env.example                  # Environment variable template
├── next.config.js                # Static export config
├── tailwind.config.ts            # Extended Tailwind config
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd faxio-it

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

---

## Build & Export

```bash
# Create production build (static export)
npm run build

# The static output is in the /out directory
# This can be deployed to any static host
```

---

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**

### Option 3: Deploy via Vercel Dashboard

1. Zip your project (excluding `node_modules` and `.next`)
2. Go to [vercel.com](https://vercel.com) → New Project
3. Drag and drop the zip or connect your repository
4. Configure environment variables if needed
5. Click **Deploy**

### Environment Variables on Vercel

After deploying, add your environment variables:

1. Go to your project dashboard on Vercel
2. Click **Settings** → **Environment Variables**
3. Add variables from `.env.example` with real values
4. Redeploy to apply

---

## Customization Guide

### Update Company Info

Edit contact details (email, phone, address) in:
- [`components/layout/Footer.tsx`](components/layout/Footer.tsx)
- [`app/contact/page.tsx`](app/contact/page.tsx)

### Update Content / Data

All site content lives in [`lib/data/`](lib/data/):
- `services.ts` — Edit service titles, descriptions, and features
- `portfolio.ts` — Add/edit project case studies
- `blogs.ts` — Add blog posts (the `[slug]` page auto-generates routes)
- `testimonials.ts` — Update client testimonials
- `technologies.ts` — Change tech stack entries

### Update Colors / Theme

Edit [`tailwind.config.ts`](tailwind.config.ts) to change the primary blue color:

```ts
colors: {
  brand: {
    DEFAULT: '#2563eb',  // Change this to your brand color
  }
}
```

### Connect Contact Form to Real Backend

The contact form in [`components/contact/ContactForm.tsx`](components/contact/ContactForm.tsx)
currently simulates a submission. To wire it to a real backend:

**Option A — Resend (recommended)**
```ts
// In a new app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
// Send form data via resend.emails.send(...)
```

**Option B — Formspree (no backend needed)**
Change the form `action` to your Formspree endpoint and remove the `onSubmit` handler.

**Option C — SendGrid**
Similar to Resend — use `@sendgrid/mail` in an API route.

---

## SEO

- Per-page metadata via `generateMetadata` in each `page.tsx`
- Root metadata with Open Graph and Twitter Cards in `app/layout.tsx`
- Blog posts use `generateStaticParams` for SSG
- Semantic HTML throughout
- Accessible color contrast ratios

---

## Performance

- Static export (`output: 'export'`) — all pages pre-rendered at build time
- `next/font` — zero layout shift fonts (loaded via Google Fonts CDN)
- `next/image` with `unoptimized: true` for static export compatibility
- Framer Motion animations with `viewport: { once: true }` — play once on scroll
- Minimal third-party scripts

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

Built with ❤️ by the [Faxio IT](https://faxioit.com) team.
