import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICE_CATEGORIES } from '@/config/constants';
import Link from 'next/link';
import { createMetadata } from '@/config/seo';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.name} – SHOW OFF Salon`,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Other services for "Other Services" section
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  
  const categoryName = SERVICE_CATEGORIES.find(c => c.slug === service.category)?.name || service.category;

  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      <div className="flex flex-col items-center gap-[60px] md:gap-[100px]">
        {/* Service Detail Top Section */}
        <section className="w-full max-w-[997px] flex flex-col gap-[36px] items-start">
          <div className="w-full flex gap-[44px] items-start flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-[415px] h-[400px] md:h-[630px] flex-shrink-0 border border-[#c9a84c] rounded-[9px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Service Info */}
            <div className="flex flex-col gap-[25px] w-full md:w-[538px] flex-shrink-0">
              <div className="flex flex-col gap-[25px] text-white">
                <div className="flex items-center gap-[4px] text-[16px]">
                  <span className="font-playfair italic">Service</span>
                  <span className="font-playfair text-[#c9a84c] font-semibold">View</span>
                </div>
                
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-futura font-[600] text-[34px] leading-tight">
                    {service.name}
                  </h1>
                  <p className="font-futura font-[300] text-[20px] tracking-[-0.8px] text-[#c9a84c]">
                    ?{service.price.toLocaleString('en-IN')}
                  </p>
                </div>

                <p className="font-futura font-[500] text-[16px] uppercase">
                  {service.name} – {categoryName}
                </p>

                <div className="flex flex-col gap-[10px] text-[16px] font-futura font-[300]">
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Categories:</span>
                    <span className="flex-1">{categoryName}</span>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Duration:</span>
                    <span className="flex-1">{service.duration} mins</span>
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
                  <p className="font-[500] uppercase">{service.name} – {categoryName}</p>
                  <div className="flex flex-col gap-[4px]">
                    <p>{service.shortDescription}</p>
                    <p className="mt-2">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    href={`/book?service=${service.slug}`}
                    className="inline-flex h-14 w-fit items-center gap-3 rounded-[9px] border border-[#c9a84c] bg-[#c9a84c] px-8 text-black transition-all duration-300 hover:bg-[#d4b45d] font-futura font-[600] text-[16px] uppercase tracking-widest"
                  >
                    <span>Book This Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="w-full flex flex-col items-center gap-[50px]">
          <h2 className="flex items-center gap-[9px] text-[32px]">
            <span className="font-playfair font-semibold text-[#c9a84c]">Other</span>
            <span className="font-playfair italic text-white">Services</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[25px] w-full">
            {otherServices.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.id} className="flex flex-col items-center w-full group cursor-pointer">
                <div className="relative w-full aspect-[4/5] sm:aspect-square border border-[#c9a84c] rounded-[9px] overflow-hidden mb-[15px]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content Card Pad */}
                <div className="flex flex-col items-center text-center w-full px-1 md:px-2 font-futura">
                  <p className="text-[#c9a84c] text-[9px] md:text-[12px] font-[600] tracking-[1px] md:tracking-[2px] uppercase mb-[2px] md:mb-[6px]">
                    {SERVICE_CATEGORIES.find(c => c.slug === s.category)?.name || s.category}
                  </p>
                  <p className="text-white text-[14px] sm:text-[18px] md:text-[20px] font-[600] mb-[2px] md:mb-[8px] group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {s.name}
                  </p>
                  <p className="text-[#a4a3a3] text-[12px] sm:text-[14px] md:text-[15px] font-[300] tracking-wider">
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
