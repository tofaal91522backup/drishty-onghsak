"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const products = [
  {
    name: "Abhash Smart Cane",
    eyebrow: "Flagship Mobility Device",
    description:
      "Our flagship smart cane with advanced obstacle detection and haptic feedback, designed for intuitive navigation in any environment.",
    accent: "#E8A838",
    image: "https://irisvision.com/wp-content/uploads/2024/09/3.webp",
    tags: [
      "Ultrasonic Sensing",
      "Haptic Feedback",
      "Long Battery Life",
      "Lightweight",
    ],
    features: [
      "3-meter obstacle detection range",
      "Vibration alerts for different obstacles",
      "15+ hours battery life",
      "Ergonomic folding design",
    ],
  },
  {
    name: "AI Wearable Companion",
    eyebrow: "Intelligent Guidance System",
    description:
      "A wearable device with AI-powered scene description and GPS navigation, providing real-time audio guidance for complete independence.",
    accent: "#2A9D8F",
    image: "https://www.shutterstock.com/image-vector/blind-woman-holding-stick-mobile-600nw-1661441773.jpg",
    tags: [
      "GPS Navigation",
      "AI Scene Description",
      "Voice Assistant",
      "Emergency SOS",
    ],
    features: [
      "Real-time environment description",
      "Turn-by-turn voice navigation",
      "One-touch emergency alerts",
      "All-day battery performance",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#FAF6F0] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_32%)]" />
      </div>

      <div className="relative mx-auto container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#0F2137]/10 px-4 py-2 text-sm font-semibold text-[#0F2137]">
            Our Solutions
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold tracking-[-0.02em] text-[#0F2137] md:text-5xl">
            Products Built for{" "}
            <span className="italic text-[#E8A838]">Independence</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3E4A5A]">
            Innovative assistive technology thoughtfully designed for safer,
            smarter, and more confident everyday movement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <BackgroundGradient
                className="h-full rounded-[28px] bg-white p-[1px]"
                containerClassName="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-[27px] bg-white">
                  {/* top accent glow */}
                  <div
                    className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                    style={{ background: `${product.accent}20` }}
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl"
                    style={{ background: `${product.accent}16` }}
                  />

                  {/* image */}
                  <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/50 via-[#0F2137]/10 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <span
                        className="inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
                        style={{
                          background: `${product.accent}20`,
                          color: product.accent,
                          border: `1px solid ${product.accent}30`,
                        }}
                      >
                        {product.eyebrow}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-lg leading-relaxed text-[#3E4A5A]">
                      {product.description}
                    </p>

                    {/* tags */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                          style={{
                            background: `${product.accent}12`,
                            color: product.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* features */}
                    <div className="mt-8 grid gap-3">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-[#0F2137]/8 bg-[#FFFCF8] px-4 py-4"
                        >
                          <span
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                            style={{ background: `${product.accent}16` }}
                          >
                            <Check
                              className="h-3.5 w-3.5"
                              style={{ color: product.accent }}
                            />
                          </span>
                          <span className="text-sm leading-6 text-[#3E4A5A]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* footer */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0F2137] px-6 py-3 text-sm font-semibold text-[#FAF6F0] transition-all duration-300 hover:bg-[#0B1A2E]"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </a>

                      <span className="text-sm text-[#6B7280]">
                        Designed for safer daily independence
                      </span>
                    </div>
                  </div>
                </article>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}