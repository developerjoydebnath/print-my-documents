"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { List, Map as MapIcon, Search } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

// Dynamically import Map to avoid SSR issues with Leaflet
const StoreMap = dynamic(() => import("@/components/stores/store-map"), {
  ssr: false,
});

// Mock data for now
const MOCK_STORES = [
  {
    id: 1,
    name: "Print Master",
    address: "123 Broadway, NY",
    latitude: 40.7128,
    longitude: -74.006,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Quick Copy",
    address: "456 5th Ave, NY",
    latitude: 40.758,
    longitude: -73.9855,
    rating: 4.5,
  },
  {
    id: 3,
    name: "The Print Shop",
    address: "789 Wall St, NY",
    latitude: 40.7074,
    longitude: -74.0113,
    rating: 4.9,
  },
];

export default function StoresPage() {
  const [view, setView] = useState<"list" | "map">("list");
  const [search, setSearch] = useState("");

  const filteredStores = MOCK_STORES.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      {/* Filters Bar */}
      <div className="bg-background z-10 flex items-center gap-4 border-b p-4">
        <div className="relative max-w-md flex-1">
          <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
          <Input
            placeholder="Search stores..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="ml-auto flex gap-2">
          <Button
            variant={view === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "map" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("map")}
          >
            <MapIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {view === "list" ? (
          <div className="container grid h-full grid-cols-1 gap-6 overflow-y-auto py-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-card rounded-lg border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{store.name}</h3>
                <p className="text-muted-foreground mb-4">{store.address}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-secondary rounded px-2 py-1 text-sm font-medium">
                    ★ {store.rating}
                  </span>
                  <Link href={`/stores/${store.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StoreMap stores={filteredStores} />
        )}
      </div>
    </div>
  );
}
