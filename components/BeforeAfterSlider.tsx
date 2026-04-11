"use client";

import { Compare } from "@/components/ui/compare";
import { X, Check } from "lucide-react";

const beforePoints = [
  "Limited mobility and independence",
  "Fear of unfamiliar environments",
  "Dependency on others for navigation",
  "Missed educational opportunities",
  "Social isolation and anxiety",
];

const afterPoints = [
  "Confident independent navigation",
  "Explore new places safely",
  "Self-reliant daily commuting",
  "Access to education and employment",
  "Active social participation",
];

const BeforeAfterSlider = () => {
  return (
    <div>
      {/* Card */}
      <div className="rounded-[32px] border border-[#0F2137]/10 bg-white shadow-[0_20px_60px_rgba(15,33,55,0.06)] overflow-hidden">
        {/* 🔥 IMAGE SLIDER */}
        <div className="h-[90vh] w-full relative">
          <Compare
            firstImage="/images/before.png"
            secondImage="/images/after.png"
            firstImageClassName="object-cover object-top w-full"
            secondImageClassname="object-cover object-top w-full"
            className="h-full w-full"
            slideMode="hover"
            autoplay={true}
            initialSliderPercentage={50.5}
          />
        </div>

        {/* 🔥 BEFORE AFTER CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 p-8 relative">
          {/* BEFORE */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E07A5F]/15 px-4 py-2 text-sm font-semibold text-[#E07A5F] mb-6">
              <X className="h-4 w-4" />
              Before
            </span>

            <ul className="space-y-4">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E07A5F]/20">
                    <X className="h-3 w-3 text-[#E07A5F]" />
                  </span>
                  <span className="text-[#3E4A5A]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2A9D8F]/15 px-4 py-2 text-sm font-semibold text-[#2A9D8F] mb-6">
              <Check className="h-4 w-4" />
              After
            </span>

            <ul className="space-y-4">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2A9D8F]/20">
                    <Check className="h-3 w-3 text-[#2A9D8F]" />
                  </span>
                  <span className="text-[#3E4A5A]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#0F2137]/10" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
