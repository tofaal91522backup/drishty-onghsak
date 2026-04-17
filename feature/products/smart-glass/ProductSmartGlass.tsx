"use client";

import { BadgeCheck, Clock3, Glasses, PackageCheck, Sparkles, Truck } from "lucide-react";
import { useState } from "react";

import { smartGlassData } from "./smart-glass.data";
import SmartGlassTabs from "./SmartGlassTabs";
import ProductImage from "../ProductImage";

const ProductSmartGlass = () => {
  const { details, images, features } = smartGlassData;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-2">
        <ProductImage images={images} name={details.name} />

        <div className="space-y-6">
          <div className="space-y-4">
            {/* <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-full bg-[#E8A838]/15 px-4 py-1.5 text-sm font-medium text-[#0B1A2E]">
                <Clock3 className="mr-2 size-4" />
                {details.status}
              </div>
            </div> */}

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0B1A2E] sm:text-4xl">
                {details.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                {details.description}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold leading-none text-[#0B1A2E]">
              Key Features:
            </h3>

            <ul className="list-disc space-y-2 pl-6 text-[18px] leading-8 text-slate-800 marker:text-slate-900">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E8A838]/30 bg-[#E8A838]/10 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 text-[#0B1A2E]" />
              <div>
                <h3 className="text-lg font-semibold text-[#0B1A2E]">
                  Pre-order Starts Soon
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Stay tuned for the official launch. We’ll announce pre-order
                  availability very soon.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <BadgeCheck className="size-4 text-[#2A9D8F]" />
              Quality Checked
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <Truck className="size-4 text-[#2A9D8F]" />
              Launching Soon
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <PackageCheck className="size-4 text-[#2A9D8F]" />
              Smart Assistive Tech
            </div>
          </div>
        </div>
      </div>

      <SmartGlassTabs />
    </div>
  );
};

export default ProductSmartGlass;