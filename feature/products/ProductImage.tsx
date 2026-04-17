"use client";

import Image from "next/image";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";

type ProductImageProps = {
  images: string[];
  name: string;
};

const ProductImage = ({ images, name }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (
    <div className="w-full  space-y-4">
      <div className="overflow-hidden rounded-3xl border shadow-sm">
        <Lens>
          <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt={name}
                fill
                className="object-contain p-6"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                No image available
              </div>
            )}
          </div>
        </Lens>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images?.map((image, index) => {
          const isActive = selectedImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-square overflow-hidden rounded-2xl border bg-white transition cursor-pointer  ${
                isActive
                  ? "border-[#0B1A2E] ring-2 ring-[#E8A838]/40"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;