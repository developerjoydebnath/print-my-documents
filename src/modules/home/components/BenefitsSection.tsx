"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, MapPin, Package, Shield, Star } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Nearby Stores Everywhere",
    description: "Find the nearest verified print shop within seconds.",
  },
  {
    icon: Clock,
    title: "No More Waiting in Line",
    description: "Place orders anytime — even at midnight.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "See exact per-page cost, delivery fee & bulk discounts.",
  },
  {
    icon: Package,
    title: "Instant Delivery / Pickup",
    description:
      "From home delivery to walk-in pickup — flexible for your time.",
  },
  {
    icon: Shield,
    title: "Secure Document Handling",
    description:
      "Your documents are encrypted and auto-deleted after printing.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews You Can Trust",
    description: "Choose stores based on real user experience.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Students, Offices & Professionals Love Us
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            The smartest way to print your documents
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                <benefit.icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
