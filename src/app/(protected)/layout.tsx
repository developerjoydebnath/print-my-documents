import { Sidebar } from "@/components/dashboard/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-background flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
