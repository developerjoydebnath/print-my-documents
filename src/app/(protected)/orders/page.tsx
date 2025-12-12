import { OrderList } from "@/modules/orders/components/OrderList";

export default function OrdersPage() {
  return (
    <div className="container mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
        <p className="text-muted-foreground mt-1">
          Track and manage your print orders.
        </p>
      </div>

      <OrderList />
    </div>
  );
}
