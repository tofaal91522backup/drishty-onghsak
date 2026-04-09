"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Sense",
    description:
      "Ultrasonic sensors detect obstacles and measure distances in real-time.",
    image: "/images/step-1.jpg",
  },
  {
    step: "02",
    title: "Process",
    description:
      "AI algorithms analyze surroundings and identify potential hazards.",
    image: "/images/step-2.jpg",
  },
  {
    step: "03",
    title: "Alert",
    description:
      "Haptic feedback and audio cues instantly warn users.",
    image: "/images/step-1.jpg",
  },
  {
    step: "04",
    title: "Navigate",
    description:
      "Voice guidance and GPS help users move safely and independently.",
    image: "/images/step-4.jpg",
  },
];

export function HowItWorksSection() {
  const data = steps.map((item, index) => ({
    title: `Step ${item.step}`,
    content: (
      <div key={index}>
        <p className="mb-2 text-sm font-semibold text-[#0F2137]">
          {item.title}
        </p>

        <p className="mb-4 text-sm text-[#3E4A5A] leading-relaxed">
          {item.description}
        </p>

        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-[#0F2137]/8 shadow-sm">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    ),
  }));

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto container px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold text-[#E8A838]">
            The Technology
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold text-[#0F2137] md:text-5xl">
            How <span className="italic text-[#E8A838]">Abhash</span> Works
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#3E4A5A]">
            A simple yet powerful system designed to guide users safely through their environment.
          </p>
        </div>

        {/* Timeline */}
        <Timeline data={data} />
      </div>
    </section>
  );
}