"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative bg-white py-24 lg:py-28">
      
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.06),transparent_30%)]" />
      </div>

      <div className="relative mx-auto container px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-bold tracking-[-0.02em] text-[#0F2137] md:text-5xl lg:text-6xl">
              Ready to Transform{" "}
              <span className="italic text-[#E8A838]">
                Mobility?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3E4A5A] md:text-xl">
              Join hundreds of users who have rediscovered independence with Drishti.
              Whether you're a user, caregiver, or organization — we’re here to help.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            {/* Primary */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0F2137] px-8 py-4 text-lg font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.15)] transition-all hover:bg-[#0B1A2E]"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-[#0F2137]/20 px-8 py-4 text-lg font-semibold text-[#0F2137] transition-all hover:bg-[#0F2137] hover:text-[#FAF6F0]"
            >
              Explore Products
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#6B7280]"
          >
            {[
              "Free Consultation",
              "Nationwide Delivery",
              "Lifetime Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8A838]/15">
                  <svg
                    className="h-3 w-3 text-[#E8A838]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-7.4 7.4a1 1 0 01-1.414 0l-3.4-3.4a1 1 0 011.414-1.414l2.693 2.693 6.693-6.693a1 1 0 011.414 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}