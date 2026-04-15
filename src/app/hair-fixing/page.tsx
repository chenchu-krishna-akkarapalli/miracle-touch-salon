import Image from 'next/image';
import Link from 'next/link';
import { createMetadata } from '@/config/seo';
import type { Metadata } from 'next';
import { SERVICES, SERVICE_CATEGORIES } from '@/config/constants';

export const metadata: Metadata = createMetadata({
  title: 'Hair Fixing â€“ Miracle Touch Salon',
  description: 'Experience our professional hair fixing and replacement services. Reclaim your confidence with a natural look.',
  path: '/hair-fixing',
});

export default function HairFixingPage() {
  const relatedServices = SERVICES.slice(0, 3);

  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      <div className="flex flex-col items-center gap-[60px] md:gap-[100px]">
        {/* Detail Top Section */}
        <section className="w-full max-w-[997px] flex flex-col gap-[36px] items-start">
          <div className="w-full flex gap-[44px] items-start flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-[415px] h-[400px] md:h-[630px] flex-shrink-0 border border-[#c9a84c] rounded-[9px] overflow-hidden">
              <Image
                src="/images/gallery/7.png"
                alt="Hair Fixing Service"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-[25px] w-full md:w-[538px] flex-shrink-0">
              <div className="flex flex-col gap-[25px] text-white">
                <div className="flex items-center gap-[4px] text-[16px]">
                  <span className="font-playfair italic">Special</span>
                  <span className="font-playfair text-[#c9a84c] font-semibold">Service</span>
                </div>
                
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-futura font-[600] text-[34px] leading-tight">
                    Professional Hair Fixing
                  </h1>
                </div>

                <p className="font-futura font-[500] text-[16px] uppercase">
                  Advanced Hair Replacement
                </p>

                <div className="flex flex-col gap-[10px] text-[16px] font-futura font-[300]">
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Categories:</span>
                    <span className="flex-1">Restoration & Styling</span>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Duration:</span>
                    <span className="flex-1">Varies (Consultation Required)</span>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="flex flex-col gap-[20px] w-full">
                <div className="bg-white inline-flex items-center px-[10px] py-[5px] w-max">
                  <span className="font-playfair italic font-medium text-[16px] text-black">
                    Description
                  </span>
                </div>
                
                <div className="flex flex-col gap-[10px] text-white text-[16px] font-futura font-[300] leading-[1.469]">
                  <p className="font-[500] uppercase">The Art Behind Every Transformation</p>
                  <div className="flex flex-col gap-[4px]">
                    <p>Reclaim your confidence with a natural look.</p>
                    <p className="mt-2">Our hair fixing specialists use state-of-the-art non-surgical techniques alongside premium quality hair systems perfectly matched to your natural color and texture. We pride ourselves on creating an undetectable finish that seamlessly integrates into your daily life.</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    href={`/book?service=fixing`}
                    className="inline-flex h-14 w-fit items-center gap-3 rounded-[9px] border border-[#c9a84c] bg-[#c9a84c] px-8 text-black transition-all duration-300 hover:bg-[#d4b45d] font-futura font-[600] text-[16px] uppercase tracking-widest"
                  >
                    <span>Book A Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="w-full flex flex-col items-center gap-[50px]">
          <h2 className="flex items-center gap-[9px] text-[28px] md:text-[32px]">
            <span className="font-playfair font-semibold text-[#c9a84c]">Related</span>
            <span className="font-playfair italic text-white">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[30px] w-full">
            {relatedServices.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.id} className="flex flex-col items-center w-full group cursor-pointer">
                <div className="relative w-full md:w-[413px] aspect-square border border-[#c9a84c] rounded-[9px] overflow-hidden mb-[25px]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center text-center max-w-[245px] font-futura">
                  <p className="text-white text-[12px] font-[300] mb-[10px] group-hover:text-[#c9a84c] transition-colors uppercase">
                    {SERVICE_CATEGORIES.find(c => c.slug === s.category)?.name || s.category}
                  </p>
                  <p className="text-white text-[18px] md:text-[20px] font-[600] mb-[10px] group-hover:text-[#c9a84c] transition-colors">
                    {s.name}
                  </p>
                  <p className="text-[#c9a84c] text-[12px] font-[300] tracking-[-0.48px]">
                    ₹{s.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
