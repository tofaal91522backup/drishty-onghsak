"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

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

export function BeforeAfterSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full bg-[#0F2137]/10 px-4 py-2 text-sm font-semibold text-[#0F2137]">
            The Transformation
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold tracking-[-0.02em] text-[#0F2137] md:text-5xl">
            Life{" "}
            <span className="italic text-[#E07A5F]">Before</span> &{" "}
            <span className="italic text-[#2A9D8F]">After</span> Abhash
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-0">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-[#0F2137]/8 bg-white/60 p-8 backdrop-blur-md lg:rounded-r-none lg:pr-16"
          >
            {/* subtle bg */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(224,122,95,0.12),transparent_35%)]" />

            <div className="relative mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E07A5F]/15 px-4 py-2 text-sm font-semibold text-[#E07A5F]">
                <X className="h-4 w-4" />
                Before Abhash
              </span>
            </div>

            <ul className="relative space-y-5">
              {beforePoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E07A5F]/20">
                    <X className="h-3.5 w-3.5 text-[#E07A5F]" />
                  </span>
                  <span className="text-lg text-[#3E4A5A]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CENTER ARROW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F2137] shadow-[0_10px_30px_rgba(15,33,55,0.25)]">
              <ArrowRight className="h-7 w-7 text-[#FAF6F0]" />
            </div>
          </motion.div>

          {/* MOBILE ARROW */}
          <div className="flex justify-center lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F2137] shadow-lg">
              <ArrowRight className="h-5 w-5 rotate-90 text-[#FAF6F0]" />
            </div>
          </div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-[#0F2137]/8 bg-white/60 p-8 backdrop-blur-md lg:rounded-l-none lg:pl-16"
          >
            {/* subtle bg */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.12),transparent_35%)]" />

            <div className="relative mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2A9D8F]/15 px-4 py-2 text-sm font-semibold text-[#2A9D8F]">
                <Check className="h-4 w-4" />
                After Abhash
              </span>
            </div>

            <ul className="relative space-y-5">
              {afterPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/20">
                    <Check className="h-3.5 w-3.5 text-[#2A9D8F]" />
                  </span>
                  <span className="text-lg text-[#3E4A5A]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}