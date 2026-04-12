"use client";

import { Compare } from "@/components/ui/compare";
import { Check, X } from "lucide-react";

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
    <div className="w-full">
      <div className="overflow-hidden rounded-[22px] border border-[#0F2137]/10 bg-white shadow-[0_12px_40px_rgba(15,33,55,0.06)] sm:rounded-[28px] lg:rounded-[32px] lg:shadow-[0_20px_60px_rgba(15,33,55,0.06)]">
        {/* IMAGE SLIDER */}
        <div className="relative h-[280px] w-full sm:h-[420px] md:h-[520px] lg:h-[85vh] lg:max-h-[820px]">
          <Compare
            firstImage="/images/before.png"
            secondImage="/images/after.png"
            firstImageClassName="object-cover object-center w-full h-full"
            secondImageClassname="object-cover object-center w-full h-full"
            className="h-full w-full"
            slideMode="hover"
            autoplay={true}
            initialSliderPercentage={50.5}
          />
        </div>

        {/* BEFORE / AFTER CONTENT */}
        <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-2 lg:p-10">
          {/* BEFORE */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E07A5F]/15 px-3 py-1.5 text-xs font-semibold text-[#E07A5F] sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <X className="h-4 w-4" />
              Before
            </span>

            <ul className="space-y-3 sm:space-y-4">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E07A5F]/20 sm:h-6 sm:w-6">
                    <X className="h-3 w-3 text-[#E07A5F]" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#3E4A5A] sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2A9D8F]/15 px-3 py-1.5 text-xs font-semibold text-[#2A9D8F] sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <Check className="h-4 w-4" />
              After
            </span>

            <ul className="space-y-3 sm:space-y-4">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/20 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-[#2A9D8F]" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#3E4A5A] sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER DIVIDER */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#0F2137]/10 md:block" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
