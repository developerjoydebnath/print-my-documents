"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { MAP_PATH } from "../constants/map-path";

const MARKERS = [
  { id: 1, x: 260, y: 350, name: "Dhaka Print Hub", rating: 4.8 },
  { id: 2, x: 420, y: 550, name: "Chittagong Press", rating: 4.5 },
  { id: 3, x: 400, y: 200, name: "Sylhet Graphics", rating: 4.7 },
  { id: 4, x: 150, y: 500, name: "Khulna Colors", rating: 4.2 },
  { id: 5, x: 120, y: 280, name: "Rajshahi Prints", rating: 4.6 },
  { id: 6, x: 100, y: 100, name: "Rangpur Press", rating: 4.3 },
  { id: 7, x: 250, y: 450, name: "Barisal Printers", rating: 4.4 },
  { id: 8, x: 260, y: 220, name: "Mymensingh Art", rating: 4.5 },
  { id: 9, x: 320, y: 400, name: "Comilla Offset", rating: 4.6 },
  { id: 10, x: 180, y: 180, name: "Bogra Press", rating: 4.3 },
];

export function BangladeshMap() {
  // Initialize with a deterministic set of markers to avoid hydration mismatch
  const [visibleMarkers, setVisibleMarkers] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../shared/workers/map-marker.worker.ts", import.meta.url),
    );

    worker.onmessage = (e) => {
      const { type, payload } = e.data;
      if (type === "UPDATE") {
        setVisibleMarkers(payload);
      }
    };

    const allIds = MARKERS.map((m) => m.id);
    worker.postMessage({ type: "INIT", payload: { allMarkerIds: allIds } });

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div className="relative h-full w-full p-4">
      {/* SVG Map */}
      <svg
        viewBox="0 0 520 750"
        className="h-full w-full drop-shadow-xl"
        style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.1))" }}
      >
        <path
          d={MAP_PATH}
          strokeWidth="2"
          className="fill-slate-200 stroke-slate-400 transition-colors duration-300 dark:fill-slate-800 dark:stroke-slate-600"
        />
      </svg>

      {/* Markers */}
      <AnimatePresence mode="popLayout">
        {MARKERS.filter((m) => visibleMarkers.includes(m.id)).map((marker) => (
          <motion.div
            key={marker.id}
            layout
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute z-10"
            style={{
              left: `${(marker.x / 520) * 100}%`,
              top: `${(marker.y / 750) * 100}%`,
            }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              {/* Pin Icon */}
              <div className="relative">
                <MapPin className="fill-primary text-primary h-6 w-6 drop-shadow-md" />
                <span className="bg-primary/50 absolute top-full left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full blur-[1px]" />
              </div>

              {/* Popup Card - Always Visible */}
              <div className="absolute bottom-full left-1/2 z-30 mb-1 w-max -translate-x-1/2 rounded-lg border border-slate-100 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-black">
                <div className="text-[10px] font-bold text-slate-800 sm:text-xs dark:text-white">
                  {marker.name}
                </div>
                <div className="mt-1 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-2 w-2 sm:h-2.5 sm:w-2.5 ${
                        i < Math.floor(marker.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-slate-200 text-slate-200 dark:fill-slate-600 dark:text-slate-600"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-[8px] font-medium text-slate-600 sm:text-[10px] dark:text-slate-400">
                    ({marker.rating})
                  </span>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-slate-800" />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
