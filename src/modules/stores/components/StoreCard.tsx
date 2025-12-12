import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { Store } from "@/shared/models/store.model";
import { Clock, MapPin, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  const isOpen = true; // TODO: Calculate based on openingHours

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={store.images[0]}
          alt={store.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant={isOpen ? "default" : "secondary"}
            className={isOpen ? "bg-green-500 hover:bg-green-600" : ""}
          >
            {isOpen ? "Open Now" : "Closed"}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{store.name}</h3>
            <div className="text-muted-foreground mt-1 flex items-center text-sm">
              <MapPin className="mr-1 h-3 w-3" />
              {store.address}
            </div>
          </div>
          <div className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
            {store.rating} ({store.reviewCount})
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 text-xs">
          {store.services.delivery && (
            <Badge variant="outline" className="flex items-center gap-1">
              <Truck className="h-3 w-3" /> Delivery
            </Badge>
          )}
          {store.services.urgentService && (
            <Badge
              variant="outline"
              className="flex items-center gap-1 border-red-200 text-red-700 dark:border-red-800 dark:text-red-400"
            >
              <Clock className="h-3 w-3" /> Urgent
            </Badge>
          )}
          <Badge variant="outline">B&W: ${store.pricing.bwPerPage}/pg</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/stores/${store.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
