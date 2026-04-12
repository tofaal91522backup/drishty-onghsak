import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { DistributorSection } from "@/feature/landing-page/distributor-section/distributor-section";
import { HeroSection } from "@/feature/landing-page/hero/hero-section";
import { HowItWorksSection } from "@/feature/landing-page/how-it-works-section";
import { ImpactDeepDiveSection } from "@/feature/landing-page/impact-deep-dive-section";
import { ProductsSection } from "@/feature/landing-page/products-section";
import { StatsBar } from "@/feature/landing-page/stats-bar";
import { UserStoriesSection } from "@/feature/landing-page/user-storys/user-stories-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <HeroSection />
        <StatsBar />
        <UserStoriesSection />
        <HowItWorksSection />
        <ProductsSection />
        <ImpactDeepDiveSection />
        <DistributorSection />
      </main>

      <Footer />
    </div>
  );
}
