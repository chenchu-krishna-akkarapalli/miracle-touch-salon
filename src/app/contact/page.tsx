import Image from 'next/image';
import { createMetadata } from '@/config/seo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingSection from '@/components/sections/BookingSection';

export const metadata = createMetadata({
  title: 'Contact Us – SHOW OFF Salon',
  description: 'Get in touch with SHOW OFF Salon. Find our location, hours of operation, and contact details.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      {/* Hero Banner */}
      <section>
        <div className="relative w-full h-[220px] md:h-[384px] rounded-lg overflow-hidden">
          <Image
            src="/images/products/products-banner-img.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="flex flex-col items-center gap-[60px] md:gap-[100px]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[32px] tracking-[1.92px]">
            <span className="font-playfair text-[#c9a84c]">Contact </span>
            <span className="font-playfair italic text-white">Us</span>
          </h1>
        </div>

        <div className="w-full max-w-[1300px] px-4 md:px-8 mb-[60px] overflow-hidden">
           <BookingSection />
        </div>

        {/* Maps Location */}
        <section className="w-full max-w-[1300px] px-4 md:px-8 mb-[100px] flex flex-col items-center gap-[40px]">
          <h2 className="flex items-center gap-[9px] text-[28px] md:text-[32px]">
            <span className="font-playfair font-semibold text-[#c9a84c]">Find</span>
            <span className="font-playfair italic text-white">Us</span>
          </h2>
          <div className="w-full h-[450px] md:h-[550px] overflow-hidden rounded-[9px] border border-[#c9a84c]/20 bg-[#111] p-[6px]">
            <div className="w-full h-full rounded-[6px] overflow-hidden bg-black relative shadow-[inset_0px_4px_4px_0px_rgba(201,168,76,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.488424177583!2d77.68065077465682!3d12.980649714856037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116c52a0a653%3A0xa1ea0bc0e9b922a6!2sMahadevapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713256036111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(85%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
