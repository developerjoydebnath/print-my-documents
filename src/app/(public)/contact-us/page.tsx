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
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Handshake,
  HelpCircle,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Send,
  ShieldCheck,
  Store,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Hero Section */}
      <section className="bg-muted/30 relative flex h-screen items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 text-center md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Get in <span className="text-primary">touch</span> with us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-[700px] text-xl leading-relaxed"
          >
            Have a question, need help with an order, or want to partner with
            us?
            <br className="hidden md:inline" /> We&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Zap className="text-primary mr-2 h-4 w-4" /> Fast response
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <MessageSquare className="text-primary mr-2 h-4 w-4" /> Friendly
              support
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <ShieldCheck className="text-primary mr-2 h-4 w-4" /> Your data is
              safe
            </Badge>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-20">
          <div className="bg-primary/30 absolute top-10 right-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
        </div>
      </section>

      {/* 2. Quick Help Options */}
      <section className="bg-background py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Looking for quick help?
            </h2>
            <p className="text-muted-foreground mt-2">
              Select a topic to find answers faster.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Package,
                title: "Order Issues",
                desc: "Delayed order, cancellation, payment problems",
              },
              {
                icon: Store,
                title: "Store Support",
                desc: "Store registration, pricing, verification",
              },
              {
                icon: User,
                title: "Account Help",
                desc: "Login issues, password reset",
              },
              {
                icon: HelpCircle,
                title: "General Questions",
                desc: "Platform usage, features",
              },
              {
                icon: Handshake,
                title: "Partnerships",
                desc: "Become a print shop partner",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Privacy",
                desc: "Data protection, secure payments, policies",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-muted h-full cursor-pointer transition-shadow hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {item.desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form & 4. Direct Info */}
      <section className="bg-muted/30 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container px-4 md:px-6"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
            {/* Contact Form (2 cols) */}
            <div className="lg:col-span-2">
              <Card className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Tell us how we can help you. Our support team will respond
                    as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="order-id">Order ID (Optional)</Label>
                        <Input id="order-id" placeholder="#ORD-12345" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="account">Account Issue</SelectItem>
                          <SelectItem value="store">
                            Store Registration
                          </SelectItem>
                          <SelectItem value="payment">
                            Payment Inquiry
                          </SelectItem>
                          <SelectItem value="feedback">
                            Feedback / Suggestion
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your issue in detail..."
                        className="min-h-60"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                      <p className="text-muted-foreground order-2 text-xs sm:order-1">
                        We usually reply within 24 hours (often much faster).
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        className="order-1 w-full sm:order-2 sm:w-auto"
                      >
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Direct Info & Office (1 col) */}
            <div className="h-full space-y-8 lg:space-y-0">
              <Card className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Reach out to us directly or visit our office.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between gap-8">
                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Mail className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href="mailto:support@printmydocs.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          support@printmydocs.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Phone className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href="tel:+880123456789"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +880 1XX-XXXXXX
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Clock className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Support Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Sunday – Thursday
                          <br />
                          9:00 AM – 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-border h-px w-full" />

                    {/* Office */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Our Office</h4>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <MapPin className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Print My Docs</p>
                          <p className="text-muted-foreground text-sm">
                            Dhaka, Bangladesh
                          </p>
                          <p className="text-muted-foreground mt-1 text-xs">
                            (Remote-first team supporting users nationwide)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Follow Us</h4>
                      <div className="flex gap-4">
                        {[
                          { icon: IconBrandFacebook, href: "#" },
                          { icon: IconBrandTwitter, href: "#" },
                          { icon: IconBrandInstagram, href: "#" },
                          { icon: IconBrandLinkedin, href: "#" },
                        ].map((social, i) => (
                          <a
                            key={i}
                            href={social.href}
                            className="bg-primary/5 hover:bg-primary/10 hover:text-primary text-primary/60 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                          >
                            <social.icon className="h-6 w-6" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Store Partner & 7. Feedback */}
      <section className="bg-background border-t py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Store Partner */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-muted/20 flex flex-col items-start justify-between rounded-2xl border p-8"
            >
              <div className="space-y-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Store className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">
                  Are you a print shop owner?
                </h3>
                <p className="text-muted-foreground">
                  Want to join our platform and grow your business? Contact us
                  for store onboarding and verification.
                </p>
              </div>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/partner">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-muted/20 flex flex-col items-start justify-between rounded-2xl border p-8"
            >
              <div className="space-y-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Lightbulb className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Help us improve</h3>
                <p className="text-muted-foreground">
                  Your feedback helps us make Print My Docs better for everyone.
                  Share your ideas, suggestions, or feature requests.
                </p>
              </div>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/feedback">
                  Share Feedback <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Teaser */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container px-4 text-center md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold tracking-tight"
          >
            Common questions
          </motion.h2>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              "How do I place an order?",
              "How do I find nearby print shops?",
              "Is online payment secure?",
              "How can stores join?",
            ].map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/faq"
                  className="bg-background hover:bg-muted inline-block rounded-full border px-6 py-3 text-sm font-medium shadow-sm transition-colors"
                >
                  {q}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="link" className="text-primary" asChild>
              <Link href="/faq">
                Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. Final Reassurance CTA */}
      <section className="bg-background border-t py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container px-4 text-center"
        >
          <p className="text-muted-foreground text-xl font-medium">
            We’re not just a platform — we’re your{" "}
            <span className="text-foreground font-bold">printing partner</span>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
