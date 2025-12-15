import { Store } from "@/shared/models/store.model";

export const MOCK_STORES: Store[] = [
  {
    id: "1",
    name: "Print Zone Dhaka",
    description: "Premium printing services for students and professionals.",
    address: "12/A Dhanmondi, Dhaka",
    location: { lat: 23.7461, lng: 90.3742 },
    rating: 4.8,
    reviewCount: 120,
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "09:00", close: "21:00" },
      tuesday: { open: "09:00", close: "21:00" },
      wednesday: { open: "09:00", close: "21:00" },
      thursday: { open: "09:00", close: "21:00" },
      friday: { open: "14:00", close: "21:00" },
      saturday: { open: "09:00", close: "21:00" },
      sunday: { open: "09:00", close: "21:00" },
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
        basePrice: 5,
        slabs: [
          { min: 1, max: 50, price: 5 },
          { min: 51, max: 200, price: 4 },
          { min: 201, max: null, price: 3.5 },
        ],
      },
      color: {
        basePrice: 15,
        slabs: [
          { min: 1, max: 20, price: 15 },
          { min: 21, max: 100, price: 12 },
          { min: 101, max: null, price: 10 },
        ],
      },
      doublesidedMultiplier: 1.6,
      binding: {
        none: 0,
        staple: 10,
        spiral: 30,
        hardcover: 150,
      },
      delivery: {
        baseFee: 60,
        perKm: 10,
        freeDeliveryDistance: 2,
      },
    },
  },
  {
    id: "2",
    name: "Student Copy Center",
    description: "Affordable printing for students in Nilkhet.",
    address: "Nilkhet, Dhaka",
    location: { lat: 23.7335, lng: 90.3854 },
    rating: 4.5,
    reviewCount: 350,
    images: [
      "https://images.unsplash.com/photo-1504270997636-07dd55d76d53?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "08:00", close: "22:00" },
      tuesday: { open: "08:00", close: "22:00" },
      wednesday: { open: "08:00", close: "22:00" },
      thursday: { open: "08:00", close: "22:00" },
      friday: { open: "08:00", close: "12:00" },
      saturday: { open: "08:00", close: "22:00" },
      sunday: { open: "08:00", close: "22:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: true,
      urgentService: false,
    },
    pricing: {
      bw: {
        basePrice: 3,
        slabs: [
          { min: 1, max: 100, price: 3 },
          { min: 101, max: 500, price: 2.5 },
          { min: 501, max: null, price: 2 },
        ],
      },
      color: {
        basePrice: 10,
        slabs: [
          { min: 1, max: 50, price: 10 },
          { min: 51, max: null, price: 8 },
        ],
      },
      doublesidedMultiplier: 1.5,
      binding: {
        none: 0,
        staple: 5,
        spiral: 25,
        hardcover: 120,
      },
      delivery: {
        baseFee: 50,
        perKm: 15,
        freeDeliveryDistance: 1,
      },
    },
  },
  {
    id: "3",
    name: "Banani Digital Press",
    description: "High quality digital printing and design services.",
    address: "Road 11, Banani, Dhaka",
    location: { lat: 23.7937, lng: 90.4066 },
    rating: 4.9,
    reviewCount: 85,
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "10:00", close: "20:00" },
      saturday: { open: "10:00", close: "20:00" },
      sunday: { open: "10:00", close: "20:00" },
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
        basePrice: 8,
        slabs: [
          { min: 1, max: 20, price: 8 },
          { min: 21, max: null, price: 6 },
        ],
      },
      color: {
        basePrice: 25,
        slabs: [
          { min: 1, max: 10, price: 25 },
          { min: 11, max: 50, price: 20 },
          { min: 51, max: null, price: 18 },
        ],
      },
      doublesidedMultiplier: 1.8,
      binding: {
        none: 0,
        staple: 15,
        spiral: 40,
        hardcover: 200,
      },
      delivery: {
        baseFee: 80,
        perKm: 12,
        freeDeliveryDistance: 3,
      },
    },
  },
  {
    id: "4",
    name: "Uttara Print Hub",
    description: "Your one stop shop for all printing needs in Uttara.",
    address: "Sector 7, Uttara, Dhaka",
    location: { lat: 23.8728, lng: 90.3984 },
    rating: 4.6,
    reviewCount: 210,
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "09:00", close: "22:00" },
      tuesday: { open: "09:00", close: "22:00" },
      wednesday: { open: "09:00", close: "22:00" },
      thursday: { open: "09:00", close: "22:00" },
      friday: { open: "16:00", close: "22:00" },
      saturday: { open: "09:00", close: "22:00" },
      sunday: { open: "09:00", close: "22:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: true,
      urgentService: false,
    },
    pricing: {
      bw: {
        basePrice: 4,
        slabs: [
          { min: 1, max: 50, price: 4 },
          { min: 51, max: null, price: 3.5 },
        ],
      },
      color: {
        basePrice: 12,
        slabs: [
          { min: 1, max: 30, price: 12 },
          { min: 31, max: null, price: 10 },
        ],
      },
      doublesidedMultiplier: 1.6,
      binding: {
        none: 0,
        staple: 10,
        spiral: 35,
        hardcover: 180,
      },
      delivery: {
        baseFee: 70,
        perKm: 8,
        freeDeliveryDistance: 2.5,
      },
    },
  },
  {
    id: "5",
    name: "Mirpur 10 Xerox Point",
    description: "Fast and cheap photocopy and printing.",
    address: "Mirpur 10 Circle, Dhaka",
    location: { lat: 23.8071, lng: 90.3686 },
    rating: 4.3,
    reviewCount: 400,
    images: [
      "https://images.unsplash.com/photo-1504270997636-07dd55d76d53?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "08:00", close: "23:00" },
      tuesday: { open: "08:00", close: "23:00" },
      wednesday: { open: "08:00", close: "23:00" },
      thursday: { open: "08:00", close: "23:00" },
      friday: { open: "08:00", close: "12:00" },
      saturday: { open: "08:00", close: "23:00" },
      sunday: { open: "08:00", close: "23:00" },
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
        basePrice: 3.5,
        slabs: [
          { min: 1, max: 100, price: 3.5 },
          { min: 101, max: null, price: 3 },
        ],
      },
      color: {
        basePrice: 12,
        slabs: [
          { min: 1, max: 50, price: 12 },
          { min: 51, max: null, price: 10 },
        ],
      },
      doublesidedMultiplier: 1.5,
      binding: {
        none: 0,
        staple: 5,
        spiral: 30,
        hardcover: 140,
      },
      delivery: {
        baseFee: 0,
        perKm: 0,
        freeDeliveryDistance: 0,
      },
    },
  },
  {
    id: "6",
    name: "Gulshan Graphics",
    description: "Professional graphics and printing solutions.",
    address: "Gulshan 1, Dhaka",
    location: { lat: 23.7786, lng: 90.4165 },
    rating: 4.7,
    reviewCount: 95,
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "09:00", close: "20:00" },
      tuesday: { open: "09:00", close: "20:00" },
      wednesday: { open: "09:00", close: "20:00" },
      thursday: { open: "09:00", close: "20:00" },
      friday: { open: "09:00", close: "20:00" },
      saturday: { open: "09:00", close: "20:00" },
      sunday: { open: "09:00", close: "20:00" },
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
        basePrice: 10,
        slabs: [
          { min: 1, max: 10, price: 10 },
          { min: 11, max: null, price: 8 },
        ],
      },
      color: {
        basePrice: 30,
        slabs: [
          { min: 1, max: 10, price: 30 },
          { min: 11, max: null, price: 25 },
        ],
      },
      doublesidedMultiplier: 1.9,
      binding: {
        none: 0,
        staple: 20,
        spiral: 50,
        hardcover: 250,
      },
      delivery: {
        baseFee: 100,
        perKm: 15,
        freeDeliveryDistance: 5,
      },
    },
  },
  {
    id: "7",
    name: "Farmgate Fast Print",
    description: "Quick service for busy people.",
    address: "Farmgate, Dhaka",
    location: { lat: 23.7561, lng: 90.3872 },
    rating: 4.4,
    reviewCount: 320,
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "08:00", close: "22:00" },
      tuesday: { open: "08:00", close: "22:00" },
      wednesday: { open: "08:00", close: "22:00" },
      thursday: { open: "08:00", close: "22:00" },
      friday: { open: "15:00", close: "22:00" },
      saturday: { open: "08:00", close: "22:00" },
      sunday: { open: "08:00", close: "22:00" },
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
        basePrice: 4,
        slabs: [
          { min: 1, max: 50, price: 4 },
          { min: 51, max: null, price: 3.5 },
        ],
      },
      color: {
        basePrice: 15,
        slabs: [
          { min: 1, max: 20, price: 15 },
          { min: 21, max: null, price: 12 },
        ],
      },
      doublesidedMultiplier: 1.6,
      binding: {
        none: 0,
        staple: 8,
        spiral: 30,
        hardcover: 150,
      },
      delivery: {
        baseFee: 60,
        perKm: 10,
        freeDeliveryDistance: 2,
      },
    },
  },
  {
    id: "8",
    name: "Mohammadpur Art & Print",
    description: "Specialized in art prints and large formats.",
    address: "Ring Road, Mohammadpur, Dhaka",
    location: { lat: 23.7658, lng: 90.3584 },
    rating: 4.6,
    reviewCount: 150,
    images: [
      "https://images.unsplash.com/photo-1504270997636-07dd55d76d53?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "10:00", close: "20:00" },
      saturday: { open: "10:00", close: "20:00" },
      sunday: { open: "10:00", close: "20:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: true,
      urgentService: false,
    },
    pricing: {
      bw: {
        basePrice: 5,
        slabs: [
          { min: 1, max: 30, price: 5 },
          { min: 31, max: null, price: 4 },
        ],
      },
      color: {
        basePrice: 18,
        slabs: [
          { min: 1, max: 15, price: 18 },
          { min: 16, max: null, price: 15 },
        ],
      },
      doublesidedMultiplier: 1.7,
      binding: {
        none: 0,
        staple: 10,
        spiral: 35,
        hardcover: 160,
      },
      delivery: {
        baseFee: 50,
        perKm: 12,
        freeDeliveryDistance: 2,
      },
    },
  },
  {
    id: "9",
    name: "Bashundhara City Print",
    description: "Convenient printing inside Bashundhara City.",
    address: "Panthapath, Dhaka",
    location: { lat: 23.7511, lng: 90.3934 },
    rating: 4.8,
    reviewCount: 280,
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "10:00", close: "21:00" },
      tuesday: { open: "10:00", close: "21:00" },
      wednesday: { open: "10:00", close: "21:00" },
      thursday: { open: "10:00", close: "21:00" },
      friday: { open: "14:00", close: "21:00" },
      saturday: { open: "10:00", close: "21:00" },
      sunday: { open: "10:00", close: "21:00" },
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
        basePrice: 6,
        slabs: [
          { min: 1, max: 50, price: 6 },
          { min: 51, max: null, price: 5 },
        ],
      },
      color: {
        basePrice: 20,
        slabs: [
          { min: 1, max: 20, price: 20 },
          { min: 21, max: null, price: 18 },
        ],
      },
      doublesidedMultiplier: 1.6,
      binding: {
        none: 0,
        staple: 12,
        spiral: 40,
        hardcover: 180,
      },
      delivery: {
        baseFee: 70,
        perKm: 10,
        freeDeliveryDistance: 3,
      },
    },
  },
  {
    id: "10",
    name: "Old Dhaka Press",
    description: "Traditional printing with modern equipment.",
    address: "Lalbagh, Dhaka",
    location: { lat: 23.7189, lng: 90.3881 },
    rating: 4.2,
    reviewCount: 180,
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "09:00", close: "20:00" },
      tuesday: { open: "09:00", close: "20:00" },
      wednesday: { open: "09:00", close: "20:00" },
      thursday: { open: "09:00", close: "20:00" },
      friday: { open: "09:00", close: "12:00" },
      saturday: { open: "09:00", close: "20:00" },
      sunday: { open: "09:00", close: "20:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: true,
      delivery: true,
      urgentService: false,
    },
    pricing: {
      bw: {
        basePrice: 3,
        slabs: [
          { min: 1, max: 100, price: 3 },
          { min: 101, max: null, price: 2.5 },
        ],
      },
      color: {
        basePrice: 10,
        slabs: [
          { min: 1, max: 50, price: 10 },
          { min: 51, max: null, price: 8 },
        ],
      },
      doublesidedMultiplier: 1.5,
      binding: {
        none: 0,
        staple: 5,
        spiral: 25,
        hardcover: 130,
      },
      delivery: {
        baseFee: 50,
        perKm: 15,
        freeDeliveryDistance: 1,
      },
    },
  },
];

