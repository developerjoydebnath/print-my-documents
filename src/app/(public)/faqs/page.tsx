"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Search,
  Store,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqCategories = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    questions: [
      {
        q: "What is Print My Docs?",
        a: "Print My Docs is a platform that connects you with local print shops. You can upload your documents, customize print settings, and choose to pick them up or have them delivered—all without waiting in line.",
      },
      {
        q: "Is it free to use?",
        a: "Creating an account and browsing stores is completely free. You only pay for the printing services and any applicable delivery fees when you place an order.",
      },
      {
        q: "Do I need an account to print?",
        a: "Yes, creating an account helps you track orders, save payment methods, and access your print history. It takes less than a minute to sign up!",
      },
    ],
  },
  {
    id: "printing",
    label: "Printing & Files",
    icon: FileText,
    questions: [
      {
        q: "What file formats do you support?",
        a: "We support PDF, DOC, DOCX, PPT, PPTX, and common image formats like JPG and PNG. For the best results, we recommend converting your documents to PDF before uploading.",
      },
      {
        q: "Can I print in color?",
        a: "Absolutely! You can choose between Black & White or Color printing, as well as various paper sizes (A4, A3, Legal, etc.) and paper types depending on what the specific store offers.",
      },
      {
        q: "Are my files secure?",
        a: "Yes. Your files are encrypted during upload and are only accessible to the print shop you select. We automatically delete your files from our servers 24 hours after the order is completed.",
      },
    ],
  },
  {
    id: "orders",
    label: "Orders & Delivery",
    icon: Truck,
    questions: [
      {
        q: "How do I track my order?",
        a: "You can track the status of your order in real-time from your Dashboard under the 'My Orders' section. We'll also send you email notifications at key steps.",
      },
      {
        q: "Can I cancel my order?",
        a: "You can cancel your order as long as the print shop hasn't started processing it. Once the status changes to 'Processing', cancellations may not be possible.",
      },
      {
        q: "How does delivery work?",
        a: "If you choose delivery, the print shop or our delivery partners will bring the documents to your specified address. Delivery times and fees vary by store and distance.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit/debit cards, digital wallets, and in some regions, cash on delivery or pickup.",
      },
      {
        q: "When am I charged?",
        a: "You are charged when you place the order. If an order is cancelled or rejected by the store, a full refund is initiated immediately.",
      },
    ],
  },
  {
    id: "stores",
    label: "For Store Owners",
    icon: Store,
    questions: [
      {
        q: "How can I list my print shop?",
        a: "Click on 'Partner with Us' in the footer or 'Register' and select 'Store Owner' account type. We'll verify your business details and get you set up.",
      },
      {
        q: "What are the fees for store owners?",
        a: "We charge a small commission on orders processed through our platform. There are no upfront listing fees.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("general");

  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="bg-primary/5 absolute top-0 right-0 -z-10 h-200 w-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-150 w-150 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative z-10 container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
                Help Center
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              How can we <span className="text-primary">help</span> you?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mt-6 text-xl leading-relaxed"
            >
              Find answers to common questions about printing, orders, payments,
              and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mx-auto mt-10 max-w-xl"
            >
              <div className="relative">
                <Search className="text-muted-foreground absolute top-3.5 left-3.5 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="focus:border-primary h-12 rounded-full border-2 pl-12 text-lg shadow-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { icon: User, label: "Account", href: "/profile" },
                { icon: LayoutDashboard, label: "Orders", href: "/dashboard" },
                { icon: MapPin, label: "Stores", href: "/stores" },
                { icon: MessageCircle, label: "Support", href: "/contact-us" },
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <div className="bg-background/50 hover:bg-background hover:border-primary/50 flex flex-col items-center gap-2 rounded-xl border p-4 transition-all hover:shadow-md">
                    <item.icon className="text-primary h-6 w-6" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FAQ Content Section */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          {searchQuery ? (
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Search Results</h2>
                <p className="text-muted-foreground">
                  Showing results for &quot;{searchQuery}&quot;
                </p>
              </div>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background rounded-2xl border p-6 shadow-sm"
                  >
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                      <category.icon className="text-primary h-5 w-5" />
                      {category.label}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((q, i) => (
                        <AccordionItem key={i} value={`${category.id}-${i}`}>
                          <AccordionTrigger className="text-left text-lg font-medium">
                            {q.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            {q.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <Search className="text-muted-foreground h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">No results found</h3>
                  <p className="text-muted-foreground mt-2">
                    Try adjusting your search or browse the categories below.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="mx-auto max-w-5xl">
              <Tabs
                defaultValue="general"
                value={activeTab}
                onValueChange={setActiveTab}
                className="space-y-8"
              >
                <div className="scrollbar-hide w-full overflow-x-auto pb-2">
                  <TabsList className="bg-background/50 inline-flex h-auto w-auto justify-start gap-2 rounded-xl p-2">
                    {faqCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-all md:px-4 md:py-3 md:text-base"
                      >
                        <category.icon className="h-4 w-4" />
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <AnimatePresence mode="wait">
                  {faqCategories.map((category) => (
                    <TabsContent
                      key={category.id}
                      value={category.id}
                      className="mt-0 outline-none"
                    >
                      {activeTab === category.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="border-none shadow-lg">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-3 text-lg sm:text-2xl">
                                <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg sm:h-10 sm:w-10">
                                  <category.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                                </div>
                                {category.label} Questions
                              </CardTitle>
                              <CardDescription className="text-sm sm:text-base">
                                Everything you need to know about{" "}
                                {category.label.toLowerCase()}.
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                {category.questions.map((q, i) => (
                                  <AccordionItem
                                    key={i}
                                    value={`${category.id}-${i}`}
                                    className="border-b-muted/50 last:border-0"
                                  >
                                    <AccordionTrigger className="hover:text-primary py-6 text-left text-base font-medium transition-colors sm:text-lg">
                                      {q.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                                      {q.a}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </Tabs>
            </div>
          )}
        </div>
      </section>

      {/* 3. Still Need Help Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-8 text-center md:p-16">
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Still have questions?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-primary-foreground/80 text-lg"
              >
                Can&apos;t find the answer you&apos;re looking for? Our friendly
                support team is here to help.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground dark:border-background text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="/contact">Chat with Us</Link>
                </Button>
              </motion.div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
