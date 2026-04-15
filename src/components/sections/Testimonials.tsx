'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  source: 'google' | 'static';
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

/* Google "G" logo rendered inline */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  // Sort reviews: 5-stars with text first
  const fallbackReviews = [
    {
      author_name: "Sarah Johnson",
      profile_photo_url: "/images/gallery/1.png",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "Absolutely stunning service. Raju and his team are true professionals!"
    },
    {
      author_name: "Priya Sharma",
      profile_photo_url: "/images/gallery/2.png",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "Best hair fixing studio in Bangalore. Highly recommended."
    },
    {
      author_name: "Amit Patel",
      profile_photo_url: "/images/gallery/3.png",
      rating: 5,
      relative_time_description: "3 months ago",
      text: "Premium experience from start to finish. Loved the ambiance."
    }
  ];

  const fetchedReviews = data?.reviews ?? [];
  const displayReviews = fetchedReviews.length > 0 ? fetchedReviews : fallbackReviews;

  const sortedReviews = [...displayReviews]
    .sort((a, b) => {
      // Prioritize 5-star reviews with text
      if (a.rating === 5 && a.text && (!b.text || b.rating < 5)) return -1;
      if (b.rating === 5 && b.text && (!a.text || a.rating < 5)) return 1;
      return 0;
    })
    .slice(0, 6); // Limit to 6 for a balanced grid

  return (
    <section className="w-full">
      {/* Header – smart vintage */}
      <div className="mb-[20px] md:mb-[50px] flex flex-col items-center gap-2 md:gap-4 text-center w-full">
        <div className="flex items-center justify-center gap-2 text-[24px] md:text-[32px]">
          <span className="font-playfair font-semibold text-gold">Client </span>
          <span className="font-playfair italic font-medium text-white">Testimonials</span>
        </div>
        <div className="flex items-start justify-center w-full">
          <span className="text-[36px] md:text-[64px] leading-none text-mint font-serif">&ldquo;</span>
          <span className="font-im-fell text-[14px] md:text-[26px] italic text-white pt-1 md:pt-4">
            A Legacy of Excellence in Every Review
          </span>
        </div>
        
        {/* Overall rating */}
        {data && (
          <div className="flex items-center gap-2 md:gap-4 mt-2 px-4 py-1.5 md:px-6 md:py-2 border border-gold/30 rounded-full bg-gold/5">
            <GoogleIcon className="size-4 md:size-5" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`size-3 md:size-4 ${i < Math.round(data.rating) ? 'text-gold' : 'text-gold/30'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="font-futura text-[11px] md:text-[13px] text-white tracking-widest uppercase mt-[2px]">
              {data.rating} / 5.0
            </span>
          </div>
        )}
      </div>

      {/* Review cards – Grid formatted for dense layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px] w-full"
      >
        {sortedReviews.map((review, idx) => (
          <motion.div
            key={idx}
            variants={card}
            className="relative flex w-full min-h-[160px] md:min-h-[220px] flex-col rounded-[9px] border border-[#c9a84c]/30 bg-black p-[15px] md:p-[30px] shadow-[inset_0px_4px_4px_0px_rgba(201,168,76,0.1)] transition-transform hover:-translate-y-1"
          >
            {/* Background Quote Icon for vintage feel */}
            <span className="absolute top-2 right-4 md:top-4 md:right-6 text-[40px] md:text-[80px] leading-none text-gold/10 font-serif font-black select-none pointer-events-none">
              &ldquo;
            </span>

            {/* Top row: Profile + Info */}
            <div className="flex items-center gap-2 md:gap-4 relative z-10 w-full overflow-hidden">
              {/* Profile icon */}
              <div className="flex size-[35px] md:size-[50px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-black text-gold">
                {review.profile_photo_url ? (
                  <Image
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    width={50}
                    height={50}
                    className="size-full object-cover"
                  />
                ) : (
                  <span className="font-playfair text-[14px] md:text-[20px] font-medium uppercase">
                    {review.author_name.charAt(0)}
                  </span>
                )}
              </div>
              {/* Name + time */}
              <div className="flex flex-col min-w-0 pr-4">
                <span className="font-futura text-[10px] sm:text-[12px] md:text-[15px] font-[600] text-white uppercase tracking-wider truncate">
                  {review.author_name}
                </span>
                <span className="font-futura text-[9px] md:text-[11px] text-gold mt-[2px] tracking-widest uppercase truncate">
                  {review.relative_time_description}
                </span>
              </div>
            </div>

            {/* Star rating */}
            <div className="mt-3 md:mt-5 flex gap-[2px] md:gap-[4px] relative z-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`size-[10px] md:size-[14px] ${i < review.rating ? 'text-gold' : 'text-gold/20'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review text */}
            <div className="mt-2 md:mt-4 flex-1">
               <p className="font-im-fell italic text-[14px] sm:text-[16px] md:text-[18px] leading-snug md:leading-relaxed text-gray-300 relative z-10 line-clamp-4 md:line-clamp-4">
                 "{review.text}"
               </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
