'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/config/constants';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-black/[0.83] backdrop-blur-sm">
      <nav
        className="flex h-16 lg:h-24 w-full items-center justify-between px-4 sm:px-6 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Left: Logo (mobile) / Nav links (desktop) */}
        <Link
          href="/"
          className="lg:hidden flex h-[60px] w-[107px] items-center justify-center bg-transparent"
          aria-label="SHOW OFF home"
        >
          <Image
            src="/images/logo.png"
            alt="SHOW OFF Logo"
            width={55}
            height={38}
            className="object-contain"
          />
        </Link>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-playfair text-[32px] transition-colors duration-200 hover:text-white ${pathname === link.href ? 'text-white' : 'text-gold'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo - desktop only (centered) */}
        <Link
          href="/"
          className="hidden lg:flex h-[59px] w-[107px] items-center justify-center bg-transparent"
          aria-label="SHOW OFF home"
        >
          <Image
            src="/images/logo.png"
            alt="SHOW OFF Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Right nav links (desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(3).map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-playfair text-[32px] transition-colors duration-200 hover:text-white ${pathname === link.href ? 'text-white' : 'text-gold'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Book Now + Hamburger (mobile) */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/book"
            className="font-futura text-[11px] uppercase tracking-widest border border-gold text-gold px-3 py-1.5 rounded-full hover:bg-gold hover:text-black transition-colors"
          >
            Book Now
          </Link>
          <button
            className="text-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/10 bg-black lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-playfair text-xl transition-colors duration-200 hover:text-white ${pathname === link.href ? 'text-white' : 'text-gold'
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
