import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "Order Delivered",
    description: "Your order #ORD-123 has been delivered",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    id: 2,
    title: "Out for Delivery",
    description: "Order #ORD-123 is out for delivery",
    time: "4 hours ago",
    icon: Truck,
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Printing Completed",
    description: "Dhaka Print Hub finished printing your documents",
    time: "5 hours ago",
    icon: Package,
    color: "text-orange-500",
  },
  {
    id: 4,
    title: "Order Accepted",
    description: "Dhaka Print Hub accepted your order",
    time: "6 hours ago",
    icon: Clock,
    color: "text-purple-500",
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <activity.icon className={`mr-4 h-4 w-4 ${activity.color}`} />
              <div className="ml-4 space-y-1">
                <p className="text-sm leading-none font-medium">
                  {activity.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {activity.description}
                </p>
              </div>
              <div className="text-muted-foreground ml-auto text-xs font-medium">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
