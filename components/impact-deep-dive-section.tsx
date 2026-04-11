"use client";

import { motion } from "framer-motion";
import { Footprints, Briefcase, Network } from "lucide-react";

const pillars = [
  {
    id: "mobility",
    title: "Mobility",
    icon: Footprints,
    gradient: "from-amber/20 via-amber/5 to-transparent",
    accentColor: "amber",
    description:
      "Empowering independent movement with advanced obstacle detection and voice-guided navigation for safe daily travel.",
    metrics: [
      { label: "Average Daily Distance", value: 85, unit: "km", max: 100 },
      { label: "Obstacle Alerts Accuracy", value: 97, unit: "%", max: 100 },
      { label: "User Confidence Score", value: 92, unit: "%", max: 100 },
    ],
  },
  {
    id: "economic",
    title: "Economic",
    icon: Briefcase,
    gradient: "from-teal/20 via-teal/5 to-transparent",
    accentColor: "teal",
    description:
      "Enabling economic independence through enhanced employment opportunities and entrepreneurship support.",
    metrics: [
      { label: "Employment Rate Increase", value: 68, unit: "%", max: 100 },
      { label: "Income Growth", value: 45, unit: "%", max: 100 },
      { label: "Business Owners", value: 34, unit: "", max: 50 },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    icon: Network,
    gradient: "from-coral/20 via-coral/5 to-transparent",
    accentColor: "coral",
    description:
      "Building a nationwide support network of ambassadors, partners, and community advocates.",
    metrics: [
      { label: "District Coverage", value: 65, unit: "", max: 64 },
      { label: "Partner Organizations", value: 28, unit: "", max: 50 },
      { label: "Community Events", value: 156, unit: "", max: 200 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ProgressBar({
  value,
  max,
  color,
}: {
  value: number;
  max: number;
  color: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses: Record<string, string> = {
    amber: "bg-amber",
    teal: "bg-teal",
    coral: "bg-coral",
  };

  return (
    <div className="h-2 w-full rounded-full bg-navy/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className={`h-full rounded-full ${colorClasses[color]}`}
      />
    </div>
  );
}

export function ImpactDeepDiveSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex mb-4 items-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8A838]">
            Our Impact
          </span>

          <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl">
            Three Pillars of <span className="italic text-teal">Change</span>
          </h2>
          <p className="mt-6 text-xl text-navy/70 max-w-2xl mx-auto">
            Drishti creates lasting impact across mobility, economic
            empowerment, and community building.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className={`relative rounded-3xl bg-gradient-to-b ${pillar.gradient} border border-navy/5 p-8 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Icon className="w-full h-full" strokeWidth={0.5} />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                    pillar.accentColor === "amber"
                      ? "bg-amber/20 text-amber"
                      : pillar.accentColor === "teal"
                        ? "bg-teal/20 text-teal"
                        : "bg-coral/20 text-coral"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-navy/70 leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Metrics with Progress Bars */}
                <div className="space-y-5">
                  {pillar.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-sm font-medium text-navy/60">
                          {metric.label}
                        </span>
                        <span className="text-lg font-bold text-navy">
                          {metric.value}
                          {metric.unit}
                        </span>
                      </div>
                      <ProgressBar
                        value={metric.value}
                        max={metric.max}
                        color={pillar.accentColor}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
