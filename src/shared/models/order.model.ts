export interface Order {
  id: string;
  userId: string;
  storeId: string;
  status:
    | "PENDING"
    | "ACCEPTED"
    | "PRINTING"
    | "COMPLETED"
    | "READY_FOR_PICKUP"
    | "OUT_FOR_DELIVERY"
    | "DELIVERED"
    | "CANCELLED";
  totalAmount: number;
  currency: string;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
  deliveryMethod: "PICKUP" | "DELIVERY";
  deliveryAddress?: string;
  estimatedCompletionTime?: Date;
}

export interface OrderItem {
  id: string;
  documentId: string;
  config: PrintConfig;
  price: number;
}

export interface PrintConfig {
  colorMode: "BW" | "COLOR";
  paperSize: "A4" | "A5" | "LEGAL" | "LETTER";
  sides: "SINGLE" | "DUPLEX";
  binding?: string;
  copies: number;
  notes?: string;
}
