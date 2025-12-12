"use client";

import {
  FileUpload,
  FileWithPages,
} from "@/modules/print-job/components/FileUpload";
import {
  PrintConfig,
  PrintConfigForm,
} from "@/modules/print-job/components/PrintConfigForm";
import { StoreSelectionDialog } from "@/modules/print-job/components/StoreSelectionDialog";
import { PriceBreakdown } from "@/modules/print-job/services/pricing.service";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { Store } from "@/shared/models/store.model";
import { Store as StoreIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadPage() {
  const router = useRouter();
  const [files, setFiles] = useState<FileWithPages[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [config, setConfig] = useState<PrintConfig>({
    color: "bw",
    paperSize: "a4",
    sides: "single",
    copies: 1,
    binding: "none",
    instructions: "",
    deliveryMethod: "pickup",
  });

  const [isStoreDialogOpen, setIsStoreDialogOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<{
    store: Store;
    price: PriceBreakdown;
  } | null>(null);

  const handleFilesChange = (newFiles: FileWithPages[]) => {
    setFiles(newFiles);
  };

  const handlePageCountChange = (count: number) => {
    setTotalPages(count);
  };

  const handleConfigChange = (newConfig: PrintConfig) => {
    setConfig(newConfig);
    // Reset selected store if config changes as price might change
    if (selectedStore) {
      setSelectedStore(null);
    }
  };

  const handleFindStores = () => {
    if (files.length === 0) return;
    setIsStoreDialogOpen(true);
  };

  const handleSelectStore = (store: Store, price: PriceBreakdown) => {
    setSelectedStore({ store, price });
    setIsStoreDialogOpen(false);
  };

  const handleProceedToCheckout = () => {
    if (!selectedStore) return;
    // In a real app, save to context/store
    console.log("Proceeding to checkout with:", {
      files,
      config,
      store: selectedStore.store,
      price: selectedStore.price,
    });
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto space-y-8 p-6 pb-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload Documents</h1>
        <p className="text-muted-foreground mt-1">
          Upload your files, configure settings, and choose a print shop.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Upload Files</h2>
            <FileUpload
              onFilesChange={handleFilesChange}
              onPageCountChange={handlePageCountChange}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Print Configuration</h2>
            <PrintConfigForm onChange={handleConfigChange} />
          </section>
        </div>

        <div className="space-y-6">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Files</span>
                  <span className="font-medium">{files.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Pages</span>
                  <span className="font-medium">{totalPages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color</span>
                  <span className="font-medium capitalize">
                    {config.color === "bw" ? "Black & White" : "Color"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Binding</span>
                  <span className="font-medium capitalize">
                    {config.binding}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium capitalize">
                    {config.deliveryMethod}
                  </span>
                </div>
              </div>

              <Separator />

              {selectedStore ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 border-primary/20 space-y-3 rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <StoreIcon className="text-primary mt-0.5 h-5 w-5" />
                      <div>
                        <p className="text-sm font-semibold">
                          {selectedStore.store.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Selected Print Shop
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between pt-2">
                      <span className="text-muted-foreground text-sm">
                        Total Cost
                      </span>
                      <span className="text-primary text-2xl font-bold">
                        ৳{selectedStore.price.total.toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleFindStores}
                  >
                    Change Store
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-muted/50 space-y-2 rounded-lg p-4 text-center">
                    <p className="text-muted-foreground text-sm">
                      Select a store to see the final price
                    </p>
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleFindStores}
                    disabled={files.length === 0 || totalPages === 0}
                  >
                    Find Print Shops
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <StoreSelectionDialog
        open={isStoreDialogOpen}
        onOpenChange={setIsStoreDialogOpen}
        onSelectStore={handleSelectStore}
        config={config}
        totalPages={totalPages}
      />
    </div>
  );
}
