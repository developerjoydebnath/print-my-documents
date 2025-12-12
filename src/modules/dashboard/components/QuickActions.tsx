import { Button } from "@/shared/components/ui/button";
import {
  Clock,
  CreditCard,
  FileUp,
  Heart,
  MapPin,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

const ACTIONS = [
  {
    label: "Upload Document",
    icon: FileUp,
    href: "/upload",
    variant: "default" as const,
  },
  {
    label: "Find Stores",
    icon: MapPin,
    href: "/stores",
    variant: "outline" as const,
  },
  {
    label: "Track Orders",
    icon: Clock,
    href: "/orders",
    variant: "outline" as const,
  },
  {
    label: "Reorder",
    icon: RotateCcw,
    href: "/orders?tab=completed",
    variant: "outline" as const,
  },
  {
    label: "Favorites",
    icon: Heart,
    href: "/profile?tab=favorites",
    variant: "outline" as const,
  },
  {
    label: "Payments",
    icon: CreditCard,
    href: "/payments",
    variant: "outline" as const,
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {ACTIONS.map((action) => (
        <Link key={action.label} href={action.href} className="w-full">
          <Button
            variant={action.variant}
            className="h-24 w-full flex-col gap-2"
          >
            <action.icon className="h-6 w-6" />
            <span>{action.label}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}
