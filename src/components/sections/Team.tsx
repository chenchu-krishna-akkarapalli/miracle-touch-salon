'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

const INSTAGRAM_POSTS = [
  {
    id: '1',
    image: '/images/gallery/1.png',
    caption: 'Fresh fade & precision styling ✂️ #SHOW OFFTouchSalon',
    likes: 234,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
  {
    id: '2',
    image: '/images/gallery/2.png',
    caption: 'Color transformation by our expert colorists 🎨',
    likes: 189,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
  {
    id: '3',
    image: '/images/gallery/3.png',
    caption: 'Bridal glam at its finest 👰 #BridalHair',
    likes: 312,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
  {
    id: '4',
    image: '/images/gallery/4.png',
    caption: 'Classic grooming for the modern gentleman 💈',
    likes: 156,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
  {
    id: '5',
    image: '/images/gallery/5.png',
    caption: 'Balayage perfection ✨ #HairGoals',
    likes: 278,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
  {
    id: '6',
    image: '/images/gallery/6.png',
    caption: 'Keratin treatment for silky smooth hair 💆',
    likes: 201,
    link: 'https://www.instagram.com/SHOW OFFtouchsalon/',
  },
];

/* Instagram logo inline SVG */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function TeamSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-[15px] md:mb-[25px]">
        <div className="flex items-center gap-2 text-[32px]">
          <span className="font-playfair font-semibold text-gold">Our </span>
          <span className="font-playfair italic font-medium text-white">Socials</span>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[15px] md:gap-[30px] w-full max-w-[1345px] mx-auto"
      >
        {INSTAGRAM_POSTS.map((post) => (
          <motion.a
            key={post.id}
            variants={cardAnim}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-[8px] bg-salon-gray flex flex-col justify-end shadow-[0_4px_10px_rgba(201,168,76,0.05)] border border-[#c9a84c]/20"
          >
            {/* Post image */}
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-3 md:p-6">
                <p className="font-futura text-[12px] md:text-[15px] text-white line-clamp-2 leading-snug">
                  {post.caption}
                </p>
                <div className="mt-1 md:mt-2 flex items-center gap-1 md:gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 md:size-4 text-red-500">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-futura text-[12px] md:text-[14px] text-white">{post.likes}</span>
                </div>
              </div>
            </div>

            {/* Social buttons — always visible */}
            <button
              className="absolute bottom-3 left-3 md:bottom-6 md:left-6 flex size-8 md:size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-md"
              aria-label="View on Instagram"
              onClick={(e) => e.stopPropagation()}
            >
              <InstagramIcon className="size-4 md:size-5 text-black" />
            </button>
            <button
              className="absolute bottom-3 right-3 md:bottom-6 md:right-6 flex size-8 md:size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-md"
              aria-label="Open post"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/icons/arrow-circle.svg"
                alt=""
                width={16}
                height={16}
                className="md:w-[20px] md:h-[20px]"
              />
            </button>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default TeamSection;
