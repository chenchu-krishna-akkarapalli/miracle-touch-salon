'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/config/constants';
import { ExperienceSection } from '@/components/sections/Experience';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      {/* Hero Banner */}
      <section>
        <div className="relative w-full aspect-[1345/666] rounded-[9px] overflow-hidden">
          <Image
            src="/images/products/products-banner-img.png"
            alt="Miracle Touch Est. 1995"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Products Grid */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="w-full"
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-center mb-[60px]"
          >
            <span
              className="text-[32px] tracking-[1.92px]"
              style={{ fontFamily: 'Playfair Display, serif', color: '#c9a84c' }}
            >
              Our{' '}
            </span>
            <span
              className="text-[32px] italic tracking-[1.92px] text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Products
            </span>
          </motion.h2>

          {/* Categories & Grids */}
          <div className="w-full max-w-[1345px] px-4 md:px-8 mx-auto flex flex-col gap-12 md:gap-20">
            {Array.from(new Set(PRODUCTS.map(p => p.category))).map((categoryName) => {
              const categoryProducts = PRODUCTS.filter(p => p.category === categoryName);

              return (
                <div key={categoryName} className="flex flex-col w-full">
                  {/* Category Header */}
                  <div className="flex flex-col border-b border-[#c9a84c]/30 pb-3 mb-6 md:mb-8 text-left">
                    <h2 className="font-playfair text-[24px] md:text-[32px] text-[#c9a84c] tracking-wide">
                      {categoryName}
                    </h2>
                  </div>

                  {/* 4-column Grid */}
                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[12px] md:gap-x-[20px] gap-y-[25px] md:gap-y-[40px] w-full"
                  >
                    {categoryProducts.map((product) => (
                      <motion.div key={product.id} variants={fadeInUp}>
                        <Link
                          href={`/products/${product.id}`}
                          className="flex flex-col w-full group cursor-pointer"
                        >
                          {/* Responsive Product Image block */}
                          <div className="relative w-full aspect-[4/5] sm:aspect-square border border-[#c9a84c]/50 rounded-[9px] overflow-hidden mb-[10px] md:mb-[20px] shadow-[0_4px_20px_rgba(201,168,76,0.05)]">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Content Pad */}
                          <div className="flex flex-col items-center text-center w-full px-1 md:px-2 font-futura">
                            <p className="text-[#c9a84c] text-[9px] md:text-[12px] font-[600] tracking-[1px] md:tracking-[2px] uppercase mb-[2px] md:mb-[6px]">
                              {product.category}
                            </p>
                            <p className="text-white text-[14px] sm:text-[18px] md:text-[20px] font-[600] mb-[2px] md:mb-[8px] group-hover:text-[#c9a84c] transition-colors leading-snug">
                              {product.name}
                            </p>
                            <p className="text-[#a4a3a3] text-[12px] sm:text-[14px] md:text-[15px] font-[300] tracking-wider">
                              {product.price}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />
    </div>
  );
}
