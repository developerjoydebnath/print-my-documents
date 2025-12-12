import { Store } from "@/shared/models/store.model";

export const MOCK_STORES: Store[] = [
  {
    id: "1",
    name: "Dhaka Print Hub",
    description: "Premium printing services in Dhanmondi",
    address: "House 12, Road 5, Dhanmondi, Dhaka",
    location: { lat: 23.7461, lng: 90.3742 },
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80",
    ],
    openingHours: {
      mon: { open: "09:00", close: "20:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: true,
      urgentService: true,
    },
    pricing: {
      bw: {
        slabs: [
          { min: 0, max: 50, price: 5 },
          { min: 51, max: 100, price: 4 },
          { min: 101, max: null, price: 3 },
        ],
        basePrice: 5,
      },
      color: {
        slabs: [
          { min: 0, max: 50, price: 15 },
          { min: 51, max: 100, price: 12 },
          { min: 101, max: null, price: 10 },
        ],
        basePrice: 15,
      },
      binding: {
        none: 0,
        staple: 10,
        spiral: 40,
        hardcover: 150,
      },
      delivery: {
        baseFee: 60,
        perKm: 10,
        freeDeliveryDistance: 2,
      },
      doublesidedMultiplier: 1.6,
    },
  },
  {
    id: "2",
    name: "Chittagong Press",
    description: "Fast and affordable printing",
    address: "GEC Circle, Chittagong",
    location: { lat: 22.3569, lng: 91.7832 },
    rating: 4.5,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1504270997636-07dd555805b7?w=800&q=80",
    ],
    openingHours: {
      mon: { open: "10:00", close: "22:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: false,
      delivery: true,
      urgentService: false,
    },
    pricing: {
      bw: {
        slabs: [
          { min: 0, max: 100, price: 4 },
          { min: 101, max: null, price: 3.5 },
        ],
        basePrice: 4,
      },
      color: {
        slabs: [
          { min: 0, max: 50, price: 12 },
          { min: 51, max: null, price: 10 },
        ],
        basePrice: 12,
      },
      binding: {
        none: 0,
        staple: 5,
        spiral: 30,
        hardcover: 0, // Not available
      },
      delivery: {
        baseFee: 50,
        perKm: 8,
        freeDeliveryDistance: 1,
      },
      doublesidedMultiplier: 1.8,
    },
  },
  {
    id: "3",
    name: "Sylhet Graphics",
    description: "Best quality graphics and printing",
    address: "Zindabazar, Sylhet",
    location: { lat: 24.8949, lng: 91.8687 },
    rating: 4.7,
    reviewCount: 56,
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    ],
    openingHours: {
      mon: { open: "09:00", close: "21:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: false,
      urgentService: true,
    },
    pricing: {
      bw: {
        slabs: [{ min: 0, max: null, price: 6 }],
        basePrice: 6,
      },
      color: {
        slabs: [{ min: 0, max: null, price: 18 }],
        basePrice: 18,
      },
      binding: {
        none: 0,
        staple: 15,
        spiral: 50,
        hardcover: 200,
      },
      delivery: {
        baseFee: 0,
        perKm: 0,
        freeDeliveryDistance: 0,
      },
      doublesidedMultiplier: 1.5,
    },
  },
];
