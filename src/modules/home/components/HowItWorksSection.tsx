"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, MapPin, Settings } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Upload Your File",
    description: "PDF, DOCX, JPEG — we support all major formats.",
  },
  {
    icon: MapPin,
    title: "Choose a Print Store",
    description: "Compare pricing, ratings, distance & delivery options.",
  },
  {
    icon: Settings,
    title: "Customize Printing",
    description: "Color/B&W, page size, paper type, urgency & delivery method.",
  },
  {
    icon: CheckCircle,
    title: "Get Your Document",
    description: "Pick up from store or get doorstep delivery — your choice.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How Print My Document Works
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Get your documents printed in 4 simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="bg-background shadow-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm">
                <step.icon className="text-primary h-8 w-8" />
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 -z-10 hidden h-0.5 w-[calc(100%+2rem)] -translate-y-1/2 bg-slate-200 lg:block" />
              )}

              <h3 className="mb-2 text-xl font-semibold">
                {index + 1}. {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
