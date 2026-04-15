'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PRICING } from '@/config/constants';

type CategoryKey = keyof typeof PRICING;

const categoryLabels: Record<CategoryKey, string> = {
  haircuts: 'HAIRCUTS & BLOWOUTS',
  coloring: 'HAIR COLORING',
  spa: 'HAIR SPA',
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'spring' as const } },
};

export function PricingSection() {
  const categories = Object.keys(PRICING) as CategoryKey[];

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mx-auto mb-8 md:mb-16 flex max-w-[817px] flex-col items-center gap-4 md:gap-5 text-center">
        <div className="flex items-center gap-2 text-[28px] md:text-[32px]">
          <span className="font-playfair font-semibold text-gold">Services </span>
          <span className="font-playfair italic font-medium text-white">&amp; Price</span>
        </div>
        <div className="flex items-start">
          <span className="text-[48px] md:text-[64px] leading-none text-mint font-serif">&ldquo;</span>
          <span className="font-im-fell text-[18px] md:text-[26px] italic text-white pt-2 md:pt-4">
            Transparent pricing, no compromises on quality
          </span>
        </div>
        <p className="font-poppins text-[14px] md:text-[16px] leading-snug md:leading-relaxed text-salon-muted">
          All prices include a personalised consultation and aftercare guidance.
          Premium products by Kérastase, Olaplex, and Schwarzkopf are used across
          every service.
        </p>
      </div>

      {/* Single-column pricing rows */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto flex max-w-[1345px] flex-col gap-12"
      >
        {categories.map((cat) => (
          <div key={cat} className="flex flex-col gap-6">
            {/* Category title with underline */}
            <div className="flex flex-col items-center gap-2">
              <h4 
                className="text-[14px] md:text-[18px] font-semibold text-white tracking-widest font-futura"
              >
                {categoryLabels[cat]}
              </h4>
              <Image
                src="/images/icons/line-divider-2.svg"
                alt=""
                width={200}
                height={1}
                className="opacity-60"
              />
            </div>

            {/* Price rows */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              {PRICING[cat].map((service, i) => (
                <motion.button
                  key={i}
                  variants={item}
                  className="group flex h-[66px] w-full cursor-pointer items-center justify-between rounded-[9px] border-[0.2px] border-gold px-6 transition-all hover:bg-gold/5 hover:shadow-[0_4px_20px_-8px_rgba(201,168,76,0.2)] md:px-8"
                >
                  <span className="text-[14px] md:text-[18px] text-mint transition-transform duration-300 group-hover:translate-x-1 font-futura">
                    {service.name}
                  </span>
                  <div className="flex size-8 items-center justify-center rounded-full bg-gold/10 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                    <svg className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Link
          href="/services"
          className="flex h-[56px] w-full max-w-[371px] items-center justify-center rounded-[44px] border border-gold bg-black transition-all duration-300 hover:bg-gold/10 overflow-hidden"
        >
          <span className="font-poppins text-[25px] font-medium tracking-[-1.25px] whitespace-nowrap">
            <span className="text-white">Explore all </span>
            <span className="text-mint">Services</span>
          </span>
          <Image
            src="/images/icons/arrow-circle.svg"
            alt=""
            width={25}
            height={25}
            className="ml-3"
          />
        </Link>
        <Link
          href="/book"
          className="flex h-[56px] w-full max-w-[371px] items-center justify-center rounded-[44px] border border-gold bg-black transition-all duration-300 hover:bg-gold/10 overflow-hidden"
        >
          <span className="font-poppins text-[25px] font-medium tracking-[-1.25px] whitespace-nowrap">
            <span className="text-white">Book a </span>
            <span className="text-mint">consultation</span>
          </span>
          <Image
            src="/images/icons/arrow-circle.svg"
            alt=""
            width={25}
            height={25}
            className="ml-3"
          />
        </Link>
      </div>
    </section>
  );
}

export default PricingSection;
