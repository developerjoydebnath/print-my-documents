import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SUGGESTED_STORES = [
  {
    id: 1,
    name: "Dhaka Print Hub",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80",
    location: "Dhanmondi, Dhaka",
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "Chittagong Press",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1504270997636-07dd555805b7?w=800&q=80",
    location: "GEC Circle, Chittagong",
  },
  {
    id: 3,
    name: "Sylhet Graphics",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    location: "Zindabazar, Sylhet",
    discount: "Free Delivery",
  },
];

export function SuggestedStores() {
  return (
    <Card className="col-span-3 lg:col-span-4">
      <CardHeader>
        <CardTitle>Recommended For You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {SUGGESTED_STORES.map((store) => (
            <Link href={`/stores/${store.id}`} key={store.id}>
              <div className="hover:bg-muted/50 mb-3 flex items-center space-x-4 rounded-lg border p-3 transition-colors">
                <div className="relative h-16 w-16 overflow-hidden rounded-md">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-none font-medium">
                      {store.name}
                    </p>
                    {store.discount && (
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
                        {store.discount}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {store.location}
                  </p>
                  <div className="text-muted-foreground flex items-center text-xs">
                    <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {store.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
