import { Footer } from "@/components/layout/footer";
import { DistributorSection } from "@/feature/landing-page/distributor-section/distributor-section";
import { HeroSection } from "@/feature/landing-page/hero/hero-section";
import { HowItWorksSection } from "@/feature/landing-page/how-it-works-section";
import { ImpactDeepDiveSection } from "@/feature/landing-page/impact-deep-dive-section";
import { ProductsSection } from "@/feature/landing-page/products-section/products-section";
import { StatsBar } from "@/feature/landing-page/stats-bar";
import { UserStoriesSection } from "@/feature/landing-page/user-storys/user-stories-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="stats">
          <StatsBar />
        </section>

        <section id="stories">
          <UserStoriesSection />
        </section>

        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        <section id="product">
          <ProductsSection />
        </section>

        <section id="impact">
          <ImpactDeepDiveSection />
        </section>

        <section id="join">
          <DistributorSection />
        </section>
      </main>
    </div>
  );
}
