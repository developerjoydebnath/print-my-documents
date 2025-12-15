"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { MOCK_STORES } from "@/shared/data/mock-stores";
import { cn } from "@/shared/lib/utils";
import {
  Clock,
  FileText,
  Globe,
  Heart,
  Info,
  MapPin,
  Phone,
  Printer,
  Share2,
  ShieldCheck,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

// Dynamic import for Map to avoid SSR issues
const StoreMap = dynamic(
  () =>
    import("@/modules/stores/components/StoreMap").then((mod) => mod.StoreMap),
  {
    ssr: false,
    loading: () => (
      <div className="bg-muted h-full w-full animate-pulse rounded-lg" />
    ),
  },
);

export default function StoreDetailsPage() {
  const params = useParams<{ id: string }>();
  const store = MOCK_STORES.find((s) => s.id === params.id);
  const [activeTab, setActiveTab] = useState("pricing");

  if (!store) {
    notFound();
  }

  // Mock reviews for UI demonstration
  const reviews = [
    {
      id: 1,
      user: "Rahim Ahmed",
      rating: 5,
      date: "2 days ago",
      comment:
        "Excellent print quality and very fast delivery. Highly recommended!",
    },
    {
      id: 2,
      user: "Sarah Khan",
      rating: 4,
      date: "1 week ago",
      comment: "Good service, but the binding took a bit longer than expected.",
    },
    {
      id: 3,
      user: "Tanvir Hasan",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best prices in the area. The paper quality is top notch.",
    },
  ];

  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src={store.images[0]}
          alt={store.name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="from-background absolute inset-0 bg-linear-to-t to-transparent" />

        <div className="relative container flex h-full flex-col justify-end pt-20 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 text-white">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-foreground bg-background border-none backdrop-blur-md"
                >
                  Print Shop
                </Badge>
                <Badge
                  variant={
                    store.services.urgentService ? "destructive" : "outline"
                  }
                  className="border-none"
                >
                  {store.services.urgentService
                    ? "Urgent Service Available"
                    : "Standard Service"}
                </Badge>
              </div>
              <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-5xl">
                {store.name}
              </h1>
              <div className="text-foreground/60 flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{store.rating}</span>
                  <span>({store.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span
                    className={
                      store.openingHours[today]?.closed
                        ? "text-red-400"
                        : "text-green-500 dark:text-green-400"
                    }
                  >
                    {store.openingHours[today]?.closed
                      ? "Closed Today"
                      : `Open: ${store.openingHours[today]?.open} - ${store.openingHours[today]?.close}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="hidden gap-2 font-semibold shadow-lg md:flex"
              >
                <Printer className="h-5 w-5" />
                Start Print Job
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* About Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About {store.name}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {store.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <ServiceCard
                icon={Printer}
                label="B&W Printing"
                active={store.services.bwPrinting}
              />
              <ServiceCard
                icon={Zap}
                label="Color Printing"
                active={store.services.colorPrinting}
              />
              <ServiceCard
                icon={FileText}
                label="Binding"
                active={store.services.binding}
              />
              <ServiceCard
                icon={Truck}
                label="Home Delivery"
                active={store.services.delivery}
              />
            </div>
          </section>

          <Separator />

          {/* Pricing Section */}
          <section id="pricing" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Pricing & Services</h2>
              <Badge variant="outline" className="text-xs">
                Updated 2 days ago
              </Badge>
            </div>

            <Tabs
              defaultValue="bw"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="bw">B&W Print</TabsTrigger>
                <TabsTrigger value="color">Color Print</TabsTrigger>
                <TabsTrigger value="binding">Binding</TabsTrigger>
              </TabsList>

              <TabsContent value="bw" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Printer className="text-muted-foreground h-5 w-5" />
                      Black & White Printing
                    </CardTitle>
                    <CardDescription>
                      Standard A4 paper (80gsm). Bulk discounts available.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Quantity (Pages)</TableHead>
                          <TableHead className="text-right">
                            Price per Page
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {store.pricing.bw.slabs.map((slab, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              {slab.min} {slab.max ? `- ${slab.max}` : "+"}
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              ৳{slab.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="bg-muted text-muted-foreground mt-4 rounded-lg p-4 text-sm">
                      <p className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Double-sided printing is{" "}
                        <strong>
                          {store.pricing.doublesidedMultiplier}x
                        </strong>{" "}
                        the single page price.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="color" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="text-muted-foreground h-5 w-5" />
                      Color Printing
                    </CardTitle>
                    <CardDescription>
                      High quality digital color printing on A4 paper.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Quantity (Pages)</TableHead>
                          <TableHead className="text-right">
                            Price per Page
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {store.pricing.color.slabs.map((slab, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              {slab.min} {slab.max ? `- ${slab.max}` : "+"}
                            </TableCell>
                            <TableCell className="text-right font-bold">
                              ৳{slab.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="binding" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="text-muted-foreground h-5 w-5" />
                      Binding Services
                    </CardTitle>
                    <CardDescription>
                      Professional binding options for your documents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <BindingOption
                        title="Staple Binding"
                        price={store.pricing.binding.staple}
                        description="Simple corner staple"
                      />
                      <BindingOption
                        title="Spiral Binding"
                        price={store.pricing.binding.spiral}
                        description="Plastic coil binding with clear cover"
                      />
                      <BindingOption
                        title="Hardcover Binding"
                        price={store.pricing.binding.hardcover}
                        description="Premium hardcover with gold lettering"
                      />
                      <BindingOption
                        title="No Binding"
                        price={store.pricing.binding.none}
                        description="Loose pages"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <Separator />

          {/* Reviews Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Reviews</h2>
              <Button variant="outline">Write a Review</Button>
            </div>

            <div className="grid gap-3">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="bg-muted/50 border-none py-4 shadow-none"
                >
                  <CardContent className="px-4 py-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-bold">
                          {review.user.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{review.user}</p>
                          <p className="text-muted-foreground text-xs">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/20",
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Sticky CTA Card */}
          <Card className="border-primary/10 border-2 shadow-lg">
            <CardHeader>
              <CardTitle>Ready to print?</CardTitle>
              <CardDescription>
                Upload your documents and get them delivered.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Time</span>
                <span className="font-medium">~24 Hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Min. Order</span>
                <span className="font-medium">৳50</span>
              </div>
              <Separator />
              <Button className="h-12 w-full text-lg" size="lg">
                <Printer className="mr-2 h-5 w-5" />
                Start Order
              </Button>
              <p className="text-muted-foreground text-center text-xs">
                <ShieldCheck className="mr-1 inline h-3 w-3" />
                Secure payment & satisfaction guaranteed
              </p>
            </CardContent>
          </Card>

          {/* Store Info Card */}
          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-lg">Store Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Mini Map */}
              <div className="relative h-60 w-full overflow-hidden rounded-md border">
                <StoreMap stores={[store]} />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      {store.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-muted-foreground h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">
                      +880 1712 345678
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-muted-foreground h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Website</p>
                    <Link
                      href="#"
                      className="text-primary text-sm hover:underline"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours Card */}
          <Card className="gap-2">
            <CardHeader>
              <CardTitle className="text-lg">Opening Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {daysOfWeek.map((day) => {
                  const hours = store.openingHours[day];
                  const isToday = day === today;

                  return (
                    <div
                      key={day}
                      className={cn(
                        "flex justify-between py-1 text-sm",
                        isToday && "text-primary font-bold",
                      )}
                    >
                      <span className="capitalize">
                        {day} {isToday && "*"}
                      </span>
                      <span>
                        {hours?.closed ? (
                          <span className="text-destructive">Closed</span>
                        ) : (
                          `${hours?.open} - ${hours?.close}`
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="bg-background fixed right-0 bottom-0 left-0 z-50 border-t p-4 md:hidden">
        <Button className="w-full shadow-lg" size="lg">
          Start Print Job
        </Button>
      </div>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  label,
  active,
}: {
  icon: any;
  label: string;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center transition-colors",
        active
          ? "bg-primary/5 border-primary/20"
          : "bg-muted/50 opacity-50 grayscale",
      )}
    >
      <div
        className={cn(
          "rounded-full p-2",
          active
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
      {!active && (
        <span className="text-muted-foreground text-[10px]">
          (Not Available)
        </span>
      )}
    </div>
  );
}

function BindingOption({
  title,
  price,
  description,
}: {
  title: string;
  price: number;
  description: string;
}) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-3 transition-colors">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
      <div className="text-right">
        <span className="font-bold">৳{price}</span>
      </div>
    </div>
  );
}
