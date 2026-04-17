"use client";

import { InfiniteMovingCards } from "./infinite-moving-cards";
import BeforeAfterSlider from "./BeforeAfterSlider";

const stories = [
  {
    id: 1,
    name: "Mohammad Robiul Islam",
    role: "Student, Department of Sociology, University of Dhaka",
    location: "Dhaka",
    quote:
      "I am a visually impaired student currently studying Sociology at the University of Dhaka. Aavash has transformed my mobility. I can now move around different places on campus independently. With its sound feedback and different signal cues, I can easily understand and follow my path.",
    profile_link: "/images/user-stories/md-robiul-islam.jpg",
  },
  {
    id: 2,
    name: "Md. Rafat Karim",
    role: "Student, Government and Politics, Jahangirnagar University",
    location: "Jahangirnagar University / Kallyanpur",
    quote:
      "As a visually impaired student, the combination of technology with the traditional white cane feels truly remarkable to me. I had heard about smart white canes in other countries, but I never imagined I would have one here in Bangladesh. Now I travel comfortably across my campus and other places using Aavash. I even commute independently by public transport from Kallyanpur to campus. Its signals help me attract attention when needed, and the sensor detection feature allows me to identify obstacles on the left, right, and front. Because of this, I can move with much more confidence and safety.",
    profile_link: "/images/user-stories/md-rifat-karim.jpg",
  },
  {
    id: 3,
    name: "Md. Saiful Islam",
    role: "Bank Professional, Private Bank",
    location: "Motijheel, Dhaka",
    quote:
      "After completing both my undergraduate and postgraduate studies at the University of Dhaka, I am now working at a private bank. As a visually impaired professional, technology plays a vital role in both my daily life and workplace commute. Aavash provides me with strong technical and mental support while traveling from my home to my office in Motijheel. I regularly use the metro rail, and the smart cane’s signals help me attract attention in crowded spaces for safer movement. Its ultrasonic sensor range lets me detect obstacles much earlier than a traditional white cane, giving me real-time feedback and greater independence.",
    profile_link: "/images/user-stories/md-siful-islam.jpg",
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

        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <BeforeAfterSlider />
          </div>
        </div>

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