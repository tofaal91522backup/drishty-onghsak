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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StatsBar() {
  return (
    <section className="absolute z-20 -mt-20 px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(15,33,55,0.08)] backdrop-blur-xl">
          {/* soft glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_28%)]" />

          {/* top accent line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A838]/70 to-transparent" />

          <div className="relative grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={[
                  "group relative px-5 py-7 text-center sm:px-6 sm:py-8 md:px-8 md:py-9",
                  "transition-all duration-300 hover:bg-white/40",
                  index !== stats.length - 1 ? "md:border-r md:border-[#0F2137]/8" : "",
                  index < 2 ? "border-b border-[#0F2137]/8 md:border-b-0" : "",
                ].join(" ")}
              >
                <div className="absolute inset-x-6 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#E8A838] to-[#2A9D8F] transition-transform duration-300 group-hover:scale-x-100" />

                <p className="font-serif text-[2rem] leading-none tracking-[-0.03em] text-[#0F2137] sm:text-[2.25rem] md:text-[2.6rem]">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-medium tracking-[0.01em] text-[#4B5563] sm:text-[15px] md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}