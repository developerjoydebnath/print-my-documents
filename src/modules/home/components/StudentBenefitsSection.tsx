"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export function StudentBenefitsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Student Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl bg-blue-50/50 p-6 md:p-12 dark:bg-blue-800/20"
          >
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-700/50">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">For Students</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Print assignments, thesis papers, and lab reports at
                student-friendly rates. Get special discounts with your student
                ID.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Lowest price guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Urgent printing for deadlines</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Spiral binding available</span>
                </li>
              </ul>
            </div>
            <Link href="/register?role=student">
              <Button className="w-full gap-2 bg-blue-500 text-white hover:bg-blue-600">
                Start Printing <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Office Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl bg-orange-50/50 p-6 md:p-12 dark:bg-orange-800/20"
          >
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-700/50">
                <Briefcase className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">For Professionals</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                High-quality documents, proposals, and marketing materials. Bulk
                printing with GST invoicing for businesses.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Premium paper quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Doorstep delivery to office</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Monthly billing options</span>
                </li>
              </ul>
            </div>
            <Link href="/register?role=professional">
              <Button className="w-full gap-2 bg-orange-500 text-white hover:bg-orange-600">
                Business Printing <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
