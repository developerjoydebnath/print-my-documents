import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

export type OrderStatus =
  | "pending"
  | "processing"
  | "ready"
  | "delivered"
  | "cancelled";

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles = {
    pending:
      "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 border-yellow-200",
    processing:
      "bg-blue-100 text-blue-800 hover:bg-blue-100/80 border-blue-200",
    ready: "bg-green-100 text-green-800 hover:bg-green-100/80 border-green-200",
    delivered: "bg-gray-100 text-gray-800 hover:bg-gray-100/80 border-gray-200",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-100/80 border-red-200",
  };

  const labels = {
    pending: "Pending",
    processing: "Processing",
    ready: "Ready for Pickup",
    delivered: "Delivered",
    cancelled: "Cancelled",
  };

  return (
    <Badge variant="outline" className={cn(styles[status], className)}>
      {labels[status]}
    </Badge>
  );
}
