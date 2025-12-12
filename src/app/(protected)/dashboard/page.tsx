import { QuickActions } from "@/modules/dashboard/components/QuickActions";
import { RecentActivity } from "@/modules/dashboard/components/RecentActivity";
import { StatCard } from "@/modules/dashboard/components/StatCard";
import { SuggestedStores } from "@/modules/dashboard/components/SuggestedStores";
import { Clock, FileText, PackageCheck, Wallet } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Quick Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Pending Orders"
          value="2"
          icon={Clock}
          description="Waiting for acceptance"
        />
        <StatCard
          title="Running Orders"
          value="1"
          icon={PackageCheck}
          trend={{ value: 12, isPositive: true }}
          description="In progress"
        />
        <StatCard
          title="Saved Documents"
          value="14"
          icon={FileText}
          description="Recent uploads"
        />
        <StatCard
          title="Wallet Balance"
          value="$245.00"
          icon={Wallet}
          trend={{ value: 4, isPositive: true }}
          description="Available funds"
        />
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Quick Actions</h3>
        <QuickActions />
      </div>

      {/* Activity & Suggestions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentActivity />
        <SuggestedStores />
      </div>
    </div>
  );
}
