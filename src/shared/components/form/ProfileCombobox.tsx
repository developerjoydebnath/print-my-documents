"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { useTableData } from "@/shared/hooks/use-table-data";
import { cn } from "@/shared/lib/utils";
import { Preference } from "@/shared/models/preference.model";
import { Check, ChevronDown } from "lucide-react";
import React from "react";

export default function ProfileCombobox({
  pathValue,
  value,
  onValueChange,
}: {
  pathValue: string;
  value: number | undefined;
  onValueChange: (value: number | undefined) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const { data, isLoading, error } = useTableData(
    `/profile-relations/${pathValue}`,
    {
      page: 1,
      limit: 500,
    },
  );

  // Ensure data is an array and convert to Preference objects
  const serializedData = React.useMemo(
    () =>
      !isLoading && Array.isArray(data)
        ? data.map((item: any) => new Preference(item))
        : [],
    [data, isLoading],
  );

  // Compute filtered data based on searchText
  const filteredData = React.useMemo(() => {
    if (searchText.length === 0) {
      return serializedData;
    }
    return serializedData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [serializedData, searchText]);

  // Handle search input changes
  const handleSearch = (search: string) => {
    setSearchText(search);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-10 w-full justify-between"
            disabled={isLoading}
          >
            <span>
              {value
                ? serializedData.find((item) => item.id === value)?.name
                : "Select an option"}
            </span>
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command
            filter={(value, search) => {
              // Disable Command's internal filtering since we handle it manually
              return 1;
            }}
          >
            <CommandInput
              value={searchText}
              onValueChange={handleSearch}
              placeholder="Search..."
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>
                {isLoading ? "Loading..." : "No results found."}
              </CommandEmpty>
              <CommandGroup>
                {filteredData.length > 0
                  ? filteredData.map((item) => (
                      <CommandItem
                        key={item.id}
                        value={item.id?.toString()}
                        onSelect={(currentValue) => {
                          onValueChange(+currentValue);
                          setOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        {item.name}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === item.id ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))
                  : null}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && (
        <p className="mt-1 text-sm text-red-500">Error: {error.message}</p>
      )}
    </div>
  );
}
