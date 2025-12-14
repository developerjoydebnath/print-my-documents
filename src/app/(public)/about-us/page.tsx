"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  CreditCard,
  Eye,
  FileText,
  GraduationCap,
  HelpCircle,
  MapPin,
  Printer,
  Rocket,
  School,
  Settings,
  ShieldCheck,
  Star,
  Store,
  Trash2,
  Truck,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Hero Section */}
      <section className="bg-muted/30 relative overflow-hidden py-20 md:py-32">
        <div className="relative z-10 container px-4 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
            <Badge variant="secondary" className="mb-2 w-fit">
              Printing, Simplified
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Printing shouldn&apos;t be{" "}
              <span className="text-primary">stressful</span>. <br />
              We make it <span className="text-primary">simple</span>.
            </h1>
            <p className="text-muted-foreground max-w-175 text-xl leading-relaxed">
              Print My Docs connects people with trusted nearby print shops — so
              you can print documents without queues, overpricing, or wasted
              time.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="bg-background/50 px-3 py-1.5 text-sm backdrop-blur"
              >
                <MapPin className="text-primary mr-2 h-4 w-4" /> Nearby print
                shops
              </Badge>
              <Badge
                variant="outline"
                className="bg-background/50 px-3 py-1.5 text-sm backdrop-blur"
              >
                <FileText className="text-primary mr-2 h-4 w-4" /> Transparent
                pricing
              </Badge>
              <Badge
                variant="outline"
                className="bg-background/50 px-3 py-1.5 text-sm backdrop-blur"
              >
                <Truck className="text-primary mr-2 h-4 w-4" /> Pickup or home
                delivery
              </Badge>
            </div>

            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/stores">
                  Find Nearby Stores <MapPin className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/register">
                  Create Free Account <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Icons Flow - Moved from Right Side */}
            <div className="flex items-center justify-center gap-4 pt-12 opacity-90 md:gap-12">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm">
                  <FileText className="text-primary h-8 w-8" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Upload
                </span>
              </div>

              <ArrowRight className="text-muted-foreground/40 h-6 w-6 animate-pulse" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm">
                  <Printer className="text-primary h-8 w-8" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Print
                </span>
              </div>

              <ArrowRight className="text-muted-foreground/40 h-6 w-6 animate-pulse" />

              <div className="flex flex-col items-center gap-3">
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm">
                  <Truck className="text-primary h-8 w-8" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Deliver
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-20">
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

      {/* 2. The Problem We Saw */}
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Why is printing still so complicated?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In a digital-first world, the physical act of printing remains
                surprisingly difficult. From broken home printers to long queues
                and unclear pricing at local shops, the experience is often
                stressful and inefficient when it matters most.
              </p>
              <div className="bg-primary h-1 w-20 rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-1">
              {[
                { icon: Clock, text: "Long waiting lines at print shops" },
                {
                  icon: HelpCircle,
                  text: "No idea about pricing before printing",
                },
                { icon: AlertCircle, text: "Urgent prints become stressful" },
                { icon: Truck, text: "No delivery option" },
                { icon: AlertCircle, text: "Inconsistent print quality" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-muted/10 hover:bg-muted/20 flex items-center gap-4 rounded-xl border p-4 transition-colors"
                >
                  <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-sm">
                    <item.icon className="text-primary h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Solution */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A smarter way to print documents
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              We&apos;ve optimized every step of the printing process to save
              you time and money.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Upload,
                title: "1. Upload",
                desc: "PDF, DOC, or images — securely and instantly.",
              },
              {
                icon: Settings,
                title: "2. Customize",
                desc: "Color, paper size, binding, copies, delivery.",
              },
              {
                icon: Store,
                title: "3. Choose Store",
                desc: "Compare prices, ratings, services, and distance.",
              },
              {
                icon: CheckCircle,
                title: "4. Receive",
                desc: "Pick up or get it delivered to your door.",
              },
            ].map((step, i) => (
              <Card
                key={i}
                className="bg-background border-none shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center pt-8 pb-8 text-center">
                  <div className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder Story */}
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built from real frustration
            </h2>
            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed md:text-xl">
              <p>
                Print My Docs started with a simple question: <br />
                <span className="text-foreground mt-2 block font-semibold">
                  &quot;Why is printing still so difficult in a digital
                  world?&quot;
                </span>
              </p>
              <p>
                As students and professionals ourselves, we faced long lines,
                overpriced prints, and last-minute stress. Buying a personal
                printer wasn&apos;t practical — so we decided to build a
                platform that makes printing accessible, transparent, and
                convenient for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-background border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <Rocket className="h-6 w-6" />
                  </span>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To make document printing fast, affordable, and accessible —
                  anytime, anywhere.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <Eye className="h-6 w-6" />
                  </span>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the most trusted digital printing network,
                  connecting people and local print shops through technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Support Local Shops */}
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
              {[
                "More orders without marketing costs",
                "Digital order management",
                "Transparent pricing control",
                "Inventory and revenue insights",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-muted/5 flex flex-col gap-3 rounded-xl border p-6"
                >
                  <CheckCircle className="text-primary h-8 w-8" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Empowering local print shops
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don&apos;t replace local businesses — we help them grow. By
                digitizing their workflow, we help them serve more customers
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trust & Security */}
      <section className="bg-muted/30 border-y py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your documents are safe with us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, text: "Secure document uploads" },
              { icon: Trash2, text: "Automatic file deletion" },
              { icon: CreditCard, text: "Safe online payments" },
              { icon: Star, text: "Real user reviews" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-full border shadow-sm">
                  <item.icon className="text-primary h-8 w-8" />
                </div>
                <span className="text-lg font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Who We Serve */}
      <section className="bg-background py-20">
        <div className="container px-4 text-center md:px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">
            Built for everyone who prints
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: GraduationCap, text: "Students" },
              { icon: Briefcase, text: "Office professionals" },
              { icon: Building2, text: "Small businesses" },
              { icon: User, text: "Freelancers" },
              { icon: School, text: "Educational institutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-muted/10 hover:bg-muted/20 flex items-center gap-3 rounded-full border px-6 py-3 transition-colors"
              >
                <item.icon className="text-primary h-5 w-5" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-8 text-center md:p-16">
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to print smarter?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Join thousands of satisfied customers who have switched to the
                smarter way of printing.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="mt-4" asChild>
                  <Link href="/register">Find Nearby Stores</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground dark:border-background text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground mt-4 bg-transparent"
                  asChild
                >
                  <Link href="/register">Create Free Account</Link>
                </Button>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* 10. Contact Teaser */}
      <section className="bg-muted/30 border-t py-12">
        <div className="container px-4 text-center md:px-6">
          <p className="text-muted-foreground mb-4 text-lg">
            Have questions or feedback? Our support team is always here to help.
          </p>
          <Button
            variant="link"
            className="text-primary text-lg font-semibold"
            asChild
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
