'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExperienceBlock {
  title: string;
  subtitle: string;
  quote: string;
  text: string;
  image: string;
  reversed?: boolean;
}

const blocks: ExperienceBlock[] = [
  {
    title: 'HAIR FIXING',
    subtitle: '– The Art Behind Every Transformation',
    quote: 'A Legacy of Style, Precision, and Timeless Elegance',
    text: "At the age of 52, Saha SHOW OFF stands as a living embodiment of passion, precision, and artistic excellence in hairstyling. His journey began in the vibrant corridors of celebrity and political circles, where his talent quickly gained recognition among the elite. From a young age, Saha displayed an extraordinary ability to sculpt not just hair, but confidence—turning every style into a statement. Over the decades, his hands have crafted the looks of influential personalities, blending technique with intuition to create styles that reflect individuality. What sets Saha apart is not just his skill, but his deep understanding of people—their personalities,",
    image: '/images/experience/hair-fixing-1.png',
    reversed: false,
  },
  {
    title: 'HAIR FIXING',
    subtitle: '– The Art Behind Every Transformation',
    quote: 'A Legacy of Style, Precision, and Timeless Elegance',
    text: "At the age of 52, Saha SHOW OFF stands as a living embodiment of passion, precision, and artistic excellence in hairstyling. His journey began in the vibrant corridors of celebrity and political circles, where his talent quickly gained recognition among the elite. From a young age, Saha displayed an extraordinary ability to sculpt not just hair, but confidence—turning every style into a statement. Over the decades, his hands have crafted the looks of influential personalities, blending technique with intuition to create styles that reflect individuality. What sets Saha apart is not just his skill, but his deep understanding of people—their personalities,",
    image: '/images/experience/hair-fixing-2.png',
    reversed: true,
  },
];

export function ExperienceSection() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="mb-8 md:mb-16 flex items-center justify-center gap-2 text-[28px] md:text-[32px]">
        <span className="font-playfair font-semibold text-gold">Our </span>
        <span className="font-playfair italic font-medium text-white">Experience</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        {blocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, type: 'spring' }}
            className={`flex flex-col gap-8 lg:items-center ${block.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
          >
            {/* Image */}
            <div className="relative h-[350px] w-full overflow-hidden rounded-[8px] lg:h-[542px] lg:w-[687px] lg:shrink-0">
              <Image
                src={block.image}
                alt={block.title}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 687px"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 lg:w-[618px]">
              <div className="flex flex-col gap-1 lg:flex-row lg:items-end lg:gap-2">
                <h3 className="font-playfair text-[28px] md:text-[40px] font-medium tracking-[1.5px] md:tracking-[2.4px] text-white">
                  {block.title}
                </h3>
                <p className="font-playfair text-[15px] tracking-[0.9px] text-gold">
                  {block.subtitle}
                </p>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-[64px] leading-none text-mint font-serif">&ldquo;</span>
                <p className="font-im-fell text-[20px] leading-snug md:text-[26px] md:leading-normal italic text-white pt-4">
                  {block.quote}
                </p>
              </div>
              <p className="text-[14px] leading-snug md:text-[24px] md:leading-relaxed text-mint font-futura font-light">
                {block.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
