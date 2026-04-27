import Image from 'next/image';
import { createMetadata } from '@/config/seo';
import { AWARDS, CELEBRITIES } from '@/config/constants';
import { AboutSection } from '@/components/sections/About';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import Link from 'next/link';
import { Star, Scissors, HandMetal, Award, Sparkles, Crown, Gem } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Our Journey & Achievements â€“ SHOW OFF Salon',
  description: 'Discover the story behind SHOW OFF Salon, our awards, top celebrity clients, and client reviews.',
  path: '/blog',
});

const TIMELINE = [
  {
    year: '1995',
    title: 'The Genesis',
    body: 'SHOW OFF was born from a single chair and an unwavering vision. Mr. Saha SHOW OFF opened the doors to what would become Bangalore\'s most distinguished salon, driven by a passion for transforming lives through artistry.',
    icon: Scissors,
    side: 'left' as const,
  },
  {
    year: '2005',
    title: 'Celebrity Recognition',
    body: 'A decade of relentless dedication bore fruit as Bollywood A-listers and prominent political figures sought Mr. Saha\'s expertise. The salon became the trusted name for those who demand absolute perfection.',
    icon: Crown,
    side: 'right' as const,
  },
  {
    year: '2012',
    title: 'Mastering Hair Fixing',
    body: 'Pioneering non-surgical hair replacement techniques in Bangalore. Mr. Saha travelled internationally to master cutting-edge restoration methods, establishing a specialized wing that would redefine confidence for thousands.',
    icon: Gem,
    side: 'left' as const,
  },
  {
    year: '2018',
    title: 'Foundation in Artistry',
    body: 'Advanced Stylist Development: Implementation of rigorous, formalized training in precision cuts and master-coloring techniques, ensuring a consistent elite standard across every chair in the salon.',
    icon: Sparkles,
    side: 'right' as const,
  },
  {
    year: '2020',
    title: 'Flagship Studio Unveiled',
    body: 'Curated Luxury: Opening of our custom-designed, expansive studio space with private zones, a dedicated color bar, and client comfort features â€” a sanctuary where artistry meets indulgence.',
    icon: Award,
    side: 'left' as const,
  },
  {
    year: '2024',
    title: 'A Legacy Continues',
    body: 'With 40+ years of mastery, 15,000+ happy faces, and an unbroken legacy of excellence, SHOW OFF stands as the benchmark for luxury grooming in India â€” and the journey is far from over.',
    icon: HandMetal,
    side: 'right' as const,
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      {/* Hero Banner */}
      <section>
        <div className="relative w-full aspect-[1345/666] md:aspect-auto md:h-[450px] rounded-lg overflow-hidden border border-[#c9a84c]">
          <Image
            src="/images/products/hero-banner.png"
            alt="Our Journey"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-8">
            <h1 className="text-[48px] md:text-[64px] tracking-[1.92px]">
              <span className="font-playfair text-[#c9a84c] block">A Legacy of</span>
              <span className="font-playfair italic text-white block">Excellence</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Us */}
      <AboutSection />

      <div className="flex flex-col items-center gap-[60px] md:gap-[100px]">

        {/* -- Our Journey Timeline -- */}
        <section className="w-full flex flex-col items-center">
          {/* Section Header */}
          <p className="font-futura text-[14px] text-[#c9a84c]/70 uppercase tracking-[4px] mb-[8px]">Our Journey</p>
          <h2 className="text-[36px] tracking-[1.5px] mb-[60px] text-center">
            <span className="font-playfair text-[#c9a84c]">Our </span>
            <span className="font-playfair italic text-white">Story</span>
          </h2>

          {/* Timeline */}
          <div className="relative w-full max-w-[900px]">
            {/* Central Spine - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0" />

            {/* EST. Plaque at Top */}
            <div className="relative flex justify-center mb-[30px] md:mb-[50px]">
              <div className="relative z-10 w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-[#c9a84c] bg-[#111] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                <span className="font-playfair italic text-[#c9a84c] text-[9px] md:text-[11px] tracking-[2px]">EST.</span>
                <span className="font-playfair text-[#c9a84c] text-[16px] md:text-[20px] font-bold leading-none">1995</span>
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="flex flex-col gap-[30px] md:gap-[60px]">
              {TIMELINE.map((item, idx) => {
                const Icon = item.icon;
                const isLeft = item.side === 'left';
                return (
                  <div key={idx} className="relative flex items-center">
                    {/* Node on spine - hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10 w-[20px] h-[20px] rounded-full border-2 border-[#c9a84c] bg-[#111] shadow-[0_0_12px_rgba(201,168,76,0.3)]">
                      <div className="absolute inset-[4px] rounded-full bg-[#c9a84c]/60" />
                    </div>

                    {/* Card - alternating left/right */}
                    <div className={`w-[85%] md:w-[calc(50%-40px)] ${isLeft ? 'mr-auto pr-0 md:pr-[10px]' : 'ml-auto pl-0 md:pl-[10px]'}`}>
                      <div className="bg-[#0d0d0d] border border-[#c9a84c]/25 rounded-[9px] p-4 md:p-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-[#c9a84c]/60 transition-all duration-500 group flex flex-col gap-2 md:gap-3">
                        {/* Icon + Year row */}
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-full border border-[#c9a84c]/40 flex items-center justify-center bg-[#c9a84c]/5 group-hover:bg-[#c9a84c]/10 transition-colors">
                            <Icon className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] text-[#c9a84c]" />
                          </div>
                          <span className="font-playfair text-[16px] md:text-[28px] text-[#c9a84c] font-bold leading-none">{item.year}</span>
                        </div>
                        {/* Title + Body */}
                        <div className="flex flex-col gap-1 min-w-0">
                          <h3 className="font-playfair text-[13px] md:text-[18px] text-white italic leading-snug">{item.title}</h3>
                          <p className="font-futura text-[10px] md:text-[14px] text-gray-400 font-[300] leading-[1.6]">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Awards & Achievements */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-[36px] tracking-[1.5px] mb-[50px] text-center">
            <span className="font-playfair text-[#c9a84c]">Awards & </span>
            <span className="font-playfair italic text-white">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full lg:max-w-[1000px]">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="bg-[#111] border border-[#c9a84c]/30 rounded-[9px] p-[30px] flex flex-col items-center text-center transition-all hover:bg-black hover:border-[#c9a84c] shadow-[0_0_15px_rgba(201,168,76,0.05)]">
                <div className="font-playfair text-[42px] text-[#c9a84c] font-bold mb-[15px]">{award.year}</div>
                <h3 className="font-futura text-[20px] text-white font-[600] uppercase tracking-wider mb-[10px]">{award.title}</h3>
                <p className="font-futura text-[16px] text-gray-400 font-[300]">{award.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Celebrity Clientele */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-[36px] tracking-[1.5px] mb-[20px] text-center">
            <span className="font-playfair text-[#c9a84c]">Celebrity & </span>
            <span className="font-playfair italic text-white">Officials</span>
          </h2>
          <p className="font-futura text-[18px] text-white text-center max-w-[600px] mb-[50px] font-[300]">
            Trusted by industry leaders, national icons, and stars who demand nothing but absolute perfection in their appearances.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] w-full">
            {CELEBRITIES.map((cel, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-[9px] border border-[#c9a84c]/50 aspect-[3/4]">
                <Image
                  src={cel.img}
                  alt={cel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-[20px]">
                  <p className="font-futura text-white text-[16px] font-[600] tracking-widest uppercase text-center w-full">
                    {cel.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full flex flex-col items-center mb-[50px] overflow-hidden">
          <TestimonialsSection />

          <div className="mt-16 text-center">
            <Link
              href={'/book'}
              className="inline-flex h-14 items-center justify-center rounded-[9px] border border-[#c9a84c] bg-[#c9a84c] px-8 text-black transition-all duration-300 hover:bg-[#d4b45d] font-futura font-[600] text-[16px] uppercase tracking-widest"
            >
              Reserve a Consultation
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
