"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const products = [
  {
    name: "Abhash Smart Cane",
    eyebrow: "Flagship Mobility",
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
    eyebrow: "Intelligent Guidance",
    description:
      "A wearable device with AI-powered scene description and GPS navigation, providing real-time audio guidance for complete independence.",
    accent: "#2A9D8F",
    image:
      "https://www.shutterstock.com/image-vector/blind-woman-holding-stick-mobile-600nw-1661441773.jpg",
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
    <section
      id="products"
      className="relative overflow-hidden bg-[#FAF6F0] py-24 lg:py-32"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_35%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#0F2137 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#E8A838]/30 bg-[#E8A838]/10 px-5 py-2 text-sm font-bold tracking-widest uppercase text-[#E8A838] shadow-sm backdrop-blur-sm">
            Our Solutions
          </span>

          <h2 className="mt-8 font-serif text-4xl font-extrabold tracking-tight text-[#0F2137] sm:text-5xl lg:text-6xl">
            Products Built for{" "}
            <span className="bg-gradient-to-br from-[#E8A838] to-[#c78b27] bg-clip-text text-transparent italic pr-2">
              Independence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5A6779] sm:text-xl">
            Innovative assistive technology thoughtfully designed for safer,
            smarter, and more confident everyday movement.
          </p>
        </motion.div>

        {/* Completely Redesigned Horizontal Cards */}
        <div className="grid gap-16 lg:grid-cols-1 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className={`group flex flex-col rounded-[2.5rem] bg-white shadow-xl shadow-[#0F2137]/5 border border-slate-100 overflow-hidden lg:flex-row ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* 1. Image Section (Left or Right depending on index) */}
                <div className="relative w-full lg:w-[45%] h-[350px] lg:h-auto overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40 z-10 mix-blend-multiply"
                    style={{ backgroundColor: product.accent }}
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Inner shadow/gradient overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 lg:bg-gradient-to-r" />
                </div>

                {/* 2. Content Section */}
                <div className="relative flex flex-col flex-grow p-8 sm:p-10 lg:p-14 overflow-hidden">
                  {/* Subtle Background Glow inside the card */}
                  <div
                    className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full blur-[80px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ background: product.accent }}
                  />

                  {/* Eyebrow & Title */}
                  <div className="mb-6">
                    <span
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]"
                      style={{
                        background: `${product.accent}15`,
                        color: product.accent,
                      }}
                    >
                      {product.eyebrow}
                    </span>
                    <h3 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#0F2137] sm:text-4xl">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed text-[#5A6779] mb-8">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border px-3 py-1 text-sm font-medium transition-colors"
                        style={{
                          borderColor: `${product.accent}30`,
                          color: "#3E4A5A",
                          backgroundColor: `${product.accent}05`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features Grid (2 columns on medium screens and up) */}
                  <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 mb-10">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: product.accent }}
                        >
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-[#4A5568]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer / CTA Buttons */}
                  <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0F2137] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = product.accent)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0F2137")
                      }
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}