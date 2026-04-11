import { BeforeAfterSection } from "@/components/before-after-section";
import { CTABand } from "@/components/cta-band";
import { DistributorSection } from "@/components/distributor-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ImpactDeepDiveSection } from "@/components/impact-deep-dive-section";
import { Navbar } from "@/components/navbar";
import { ProductsSection } from "@/components/products-section";
import { StatsBar } from "@/components/stats-bar";
import { UserStoriesSection } from "@/components/user-stories-section";

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

        {/* User Stories Section */}
        <UserStoriesSection />

        {/* How It Works Section */}
        <HowItWorksSection />
        {/* Products Section */}
        <ProductsSection />


        {/* Impact Deep Dive Section */}
        <ImpactDeepDiveSection />

        {/* Distributor Section */}
        <DistributorSection />

        {/* CTA Band */}
        {/* <CTABand /> */}
      </main>

      <Footer />
    </div>
  );
}
