export interface Product {
  id: string;
  name: string;
  category: 'bags' | 'heels' | 'combos';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  benefits: string[];
  useCases: string[];
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
}
