"use client";

import { InfiniteMovingCards } from "./infinite-moving-cards";
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
    profile_link: story.profile_link,
    study: story.role,
    college: story.location,
  }));

  return (
    <section className="bg-[#FAF6F0] py-16 sm:py-20 lg:py-32">
      <div className="mx-auto container px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#E8A838] sm:text-sm">
            Real Stories
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#0F2137] sm:mt-6 sm:text-4xl lg:text-5xl">
            Lives <span className="italic text-[#E8A838]">Transformed</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3E4A5A] sm:mt-5 sm:text-base lg:mt-6 lg:text-lg">
            Real people. Real independence. See how Drishti changes everyday
            life.
          </p>
        </div>

        {/* Demo Image */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <BeforeAfterSlider />
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <InfiniteMovingCards
            items={testimonialItems}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}