"use client";

import { useState } from "react";
import {
  Loader2,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type PurchaseDetailsProps = {
  handleModal?: () => void;
  product: {
    product: string;
    discountPrice: number;
  };
  quantity?: number;
};

type FormState = {
  fname: string;
  lname: string;
  mobile_number: string;
  email_address: string;
  address: string;
  comment: string;
};

const initialForm: FormState = {
  fname: "",
  lname: "",
  mobile_number: "",
  email_address: "",
  address: "",
  comment: "",
};

export default function PurchaseDetails({
  handleModal,
  product,
  quantity = 1,
}: PurchaseDetailsProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (
      !form.fname.trim() ||
      !form.lname.trim() ||
      !form.mobile_number.trim() ||
      !form.email_address.trim() ||
      !form.address.trim()
    ) {
      toast.error("Please fill up the required fields");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const payload = new FormData();
      payload.append("fname", form.fname);
      payload.append("lname", form.lname);
      payload.append("mobile_number", form.mobile_number);
      payload.append("email_address", form.email_address);
      payload.append("address", form.address);
      payload.append("comment", form.comment);
      payload.append("product", product.product);
      payload.append("quantity", String(quantity));

      const response = await fetch("https://drishti.today/api/pre-order/", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to submit purchase request");
      }

      toast.success("Successfully Purchase!");
      setForm(initialForm);
      handleModal?.();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 rounded-2xl border border-[#E8A838]/30 bg-[#E8A838]/10 p-4">
        <h3 className="text-base font-semibold text-[#0B1A2E]">
          Order Summary
        </h3>

        <div className="mt-3 space-y-2 text-sm text-slate-700">
          <div className="flex items-center justify-between gap-4">
            <span>Product</span>
            <span className="text-right font-medium">{product.product}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span>Quantity</span>
            <span className="font-medium">{quantity}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span>Unit Price</span>
            <span className="font-medium">
              ৳{product.discountPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[#E8A838]/30 pt-2">
            <span>Total</span>
            <span className="text-base font-bold text-[#0B1A2E]">
              ৳{(product.discountPrice * quantity).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fname">First Name *</Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="fname"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="h-11 pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lname">Last Name *</Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="lname"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="h-11 pl-10"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="mobile_number">Mobile Number *</Label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="mobile_number"
                name="mobile_number"
                value={form.mobile_number}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="h-11 pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email_address">Email Address *</Label>
            <div className="relative">
              <Send className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="email_address"
                name="email_address"
                type="email"
                value={form.email_address}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="h-11 pl-10"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address *</Label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-3.5 size-4 text-slate-400" />
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className="h-11 pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">
            Leave a comment or question (Optional)
          </Label>
          <div className="relative">
            <MessageSquareText className="pointer-events-none absolute left-3 top-3.5 size-4 text-slate-400" />
            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="min-h-[130px] w-full rounded-md border border-input bg-background px-10 py-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-[#0B1A2E] text-white hover:bg-[#132845]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Order"
          )}
        </Button>
      </form>
    </div>
  );
}
