export interface Transaction {
  id: string;
  userId: string;
  orderId?: string;
  amount: number;
  type: "DEBIT" | "CREDIT";
  status: "SUCCESS" | "PENDING" | "FAILED";
  method: "CARD" | "UPI" | "BKASH" | "NAGAD" | "ROCKET" | "COD";
  createdAt: Date;
}
