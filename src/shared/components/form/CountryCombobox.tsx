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
import { countries } from "@/shared/constants/countries";
import { cn } from "@/shared/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import React from "react";

export default function CountryCombobox({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState<
    (typeof countries)[number][]
  >([]);

  // Update filteredCountries when searchText changes
  React.useEffect(() => {
    if (searchText.length === 0) {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredCountries(filtered);
    }
  }, [searchText]);

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
          >
            {value
              ? countries.find((country) => country.name === value)?.name
              : "Select a country"}
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
              <CommandEmpty>No results found</CommandEmpty>
              <CommandGroup>
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((item) => (
                    <CommandItem
                      key={item.name}
                      value={item.name}
                      onSelect={(currentValue) => {
                        onValueChange(currentValue);
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {item.name}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === item.name ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))
                ) : (
                  <CommandEmpty>No results found</CommandEmpty>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
