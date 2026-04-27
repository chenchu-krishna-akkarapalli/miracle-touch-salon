import Link from 'next/link';
import { NAV_LINKS } from '@/config/constants';

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-playfair text-2xl font-bold text-gold">
              SHOW OFF
            </Link>
            <p className="font-cormorant text-lg text-mint leading-relaxed">
              Since 1995, Bengaluru&apos;s most cherished destination for hair artistry.
              We blend century-old craft with modern science.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-lg font-semibold text-gold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-lg font-semibold text-gold">
              Contact
            </h3>
            <address className="flex flex-col gap-3 not-italic">
              <p className="font-poppins text-sm text-white/70">
                SHOW OFF Salon
              </p>
              <p className="font-poppins text-sm text-white/70">
                Mahadevapura, Pai Layout
              </p>
              <p className="font-poppins text-sm text-white/70">
                Bengaluru, Karnataka
              </p>
              <a
                href="tel:+919876543210"
                className="font-poppins text-sm text-gold hover:text-gold-light"
              >
                +91 98765 43210
              </a>
            </address>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-lg font-semibold text-gold">
              Opening Hours
            </h3>
            <div className="flex flex-col gap-3">
              <p className="font-cormorant text-lg text-white">
                Everyday
              </p>
              <p className="font-cormorant text-3xl font-semibold text-mint">
                9:00 AM – 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-gold/10 pt-8 md:flex-row md:justify-between">
          <p className="font-poppins text-sm text-white/50">
            &copy; {new Date().getFullYear()} SHOW OFF Salon. All rights reserved.
          </p>
          <p className="font-poppins text-sm text-mint/60">
            Est. 1995 · SHOW OFF
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
