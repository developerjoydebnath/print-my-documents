"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="bg-primary/10 rounded-full p-4">
              <HelpCircle className="text-primary h-10 w-10" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Have questions? We&apos;ve got answers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-10 text-lg leading-relaxed md:text-xl"
          >
            Whether you&apos;re curious about pricing, delivery options, or file
            formats, our comprehensive FAQ page has everything you need to know
            to get started.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="h-auto px-8 py-3 text-lg" asChild>
              <Link href="/faqs">
                Visit Help Center <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
