"use client";

import { MOCK_STORES } from "@/modules/stores/data/mock-stores";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { Store } from "@/shared/models/store.model";
import { Star } from "lucide-react";
import { useMemo, useState } from "react";
import { calculatePrice, PriceBreakdown } from "../services/pricing.service";
import { PrintConfig } from "./PrintConfigForm";

interface StoreSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectStore: (store: Store, price: PriceBreakdown) => void;
  config: PrintConfig;
  totalPages: number;
}

export function StoreSelectionDialog({
  open,
  onOpenChange,
  onSelectStore,
  config,
  totalPages,
}: StoreSelectionDialogProps) {
  const [selectedTab, setSelectedTab] = useState("list");

  // Calculate prices for all stores
  const storesWithPrices = useMemo(() => {
    return MOCK_STORES.map((store) => {
      // Mock distance for now (deterministic based on store name length)
      const distance = (store.name.length % 10) + 1;
      const price = calculatePrice(store, config, totalPages, distance);
      return { store, price, distance };
    }).sort((a, b) => a.price.total - b.price.total); // Sort by cheapest
  }, [config, totalPages]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[80vh] w-full max-w-full flex-col gap-0 p-0 sm:max-w-7xl">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl">Select a Print Shop</DialogTitle>
          <p className="text-muted-foreground">
            Compare prices and delivery times from top-rated stores.
          </p>
        </DialogHeader>

        <div className="px-6 pb-4">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="bg-muted/10 flex-1 overflow-hidden">
          {selectedTab === "list" ? (
            <ScrollArea className="h-full">
              <div className="grid gap-4 p-6 md:grid-cols-2">
                {storesWithPrices.map(({ store, price, distance }) => (
                  <div
                    key={store.id}
                    className="bg-card hover:border-primary flex flex-col gap-4 rounded-lg border p-4 shadow-sm transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{store.name}</h3>
                        <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                          <span className="flex items-center font-medium text-yellow-600">
                            <Star className="mr-1 h-3 w-3 fill-current" />
                            {store.rating}
                          </span>
                          <span>•</span>
                          <span>{distance} km away</span>
                          <span>•</span>
                          <span className="font-medium text-green-600">
                            Open Now
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary text-2xl font-bold">
                          ৳{price.total.toFixed(0)}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Total Estimate
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 space-y-2 rounded p-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Print Cost ({price.details.pages} pgs)
                        </span>
                        <span>৳{price.printCost.toFixed(0)}</span>
                      </div>
                      {price.bindingCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Binding</span>
                          <span>৳{price.bindingCost.toFixed(0)}</span>
                        </div>
                      )}
                      {price.deliveryCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Delivery
                          </span>
                          <span>৳{price.deliveryCost.toFixed(0)}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto flex gap-2 pt-2">
                      <Button
                        className="w-full"
                        onClick={() => onSelectStore(store, price)}
                      >
                        Select Store
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="text-muted-foreground flex h-full items-center justify-center">
              Map view integration coming soon...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
