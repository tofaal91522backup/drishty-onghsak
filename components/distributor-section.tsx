"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, TrendingUp, Users } from "lucide-react";
import { Manchitro } from "manchitro";

/* ================= DATA ================= */

const stats = [
  { value: "65", label: "Districts", icon: MapPin },
  { value: "500+", label: "Devices Given", icon: TrendingUp },
  { value: "95%", label: "Retention", icon: Users },
];

const benefits = [
  "Competitive commission structure",
  "Full training and certification",
  "Marketing materials provided",
  "Dedicated regional support",
  "Exclusive territory rights",
  "Monthly performance bonuses",
];

/* ================= COMPONENT ================= */

export function DistributorSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-24 lg:py-32">
      {/* Background Gradients & Textures */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.06),transparent_35%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#0F2137 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6">
        {/* Changed to a 2-column grid for large screens */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center max-w-7xl mx-auto">
          {/* ================= LEFT: CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A838]/30 bg-white px-4 py-1.5 text-sm font-bold tracking-wide uppercase text-[#E8A838] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A838] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8A838]"></span>
              </span>
              Join Our Network
            </span>

            <h2 className="mt-6 font-serif text-4xl font-extrabold tracking-tight text-[#0F2137] sm:text-5xl">
              Become a{" "}
              <span className="bg-gradient-to-r from-[#E8A838] to-[#c78b27] bg-clip-text text-transparent italic">
                District Ambassador
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#5A6779]">
              Join our mission to bring assistive technology across Bangladesh.
              Build a meaningful, profitable career while making a direct impact
              in your own region.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
                >
                  <stat.icon
                    className="mx-auto mb-3 h-6 w-6 text-[#E8A838]"
                    strokeWidth={2.5}
                  />
                  <p className="text-2xl font-bold text-[#0F2137] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits List (Previously unused) */}
            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0F2137] mb-6">
                Ambassador Benefits
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/15">
                      <Check
                        className="h-3 w-3 text-[#2A9D8F]"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-sm font-medium text-[#4A5568]">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0F2137] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#E8A838] hover:shadow-lg hover:shadow-[#E8A838]/20"
              >
                Apply for Your District
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT: MAP ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/40 p-2 backdrop-blur-xl shadow-2xl shadow-[#0F2137]/10">
              {/* Map Container - Removed fixed width, made it fluid */}
              <div className="relative aspect-[4/5] w-full rounded-[2rem] bg-[#FAF6F0] p-6 shadow-inner flex items-center justify-center">
                <Manchitro
                  items={[]} // Pass your real data here
                  className="h-full w-full object-contain drop-shadow-md"
                  colors={{
                    base: "#F1E5C9",
                    active: "#E8A838",
                    selected: "#2A9D8F",
                    stroke: "orange",
                    selectedStroke: "#0F2137",
                  }}
                  renderSelected={() => (
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#2A9D8F] px-3 py-1 text-xs font-medium text-white">
                        <Check className="h-3 w-3" />
                        Active District
                      </span>
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Decorative background glow behind the map */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-[#E8A838]/20 to-[#2A9D8F]/20 opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
