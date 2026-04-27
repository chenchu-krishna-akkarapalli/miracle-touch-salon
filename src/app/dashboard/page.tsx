import { createMetadata } from '@/config/seo';

export const metadata = createMetadata({
  title: 'Dashboard – SHOW OFF Salon',
  description: 'View your upcoming appointments and booking history.',
  path: '/dashboard',
});

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Upcoming Appointments */}
      <section>
        <h2 className="mb-4 font-playfair text-2xl font-semibold text-white">
          Upcoming Appointments
        </h2>
        <div className="rounded-lg border border-gold/30 p-8 text-center">
          <p className="font-poppins text-base text-salon-muted">
            No upcoming appointments. Book your next session now.
          </p>
        </div>
      </section>

      {/* Past Bookings */}
      <section>
        <h2 className="mb-4 font-playfair text-2xl font-semibold text-white">
          Booking History
        </h2>
        <div className="rounded-lg border border-gold/30 p-8 text-center">
          <p className="font-poppins text-base text-salon-muted">
            Your booking history will appear here.
          </p>
        </div>
      </section>
    </div>
  );
}
