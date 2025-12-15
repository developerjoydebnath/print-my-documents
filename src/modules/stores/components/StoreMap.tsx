"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Store } from "@/shared/models/store.model";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Clock, MapPin, Star, Truck, Zap } from "lucide-react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix for default marker icon
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface StoreMapProps {
  stores: Store[];
}

export function StoreMap({ stores }: StoreMapProps) {
  // Default center (Dhaka)
  const center: [number, number] = [23.7937, 90.4066]; // Centered around Banani/Gulshan area based on mock data

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className="z-0 h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => {
        const isOpen = true; // Mock open status
        // Get today's hours (mocking 'monday' for simplicity or just taking the first entry)
        const todayHours = store.openingHours["monday"]
          ? `${store.openingHours["monday"].open} - ${store.openingHours["monday"].close}`
          : "9:00 - 21:00";

        return (
          <Marker
            key={store.id}
            position={[store.location.lat, store.location.lng]}
            icon={icon}
          >
            <Popup className="min-w-[280px]">
              <div className="p-1">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base leading-tight font-bold">
                      {store.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">
                        {store.rating}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        ({store.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={isOpen ? "default" : "secondary"}
                    className="h-5 px-1.5 text-[10px]"
                  >
                    {isOpen ? "Open" : "Closed"}
                  </Badge>
                </div>

                <div className="mb-3 space-y-1.5">
                  <div className="text-muted-foreground flex items-start gap-1.5 text-xs">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span className="line-clamp-2">{store.address}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    <span>{todayHours}</span>
                  </div>
                </div>

                <div className="bg-muted/50 mb-3 grid grid-cols-2 gap-2 rounded-md p-2">
                  <div>
                    <p className="text-muted-foreground text-[10px] font-semibold uppercase">
                      B&W Print
                    </p>
                    <p className="text-sm font-bold">
                      ৳{store.pricing.bw.basePrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] font-semibold uppercase">
                      Color Print
                    </p>
                    <p className="text-sm font-bold">
                      ৳{store.pricing.color.basePrice}
                    </p>
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap gap-1">
                  {store.services.delivery && (
                    <Badge
                      variant="outline"
                      className="h-5 gap-1 border-blue-200 bg-blue-50 px-1.5 text-[10px] text-blue-700"
                    >
                      <Truck className="h-3 w-3" /> Delivery
                    </Badge>
                  )}
                  {store.services.urgentService && (
                    <Badge
                      variant="outline"
                      className="h-5 gap-1 border-red-200 bg-red-50 px-1.5 text-[10px] text-red-700"
                    >
                      <Zap className="h-3 w-3" /> Urgent
                    </Badge>
                  )}
                </div>

                <Button asChild size="sm" className="h-8 w-full text-xs">
                  <Link href={`/stores/${store.id}`}>View Details</Link>
                </Button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
