import { createMetadata } from '@/config/seo';
import BookingForm from '@/components/booking/BookingForm';

export const metadata = createMetadata({
  title: 'Book Appointment – SHOW OFF Salon',
  description:
    'Reserve your chair with a master craftsman. Each booking begins with a personalised consultation.',
  path: '/book',
});

export default function BookPage() {
  return (
    <div className="py-section">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-white md:text-5xl">
          <span className="text-gold">Book</span> Your Appointment
        </h1>
        <p className="max-w-xl font-poppins text-base text-salon-muted">
          Select a service, pick your preferred date &amp; time, and we&apos;ll take care of the
          rest.
        </p>
      </div>

      <BookingForm />
    </div>
  );
}
