# Miracle Touch Salon

Premium barbershop & salon booking platform built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js** (App Router, RSC-first)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Zustand** (booking state)
- **Framer Motion** (animations)
- **Zod** (validation)
- **Radix UI** (accessible primitives)

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API routes
├── components/
│   ├── ui/           # Reusable UI primitives
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   ├── booking/      # Booking flow components
│   └── layout/       # Navbar, Footer
├── config/           # SEO config, constants
├── hooks/            # Custom React hooks
├── store/            # Zustand stores
├── types/            # TypeScript types & Zod schemas
└── utils/            # Utility functions
```

## Adding Images

Place your images in `public/images/`:
- `hero-banner.jpg` – Hero section background
- `experience/hair-fixing-1.jpg`, `hair-fixing-2.jpg` – Experience section
- `gallery/gallery-1.jpg` through `gallery-9.jpg` – Portfolio & Gallery
- `team/stylist-1.jpg` through `stylist-3.jpg` – Team section
- `testimonials/person-1.jpg` through `person-4.jpg` – Testimonials
