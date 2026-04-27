'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type Audience = 'women' | 'men';

interface ExperienceBlock {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  finish: string;
  idealFor: string;
  note: string;
}

const audienceLabels: Record<Audience, string> = {
  women: 'Women',
  men: 'Men',
};

const experienceBlocks: Record<Audience, ExperienceBlock[]> = {
  women: [
    {
      id: 'color-melt',
      name: 'Color Melt',
      eyebrow: 'Dimensional Colour Ritual',
      description:
        'A seamless colour service designed to soften root growth, add depth through the mid-lengths, and leave the hair with luminous movement. The result is polished, expensive-looking colour that feels effortless between visits.',
      image: '/images/services/color-melt.jpg',
      duration: '2.5 - 3 hrs',
      price: 'From Rs. 4,500',
      finish: 'Soft gradients with glossy dimension',
      idealFor: 'Guests who want low-maintenance colour with a premium finish',
      note: 'Includes tone mapping, glossing, and a finishing style consultation.',
    },
    {
      id: 'bridal-styling',
      name: 'Bridal Styling',
      eyebrow: 'Ceremony-Ready Signature Finish',
      description:
        'Structured around your outfit, jewellery, veil, and event timing, this bridal styling experience focuses on secure hold, refined silhouette, and camera-ready softness from every angle. It is styled to last through the full celebration.',
      image: '/images/services/bridal-styling.jpg',
      duration: '2 - 2.5 hrs',
      price: 'From Rs. 6,500',
      finish: 'Elegant hold with soft editorial detailing',
      idealFor: 'Brides seeking a tailored look for engagement, wedding, or reception',
      note: 'Best booked with a prior trial to align finish, volume, and accessory placement.',
    },
    {
      id: 'keratin-smoothing',
      name: 'Keratin Smoothing',
      eyebrow: 'Frizz-Control Treatment',
      description:
        'A smoothing treatment that reduces puffiness, improves manageability, and helps hair fall into a cleaner shape with less styling effort. It is designed to preserve movement while making the hair feel sleeker and more disciplined.',
      image: '/images/services/keratin-smoothing.jpg',
      duration: '3 - 4 hrs',
      price: 'From Rs. 5,800',
      finish: 'Smooth, reflective, and easier to style daily',
      idealFor: 'Hair that feels frizzy, porous, unruly, or difficult to control',
      note: 'Aftercare guidance is essential to maintain longevity and texture quality.',
    },
  ],
  men: [
    {
      id: 'hair-fixing-consultation',
      name: 'Hair Fixing Consultation',
      eyebrow: 'Non-Surgical Hair System Planning',
      description:
        'A focused consultation to evaluate hair loss pattern, scalp condition, lifestyle, and desired density before recommending the right non-surgical fixing approach. The session prioritises realism, comfort, and maintenance clarity.',
      image: '/images/experience/hair-fixing-1.png',
      duration: '45 - 60 mins',
      price: 'Consultation on request',
      finish: 'A clear transformation plan with realistic outcome mapping',
      idealFor: 'Clients exploring coverage, confidence restoration, or system upgrades',
      note: 'Includes guidance on attachment method, upkeep cycle, and lifestyle suitability.',
    },
    {
      id: 'classic-mens-fade',
      name: "Classic Men's Fade",
      eyebrow: 'Precision Cut Service',
      description:
        'A disciplined fade cut built around head shape, growth pattern, and personal style. Clean graduation, sharp perimeter work, and controlled blending create a refined result that stays neat as it grows out.',
      image: '/images/gallery/7.png',
      duration: '45 mins',
      price: 'From Rs. 700',
      finish: 'Crisp blend with strong shape retention',
      idealFor: 'Clients who want a polished, professional cut with modern edge',
      note: 'Works especially well with beard detailing or a texture-focused top finish.',
    },
    {
      id: 'beard-sculpting',
      name: 'Beard Sculpting',
      eyebrow: 'Shape, Balance, Definition',
      description:
        'More than a quick trim, this service balances beard density, cheek line, neckline, and moustache detailing to sharpen the face and support the haircut. Every line is placed to look intentional rather than severe.',
      image: '/images/gallery/5.png',
      duration: '30 - 40 mins',
      price: 'From Rs. 500',
      finish: 'Structured definition with natural facial balance',
      idealFor: 'Men who want cleaner shape without losing fullness',
      note: 'Recommended as a maintenance pairing with fades and grooming appointments.',
    },
  ],
};

const initialSelection: Record<Audience, string> = {
  women: 'color-melt',
  men: 'hair-fixing-consultation',
};

