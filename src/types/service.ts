export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  shortDescription: string;
  price: number;
  priceLabel?: string;
  duration: number; // in minutes
  image: string;
  featured: boolean;
}

export type ServiceCategory =
  | 'haircuts'
  | 'coloring'
  | 'spa'
  | 'bridal'
  | 'treatments'
  | 'grooming';

export interface ServiceCategoryInfo {
  slug: ServiceCategory;
  name: string;
  description: string;
}
