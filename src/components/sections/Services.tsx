'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, SERVICE_CATEGORIES, STATS } from '@/config/constants';



const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Empty out the old custom cards, we will map directly like the Services page

export function ServicesSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mx-auto mb-8 md:mb-16 flex max-w-[817px] flex-col items-center gap-4 md:gap-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-playfair text-[28px] md:text-[32px] font-semibold text-gold">Our </span>
          <span className="font-playfair text-[28px] md:text-[32px] italic font-medium text-white">Services</span>
          <div className="flex items-start justify-center w-full">
            <span className="text-[48px] md:text-[64px] leading-none text-mint font-serif">&ldquo;</span>
            <span className="font-im-fell text-[18px] md:text-[26px] italic text-white pt-2 md:pt-4">
              Every treatment, a ceremony
            </span>
          </div>
        </div>
        <p className="text-[14px] leading-snug md:text-[18px] md:leading-relaxed text-mint font-futura font-light">
          Each service at La Belle is conceived as a complete ritual — beginning with
          consultation, progressing through treatment, and concluding with aftercare guidance
          tailored to your hair. We do not offer express options. We offer the full
          experience, every time, for every client.
        </p>
        <Link
          href="/services"
          className="flex h-[56px] items-center justify-center rounded-full border border-gold bg-black px-8 transition-all duration-300 hover:bg-gold/10 overflow-hidden"
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
      </div>

      {/* Services grid with stats */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col gap-[60px] md:gap-[80px] w-full"
      >
        {/* Section 1: Categories mapped one after another */}
        {SERVICE_CATEGORIES.slice(0, 2).map((category) => {
          // Take exactly 4 services across the full width grid
          const categoryServices = SERVICES.filter((s) => s.category === category.slug).slice(0, 4);

          return (
            <div key={category.slug} className="flex flex-col w-full">
              {/* Category Header */}
              <div className="flex flex-col border-b border-[#c9a84c]/30 pb-3 mb-6 md:mb-8">
                <h2 className="font-playfair text-[24px] md:text-[32px] text-[#c9a84c] tracking-wide">
                  {category.name}
                </h2>
              </div>

              {/* Service Cards Grid - Responsive full width */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-[25px]">
                {categoryServices.map((s) => (
                  <Link
                    href={`/services/${s.slug}`}
                    key={s.id}
                    className="flex flex-col w-full group cursor-pointer"
                  >
                    {/* Fluid Card Wrapper */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-square border border-[#c9a84c]/50 rounded-[9px] overflow-hidden mb-[10px] md:mb-[15px] shadow-[0_4px_20px_rgba(201,168,76,0.05)]">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Content Card Pad */}
                    <div className="flex flex-col items-center text-center w-full px-1 font-futura">
                      <p className="text-[#c9a84c] text-[9px] md:text-[11px] font-[600] tracking-[1px] md:tracking-[2px] uppercase mb-[2px] md:mb-[4px]">
                        {category.name}
                      </p>
                      <p className="text-white text-[14px] md:text-[17px] font-[600] mb-[2px] group-hover:text-[#c9a84c] transition-colors leading-snug">
                        {s.name}
                      </p>
                      <p className="text-[#a4a3a3] text-[12px] md:text-[14px] font-[300] tracking-wider">
                        ₹{parseInt(s.price.toString()).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Section 2: Stats (Given its own category header) */}
        <div className="flex flex-col w-full">
          {/* Category Header for Stat Cards */}
          <div className="flex flex-col border-b border-[#c9a84c]/30 pb-3 mb-6 md:mb-8">
            <h2 className="font-playfair text-[24px] md:text-[32px] text-[#c9a84c] tracking-wide">
              Our Legacy
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[30px]">
            <motion.div
              className="flex h-[120px] md:h-[199px] w-full flex-col items-center md:items-start justify-center rounded-[8px] border border-gold bg-black p-3 md:p-6 shadow-[inset_6px_6px_4px_0px_rgba(201,168,76,0.23)] text-center md:text-left"
            >
              <p className="font-wittgenstein text-[36px] sm:text-[48px] md:text-[80px] font-semibold italic leading-none text-white">
                {STATS[1].value}
              </p>
              <p className="text-[14px] sm:text-[18px] md:text-[32px] text-mint font-futura leading-none mt-2">
                {STATS[1].label}
              </p>
            </motion.div>
            <motion.div
              className="flex h-[120px] md:h-[199px] w-full flex-col items-center md:items-start justify-center rounded-[8px] border border-gold bg-black p-3 md:p-6 shadow-[inset_6px_6px_4px_0px_rgba(201,168,76,0.23)] text-center md:text-left"
            >
              <p className="font-wittgenstein text-[36px] sm:text-[48px] md:text-[80px] font-semibold italic leading-none text-white">
                {STATS[0].value}
              </p>
              <p className="text-[14px] sm:text-[18px] md:text-[32px] text-mint font-futura leading-none mt-2">
                {STATS[0].label}
              </p>
            </motion.div>
            <motion.div
              className="col-span-2 lg:col-span-1 flex h-[120px] md:h-[199px] w-full flex-col items-center md:items-start justify-center rounded-[8px] border border-gold bg-black p-4 md:p-6 shadow-[inset_6px_6px_4px_0px_rgba(201,168,76,0.23)] text-center md:text-left"
            >
              <p className="font-wittgenstein text-[48px] sm:text-[64px] md:text-[80px] font-semibold italic leading-none text-white">15000+</p>
              <p className="text-[20px] sm:text-[24px] md:text-[32px] text-mint font-futura">Happy Faces</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export { ServicesSection as Services };
export default ServicesSection;
