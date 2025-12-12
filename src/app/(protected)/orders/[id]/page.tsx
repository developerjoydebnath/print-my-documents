import { OrderDetails } from "@/modules/orders/components/OrderDetails";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-6">
      <OrderDetails id={id} />
    </div>
  );
}
