"use client";

import { Store } from "@/shared/models/store.model";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
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

interface MapComponentProps {
  stores: Store[];
}

export default function MapComponent({ stores }: MapComponentProps) {
  // Default center (Dhaka)
  const center: [number, number] = [23.8103, 90.4125];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 h-full w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.location.lat, store.location.lng]}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="text-sm font-bold">{store.name}</h3>
              <p className="text-xs text-gray-600">{store.address}</p>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-xs font-medium text-yellow-600">
                  ★ {store.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({store.reviewCount})
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
