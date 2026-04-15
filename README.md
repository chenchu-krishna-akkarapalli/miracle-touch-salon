# Miracle Touch Salon

A luxury salon website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Responsive Design** — Mobile-first approach with optimized banner heights
- **Dynamic Pages** — Products, Services, Blog, Hair Fixing, Contact, Gallery
- **Luxury Styling** — Custom fonts (Playfair, Futura PT, Cormorant), gold accents, black backgrounds
- **SEO Optimized** — Metadata configuration and sitemap
- **Booking System** — API integration for salon bookings
- **Image Optimization** — Next.js Image component with proper sizing

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts (Playfair Display, Cormorant, Poppins, Syne, IM Fell, Wittgenstein) + Custom (Futura PT)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chenchu-krishna-akkarapalli/miracle-touch-salon.git
cd miracle-touch-salon

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # App Router pages
├── components/       # Reusable components
│   ├── layout/      # Navbar, Footer
│   └── sections/    # Hero, About, Services, etc.
├── config/          # Constants, SEO, site config
└── public/          # Static assets (images, logo)
```

## Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment

The site is ready for deployment on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## License

© 2026 Miracle Touch Salon. All rights reserved.
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
