import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Store } from "@/shared/models/store.model";
import { BookOpen, Clock, MapPin, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  store: Store;
  view?: "grid" | "list";
}

export function StoreCard({ store, view = "grid" }: StoreCardProps) {
  // Simple open/closed logic (mock)
  const isOpen = true;

  const isList = view === "list";

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md ${isList ? "flex flex-row" : "flex flex-col"}`}
    >
      <div className={`relative ${isList ? "w-48 shrink-0" : "h-48 w-full"}`}>
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
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="line-clamp-1 text-lg font-semibold">
                {store.name}
              </h3>
              <div className="text-muted-foreground mt-1 flex items-center text-sm">
                <MapPin className="mr-1 h-3 w-3" />
                <span className="line-clamp-1">{store.address}</span>
              </div>
            </div>
            <div className="flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
              {store.rating} ({store.reviewCount})
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-4 py-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-muted/50 rounded p-2">
              <span className="text-muted-foreground block text-xs">
                B&W Print
              </span>
              <span className="font-semibold">
                ৳{store.pricing.bw.basePrice}
                <span className="text-muted-foreground text-xs font-normal">
                  /pg
                </span>
              </span>
            </div>
            <div className="bg-muted/50 rounded p-2">
              <span className="text-muted-foreground block text-xs">
                Color Print
              </span>
              <span className="font-semibold">
                ৳{store.pricing.color.basePrice}
                <span className="text-muted-foreground text-xs font-normal">
                  /pg
                </span>
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {store.services.delivery && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="cursor-help gap-1">
                      <Truck className="h-3 w-3" />
                      Delivery
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Base: ৳{store.pricing.delivery.baseFee}</p>
                    <p>+ ৳{store.pricing.delivery.perKm}/km</p>
                    <p>
                      Free over {store.pricing.delivery.freeDeliveryDistance}km
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {store.services.binding && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="cursor-help gap-1">
                      <BookOpen className="h-3 w-3" />
                      Binding
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Staple: ৳{store.pricing.binding.staple}</p>
                    <p>Spiral: ৳{store.pricing.binding.spiral}</p>
                    <p>Hardcover: ৳{store.pricing.binding.hardcover}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {store.services.urgentService && (
              <Badge
                variant="outline"
                className="gap-1 border-red-200 text-red-700 dark:border-red-800 dark:text-red-400"
              >
                <Clock className="h-3 w-3" /> Urgent
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-2">
          <Link href={`/stores/${store.id}`} className="w-full">
            <Button className="w-full" size="sm">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
