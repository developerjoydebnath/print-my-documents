"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Upload } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-32 md:pb-48">
      {/* Background Gradients */}
      <div className="bg-primary/5 absolute top-20 right-0 -z-10 h-150 w-150 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-150 w-150 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="container flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Print Your Documents <br />
              <span className="text-orange-500">Online</span> — Fast, Easy &
              Hassle-Free
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              Skip the shop lines. Upload your document, choose a nearby print
              store, and get it delivered to your door or pick it up instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="/dashboard/orders/new">
              <Button
                size="lg"
                className="h-10 gap-2 px-8 text-sm sm:h-12 sm:text-base md:h-14 md:text-lg"
              >
                <Upload className="h-5 w-5" /> Upload Document
              </Button>
            </Link>
            <Link href="/stores">
              <Button
                size="lg"
                variant="outline"
                className="h-10 gap-2 px-8 text-sm sm:h-12 sm:text-base md:h-14 md:text-lg"
              >
                <MapPin className="h-5 w-5" /> Find Nearby Stores
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm sm:gap-6 lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Real-time pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Trusted stores near you
            </span>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden flex-1 lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[500px]">
            {/* Abstract Document Cards */}
            <div className="bg-background absolute top-1/2 left-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-xl border shadow-2xl md:h-80 md:w-60" />
            <div className="bg-background absolute top-1/2 left-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-xl border shadow-2xl md:h-80 md:w-60" />
            <div className="bg-background absolute top-1/2 left-1/2 flex h-64 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 rounded-xl border shadow-2xl md:h-80 md:w-60">
              <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                <Upload className="text-primary h-8 w-8" />
              </div>
              <div className="h-2 w-24 rounded bg-slate-100" />
              <div className="h-2 w-16 rounded bg-slate-100" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-background absolute -top-4 -right-4 flex items-center gap-2 rounded-lg border p-3 shadow-lg"
            >
              <div className="rounded-full bg-green-100 p-2">
                <MapPin className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-sm font-medium">Nearby Shop Found</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="bg-background absolute -bottom-8 -left-8 flex items-center gap-2 rounded-lg border p-3 shadow-lg"
            >
              <div className="rounded-full bg-blue-100 p-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Ready for Pickup</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
