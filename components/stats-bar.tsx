"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "717+",
    label: "Active Users",
  },
  {
    value: "65",
    label: "District Ambassadors",
  },
  {
    value: "1st",
    label: "Patent Filed",
  },
  {
    value: "Robi",
    label: "Strategic Partner",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StatsBar() {
  return (
    <div className="relative z-10 -mt-20 px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mx-auto max-w-5xl"
      >
        <div className="overflow-hidden rounded-2xl border border-cream-200/50 bg-white/80 shadow-xl shadow-navy/5 backdrop-blur-md">
          <div className="grid grid-cols-2 divide-x divide-cream-200/50 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 text-center transition-colors hover:bg-cream/50 md:p-8"
              >
                {/* Subtle accent on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-amber to-teal transition-transform duration-300 group-hover:scale-x-100" />
                
                <p className="font-serif text-3xl font-bold text-navy md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-navy/60 md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
