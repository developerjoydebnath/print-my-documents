"use client";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

type NumberInputProps = ComponentProps<typeof Input> & {
  onChange: (val: number) => void;
};

export default function NumberInput({
  className,
  onChange,
  value,
  ...props
}: NumberInputProps) {
  // Normalize the value to remove leading zeros for display
  const displayValue =
    value && value !== 0 ? String(value).replace(/^0+/, "") : value;

  return (
    <Input
      type="number"
      value={displayValue}
      readOnly={props.readOnly}
      {...(props.min ? { min: props.min } : { min: 1 })}
      {...(props.max ? { max: props.max } : {})}
      onChange={(e) => {
        let input = e.target.value;

        // Remove leading zeros unless the number is just "0"
        if (/^0\d+/.test(input)) {
          input = String(parseInt(input, 10));
        }

        // Handle empty input
        const numericValue = input === "" ? 0 : Number(input);

        // Ensure we don't send NaN
        if (!isNaN(numericValue)) {
          onChange(numericValue);
        }
      }}
      className={cn(
        "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      onFocus={(e) => e.target.select()}
      {...props}
    />
  );
}
