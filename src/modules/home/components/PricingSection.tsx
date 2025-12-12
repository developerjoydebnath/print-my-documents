"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Affordable Pricing for Everyone
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Every store sets its own pricing — we simply show you the best
            options.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Standard Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-2xl font-bold">Black & White</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-muted-foreground text-sm">
                Starting from
              </span>
              <span className="text-4xl font-bold">$0.02</span>
              <span className="text-muted-foreground">/page</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <Check className="text-primary h-5 w-5" />
                <span>High quality laser print</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-primary h-5 w-5" />
                <span>Standard A4 paper</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-primary h-5 w-5" />
                <span>Bulk discounts available</span>
              </li>
            </ul>
          </motion.div>

          {/* Color Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-xl md:p-8"
          >
            <h3 className="text-2xl font-bold">Color Printing</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-primary-foreground/80 text-sm">
                Starting from
              </span>
              <span className="text-4xl font-bold">$0.10</span>
              <span className="text-primary-foreground/80">/page</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
                <span>Vibrant color output</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
                <span>Premium paper options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
                <span>Ideal for presentations</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/stores">
            <Button size="lg" variant="outline">
              View Store Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