// Helper to generate more stores
for (let i = 11; i <= 50; i++) {
  MOCK_STORES.push({
    id: i.toString(),
    name: `Dhaka Print Shop ${i}`,
    description: `Reliable printing service in Dhaka area ${i}.`,
    address: `Road ${i % 20}, Sector ${i % 10}, Dhaka`,
    location: {
      lat: 23.7 + Math.random() * 0.2,
      lng: 90.3 + Math.random() * 0.2,
    },
    rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 500),
    images: [
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    ],
    openingHours: {
      monday: { open: "09:00", close: "21:00" },
      tuesday: { open: "09:00", close: "21:00" },
      wednesday: { open: "09:00", close: "21:00" },
      thursday: { open: "09:00", close: "21:00" },
      friday: { open: "14:00", close: "21:00" },
      saturday: { open: "09:00", close: "21:00" },
      sunday: { open: "09:00", close: "21:00" },
    },
    services: {
      colorPrinting: true,
      bwPrinting: true,
      binding: Math.random() > 0.2,
      delivery: Math.random() > 0.3,
      urgentService: Math.random() > 0.5,
    },
    pricing: {
      bw: {
        basePrice: 3 + Math.floor(Math.random() * 5),
        slabs: [
          { min: 1, max: 50, price: 3 + Math.floor(Math.random() * 5) },
          { min: 51, max: null, price: 2 + Math.floor(Math.random() * 4) },
        ],
      },
      color: {
        basePrice: 10 + Math.floor(Math.random() * 10),
        slabs: [
          { min: 1, max: 20, price: 10 + Math.floor(Math.random() * 10) },
          { min: 21, max: null, price: 8 + Math.floor(Math.random() * 8) },
        ],
      },
      doublesidedMultiplier: 1.5 + Number((Math.random() * 0.5).toFixed(1)),
      binding: {
        none: 0,
        staple: 5 + Math.floor(Math.random() * 10),
        spiral: 25 + Math.floor(Math.random() * 20),
        hardcover: 120 + Math.floor(Math.random() * 100),
      },
      delivery: {
        baseFee: 40 + Math.floor(Math.random() * 50),
        perKm: 8 + Math.floor(Math.random() * 10),
        freeDeliveryDistance: 1 + Math.floor(Math.random() * 4),
      },
    },
  });
}
