"use client";

import { motion } from "framer-motion";
import { Radio, Cpu, Bell, Navigation } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Sense",
    description: "Ultrasonic sensors detect obstacles and measure distances in real-time",
    icon: Radio,
    color: "amber",
  },
  {
    number: 2,
    title: "Process",
    description: "AI algorithms analyze the environment and identify potential hazards",
    icon: Cpu,
    color: "teal",
  },
  {
    number: 3,
    title: "Alert",
    description: "Haptic feedback and audio cues warn users of obstacles ahead",
    icon: Bell,
    color: "amber",
  },
  {
    number: 4,
    title: "Navigate",
    description: "GPS and voice guidance provide turn-by-turn directions safely",
    icon: Navigation,
    color: "teal",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-cream/10 px-4 py-2 text-sm font-semibold text-cream">
            The Technology
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold text-cream md:text-5xl">
            How <span className="italic text-amber">Abhash</span> Works
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/70">
            Advanced technology made simple. Four seamless steps to safer navigation.
          </p>
        </motion.div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-amber via-teal to-amber lg:block" />

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Badge */}
                <div className="relative z-10">
                  <motion.div
                    className={`flex h-32 w-32 items-center justify-center rounded-full ${
                      step.color === "amber"
                        ? "bg-gradient-to-br from-amber to-amber-600"
                        : "bg-gradient-to-br from-teal to-teal-600"
                    } shadow-2xl`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Inner Circle */}
                    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-navy">
                      <span
                        className={`text-3xl font-bold ${
                          step.color === "amber" ? "text-amber" : "text-teal"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Pulsing Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${
                      step.color === "amber" ? "bg-amber/20" : "bg-teal/20"
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>

                {/* Icon */}
                <div
                  className={`mt-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                    step.color === "amber" ? "bg-amber/20" : "bg-teal/20"
                  }`}
                >
                  <step.icon
                    className={`h-6 w-6 ${step.color === "amber" ? "text-amber" : "text-teal"}`}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 font-serif text-2xl font-bold text-cream">{step.title}</h3>
                <p className="mt-3 text-cream/70">{step.description}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="mt-6 flex justify-center md:hidden">
                    <motion.div
                      className={`h-8 w-0.5 ${
                        step.color === "amber" ? "bg-amber/50" : "bg-teal/50"
                      }`}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
