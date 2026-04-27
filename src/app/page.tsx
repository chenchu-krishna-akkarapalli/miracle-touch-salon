import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { createMetadata } from '@/config/seo';

/* RSC-compatible static import for above-fold hero */
import Hero from '@/components/sections/Hero';

/* Lazy-load below-fold sections */
const AboutSection = dynamic(() => import('@/components/sections/About'));
const ExperienceSection = dynamic(() => import('@/components/sections/Experience'));
const ServicesSection = dynamic(() => import('@/components/sections/Services'));
const PortfolioSection = dynamic(() => import('@/components/sections/Portfolio'));
const PricingSection = dynamic(() => import('@/components/sections/Pricing'));
const BookingSection = dynamic(() => import('@/components/sections/BookingSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/Testimonials'));
const TeamSection = dynamic(() => import('@/components/sections/Team'));

export const metadata = createMetadata({
  title: 'SHOW OFF Salon - Premium Barbershop & Salon in Bangalore',
  description:
    "Since 1995, SHOW OFF has been Bengaluru's most cherished destination for hair artistry. Book your transformation today.",
  path: '/',
});

function SectionSkeleton() {
  return (
    <div className="py-20">
      <div className="mx-auto h-8 w-48 animate-pulse rounded bg-gold/10" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 animate-pulse rounded-lg bg-gold/5" />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px]">
      <Hero />

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PortfolioSection />
      </Suspense>

      {/* <Suspense fallback={<SectionSkeleton />}>
        <PricingSection />
      </Suspense> */}

      <Suspense fallback={<SectionSkeleton />}>
        <BookingSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>
    </div>
  );
}
