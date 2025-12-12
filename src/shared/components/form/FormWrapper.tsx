import { cn } from "@/shared/lib/utils";
import React from "react";

export default function FormWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border", className)}>
      {children}
    </div>
  );
}
