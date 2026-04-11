"use client";

import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import BeforeAfterSlider from "./BeforeAfterSlider";

const stories = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "School Teacher",
    location: "Dhaka",
    quote:
      "Drishti has given me back my independence. I can now navigate to school every day without assistance.",
    profile_link: "/images/step-4.jpg",
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Business Owner",
    location: "Chittagong",
    quote:
      "With Drishti, I run my shop independently and even expanded my business last year.",
    profile_link: "/images/step-4.jpg",
  },
  {
    id: 3,
    name: "Karim Uddin",
    role: "Student",
    location: "Rajshahi",
    quote:
      "I can travel to my university safely now. It changed my daily life completely.",
    profile_link: "/images/step-4.jpg",
  },
];

export function UserStoriesSection() {
  const testimonialItems = stories.map((story) => ({
    quote: story.quote,
    name: story.name,
    profile_link: story.profile_link, // ✅ FIXED
    study: story.role,
    college: story.location,
  }));

  return (
    <section className="py-24 lg:py-32 bg-[#FAF6F0]">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8A838]">
            Real Stories
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold text-[#0F2137] md:text-5xl">
            Lives <span className="italic text-[#E8A838]">Transformed</span>
          </h2>

          <p className="mt-6 text-lg text-[#3E4A5A] max-w-2xl mx-auto">
            Real people. Real independence. See how Drishti changes everyday
            life.
          </p>
        </div>

        {/* Demo Image */}
        <div className="mb-16">
          <BeforeAfterSlider />
        </div>

        {/* Infinite Slider */}
        <InfiniteMovingCards
          items={testimonialItems}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}
