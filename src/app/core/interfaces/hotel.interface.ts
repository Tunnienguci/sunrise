export interface Hotel {
  id: string;
  name: string;
  location: string;
  country: string; // Added for Asian region support
  region: 'Asia' | 'Europe' | 'America' | 'Africa' | 'Oceania'; // Explicit region
  price: number;
  rating: number;
  imageUrl: string;
  gallery: string[]; // For detail page
  type: HotelType;
  amenities: string[];
  description: string;
  shortDescription: string;
  featured: boolean;
  coordinates?: { lat: number; lng: number };

  // Detailed info for child routes
  rooms: Room[];
  reviews: Review[];
  policies: string[];
}

export interface Room {
  id: string;
  name: string;
  price: number;
  currency: string;
  size: string; // e.g. "158m²"
  occupancy: number; // max guests
  bedType: string;
  bedrooms?: number;
  view?: string;
  description?: string;
  amenities: string[];
  imageUrl: string;
  images?: string[]; // gallery images for detail view
}

export interface Review {
  id: string;
  author: string;
  avatar: string; // url
  rating: number;
  date: string;
  comment: string;
}

export type HotelType = 'minimalist' | 'luxury' | 'resort' | 'boutique' | 'business' | 'villa';

export interface HotelSearchParams {
  location: string;
  type: HotelType | '';
  priceMin?: number;
  priceMax?: number;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
}
