"use client";

import { StoreCard } from "@/modules/stores/components/StoreCard";
import {
  FilterState,
  StoreFilters,
} from "@/modules/stores/components/StoreFilters";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { MOCK_STORES } from "@/shared/data/mock-stores";
import { Filter, Grid, List, Map as MapIcon, Search } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const StoreMap = dynamic(
  () =>
    import("@/modules/stores/components/StoreMap").then((mod) => mod.StoreMap),
  {
    ssr: false,
  },
);

export default function StoresPage() {
  const [view, setView] = useState<"grid" | "list" | "map">("grid");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    distance: 10,
    delivery: false,
    urgent: false,
    color: false,
    binding: false,
    rating: null,
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      distance: 10,
      delivery: false,
      urgent: false,
      color: false,
      binding: false,
      rating: null,
    });
  };

  const filteredStores = MOCK_STORES.filter((store) => {
    // Search
    if (
      search &&
      !store.name.toLowerCase().includes(search.toLowerCase()) &&
      !store.address.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    // Filters
    // Distance (Mock calculation or just pass for now since we don't have user location)
    // if (filters.distance < ...) return false;

    if (filters.delivery && !store.services.delivery) return false;
    if (filters.urgent && !store.services.urgentService) return false;
    if (filters.color && !store.services.colorPrinting) return false;
    if (filters.binding && !store.services.binding) return false;
    if (filters.rating && store.rating < filters.rating) return false;

    return true;
  });

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      {/* Top Bar */}
      <div className="bg-background z-10 flex items-center gap-4 border-b p-4 shadow-sm">
        <div className="relative max-w-md flex-1">
          <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
          <Input
            placeholder="Search stores..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Mobile Filter Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="py-4">
              <StoreFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
              />
            </div>
          </SheetContent>
        </Sheet>

        <div className="bg-muted/50 ml-auto flex gap-2 rounded-lg p-1">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setView("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "list" ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setView("list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "map" ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setView("map")}
          >
            <MapIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar Filters */}
        <div className="bg-muted/10 hidden w-64 overflow-y-auto border-r p-6 lg:block">
          <StoreFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>

        {/* Main Content */}
        <div className="bg-muted/5 flex-1 overflow-hidden">
          {view === "map" ? (
            <div className="h-full w-full">
              <StoreMap stores={filteredStores} />
            </div>
          ) : (
            <div className="h-full overflow-y-auto p-4 md:p-6">
              <div className="text-muted-foreground mb-4 text-sm">
                Showing {filteredStores.length} stores
              </div>

              {filteredStores.length > 0 ? (
                <div
                  className={
                    view === "grid"
                      ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                      : "mx-auto flex max-w-3xl flex-col gap-4"
                  }
                >
                  {filteredStores.map((store) => (
                    <StoreCard key={store.id} store={store} view={view} />
                  ))}
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <p className="text-lg font-medium">No stores found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search query.
                  </p>
                  <Button
                    variant="link"
                    onClick={resetFilters}
                    className="mt-2"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
