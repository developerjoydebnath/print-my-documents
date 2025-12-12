"use client";

import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import {
  LayoutDashboard,
  LogOut,
  MapPin,
  Settings,
  ShoppingBag,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/stores", label: "Find Stores", icon: MapPin },
  { href: "/upload", label: "New Print Job", icon: Upload },
  { href: "/orders", label: "My Orders", icon: ShoppingBag },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-muted/10 flex h-screen w-64 flex-col border-r">
      <div className="p-6">
        <Link href="/dashboard" className="text-xl font-bold">
          Print My Document
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname.startsWith(item.href) && "bg-secondary",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="border-t p-4">
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-destructive hover:text-destructive hover:bg-destructive/10 w-full justify-start gap-2"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </Link>
      </div>
    </div>
  );
}
