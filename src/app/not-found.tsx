import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-playfair text-[120px] font-bold leading-none text-gold/20">
          404
        </p>
        <h1 className="font-playfair text-4xl font-semibold text-gold">
          Page Not Found
        </h1>
        <p className="max-w-md font-cormorant text-xl text-mint">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us guide you back.
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" size="lg" asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <Link href="/services">View Services</Link>
        </Button>
      </div>
    </div>
  );
}
