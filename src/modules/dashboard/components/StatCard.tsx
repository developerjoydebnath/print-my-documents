import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(trend || description) && (
          <p className="text-muted-foreground text-xs">
            {trend && (
              <span
                className={trend.isPositive ? "text-green-500" : "text-red-500"}
              >
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </span>
            )}
            {trend && description && " "}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
