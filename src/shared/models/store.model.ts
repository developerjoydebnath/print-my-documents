export interface PricingSlab {
  min: number;
  max: number | null; // null for infinity
  price: number;
}

export interface StorePricing {
  bw: {
    slabs: PricingSlab[];
    basePrice: number;
  };
  color: {
    slabs: PricingSlab[];
    basePrice: number;
  };
  binding: {
    none: number;
    staple: number;
    spiral: number;
    hardcover: number;
  };
  delivery: {
    baseFee: number;
    perKm: number;
    freeDeliveryDistance: number;
  };
  doublesidedMultiplier: number;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  images: string[];
  openingHours: {
    [key: string]: { open: string; close: string; closed?: boolean };
  };
  services: {
    colorPrinting: boolean;
    bwPrinting: boolean;
    binding: boolean;
    delivery: boolean;
    urgentService: boolean;
  };
  pricing: StorePricing;
  isFavorite?: boolean;
}
