"use client";

import { motion } from "framer-motion";
import { Check, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { value: "65", label: "District Ambassadors", icon: MapPin },
  { value: "500+", label: "Devices Distributed", icon: TrendingUp },
  { value: "95%", label: "Ambassador Retention", icon: Users },
];

const benefits = [
  "Competitive commission structure",
  "Full training and certification",
  "Marketing materials provided",
  "Dedicated regional support",
  "Exclusive territory rights",
  "Monthly performance bonuses",
  "Community impact recognition",
  "Career growth opportunities",
];

export function DistributorSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-24 lg:py-32">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_30%)]" />
        <div className="absolute -top-20 left-0 h-[24rem] w-[24rem] rounded-full bg-[#E8A838]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-[#2A9D8F]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#E8A838]/25 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0F2137] shadow-sm backdrop-blur">
              Join Our Network
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold tracking-[-0.02em] text-[#0F2137] md:text-5xl">
              Become a{" "}
              <span className="italic text-[#E8A838]">
                District Ambassador
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3E4A5A]">
              Join our mission to bring assistive technology to every corner of
              Bangladesh while building a meaningful, rewarding career in your
              own region.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.5rem] border border-[#0F2137]/8 bg-white/70 px-4 py-5 text-center shadow-sm backdrop-blur"
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8A838]/15">
                    <stat.icon className="h-5 w-5 text-[#E8A838]" />
                  </div>
                  <div className="text-2xl font-bold text-[#0F2137]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[#6B7280]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#0F2137]/8 bg-white/75 p-8 shadow-[0_20px_60px_rgba(15,33,55,0.08)] backdrop-blur-xl lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#0F2137]">
                Ambassador Benefits
              </h3>
              <p className="mt-2 text-[#6B7280]">
                Everything you need to grow and make real impact
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.04 }}
                    className="flex items-start gap-3 rounded-2xl bg-[#FAF6F0] px-4 py-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/15">
                      <Check className="h-3.5 w-3.5 text-[#2A9D8F]" />
                    </span>
                    <span className="text-sm leading-6 text-[#3E4A5A]">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0F2137] px-8 py-4 text-base font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.14)] transition-all duration-300 hover:bg-[#0B1A2E]"
              >
                Apply to Become an Ambassador
              </motion.a>
            </div>

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#E8A838]/12 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#2A9D8F]/12 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}