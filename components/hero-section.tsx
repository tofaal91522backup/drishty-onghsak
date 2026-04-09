"use client";

import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

const fadeUp: any = {
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
    <section className="relative overflow-hidden bg-[#FAF6F0] pb-20 pt-28 lg:min-h-screen lg:pb-24 lg:pt-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,104,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(35,125,161,0.12),transparent_28%)]" />
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0B1D39_1px,transparent_1px),linear-gradient(to_bottom,#0B1D39_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto container px-0 md:px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
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
              className="mt-7 font-serif text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-[#0F2137] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              See beyond sight.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-7 max-w-xl text-base leading-[1.7] text-[#3E4A5A] sm:text-lg lg:mx-0 lg:text-xl"
            >
              Empowering visually impaired people with an intelligent smart cane
              experience designed to improve mobility, awareness, and confidence
              in everyday movement across Bangladesh.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#cfac6e] px-8 py-3.5 text-base font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.18)] transition-all duration-300 hover:-translate-y-0.5 t focus:outline-none"
              >
                Pre-order Now
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#0F2137]/15 bg-white/75 px-8 py-3.5 text-base font-semibold text-[#0F2137] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 "
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                "Obstacle detection",
                "Voice guidance",
                "Built for real streets",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0F2137]/10 bg-white/65 px-4 py-3 text-sm font-medium text-[#1F2A37] shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative cursor-grab"
          >
            <div className="absolute inset-0 scale-95 rounded-[2rem] bg-gradient-to-tr from-[#E8A838]/15 via-transparent to-[#2A9D8F]/15 blur-3xl" />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-3 shadow-[0_30px_80px_rgba(15,33,55,0.10)] backdrop-blur-md"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,#f8f2e8_0%,#f4ede2_52%,#edf4f3_100%)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,168,56,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.10),transparent_28%)]" />

                <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[580px]">
                  <ModelViewer
                    url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                    width="100%"
                    height="100%"
                    modelXOffset={0}
                    modelYOffset={-0.5}
                    autoFrame
                    enableMouseParallax
                    enableHoverRotation
                    environmentPreset="forest"
                    fadeIn
                    autoRotate
                    autoRotateSpeed={0.3}
                    showScreenshotButton={false}
                  />
                </div>

                <div className="pointer-events-none absolute bottom-4 right-4 hidden rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur md:block">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0F2137]/45">
                    Smart Feature
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#0F2137]">
                    Real-time obstacle alert
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
