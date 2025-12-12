import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

const MOCK_ORDERS = [
  {
    id: "ORD-001",
    store: "Print Master",
    date: "2023-10-25",
    status: "COMPLETED",
    total: "$5.50",
    items: 2,
  },
  {
    id: "ORD-002",
    store: "Quick Copy",
    date: "2023-10-28",
    status: "PROCESSING",
    total: "$12.00",
    items: 1,
  },
];

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">My Orders</h1>

      <div className="grid gap-4">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold">{order.store}</span>
                <span className="text-muted-foreground text-sm">
                  Order #{order.id} • {order.date}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="font-bold">{order.total}</div>
                  <div className="text-muted-foreground text-sm">
                    {order.items} items
                  </div>
                </div>
                <Badge
                  variant={
                    order.status === "COMPLETED" ? "default" : "secondary"
                  }
                >
                  {order.status}
                </Badge>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
