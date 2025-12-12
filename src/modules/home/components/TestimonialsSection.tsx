"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    name: "Rafi",
    role: "University Student",
    content:
      "Super fast and super easy! Uploaded my assignment and got the printed copy delivered within 30 minutes.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Marketing Manager",
    content:
      "The quality of the prints is amazing. I use it for all my client proposals now. Highly recommended!",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Architect",
    content:
      "Being able to find a print shop that can handle A0 prints nearby has been a lifesaver. Great service.",
    rating: 4,
  },
  {
    name: "Emily W.",
    role: "Student",
    content:
      "Cheap, fast, and reliable. Exactly what I needed for my thesis submission.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <section className="bg-muted/30 py-12 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by Thousands of Students & Professionals
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl border p-6 shadow-sm">
                    <div>
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/20"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                        &quot;{review.content}&quot;
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="relative flex h-3 items-center justify-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className="h-3 cursor-pointer rounded-full"
                  initial={false}
                  animate={{
                    width: current === index ? 24 : 12,
                    backgroundColor: "var(--muted-foreground)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
