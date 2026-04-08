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
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-amber/20 px-4 py-2 text-sm font-semibold text-amber">
              Join Our Network
            </span>
            <h2 className="mt-6 font-serif text-4xl font-bold text-cream md:text-5xl">
              Become a <span className="italic text-amber">District Ambassador</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              Join our mission to bring assistive technology to every corner of Bangladesh. 
              As a District Ambassador, you&apos;ll be at the forefront of transforming lives 
              while building a rewarding career.
            </p>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/20">
                    <stat.icon className="h-6 w-6 text-amber" />
                  </div>
                  <div className="text-3xl font-bold text-amber">{stat.value}</div>
                  <div className="mt-1 text-sm text-cream/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-cream/10 p-8 backdrop-blur-sm lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-cream">
                Ambassador Benefits
              </h3>
              <p className="mt-2 text-cream/60">
                Everything you need to succeed in your region
              </p>

              {/* Benefits List */}
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20">
                      <Check className="h-3.5 w-3.5 text-teal" />
                    </span>
                    <span className="text-cream/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Apply Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 flex w-full items-center justify-center rounded-full bg-amber px-8 py-4 text-lg font-semibold text-navy transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Apply to Become an Ambassador
              </motion.a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-teal/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
