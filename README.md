# AMC Systems — Corporate Website

Marketing and lead-generation website for **Al Marwah Computer Systems (AMC Systems)**, a Sharjah/UAE business-technology company supplying and supporting business software and POS hardware.

The site presents the full solutions catalogue (hospitality, retail, finance and back-office software plus POS hardware), an insights/news section, and contact & enquiry forms that deliver straight to the team's inbox. It is a fully static, content-driven site — all content lives in versioned JSON files, so there is no database or CMS to run.

---

## Overview

- **26 products** across **8 categories**, each with its own richly designed detail page.
- **30 long-form articles** in the News & Insights section, each rendered with its own editorial layout.
- Product and article detail pages open as self-contained "microsites" with their own header/footer and a per-page colour theme.
- Contact and Enquiry forms send email via SMTP (Gmail app password).
- Statically generated (SSG) for fast loads and simple hosting.

---

## Tech Stack

| Area       | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router)                     |
| Language   | TypeScript (strict)                         |
| UI         | React 19                                    |
| Styling    | Tailwind CSS 3.4 + CSS custom properties    |
| Icons      | lucide-react                                |
| Carousel   | Embla Carousel                              |
| Animation  | Framer Motion (landing) + CSS scroll-reveal |
| Email      | Nodemailer (SMTP)                           |
| Validation | Zod                                         |
| Hosting    | Vercel                                      |

---

## Features

- **Solutions catalogue** — category landing pages and per-product detail pages generated from JSON.
- **Bespoke page templates** — a registry of distinct full-page layouts is mapped per product/article, so pages don't look repetitive. Each page carries its own accent/ink colour theme via CSS variables.
- **News & Insights** — 30 hand-written articles with structured content (sections, key takeaways, FAQs, related posts).
- **Product demo videos** — selected products embed YouTube demos in a "See it in action" block.
- **Contact & Enquiry** — server routes validate input with Zod and send email via SMTP.
- **SEO-ready** — per-page metadata, Open Graph tags, `sitemap.xml` and `robots`.
- **Responsive & accessible** — mobile-first layouts, semantic markup, reduced-motion support.

---

## Project Structure

```
app/                         # Next.js App Router
  page.tsx                   # Home / landing
  about/                     # About page
  contact/  enquiry/         # Lead forms (+ /api routes)
  news/                      # Insights list + [slug] article microsite
  products/                  # Catalogue index, [categorySlug], [categorySlug]/[productSlug]
  api/contact|enquiry/       # SMTP email routes
  sitemap.ts  robots.ts      # SEO
components/
  home/                      # Landing sections
  layout/                    # Public shell + microsite shell
  catalog/                   # Product cards + templates/  (per-product layouts)
  blog/templates/            # Per-article layouts
  ui/                        # Shared primitives (Button, Container, Section, ...)
lib/
  catalog.ts                 # Product/category accessors (single source of truth)
  data/
    catalog/                 # categories.json, products.json
    news.json                # articles
    company.json             # business details
  mailer.ts                  # SMTP transport
  business.ts                # Company constants
types/                       # Shared TypeScript types
public/images/               # All imagery (products, categories, hero, news)
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
# Public site URL (used for canonical/OG tags and the sitemap)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# SMTP (Gmail) — used by the contact & enquiry forms
GMAIL_USER=your-address@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
MAIL_TO=inbox-that-receives-leads@example.com
```

> `GMAIL_APP_PASSWORD` is a Google **App Password** (not your normal password); generate one with 2-Step Verification enabled.

### Run

```bash
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

---

## Content Model

All site content is data-driven — editing content does not require touching components.

| File                               | Contents                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `lib/data/catalog/categories.json` | Product categories (name, tagline, description, image)                                      |
| `lib/data/catalog/products.json`   | Products — copy, features, specifications, images, `design` (layout key), `theme`, `videos` |
| `lib/data/news.json`               | Articles — lead, sections, takeaways, FAQs, `design`, `theme`, related                      |
| `lib/data/company.json`            | Company details used across the site                                                        |

Each product/article has a `design` field that selects its page layout from the template registry, and a `theme` (`acc` + `ink`) that colours the page. Add a new item by appending an object to the relevant JSON file — the page is generated automatically at build time.

---

## Deployment

The site is optimised for **Vercel**:

1. Import the repository into Vercel.
2. Add the environment variables above in the project settings.
3. Deploy — Vercel runs `npm run build` and serves the statically generated pages.

Any Node-compatible host works too: run `npm run build` then `npm run start`.

---

## License

Proprietary — © Al Marwah Computer Systems. All rights reserved.
