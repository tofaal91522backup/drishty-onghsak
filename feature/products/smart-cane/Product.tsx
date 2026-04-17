"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, Minus, PackageCheck, Plus, ShoppingBag, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import ProductImage from "../ProductImage";
import { productData } from "./product-data";
import { AppDialog } from "@/components/ui/AppDialog";
import PurchaseDetails from "./PurchaseDetails";

const Product = () => {
  const { details, options, images, features } = productData;
  const [selectedOptionId, setSelectedOptionId] = useState(options[0]?.id);
  const [quantity, setQuantity] = useState(1);

  const selectedOption = useMemo(
    () => options.find((item) => item.id === selectedOptionId) || options[0],
    [options, selectedOptionId]
  );

  const totalPrice = selectedOption.discountPrice * quantity;

  const handleSelectOption = (optionId: number) => {
    setSelectedOptionId(optionId);
    setQuantity(1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-2">
        <ProductImage images={images} name={details.name} />

        <div className="space-y-6">
          <div className="space-y-4">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Select Option
            </h3>

            <div className="mt-3 grid gap-3">
              {options.map((option) => {
                const isActive = selectedOptionId === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectOption(option.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? "border-[#0B1A2E] bg-[#0B1A2E]/[0.03] ring-2 ring-[#E8A838]/30"
                        : "border-slate-200 bg-white hover:border-slate-400"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {option.product}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          Discount {option.discount}%
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="text-2xl font-bold text-[#0B1A2E]">
                          ৳{option.discountPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-500 line-through">
                          ৳{option.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Quantity</p>

                <div className="mt-2 inline-flex items-center rounded-xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="flex h-11 w-11 items-center justify-center text-slate-700 transition hover:bg-slate-100"
                  >
                    <Minus className="size-4" />
                  </button>

                  <div className="flex h-11 min-w-[60px] items-center justify-center border-x border-slate-200 px-4 font-semibold text-[#0B1A2E]">
                    {quantity}
                  </div>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="flex h-11 w-11 items-center justify-center text-slate-700 transition hover:bg-slate-100"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm font-medium text-slate-500">Total Price</p>
                <h3 className="mt-1 text-3xl font-bold text-[#0B1A2E]">
                  ৳{totalPrice.toLocaleString()}
                </h3>
              </div>
            </div>
          </div>

          <AppDialog
            title="Purchase Confirmation"
            description={`You are about to purchase ${details.name} - ${
              selectedOption.product
            } (Qty: ${quantity}) for ৳${totalPrice.toLocaleString()}. Do you want to proceed?`}
            trigger={
              <Button className="h-12 w-full cursor-pointer rounded-xl bg-[#E8A838] text-[#0B1A2E] hover:bg-[#d99a23]">
                <ShoppingBag className="mr-2 size-4" />
                Preorder Now
              </Button>
            }
            size="3xl"
          >
            <PurchaseDetails
              product={{
                product: selectedOption.product,
                discountPrice: selectedOption.discountPrice,
              }}
              quantity={quantity}
            />
          </AppDialog>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <BadgeCheck className="size-4 text-[#2A9D8F]" />
              Quality Checked
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <Truck className="size-4 text-[#2A9D8F]" />
              Fast Delivery
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <PackageCheck className="size-4 text-[#2A9D8F]" />
              Secure Packaging
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;