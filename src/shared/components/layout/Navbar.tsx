"use client";

import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Printer, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Printer className="h-6 w-6" />
          <span>PMDs</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link
            href="/stores"
            className="hover:text-foreground/80 text-foreground/60 transition-colors"
          >
            Find Stores
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground/80 text-foreground/60 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground/80 text-foreground/60 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${
              mounted && theme === "dark" ? "bg-slate-700" : "bg-gray-200"
            }`}
          >
            <span className="sr-only">Toggle theme</span>
            <motion.div
              className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm"
              animate={{
                x: mounted && theme === "dark" ? 24 : 0,
              }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              {mounted && theme === "dark" ? (
                <Moon className="h-4 w-4 text-slate-800" />
              ) : (
                <Sun className="h-4 w-4 text-orange-400" />
              )}
            </motion.div>
          </button>
        </div>
      </div>
    </header>
  );
}
