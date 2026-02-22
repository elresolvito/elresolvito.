export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specificDetails: string;
  category: string;
  department: string;
  status: 'available' | 'unavailable';
  stock?: number;
}

export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  phone: string;
  location: string;
  rating: number;
  reviews: number;
  priceRange: string;
  availability: string;
}

export interface Rental {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  phone: string;
  rating: number;
  reviews: number;
}

export interface WholesaleOffer {
  id: number;
  title: string;
  description: string;
  image: string;
  originalPrice: number;
  offerPrice: number;
  minQuantity: number;
  supplier: string;
  phone: string;
  location: string;
  validUntil: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type TabType = 'products' | 'services' | 'rentals' | 'offers';
