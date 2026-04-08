import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { UserStoriesSection } from "@/components/user-stories-section";
import { ImpactDeepDiveSection } from "@/components/impact-deep-dive-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ProductsSection } from "@/components/products-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DistributorSection } from "@/components/distributor-section";
import { CTABand } from "@/components/cta-band";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Bar - Overlapping Hero */}
        <StatsBar />

        {/* Before & After Section */}
        <BeforeAfterSection />

        {/* Products Section */}
        <ProductsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* User Stories Section */}
        <UserStoriesSection />

        {/* Impact Deep Dive Section */}
        <ImpactDeepDiveSection />

        {/* Distributor Section */}
        <DistributorSection />

        {/* CTA Band */}
        <CTABand />
      </main>

      <Footer />
    </div>
  );
}
