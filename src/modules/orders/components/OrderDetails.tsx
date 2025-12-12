import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { ArrowLeft, Download, Printer } from "lucide-react";
import Link from "next/link";
import { OrderStatus, StatusBadge } from "./StatusBadge";

// Mock Data for a single order
const MOCK_ORDER_DETAILS = {
  id: "ORD-001",
  date: "2023-10-25 14:30",
  store: {
    name: "Dhaka Print Hub",
    address: "House 12, Road 5, Dhanmondi, Dhaka",
    phone: "+880 1711 000000",
  },
  status: "processing",
  items: [
    {
      id: "1",
      name: "Thesis_Final.pdf",
      config: "A4, Color, Double Sided, Spiral Binding",
      copies: 2,
      pages: 45,
      price: 350,
    },
    {
      id: "2",
      name: "Cover_Page.pdf",
      config: "A4, Color, Single Sided, No Binding",
      copies: 2,
      pages: 1,
      price: 40,
    },
  ],
  subtotal: 390,
  serviceFee: 20,
  discount: 0,
  total: 410,
  paymentMethod: "bKash",
  paymentStatus: "paid",
};

export function OrderDetails({ id }: { id: string }) {
  // In a real app, fetch order by ID
  const order = MOCK_ORDER_DETAILS;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Order #{id}</h1>
            <p className="text-muted-foreground text-sm">{order.date}</p>
          </div>
        </div>
        <StatusBadge
          status={order.status as OrderStatus}
          className="px-3 py-1 text-base"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.config}
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      {item.pages} pages x {item.copies} copies
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">৳{item.price}</p>
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto p-0 text-xs"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium">{order.store.name}</h4>
              <p className="text-muted-foreground text-sm">
                {order.store.address}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                {order.store.phone}
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  Contact Store
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>৳{order.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service Fee</span>
                <span>৳{order.serviceFee}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>-৳{order.discount}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>৳{order.total}</span>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="capitalize">{order.paymentMethod}</span>
                </div>
                <div className="mt-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Status</span>
                  <span className="font-medium text-green-600 capitalize">
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {order.status === "ready" && (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Printer className="h-8 w-8 text-green-600" />
                  <h3 className="font-semibold text-green-800">
                    Ready for Pickup
                  </h3>
                  <p className="text-sm text-green-700">
                    Your order is ready! Please visit the store to collect your
                    documents.
                  </p>
                  <div className="mt-2 rounded border border-green-200 bg-white p-3">
                    <p className="text-muted-foreground text-xs">Pickup Code</p>
                    <p className="font-mono text-xl font-bold tracking-widest">
                      8923
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
