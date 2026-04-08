"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-24 pb-32 lg:pb-48">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Tag */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-sm font-medium text-navy">
                Assistive Technology from Bangladesh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 font-serif text-5xl font-bold leading-tight tracking-tight text-navy md:text-6xl lg:text-7xl"
            >
              <span className="text-balance">
                See beyond{" "}
                <em className="not-italic text-amber">sight.</em>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-navy/70 md:text-xl lg:max-w-lg"
            >
              Empowering the visually impaired with smart cane technology that 
              transforms mobility, safety, and independence across Bangladesh.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-navy px-8 py-3.5 text-base font-semibold text-cream transition-all duration-300 hover:bg-navy/90 hover:shadow-lg hover:shadow-navy/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Pre-order Now
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-navy bg-transparent px-8 py-3.5 text-base font-semibold text-navy transition-all duration-300 hover:bg-navy hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right Visual - Smart Device with Glowing Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 rounded-full border-2 border-amber/20" />
                <div className="absolute inset-8 rounded-full border-2 border-teal/25" />
                <div className="absolute inset-16 rounded-full border-2 border-amber/30" />
              </div>

              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-navy/10" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-teal/20" />
              </motion.div>

              {/* Central device representation */}
              <div className="absolute inset-24 flex items-center justify-center">
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* Inner glow */}
                  <div className="absolute h-32 w-32 rounded-full bg-amber/20 blur-2xl" />
                  
                  {/* Device body */}
                  <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-navy via-navy to-navy/90 shadow-2xl shadow-navy/30">
                    {/* Sensor dot */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(232, 168, 56, 0.4)",
                          "0 0 0 20px rgba(232, 168, 56, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-8 w-8 rounded-full bg-amber"
                    />
                  </div>

                  {/* Floating indicator dots */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 top-1/4 h-3 w-3 rounded-full bg-teal"
                  />
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-2 bottom-1/3 h-2 w-2 rounded-full bg-coral"
                  />
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-1/4 -top-2 h-2.5 w-2.5 rounded-full bg-amber"
                  />
                </div>
              </div>

              {/* Pulse waves emanating from device */}
              <motion.div
                animate={{ scale: [1, 1.2], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-20 rounded-full border-2 border-amber/40"
              />
              <motion.div
                animate={{ scale: [1, 1.3], opacity: [0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-20 rounded-full border-2 border-teal/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
