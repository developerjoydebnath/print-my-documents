"use client";

import { Skeleton } from "@/shared/components/ui/skeleton";
import { Store } from "@/shared/models/store.model";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  loading: () => <Skeleton className="h-full w-full rounded-lg" />,
  ssr: false,
});

interface StoreMapProps {
  stores: Store[];
}

export function StoreMap({ stores }: StoreMapProps) {
  return (
    <div className="h-[600px] w-full overflow-hidden rounded-lg border shadow-sm">
      <MapComponent stores={stores} />
    </div>
  );
}
