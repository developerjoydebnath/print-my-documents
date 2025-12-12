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
import { Check, ChevronDown, X } from "lucide-react";
import React from "react";

export default function ProfileComboboxMultipleSelectWithInsert({
  pathValue,
  value,
  onValueChange,
  label,
}: {
  pathValue: string;
  value: number[];
  onValueChange: (value: number[]) => void;
  label: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const { data, isLoading, error } = useTableData(
    `/profile-relations/${pathValue}`,
    {
      page: 1,
      limit: 100,
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

  // Get selected items
  const selectedItems = React.useMemo(
    () => serializedData.filter((item) => value.includes(Number(item.id))),
    [serializedData, value],
  );

  // Get available items (not selected)
  const availableItems = React.useMemo(
    () => serializedData.filter((item) => !value.includes(Number(item.id))),
    [serializedData, value],
  );

  // Compute filtered available data based on searchText
  const filteredAvailableData = React.useMemo(() => {
    if (searchText.length === 0) {
      return availableItems;
    }
    return availableItems.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [availableItems, searchText]);

  // Handle search input changes
  const handleSearch = (search: string) => {
    setSearchText(search);
  };

  // Handle removing an item
  const handleRemoveItem = (id: number) => {
    onValueChange(value.filter((v) => v !== id));
  };

  // Handle selecting an item
  const handleSelectItem = (id: number) => {
    onValueChange([...value, id]);
    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        {/* Combobox */}
        <div className="flex items-center rounded-md border bg-gray-50 dark:bg-gray-800">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="h-full min-h-10 w-full flex-1 justify-between rounded-r-none border-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
                disabled={isLoading}
              >
                <span>
                  {selectedItems.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="border-primary-200 dark:text-primary-400 dark:border-primary-400/30 text-primary-600 bg-primary-100 dark:bg-primary-400/10 flex items-center gap-1.5 rounded border py-0.5 pr-0.5 pl-1.5 text-xs font-medium"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent button
                            handleRemoveItem(Number(item.id));
                          }}
                        >
                          <span>{item.name}</span>
                          <span className="hover:bg-primary-200 dark:hover:bg-primary-900/60 cursor-pointer rounded">
                            <X className="h-2 w-2" />
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    "Select options"
                  )}
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
                    {isLoading
                      ? "Loading..."
                      : availableItems.length === 0
                        ? "All options selected"
                        : "No results found."}
                  </CommandEmpty>
                  <CommandGroup>
                    {filteredAvailableData.length > 0
                      ? filteredAvailableData.map((item) => (
                          <CommandItem
                            key={item.id}
                            value={item.id?.toString() || ""}
                            onSelect={() => handleSelectItem(Number(item.id))}
                            className="cursor-pointer"
                          >
                            {item.name}
                            <Check
                              className={cn(
                                "ml-auto h-4 w-4 opacity-0",
                                value.includes(Number(item.id)) &&
                                  "opacity-100",
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
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">Error: {error.message}</p>
      )}
    </div>
  );
}
