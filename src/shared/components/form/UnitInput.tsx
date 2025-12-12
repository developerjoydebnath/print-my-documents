"use client";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

type UnitInputProps = ComponentProps<typeof Input> & {
  onChange: (val: string) => void;
  unit?: string;
};

export default function UnitInput({
  className,
  onChange,
  unit,
  ...props
}: UnitInputProps) {
  return (
    <div className="relative flex items-center gap-2">
      <Input
        type="number"
        readOnly={props.readOnly}
        {...(props.min ? { min: props.min } : { min: 1 })}
        value={Number(props.value)}
        onChange={(e) => onChange(String(e.target.value))}
        className={cn(
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          className,
        )}
        {...props}
      />
      <div className="pointer-events-none absolute right-3 flex h-full items-center justify-center border-l pl-2">
        {unit && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
