"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "School Teacher",
    location: "Dhaka",
    quote:
      "Drishti has given me back my independence. I can now navigate to school every day without assistance.",
    image: "/images/step-4.jpg",
    metrics: [
      { label: "Daily Commute", value: "4.2 km" },
      { label: "Independence", value: "100%" },
    ],
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Business Owner",
    location: "Chittagong",
    quote:
      "With Drishti, I run my shop independently and even expanded my business last year.",
    image: "/images/step-4.jpg",
    metrics: [
      { label: "Revenue Growth", value: "+45%" },
      { label: "Customer Reach", value: "3x" },
    ],
  },
];

export function UserStoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF6F0]">
      <div className="mx-auto container px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-[#2A9D8F]/10 px-4 py-2 text-sm font-semibold text-[#2A9D8F]">
            Real Stories
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold text-[#0F2137] md:text-5xl">
            Lives <span className="italic text-[#E8A838]">Transformed</span>
          </h2>

          <p className="mt-6 text-lg text-[#3E4A5A] max-w-2xl mx-auto">
            Real people. Real independence. See how Drishti changes everyday life.
          </p>
        </div>

        {/* 🔥 DEMO IMAGE */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(15,33,55,0.12)]">
            <Image
              src="/images/step-4.jpg" // 👉 তোমার demo image path
              alt="User using smart cane in real environment"
              width={1400}
              height={700}
              className="h-full w-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/40 to-transparent" />

            {/* caption */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">Real-world usage</p>
              <p className="text-lg font-semibold">
                Navigating safely with Drishti
              </p>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative rounded-[1.8rem] border border-[#0F2137]/8 bg-white/70 p-6 shadow-[0_18px_50px_rgba(15,33,55,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,33,55,0.12)]"
            >
              <div className="flex gap-5">

                {/* Image */}
                <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 right-0 flex items-center gap-1 rounded-full bg-[#0F2137] px-2 py-1 text-xs text-[#FAF6F0]">
                    <MapPin className="h-3 w-3" />
                    {story.location}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F2137]">
                    {story.name}
                  </h3>
                  <p className="text-sm font-medium text-[#2A9D8F]">
                    {story.role}
                  </p>

                  <p className="mt-3 text-[#3E4A5A] italic leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-6 flex gap-4 border-t border-[#0F2137]/8 pt-5">
                {story.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-xl bg-[#FAF6F0] px-4 py-3 text-center"
                  >
                    <p className="text-xl font-bold text-[#0F2137]">
                      {metric.value}
                    </p>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* accent */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#E8A838] via-[#2A9D8F] to-[#E07A5F] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}