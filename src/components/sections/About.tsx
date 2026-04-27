'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' as const } },
};

export function AboutSection() {
  return (
    <section id="about" className="w-full">
      {/* Section title */}
      <div className="mb-[35px] md:mb-[75px] flex items-center justify-center gap-2 text-[28px] md:text-[32px]">
        <span className="font-playfair font-semibold text-gold">About</span>
        <span className="font-playfair italic font-medium text-white">Us</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-[20px] md:gap-[30px] md:flex-row md:items-stretch md:justify-center w-full"
      >
        {/* Left – white text card */}
        <motion.div
          variants={item}
          className="w-full overflow-hidden rounded-[8px] border border-gold bg-white md:flex-[2] md:h-[480px]"
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-6 px-4 py-8 sm:px-6 sm:py-10 text-center md:px-12 lg:px-16">
            <h3 className="font-playfair text-[20px] md:text-[24px] lg:text-[32px] font-medium tracking-[1.5px] lg:tracking-[1.92px] text-gold">
              SHOW OFF HAIRDRESSER IN BANGALORE
            </h3>
            <div className="max-w-[750px] space-y-2 md:space-y-4 text-[13px] leading-snug md:text-[16px] lg:text-[18px] md:leading-relaxed text-black font-futura">
              <p>
                At SHOW OFF Salon &amp; Hair Fixing Studio in Mahadevapura, Bengaluru,
                beauty is more than a service — it&apos;s a carefully crafted journey. Led by
                renowned stylist Mr. Saha, who has styled celebrities, political figures, and
                elite clientele, our unisex salon delivers premium grooming and transformation
                with unmatched expertise.
              </p>
              <p>
                We specialise in advanced skin treatments, customised hair care, and non-surgical
                hair fixing solutions in Bengaluru — each designed to restore confidence and
                enhance natural beauty.
              </p>
              <p>
                Behind every experience at our Pai Layout salon is a dedicated team of
                professionally trained stylists and therapists, handpicked by Mr. Saha himself.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2 md:mt-0">
              <Image
                src="/images/logo.png"
                alt=""
                width={60}
                height={30}
                className="opacity-80 w-[40px] md:w-[60px]"
              />
              <p className="font-playfair text-[13px] md:text-[15px] font-medium tracking-[0.9px] text-mint mt-1">
                The Art Behind Every Transformation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right – black opening hours card */}
        <motion.div
          variants={item}
          className="flex w-full flex-col items-center justify-center gap-4 md:gap-6 overflow-hidden rounded-[8px] border border-gold bg-black md:flex-1 md:h-[480px] p-8 md:p-0"
        >
          <h4 className="font-playfair text-[28px] md:text-[36px] text-white text-center leading-tight">
            Opening<br />hours
          </h4>
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <p className="font-futura text-[12px] md:text-[14px] font-semibold tracking-[4px] md:tracking-[7.2px] text-mint uppercase">
              opening
            </p>
            <div className="relative my-2 w-[100px] h-[90px] md:w-[136px] md:h-[124px] flex items-center justify-center">
              <Image
                src="/images/icons/clock-face.svg"
                alt="Opening hours clock"
                fill
                className="object-contain"
              />
              <Image
                src="/images/icons/clock-hands.svg"
                alt=""
                width={35}
                height={35}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[50px] md:h-[50px]"
              />
            </div>
            <p className="font-futura text-[12px] md:text-[14px] font-semibold tracking-[8px] md:tracking-[14.85px] text-mint uppercase ml-2">
              hours
            </p>
          </div>
          <p className="font-playfair text-[24px] md:text-[32px] text-white">Everyday</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
