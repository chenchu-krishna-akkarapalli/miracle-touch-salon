'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/config/constants';

const portfolioImages = GALLERY_IMAGES.slice(0, 9);

export function PortfolioSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mx-auto mb-8 md:mb-16 flex max-w-[817px] flex-col items-center gap-4 md:gap-5 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-[28px] md:text-[32px]">
            <span className="font-playfair font-semibold text-gold">Our </span>
            <span className="font-playfair italic font-medium text-white">Portfolio</span>
          </div>
          <div className="flex items-start">
            <span className="text-[48px] md:text-[64px] leading-none text-mint font-serif">&ldquo;</span>
            <span className="font-im-fell text-[18px] md:text-[26px] italic text-white pt-2 md:pt-4">
              Hand-crafted transformations, each one a portrait
            </span>
          </div>
        </div>
        <p className="font-futura font-light text-[14px] md:text-[18px] leading-snug md:leading-relaxed text-mint">
          Every client who walks through our doors carries a unique story. Our portfolio is a
          testament to the quiet magic that happens when skilled hands, the finest tools, and
          an intimate understanding of hair come together. From sweeping vintage waves to
          intricate bridal compositions, each photograph here represents not just a style — but
          a moment of becoming.
        </p>
      </div>

      {/* Image grid – 3x3 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-hidden rounded-[8px]"
      >
        <div className="grid grid-cols-2 md:grid-cols-3">
          {portfolioImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 448px"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default PortfolioSection;