export function ExperienceSection() {
  const [audience, setAudience] = useState<Audience>('women');
  const [activeSelections, setActiveSelections] =
    useState<Record<Audience, string>>(initialSelection);

  const currentBlocks = experienceBlocks[audience];
  const activeBlock =
    currentBlocks.find((block) => block.id === activeSelections[audience]) ?? currentBlocks[0];

  const handleAudienceChange = (nextAudience: Audience) => {
    setAudience(nextAudience);
  };

  const handleBlockChange = (blockId: string) => {
    setActiveSelections((current) => ({
      ...current,
      [audience]: blockId,
    }));
  };

  return (
    <section className="w-full">
      <div className="mx-auto mb-8 flex max-w-[900px] flex-col items-center gap-4 text-center md:mb-14">
        <div className="flex items-center justify-center gap-2 text-[28px] md:text-[32px]">
          <span className="font-playfair font-semibold text-gold">Our</span>
          <span className="font-playfair italic font-medium text-white">Experience</span>
        </div>
        <p className="max-w-[760px] font-futura text-[14px] leading-snug text-mint md:text-[18px] md:leading-relaxed">
          Explore signature sessions curated for different needs, each designed with the same
          SHOW OFF standard of finish, precision, and atmosphere.
        </p>
      </div>

      <div className="rounded-[16px] border border-gold/40 bg-[linear-gradient(180deg,rgba(201,168,76,0.08),rgba(0,0,0,0.96)_24%)] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-5 lg:p-7">
        <div className="mb-3 flex flex-col gap-3 md:mb-5">
          <div className="mx-auto inline-flex items-center rounded-full border border-gold/30 bg-black/70 p-1">
            {(Object.keys(audienceLabels) as Audience[]).map((item) => {
              const isActive = audience === item;

              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => handleAudienceChange(item)}
                  aria-pressed={isActive}
                  whileTap={{ scale: 0.97 }}
                  className={`relative min-w-[124px] overflow-hidden rounded-full border px-4 py-2.5 font-futura text-[12px] uppercase tracking-[0.22em] transition-all duration-300 md:min-w-[132px] md:text-[13px] ${
                    isActive
                      ? 'border-gold text-black shadow-[0_0_30px_rgba(201,168,76,0.25)]'
                      : 'border-transparent bg-transparent text-mint hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="audience-toggle-pill"
                      className="absolute inset-0 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.7 }}
                    />
                  )}
                  <motion.span
                    className="relative z-10"
                    animate={isActive ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                    transition={{ duration: 0.28 }}
                  >
                    {audienceLabels[item]}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
            {currentBlocks.map((block) => {
              const isActive = activeBlock.id === block.id;

              return (
                <motion.button
                  key={block.id}
                  type="button"
                  onClick={() => handleBlockChange(block.id)}
                  aria-pressed={isActive}
                  whileTap={{ scale: 0.97 }}
                  className={`relative overflow-hidden rounded-full border px-3.5 py-1.5 text-left font-futura text-[11px] tracking-[0.16em] transition-all duration-300 md:px-4 md:py-2 md:text-[12px] ${
                    isActive
                      ? 'border-mint text-mint'
                      : 'border-white/10 bg-white/5 text-white/75 hover:border-gold/40 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-toggle-pill"
                      className="absolute inset-0 rounded-full bg-mint/10"
                      transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.7 }}
                    />
                  )}
                  <motion.span
                    className="relative z-10"
                    animate={isActive ? { x: [0, 1.5, 0] } : { x: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {block.name}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-white/10 bg-black/65 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${audience}-${activeBlock.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="grid gap-4 p-3 md:p-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:p-6"
            >
              <motion.div
                layout
                initial={{ x: -72, opacity: 0, scale: 0.985 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -56, opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[260px] overflow-hidden rounded-[12px] border border-gold/25 bg-[#0f0f0f] md:min-h-[340px]"
              >
                <Image
                  src={activeBlock.image}
                  alt={activeBlock.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3 md:p-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-gold/30 bg-black/50 px-3 py-1 font-futura text-[11px] uppercase tracking-[0.2em] text-gold">
                      {activeBlock.duration}
                    </span>
                    <span className="rounded-full border border-mint/30 bg-black/50 px-3 py-1 font-futura text-[11px] uppercase tracking-[0.2em] text-mint">
                      {activeBlock.price}
                    </span>
                  </div>
                  <div>
                    <p className="mb-1 font-futura text-[10px] uppercase tracking-[0.24em] text-gold/90 md:text-[11px]">
                      {activeBlock.eyebrow}
                    </p>
                    <h3 className="font-playfair text-[24px] leading-tight text-white md:text-[34px]">
                      {activeBlock.name}
                    </h3>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-serif text-[40px] leading-none text-mint md:text-[46px]">&ldquo;</span>
                    <p className="pt-2 font-im-fell text-[18px] italic leading-snug text-white md:text-[22px]">
                      Tailored craftsmanship, built around the final look you want to carry.
                    </p>
                  </div>

                  <p className="font-futura text-[13px] leading-[1.45] text-mint md:text-[15px] md:leading-[1.55]">
                    {activeBlock.description}
                  </p>
                </div>

                <div className="grid gap-2 md:grid-cols-3">
                  <div className="rounded-[12px] border border-gold/20 bg-white/[0.03] p-3">
                    <p className="mb-2 font-futura text-[11px] uppercase tracking-[0.22em] text-gold">
                      Finish
                    </p>
                    <p className="font-futura text-[13px] leading-snug text-white">
                      {activeBlock.finish}
                    </p>
                  </div>

                  <div className="rounded-[12px] border border-gold/20 bg-white/[0.03] p-3">
                    <p className="mb-2 font-futura text-[11px] uppercase tracking-[0.22em] text-gold">
                      Ideal For
                    </p>
                    <p className="font-futura text-[13px] leading-snug text-white">
                      {activeBlock.idealFor}
                    </p>
                  </div>

                  <div className="rounded-[12px] border border-mint/20 bg-mint/[0.05] p-3">
                    <p className="mb-2 font-futura text-[11px] uppercase tracking-[0.22em] text-mint">
                      Note
                    </p>
                    <p className="font-futura text-[13px] leading-snug text-white">
                      {activeBlock.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
