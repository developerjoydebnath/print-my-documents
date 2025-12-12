import { Printer } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted/30 flex min-h-screen flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 text-2xl font-bold"
      >
        <Printer className="text-primary h-8 w-8" />
        <span>Print My Document</span>
      </Link>
      <div className="w-full max-w-md space-y-8">{children}</div>
    </div>
  );
}
