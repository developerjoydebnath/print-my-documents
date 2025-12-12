import { PrintConfig } from "@/modules/print-job/components/PrintConfigForm";
import { Store } from "@/shared/models/store.model";

export interface PriceBreakdown {
  printCost: number;
  bindingCost: number;
  deliveryCost: number;
  subtotal: number;
  serviceFee: number;
  total: number;
  details: {
    pages: number;
    copies: number;
    ratePerPage: number;
    isDoubleSided: boolean;
  };
}

export function calculatePrice(
  store: Store,
  config: PrintConfig,
  totalPages: number,
  distanceKm: number = 0,
): PriceBreakdown {
  const { pricing } = store;
  const totalPrintPages = totalPages * config.copies;

  // 1. Calculate Rate Per Page (Slab Pricing)
  let ratePerPage = 0;
  const pricingType = config.color === "color" ? pricing.color : pricing.bw;

  // Find applicable slab
  const slab = pricingType.slabs.find(
    (s) => totalPages >= s.min && (s.max === null || totalPages <= s.max),
  );

  ratePerPage = slab ? slab.price : pricingType.basePrice;

  // 2. Apply Double Sided Multiplier
  // Note: Usually double sided means we use less paper, but print same number of sides.
  // However, the requirement says: "Double-side printing → Price = single-side price × 1.6"
  // This implies the rate per SHEET is 1.6x, but we are counting PAGES.
  // If I have a 10 page document:
  // Single sided: 10 sheets. Cost = 10 * rate.
  // Double sided: 5 sheets. Cost = 5 * (rate * 1.6)? Or is it per page logic?
  // "Price = single-side price x 1.6" usually refers to the cost per sheet of paper.
  // Let's assume the "ratePerPage" is actually "ratePerSide".
  // If double sided, we print on both sides.
  // Let's interpret the requirement: "Double-side printing → Price = single-side price × 1.6"
  // This likely means if I print 2 pages on 1 sheet (double sided), the cost is 1.6x the cost of 1 page on 1 sheet.
  // So effectively, per page cost becomes (1.6 / 2) = 0.8x of single side cost.

  // Let's stick to a simpler interpretation for now:
  // If double sided, apply multiplier to the total print cost? No, that would make it more expensive.
  // Let's assume the base price is per "impression" or "side".
  // If double sided, maybe the store charges less per side?
  // Wait, "Price = single-side price x 1.6" -> This usually means a double-sided SHEET costs 1.6x a single-sided SHEET.
  // So if I have 10 pages:
  // Single sided: 10 sheets * Rate.
  // Double sided: 5 sheets * (Rate * 1.6).
  // Total cost = 5 * 1.6 * Rate = 8 * Rate.
  // So effectively, it's 80% of the cost.

  let finalPrintCost = 0;
  if (config.sides === "double") {
    const sheets = Math.ceil(totalPrintPages / 2);
    finalPrintCost = sheets * (ratePerPage * pricing.doublesidedMultiplier);
  } else {
    finalPrintCost = totalPrintPages * ratePerPage;
  }

  // 3. Binding Cost
  let bindingCost = 0;
  if (config.binding !== "none") {
    bindingCost = pricing.binding[config.binding] || 0;
    bindingCost *= config.copies; // Binding per copy
  }

  // 4. Delivery Cost
  let deliveryCost = 0;
  if (config.deliveryMethod === "delivery") {
    if (distanceKm <= pricing.delivery.freeDeliveryDistance) {
      deliveryCost = 0;
    } else {
      const extraKm = Math.max(
        0,
        distanceKm - pricing.delivery.freeDeliveryDistance,
      );
      deliveryCost =
        pricing.delivery.baseFee + extraKm * pricing.delivery.perKm;
    }
  }

  const subtotal = finalPrintCost + bindingCost + deliveryCost;
  const serviceFee = 20; // Fixed platform fee
  const total = subtotal + serviceFee;

  return {
    printCost: finalPrintCost,
    bindingCost,
    deliveryCost,
    subtotal,
    serviceFee,
    total,
    details: {
      pages: totalPages,
      copies: config.copies,
      ratePerPage,
      isDoubleSided: config.sides === "double",
    },
  };
}
