export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "ORDER" | "SYSTEM" | "PROMOTION";
  isRead: boolean;
  createdAt: Date;
  link?: string;
}
