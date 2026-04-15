'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-playfair text-4xl font-semibold text-gold">
          Something went wrong
        </h2>
        <p className="max-w-md font-cormorant text-xl text-mint">
          We apologize for the inconvenience. Please try again or return to the
          home page.
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={reset} variant="primary" size="lg">
          Try again
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <a href="/">Go home</a>
        </Button>
      </div>
    </div>
  );
}
