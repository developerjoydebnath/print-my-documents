import { cn } from "@/shared/lib/utils";
import React from "react";
import { AccordionItem } from "../ui/accordion";

export default function FormSection({
  children,
  className,
  value,
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
}) {
  return (
    <AccordionItem
      value={value}
      className={cn(
        "ring-border overflow-hidden rounded-xl border-b-0 bg-white ring-1",
        className,
      )}
    >
      {children}
    </AccordionItem>
  );
}
