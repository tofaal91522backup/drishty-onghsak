"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

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
    description: "Haptic feedback and audio cues instantly warn users.",
    image: "/images/step-3.jpg",
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
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8A838]">
            The Technology
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#0F2137] md:text-5xl lg:text-6xl">
            How <span className="italic text-[#E8A838]">Abhash</span> Works
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5B6573] md:text-lg">
            A simple yet powerful assistive system designed to sense the
            environment, process hazards, and guide users with confidence.
          </p>
        </div>

        <TracingBeam className="px-0 md:px-4">
          <div className="relative mx-auto max-w-4xl antialiased">
            {steps.map((item, index) => (
              <div key={item.step} className="mb-16 md:mb-24">
                <h2 className="mb-4 w-fit rounded-full bg-[#0F2137] px-4 py-1 text-sm font-medium text-white">
                  Step {item.step}
                </h2>

                <p className="mb-3 text-2xl text-[#0F2137] md:text-3xl">
                  {item.title}
                </p>

                <div className="max-w-none text-[#3E4A5A]">
                  <div className="mb-6 overflow-hidden rounded-2xl border border-[#E8A838]/15 bg-white shadow-[0_10px_30px_rgba(15,33,55,0.08)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      priority={index === 0}
                      className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[380px]"
                    />
                  </div>

                  <p className="text-base leading-8 text-[#3E4A5A]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
