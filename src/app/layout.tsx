import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Poppins, Syne, IM_Fell_English, Wittgenstein } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { createMetadata } from '@/config/seo';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

const imFell = IM_Fell_English({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-im-fell',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const wittgenstein = Wittgenstein({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-wittgenstein',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${imFell.variable} ${wittgenstein.variable}`}
    >
      <body className="min-h-screen w-screen overflow-x-hidden bg-black text-white antialiased">
        <Navbar />
        <main className="w-full pt-[114px] lg:pt-[146px] pb-[100px] px-4 sm:px-6 lg:px-12">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
