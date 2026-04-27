import { createMetadata } from '@/config/seo';
import { SERVICES, SERVICE_CATEGORIES } from '@/config/constants';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Our Services â€“ SHOW OFF Salon',
  description:
    'Explore our complete range of premium hair services including cuts, coloring, spa treatments, and bridal styling.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      {/* Hero Banner */}
      <section>
        <div className="relative w-full aspect-[1345/666] md:aspect-auto md:h-[384px] rounded-lg overflow-hidden">
          <Image
            src="/images/services/sevices-banner.jpg"
            alt="Our Services Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="flex flex-col items-center w-full">
        {/* Header */}
        <div className="mb-[40px] md:mb-[60px] text-center px-4">
          <h1 className="text-[32px] tracking-[1.92px]">
            <span className="font-playfair text-[#c9a84c]">Our </span>
            <span className="font-playfair italic text-white">Services</span>
          </h1>
        </div>

        {/* Categories & Grids */}
        <div className="w-full max-w-[1345px] px-4 md:px-8 mx-auto flex flex-col gap-12 md:gap-20 mb-[60px]">
          {SERVICE_CATEGORIES.map((category) => {
            const categoryServices = SERVICES.filter((s) => s.category === category.slug);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category.slug} className="flex flex-col w-full">
                {/* Category Header */}
                <div className="flex flex-col border-b border-[#c9a84c]/30 pb-3 mb-6 md:mb-8">
                  <h2 className="font-playfair text-[24px] md:text-[32px] text-[#c9a84c] tracking-wide">
                    {category.name}
                  </h2>
                  <p className="font-futura text-[15px] md:text-[18px] text-[#a4a3a3] font-light">
                    {category.description}
                  </p>
                </div>

                {/* 4-column Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[12px] md:gap-x-[20px] gap-y-[25px] md:gap-y-[40px] w-full">
                  {categoryServices.map((s) => (
                    <Link
                      href={`/services/${s.slug}`}
                      key={s.id}
                      className="flex flex-col w-full group cursor-pointer"
                    >
                      {/* Responsive Card Wrapper without fixed pixel widths */}
                      <div className="relative w-full aspect-[4/5] sm:aspect-square border border-[#c9a84c]/50 rounded-[9px] overflow-hidden mb-[10px] md:mb-[20px] shadow-[0_4px_20px_rgba(201,168,76,0.05)]">
                        <Image
                          src={s.image}
                          alt={s.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content Card Pad */}
                      <div className="flex flex-col items-center text-center w-full px-1 md:px-2 font-futura">
                        <p className="text-[#c9a84c] text-[9px] md:text-[12px] font-[600] tracking-[1px] md:tracking-[2px] uppercase mb-[2px] md:mb-[6px]">
                          {category.name}
                        </p>
                        <p className="text-white text-[14px] sm:text-[18px] md:text-[20px] font-[600] mb-[2px] md:mb-[8px] group-hover:text-[#c9a84c] transition-colors leading-snug">
                          {s.name}
                        </p>
                        <p className="text-[#a4a3a3] text-[12px] sm:text-[14px] md:text-[15px] font-[300] tracking-wider">
                          ₹{parseInt(s.price.toString()).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
