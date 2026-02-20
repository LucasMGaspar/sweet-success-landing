import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import LandingFooter from "@/components/LandingFooter";

const Index = () => (
  <main className="overflow-hidden">
    <HeroSection />
    <FeaturesSection />
    <TargetAudienceSection />
    <TestimonialsSection />
    <BonusSection />
    <PricingSection />
    <GuaranteeSection />
    <LandingFooter />
  </main>
);

export default Index;
