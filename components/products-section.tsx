"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Abhash Smart Cane",
    description:
      "Our flagship smart cane with advanced obstacle detection and haptic feedback, designed for intuitive navigation in any environment.",
    gradient: "from-amber/30 via-amber/10 to-cream",
    accentColor: "amber",
    tags: ["Ultrasonic Sensing", "Haptic Feedback", "Long Battery Life", "Lightweight"],
    features: [
      "3-meter obstacle detection range",
      "Vibration alerts for different obstacles",
      "15+ hours battery life",
      "Ergonomic folding design",
    ],
  },
  {
    name: "AI Wearable Companion",
    description:
      "A wearable device with AI-powered scene description and GPS navigation, providing real-time audio guidance for complete independence.",
    gradient: "from-teal/30 via-teal/10 to-cream",
    accentColor: "teal",
    tags: ["GPS Navigation", "AI Scene Description", "Voice Assistant", "Emergency SOS"],
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
    <section id="products" className="py-24 lg:py-32 bg-cream">
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
            Our Solutions
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold text-navy md:text-5xl">
            Products Built for <span className="italic text-amber">Independence</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/70">
            Innovative assistive technology designed with input from the visually impaired community.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image Placeholder */}
              <div className={`relative h-72 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Device Silhouette */}
                  <div className="relative">
                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-8 rounded-full ${
                        product.accentColor === "amber" ? "bg-amber/20" : "bg-teal/20"
                      } blur-2xl`}
                    />
                    
                    {/* Device Shape */}
                    {index === 0 ? (
                      // Smart Cane Representation
                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className={`h-40 w-4 rounded-full ${
                            product.accentColor === "amber" ? "bg-amber" : "bg-teal"
                          } shadow-lg`}
                        />
                        <div
                          className={`mt-2 h-8 w-8 rounded-full ${
                            product.accentColor === "amber" ? "bg-amber-600" : "bg-teal-600"
                          } shadow-lg`}
                        />
                        {/* Sensor Waves */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              className={`absolute left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-2 ${
                                product.accentColor === "amber"
                                  ? "border-amber/40"
                                  : "border-teal/40"
                              }`}
                              style={{
                                width: `${i * 30 + 20}px`,
                                height: `${i * 30 + 20}px`,
                              }}
                              animate={{
                                opacity: [0.6, 0.2, 0.6],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Wearable Representation
                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className={`h-24 w-24 rounded-2xl ${
                            product.accentColor === "amber" ? "bg-amber" : "bg-teal"
                          } shadow-lg`}
                        >
                          {/* Screen */}
                          <div className="m-2 h-20 w-20 rounded-xl bg-navy/20" />
                        </div>
                        {/* Band */}
                        <div
                          className={`-mt-2 h-8 w-32 rounded-full ${
                            product.accentColor === "amber" ? "bg-amber-600" : "bg-teal-600"
                          }`}
                        />
                        {/* Signal Waves */}
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                              product.accentColor === "amber"
                                ? "border-amber/30"
                                : "border-teal/30"
                            }`}
                            style={{
                              width: `${i * 50 + 80}px`,
                              height: `${i * 50 + 80}px`,
                            }}
                            animate={{
                              opacity: [0.4, 0.1, 0.4],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2.5,
                              delay: i * 0.4,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative Corner Gradient */}
                <div
                  className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full ${
                    product.accentColor === "amber" ? "bg-amber/30" : "bg-teal/30"
                  } blur-3xl`}
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-navy/70">
                  {product.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                        product.accentColor === "amber"
                          ? "bg-amber/10 text-amber-700"
                          : "bg-teal/10 text-teal-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Feature List */}
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-navy/70">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          product.accentColor === "amber" ? "bg-amber" : "bg-teal"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
