import { Button } from "@/shared/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Eye } from "lucide-react";
import Link from "next/link";
import { OrderStatus, StatusBadge } from "./StatusBadge";

// Mock Data
const MOCK_ORDERS: any[] = [
  {
    id: "ORD-001",
    date: "2023-10-25",
    storeName: "Dhaka Print Hub",
    items: 3,
    total: 450,
    status: "processing",
  },
  {
    id: "ORD-002",
    date: "2023-10-24",
    storeName: "Chittagong Press",
    items: 1,
    total: 120,
    status: "ready",
  },
  {
    id: "ORD-003",
    date: "2023-10-20",
    storeName: "Sylhet Graphics",
    items: 5,
    total: 890,
    status: "delivered",
  },
  {
    id: "ORD-004",
    date: "2023-10-15",
    storeName: "Dhaka Print Hub",
    items: 2,
    total: 250,
    status: "cancelled",
  },
];

export function OrderList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Store</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_ORDERS.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.storeName}</TableCell>
              <TableCell>{order.items} files</TableCell>
              <TableCell>৳{order.total}</TableCell>
              <TableCell>
                <StatusBadge status={order.status as OrderStatus} />
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/orders/${order.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
