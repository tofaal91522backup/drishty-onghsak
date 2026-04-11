"use client";

import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF6F0] pt-20 pb-12 lg:pt-24 lg:pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,104,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(35,125,161,0.12),transparent_28%)]" />
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-[#E8A838]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-[#2A9D8F]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0B1D39_1px,transparent_1px),linear-gradient(to_bottom,#0B1D39_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto container min-h-[calc(100vh-6rem)] px-6 md:px-12">
        <div className="relative grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-0">
          {/* LEFT CONTENT */}
          <div className="relative z-20 pt-8 lg:col-span-4 lg:self-start lg:pt-16">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A838]/30 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#0F2137] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#E8A838]" />
                Assistive Technology from Bangladesh
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 max-w-[8ch] font-serif text-5xl font-bold leading-[0.98] tracking-tight text-[#0F2137] sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
            >
              See beyond sight.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 max-w-md text-base leading-[1.75] text-[#3E4A5A] sm:text-lg"
            >
              Empowering visually impaired people with an intelligent smart cane
              experience designed to improve mobility, awareness, and confidence
              in everyday movement across Bangladesh.
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#cfac6e] px-8 py-3.5 text-base font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.18)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Pre-order Now
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#0F2137]/15 bg-white/75 px-8 py-3.5 text-base font-semibold text-[#0F2137] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </motion.div>

            {/* Feature Chips */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-3"
            >
              {[
                "Obstacle detection",
                "Voice guidance",
                "Built for real streets",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0F2137]/10 bg-white/65 px-4 py-2.5 text-sm font-medium text-[#1F2A37] shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT MAIN VISUAL */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10 mt-8 flex aspect-square w-full max-w-[680px] items-center justify-center justify-self-center lg:col-span-8 lg:mt-0 lg:justify-self-end"
          >
            {/* Main glow */}
            <div className="absolute inset-0 scale-95 rounded-full bg-gradient-to-tr from-[#E8A838]/15 via-transparent to-[#2A9D8F]/15 blur-3xl" />

            {/* Outer segmented ring */}
            <div className="absolute inset-2 rounded-full border-[4px] border-transparent border-t-[#E8A838] border-r-[#2A9D8F] border-b-[#0F2137] border-l-[#cfac6e] opacity-75" />

            {/* Decorative rings */}
            <div className="absolute inset-6 rounded-full border border-[#0F2137]/10 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-14 rounded-full border-[10px] border-white/60 shadow-[0_8px_32px_rgba(15,33,55,0.05)]" />
            <div className="absolute inset-[4.25rem] rounded-full border border-[#0F2137]/5" />

            {/* Inner background */}
            <div className="absolute inset-14 overflow-hidden rounded-full bg-[linear-gradient(135deg,#f8f2e8_0%,#f4ede2_52%,#edf4f3_100%)] shadow-inner">
              <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,#0F2137_1px,transparent_1px)] [background-size:100%_4px]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,168,56,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.10),transparent_28%)]" />
            </div>

            {/* 3D model */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 flex h-full w-full items-center justify-center scale-[1.14]"
            >
              <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                width="100%"
                height="100%"
                modelXOffset={0}
                modelYOffset={0.3}
                autoFrame
                enableMouseParallax
                enableHoverRotation
                environmentPreset="forest"
                fadeIn
                autoRotate
                autoRotateSpeed={0.3}
                showScreenshotButton={false}
              />
            </motion.div>

            {/* RIGHT BOTTOM SUPPORT CARD */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="absolute right-0 bottom-4 z-30 w-[220px] rounded-2xl border border-white/80 bg-white/85 px-5 py-4 shadow-xl backdrop-blur sm:w-[250px] lg:right-2 lg:bottom-8"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#0F2137]/45">
                Smart Feature
              </p>
              <p className="text-sm font-semibold text-[#0F2137] sm:text-base">
                Real-time obstacle alert
              </p>
              <p className="mt-2 text-xs leading-6 text-[#3E4A5A]">
                Instant feedback helps users react faster and move more safely.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}