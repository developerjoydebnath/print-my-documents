"use client";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import { ComponentProps, useState } from "react";

type PasswordInputProps = ComponentProps<typeof Input> & {
  name: string;
  placeholder?: string;
  hasError?: boolean;
  className?: string;
};

export default function PasswordInput({
  name,
  placeholder,
  hasError,
  className,
  ...props
}: PasswordInputProps) {
  const [passShow, setPassShow] = useState(false);
  const Icon = passShow ? Eye : EyeClosed;

  return (
    <div className="relative">
      <Input
        id={name}
        type={passShow ? "text" : "password"}
        placeholder={placeholder}
        className={cn(
          "focus:border-primary focus:ring-primary rounded-md border-gray-200 shadow-none",
          hasError && "border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      <button
        type="button"
        onClick={() => setPassShow(!passShow)}
        className="absolute top-1 right-1 flex size-8 cursor-pointer items-center justify-center rounded text-gray-400"
      >
        <Icon size={20} />
      </button>
    </div>
  );
}
