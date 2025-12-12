"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { BangladeshMap } from "./BangladeshMap";

export function MapPreviewSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Find the Best Print Store Near You
            </h2>
            <p className="text-muted-foreground text-lg">
              See all available stores around you — with distance, ratings &
              pricing. Compare instantly and choose the best one.
            </p>
            <Link href="/stores">
              <Button size="lg" className="gap-2">
                <MapPin className="h-4 w-4" />
                <span>Explore Store Map</span>
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-4/5 w-full max-w-125 flex-1"
          >
            <BangladeshMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
