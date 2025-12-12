"use client";

import { Button } from "@/shared/components/ui/button";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix for default marker icon
const icon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function StoreMap({ stores }: { stores: any[] }) {
  // Default center (e.g., New York)
  const center: [number, number] = [40.7128, -74.006];

  return (
    <div className="h-[calc(100vh-64px)] w-full">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.latitude || 40.7128, store.longitude || -74.006]}
            icon={icon}
          >
            <Popup>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{store.name}</h3>
                <p className="text-muted-foreground text-sm">{store.address}</p>
                <Link href={`/stores/${store.id}`}>
                  <Button size="sm" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
