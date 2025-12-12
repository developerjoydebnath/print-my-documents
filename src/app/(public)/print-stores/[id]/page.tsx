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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { Clock, FileText, MapPin, Star, Upload } from "lucide-react";
import { useParams } from "next/navigation";

export default function StoreDetailsPage() {
  const params = useParams();
  const id = params.id;

  // Mock data
  const store = {
    id,
    name: "Print Master",
    address: "123 Broadway, New York, NY",
    rating: 4.8,
    reviews: 124,
    openingTime: "09:00 AM",
    closingTime: "09:00 PM",
    description:
      "High-quality printing services for all your needs. We specialize in thesis printing, business cards, and large format posters.",
    priceTiers: [
      { range: "1-50 pages", price: "$0.10/page" },
      { range: "51-100 pages", price: "$0.08/page" },
      { range: "100+ pages", price: "$0.05/page" },
    ],
  };

  return (
    <div className="container flex flex-col gap-8 py-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{store.name}</h1>
          <div className="text-muted-foreground flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {store.address}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" /> {store.rating} (
              {store.reviews} reviews)
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" /> Open: {store.openingTime} -{" "}
              {store.closingTime}
            </Badge>
            <Badge>Open Now</Badge>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button size="lg" className="gap-2">
            <Upload className="h-4 w-4" /> Upload Document
          </Button>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="details">Details & Pricing</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent
          value="details"
          className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div className="flex flex-col gap-6 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{store.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Tiers (B&W A4)</CardTitle>
                <CardDescription>Bulk discounts available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {store.priceTiers.map((tier, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b pb-2 last:border-0"
                    >
                      <span>{tier.range}</span>
                      <span className="font-bold">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="bg-muted/50 border-2 border-dashed">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Quick Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-muted-foreground text-sm">
                  Upload a file to see estimated cost instantly.
                </p>
                <Button variant="secondary" className="w-full">
                  Select File
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reviews list will go here...
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Images of the shop and print samples...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
