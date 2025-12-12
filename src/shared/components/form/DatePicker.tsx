"use client";

import { Button } from "@/shared/components/ui/button";
import { Calendar } from "@/shared/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { cn } from "@/shared/lib/utils";
import { IconCalendar } from "@tabler/icons-react";
import { format } from "date-fns";
import React from "react";

export default function DatePicker({
  value,
  onValueChange,
  className,
}: {
  value: Date | undefined;
  onValueChange: (date: Date | undefined) => void;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <Button
          variant="outline"
          size="lg"
          className={cn(
            "hover:bg-gray-25/5 h-10 w-full items-center justify-start border border-gray-200 bg-transparent text-sm",
            className,
          )}
        >
          <IconCalendar className="h-4 w-4 opacity-50" />
          {value ? format(value, "dd-MM-yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-fit rounded-[10px] p-1 leading-6"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onValueChange(date);
            setOpen(false);
          }}
          captionLayout="dropdown"
          classNames={{
            day_outside: "day-outside !text-gray-600",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
