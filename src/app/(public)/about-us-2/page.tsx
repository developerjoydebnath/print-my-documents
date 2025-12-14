"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  ArrowRight,
  Clock,
  Globe,
  Leaf,
  Printer,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 relative overflow-hidden py-20 md:py-32">
        <div className="relative z-10 container px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-2 w-fit">
              Our Mission
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Printing Made <span className="text-primary">Simple</span> &{" "}
              <span className="text-primary">Smart</span>
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] text-xl">
              We bridge the gap between your digital documents and physical
              copies. No more queuing at print shops—upload, customize, and get
              it delivered.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild>
                <Link href="/upload">
                  Start Printing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-20">
          <div className="bg-primary/30 absolute top-10 left-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background border-y py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">50k+</h3>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                Documents Printed
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                Partner Stores
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                Quality Guarantee
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Value Prop */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why We Started
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We realized that in a digital-first world, physical printing was
                still stuck in the past. Finding a reliable print shop, carrying
                USB drives, and waiting in lines felt outdated.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                PrintMyDocuments was born from a simple idea:{" "}
                <strong>
                  What if printing was as easy as sending an email?
                </strong>
                We built a platform that connects users with top-rated local
                print shops, offering transparent pricing, custom
                configurations, and doorstep delivery.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <ShieldCheck className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-medium">Secure Handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    <Clock className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-medium">Fast Turnaround</span>
                </div>
              </div>
            </div>
            <div className="bg-muted relative aspect-square overflow-hidden rounded-2xl border shadow-xl lg:aspect-video">
              {/* Placeholder for an image - using a colored div for now */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <Printer className="text-muted-foreground/20 h-24 w-24" />
                <span className="sr-only">Office printing environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything You Need
            </h2>
            <p className="text-muted-foreground mt-4">
              We&apos;ve optimized every step of the printing process to save
              you time and money.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-background border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Nationwide Network</h3>
                <p className="text-muted-foreground">
                  Access a vast network of verified print partners across the
                  country. We find the closest shop to you for faster delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Eco-Friendly Options</h3>
                <p className="text-muted-foreground">
                  Choose recycled paper options and support partners who
                  prioritize sustainable printing practices.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Student & Business Plans
                </h3>
                <p className="text-muted-foreground">
                  Special rates for bulk orders, thesis printing, and corporate
                  document management solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-8 text-center md:p-16">
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Join thousands of satisfied customers who have switched to the
                smarter way of printing.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/register">Create Free Account</Link>
              </Button>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
