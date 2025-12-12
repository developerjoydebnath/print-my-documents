"use client";

import { StoreFilters } from "@/modules/stores/components/StoreFilters";
import { StoreList } from "@/modules/stores/components/StoreList";
import { StoreMap } from "@/modules/stores/components/StoreMap";
import { MOCK_STORES } from "@/modules/stores/data/mock-stores";
import { Button } from "@/shared/components/ui/button";
import { List, Map } from "lucide-react";
import { useState } from "react";

export default function StoresPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  return (
    <div className="container mx-auto space-y-8 p-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Find Print Shops
          </h1>
          <p className="text-muted-foreground mt-1">
            Discover top-rated print shops near you for all your document needs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "map" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("map")}
          >
            <Map className="mr-2 h-4 w-4" />
            Map View
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="mr-2 h-4 w-4" />
            List View
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full flex-shrink-0 lg:w-64">
          <StoreFilters />
        </aside>
        <main className="flex-1">
          {viewMode === "list" ? (
            <StoreList stores={MOCK_STORES} />
          ) : (
            <StoreMap stores={MOCK_STORES} />
          )}
        </main>
      </div>
    </div>
  );
}
