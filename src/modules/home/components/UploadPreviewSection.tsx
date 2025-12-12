"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, FileText, Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";

export function UploadPreviewSection() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnalyzing(true);
      setShowResult(false);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
      }, 2000);
      setTimeout(() => {
        setShowResult(false);
      }, 5000);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-muted/30 py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Fully Customizable Printing Options
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose exactly how your document should be printed. We auto-detect
              page counts and format instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <span className="bg-background rounded-full border px-4 py-2 text-sm font-medium">
                Color / B&W
              </span>
              <span className="bg-background rounded-full border px-4 py-2 text-sm font-medium">
                A4 / A5 / Legal
              </span>
              <span className="bg-background rounded-full border px-4 py-2 text-sm font-medium">
                Paper Types
              </span>
              <span className="bg-background rounded-full border px-4 py-2 text-sm font-medium">
                Binding Options
              </span>
            </div>
            <div>
              <Button className="" size="lg">
                <Calculator />
                <span>Calculate Cost</span>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background relative w-full max-w-md flex-1 overflow-hidden rounded-2xl border shadow-xl"
          >
            <div className="p-6">
              <div className="border-muted-foreground/25 bg-muted/30 flex h-[250px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed py-12 text-center">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="text-primary h-10 w-10 animate-spin" />
                    <p className="text-sm font-medium">Analyzing document...</p>
                  </div>
                ) : showResult ? (
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="text-primary h-10 w-10" />
                    <p className="text-sm font-medium">thesis_final.pdf</p>
                    <p className="text-muted-foreground text-xs">
                      45 Pages • A4 • Color
                    </p>
                    <div className="mt-2 text-lg font-bold text-green-600">
                      Est. Cost: $4.50
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="bg-background rounded-full p-4 shadow-sm">
                      <Upload className="text-primary h-8 w-8" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-muted-foreground text-sm">
                        PDF, DOCX, JPG (max 50MB)
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Page Count</span>
                  <span className="font-medium">Auto-detected</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Cost Calculation
                  </span>
                  <span className="font-medium">Instant</span>
                </div>
                <Button className="w-full" disabled={isAnalyzing}>
                  Calculate Cost
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
