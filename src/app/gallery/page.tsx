import { createMetadata } from '@/config/seo';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/config/constants';

export const metadata = createMetadata({
  title: 'Gallery – SHOW OFF Salon',
  description: 'Browse our portfolio of premium hair transformations and salon artistry.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <div className="py-section">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-white md:text-6xl">
          <span className="text-gold">Our</span> Gallery
        </h1>
        <p className="max-w-2xl font-poppins text-lg text-salon-muted">
          Hand-crafted transformations, each one a portrait of confidence and style.
        </p>
      </div>

      {/* Masonry-style grid */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {GALLERY_IMAGES.map((img, i) => (
          <div key={img.id} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg border border-gold/40 transition-all duration-300 hover:border-gold">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={i % 3 === 0 ? 500 : i % 3 === 1 ? 350 : 420}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={i < 4 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
