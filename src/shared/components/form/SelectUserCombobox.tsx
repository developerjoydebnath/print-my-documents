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
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useTableData } from "@/shared/hooks/use-table-data";
import { cn } from "@/shared/lib/utils";
import { User } from "@/shared/models/user.model";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import * as React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export default function SelectUserCombobox({
  value,
  onChange,
  disabled,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useTableData(
    debouncedSearch.length > 0 ? `/users` : null,
    {
      search: debouncedSearch,
    },
  );

  const users =
    !isLoading && Array.isArray(data)
      ? data.map((item: any) => new User(item))
      : [];

  // Get the selected user for display
  const selectedUser = users.find((item) => item.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-10 justify-between"
          disabled={disabled}
        >
          <span>{selectedUser ? selectedUser.name : "Select user..."}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command shouldFilter={false}>
          {" "}
          {/* Disable client-side filtering since we're doing server-side */}
          <CommandInput
            value={search}
            onValueChange={setSearch}
            placeholder="Search by name, email, etc..."
            className="h-9"
          />
          <CommandList>
            {debouncedSearch.length === 0 ? (
              <CommandEmpty className="flex flex-col items-center justify-center py-6 text-center">
                <Search className="text-muted-foreground mb-2 h-8 w-8 opacity-50" />
                <p className="text-muted-foreground text-sm">
                  Start typing to search for users
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Search by name
                </p>
              </CommandEmpty>
            ) : isLoading ? (
              <CommandEmpty className="py-6 text-center">
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
                  Searching...
                </div>
              </CommandEmpty>
            ) : users.length === 0 ? (
              <CommandEmpty className="py-6 text-center">
                <p className="text-muted-foreground text-sm">
                  No users found for {debouncedSearch}
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Try a different search term
                </p>
              </CommandEmpty>
            ) : (
              <CommandGroup>
                {users.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.id?.toString()}
                    onSelect={(currentValue) => {
                      onChange(+currentValue);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <Check
                      className={cn(
                        "ml-2 h-4 w-4",
                        value === item.id ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
