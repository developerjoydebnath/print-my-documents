"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl px-6 py-12 text-center md:px-20 md:py-24">
          {/* Background decoration */}
          <div className="bg-primary-foreground/10 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <div className="bg-primary-foreground/10 absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-2xl space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Ready to Print Your Document?
            </h2>
            <p className="text-primary-foreground/80 text-xl">
              Upload your file and get instant pricing from the nearest stores.
              No account required to check prices.
            </p>
            <Link href="/dashboard/orders/new">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 gap-2 px-8 text-lg font-semibold"
              >
                Start Printing Now <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
