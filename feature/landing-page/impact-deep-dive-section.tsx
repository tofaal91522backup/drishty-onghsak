"use client";

import { useState } from "react";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Footprints,
  Network,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const pillars = [
  {
    id: "mobility",
    title: "Mobility",
    icon: Footprints,
    gradient: "from-amber/20 via-amber/5 to-transparent",
    accentColor: "amber",
    description:
      "Empowering independent movement with advanced obstacle detection and voice-guided navigation for safe daily travel.",
    metrics: [
      { label: "Average Daily Distance", value: 85, unit: "km", max: 100 },
      { label: "Obstacle Alerts Accuracy", value: 97, unit: "%", max: 100 },
      { label: "User Confidence Score", value: 92, unit: "%", max: 100 },
    ],
  },
  {
    id: "economic",
    title: "Economic",
    icon: Briefcase,
    gradient: "from-teal/20 via-teal/5 to-transparent",
    accentColor: "teal",
    description:
      "Enabling economic independence through enhanced employment opportunities and entrepreneurship support.",
    metrics: [
      { label: "Employment Rate Increase", value: 68, unit: "%", max: 100 },
      { label: "Income Growth", value: 45, unit: "%", max: 100 },
      { label: "Business Owners", value: 34, unit: "", max: 50 },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    icon: Network,
    gradient: "from-coral/20 via-coral/5 to-transparent",
    accentColor: "coral",
    description:
      "Building a nationwide support network of ambassadors, partners, and community advocates.",
    metrics: [
      { label: "District Coverage", value: 65, unit: "", max: 64 },
      { label: "Partner Organizations", value: 28, unit: "", max: 50 },
      { label: "Community Events", value: 156, unit: "", max: 200 },
    ],
  },
] as const;

function getAccentClasses(color: string) {
  switch (color) {
    case "amber":
      return {
        icon: "bg-amber/20 text-amber",
        bar: "bg-amber",
      };
    case "teal":
      return {
        icon: "bg-teal/20 text-teal",
        bar: "bg-teal",
      };
    case "coral":
      return {
        icon: "bg-coral/20 text-coral",
        bar: "bg-coral",
      };
    default:
      return {
        icon: "bg-amber/20 text-amber",
        bar: "bg-amber",
      };
  }
}

function ProgressBar({
  value,
  max,
  color,
}: {
  value: number;
  max: number;
  color: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);
  const accent = getAccentClasses(color);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-navy/10">
      <div
        className={`h-full rounded-full ${accent.bar}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

function PillarCard({ pillar }: { pillar: (typeof pillars)[number] }) {
  const Icon = pillar.icon;
  const accent = getAccentClasses(pillar.accentColor);

  return (
    <div
      className={`relative h-full overflow-hidden rounded-3xl border border-navy/5 bg-gradient-to-b ${pillar.gradient} p-6 sm:p-8`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
        <Icon className="h-full w-full" strokeWidth={0.5} />
      </div>

      <div
        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}
      >
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-3 font-serif text-2xl font-bold text-navy">
        {pillar.title}
      </h3>

      <p className="mb-8 leading-relaxed text-navy/70">{pillar.description}</p>

      <div className="space-y-5">
        {pillar.metrics.map((metric, index) => (
          <div key={index}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-navy/60">
                {metric.label}
              </span>
              <span className="text-lg font-bold text-navy">
                {metric.value}
                {metric.unit}
              </span>
            </div>

            <ProgressBar
              value={metric.value}
              max={metric.max}
              color={pillar.accentColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImpactDeepDiveSection() {
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8A838]">
            Our Impact
          </span>

          <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl">
            Three Pillars of <span className="italic text-teal">Change</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-navy/70">
            Drishti creates lasting impact across mobility, economic
            empowerment, and community building.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            setApi={(carouselApi) => {
              setApi(carouselApi);

              if (!carouselApi) return;

              setActiveIndex(carouselApi.selectedScrollSnap());

              carouselApi.on("select", () => {
                setActiveIndex(carouselApi.selectedScrollSnap());
              });
            }}
            className="w-full"
          >
            <CarouselContent>
              {pillars.map((pillar) => (
                <CarouselItem key={pillar.id}>
                  <PillarCard pillar={pillar} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition hover:bg-navy hover:text-white"
              aria-label="Previous pillar"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {pillars.map((pillar, index) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to ${pillar.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-navy"
                      : "w-2.5 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition hover:bg-navy hover:text-white"
              aria-label="Next pillar"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
