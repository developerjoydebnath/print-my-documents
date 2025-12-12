import { Store } from "@/shared/models/store.model";
import { StoreCard } from "./StoreCard";

interface StoreListProps {
  stores: Store[];
}

export function StoreList({ stores }: StoreListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  );
}
