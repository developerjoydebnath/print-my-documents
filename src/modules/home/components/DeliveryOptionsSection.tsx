"use client";

import { motion } from "framer-motion";
import { Store, Truck } from "lucide-react";

export function DeliveryOptionsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Choose How You Want Your Document
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Flexible options to suit your schedule
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card group hover:border-primary/50 flex flex-col items-center rounded-3xl border p-6 text-center transition-colors md:p-8"
          >
            <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110">
              <Store className="text-primary h-10 w-10" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Store Pickup</h3>
            <p className="text-muted-foreground mb-6">
              Walk into the store — no waiting, no queue. Your document is ready
              when you arrive.
            </p>
            <ul className="mx-auto w-full max-w-xs space-y-2 text-left text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Free of charge
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Instant availability
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Check quality before leaving
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card group hover:border-primary/50 flex flex-col items-center rounded-3xl border p-6 text-center transition-colors md:p-8"
          >
            <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110">
              <Truck className="text-primary h-10 w-10" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Home Delivery</h3>
            <p className="text-muted-foreground mb-6">
              Delivered safely to your door for a small fee. Track your order in
              real-time.
            </p>
            <ul className="mx-auto w-full max-w-xs space-y-2 text-left text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Starting from $1.00
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Same-day delivery available
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-foreground h-1.5 w-1.5 rounded-full" />
                Secure packaging
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
