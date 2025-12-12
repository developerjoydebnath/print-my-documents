import { cn } from "@/shared/lib/utils";
import NextImage, { ImageProps } from "next/image";

export default function Image({ className, ...props }: ImageProps) {
  return <NextImage className={cn("object-cover", className)} {...props} />;
}
