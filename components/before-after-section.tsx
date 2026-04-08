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
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-navy/10 px-4 py-2 text-sm font-semibold text-navy">
            The Transformation
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold text-navy md:text-5xl">
            Life <span className="italic text-amber">Before</span> &{" "}
            <span className="italic text-teal">After</span> Abhash
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl bg-gradient-to-br from-coral/20 via-coral/5 to-transparent p-8 lg:rounded-r-none lg:pr-16"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/20 px-4 py-2 text-sm font-semibold text-coral">
                <X className="h-4 w-4" />
                Before Abhash
              </span>
            </div>
            
            <ul className="space-y-5">
              {beforePoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/20">
                    <X className="h-3.5 w-3.5 text-coral" />
                  </span>
                  <span className="text-lg text-navy/80">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative gradient */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-coral/10 blur-3xl" />
          </motion.div>

          {/* Center Arrow Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy shadow-xl">
              <ArrowRight className="h-7 w-7 text-cream" />
            </div>
          </motion.div>

          {/* Mobile Arrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:hidden"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy shadow-lg">
              <ArrowRight className="h-5 w-5 rotate-90 text-cream" />
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl bg-gradient-to-bl from-teal/20 via-teal/5 to-transparent p-8 lg:rounded-l-none lg:pl-16"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal/20 px-4 py-2 text-sm font-semibold text-teal">
                <Check className="h-4 w-4" />
                After Abhash
              </span>
            </div>
            
            <ul className="space-y-5">
              {afterPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20">
                    <Check className="h-3.5 w-3.5 text-teal" />
                  </span>
                  <span className="text-lg text-navy/80">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative gradient */}
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-teal/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
