'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = [
  {
    desktop: "/images/hero/hero-banner.png",
    mobile: "/images/hero/hero-banner-mobile-view.png",
  },
  {
    desktop: "/images/hero/hero-banner-2.jpg",
    mobile: "/images/hero/hero-banner-mobile-view-2.jpg",
  },
  {
    desktop: "/images/hero/hero-banner-3.jpg",
    mobile: "/images/hero/hero-banner-mobile-view-3.jpg",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    } else if (touchEndX.current - touchStartX.current > 50) {
      setCurrentIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
    }
  };

  return (
    <section className="relative flex flex-col gap-[30px] md:gap-[50px] items-end">
      {/* Marquee header */}
      <div className="flex flex-col gap-[15px] md:gap-[25px] items-center w-full">
        <div className="flex flex-col gap-[9px] items-center w-full">
          <div className="w-full flex">
            <Image src="/images/icons/line-divider.svg" alt="" width={1343} height={1} className="w-full h-[1px] object-cover" />
          </div>

          {/* Scrolling marquee */}
          <div className="w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex whitespace-nowrap animate-marquee"
            >
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className="font-futura text-[14px] sm:text-[16px] md:text-[20px] font-light text-white mx-4 sm:mx-8 shrink-0"
                >
                  Your Hairdresser in Bangalore&nbsp;&nbsp;|&nbsp;&nbsp;+91 12345 67890&nbsp;&nbsp;|&nbsp;&nbsp;Visit Us: 123 Main Street, Bangalore
                </span>
              ))}
            </motion.div>
          </div>

          <div className="w-full flex">
            <Image src="/images/icons/line-divider.svg" alt="" width={1343} height={1} className="w-full h-[1px] object-cover" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-futura text-xl text-mint text-center md:text-[32px]"
        >
          Est. 1995 · SHOW OFF
        </motion.p>
      </div>

      {/* Hero image carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        className="relative w-full aspect-[1345/666] md:aspect-auto md:h-[480px] rounded-[9px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Desktop Image */}
            <Image
              src={HERO_IMAGES[currentIndex].desktop}
              alt={`SHOW OFF Salon Banner ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              className="object-cover hidden md:block"
              sizes="1345px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/pfwAJlwPZ40I6lwAAAABJRU5ErkJggg=="
            />
            {/* Mobile Image */}
            <Image
              src={HERO_IMAGES[currentIndex].mobile}
              alt={`SHOW OFF Salon Banner Mobile ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              className="object-cover block md:hidden"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/pfwAJlwPZ40I6lwAAAABJRU5ErkJggg=="
            />
            {/* Soft gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Overlay card */}
        <div className="hidden md:block absolute left-[20px] top-[20px] w-[371px] h-[364px] rounded-[9px] border border-gold bg-black/30 overflow-hidden z-10">
          <div className="absolute left-[25px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px] items-start w-[317px]">
            <p className="font-futura text-[20px] text-white leading-normal">
              Est. 1995 · SHOW OFF
            </p>
            <h2 className="font-playfair text-[38px] font-semibold text-white leading-normal">
              SHOW OFF
            </h2>
            <div className="flex flex-col pb-[2px] w-[251px]">
              <p className="font-playfair text-[36px] font-bold text-white leading-normal">
                The Art of
              </p>
              <p className="font-playfair text-[36px] font-bold italic text-gold leading-normal">
                Timeless Hair
              </p>
            </div>
            <p className="font-futura text-[13px] leading-normal text-white">
              Since 1988, <span className="font-bold text-mint">SHOW OFF</span>{' '}
              has been Bengaluru&apos;s most cherished destination for hair artistry. We
              blend century-old craft with modern science to create looks that are as
              enduring as they are breathtaking.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="/book"
          className="hidden md:flex absolute left-[20px] top-[404px] h-[56px] w-[371px] items-center justify-center rounded-[44px] border border-gold bg-black overflow-hidden transition-all duration-300 hover:bg-gold/10 z-10"
        >
          <span className="font-poppins text-[25px] font-semibold tracking-[-1.25px] whitespace-nowrap">
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

        {/* Carousel dots */}
        <div className="absolute bottom-[20px] left-1/2 flex -translate-x-1/2 gap-[8px] z-10">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[6px] rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-mint w-[24px]' : 'bg-white/40 w-[6px] hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
