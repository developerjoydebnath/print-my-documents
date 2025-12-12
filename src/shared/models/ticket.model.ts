export interface Ticket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  priority: "LOW" | "MEDIUM" | "HIGH";
  createdAt: Date;
  updatedAt: Date;
  responses: TicketResponse[];
}

export interface TicketResponse {
  id: string;
  ticketId: string;
  userId: string; // Support agent or user
  message: string;
  createdAt: Date;
}
