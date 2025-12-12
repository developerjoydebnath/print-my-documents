"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

const faqs = [
  {
    question: "How does the pricing work?",
    answer:
      "Pricing is set by individual stores. We show you a comparison so you can choose the best option. Generally, B&W prints start from $0.02 and Color prints from $0.10 per page.",
  },
  {
    question: "Is my document safe?",
    answer:
      "Yes, absolutely. Your documents are encrypted during upload and automatically deleted from our servers 24 hours after printing is completed.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "It depends on the store you choose. Most stores offer same-day delivery within 2-4 hours. You can see the estimated delivery time before placing an order.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support PDF, DOCX, and JPEG files. For best results, we recommend converting your documents to PDF before uploading.",
  },
  {
    question: "Can I cancel an order?",
    answer:
      "You can cancel an order within 5 minutes of placing it. Once the store starts processing your print, cancellations are no longer possible.",
  },
  {
    question: "Do I need to visit the store physically?",
    answer:
      "Not at all! You can choose home delivery and get your documents delivered to your doorstep. Store pickup is optional.",
  },
];

export function FAQSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container max-w-3xl">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Everything you need to know about Print My Document
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
