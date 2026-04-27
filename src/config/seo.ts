import type { Metadata } from 'next';

export const siteConfig = {
  name: 'SHOW OFF',
  description:
    'Premium barbershop and salon in Bangalore. Hair fixing, styling, coloring, and spa treatments by celebrity stylist Mr. Saha since 1995.',
  url: 'https://SHOW OFFsaloon.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'salon bangalore',
    'hair fixing bangalore',
    'barbershop bangalore',
    'SHOW OFF salon',
    'hair coloring',
    'bridal styling',
    'keratin treatment',
    'hair spa',
  ],
};

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata(opts: CreateMetadataOptions = {}): Metadata {
  const title = opts.title ?? siteConfig.name;
  const description = opts.description ?? siteConfig.description;
  const url = opts.path ? `${siteConfig.url}${opts.path}` : siteConfig.url;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: 'SHOW OFF Salon' }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
