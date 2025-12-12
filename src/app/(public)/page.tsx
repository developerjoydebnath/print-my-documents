import { BenefitsSection } from "@/modules/home/components/BenefitsSection";
import { CTASection } from "@/modules/home/components/CTASection";
import { DeliveryOptionsSection } from "@/modules/home/components/DeliveryOptionsSection";
import { FAQSection } from "@/modules/home/components/FAQSection";
import { HeroSection } from "@/modules/home/components/HeroSection";
import { HowItWorksSection } from "@/modules/home/components/HowItWorksSection";
import { MapPreviewSection } from "@/modules/home/components/MapPreviewSection";
import { PricingSection } from "@/modules/home/components/PricingSection";
import { StudentBenefitsSection } from "@/modules/home/components/StudentBenefitsSection";
import { TestimonialsSection } from "@/modules/home/components/TestimonialsSection";
import { UploadPreviewSection } from "@/modules/home/components/UploadPreviewSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <MapPreviewSection />
      <PricingSection />
      <UploadPreviewSection />
      <DeliveryOptionsSection />
      <TestimonialsSection />
      <StudentBenefitsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
