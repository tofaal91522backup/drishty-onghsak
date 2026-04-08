"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "School Teacher",
    location: "Dhaka",
    quote:
      "Drishti has given me back my independence. I can now navigate to school every day without assistance, and my students see that disability is not a limitation.",
    image: "/images/user-rafiq.jpg",
    metrics: [
      { label: "Daily Commute", value: "4.2 km" },
      { label: "Independence", value: "100%" },
    ],
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Small Business Owner",
    location: "Chittagong",
    quote:
      "Running my shop seemed impossible after losing my sight. With Drishti, I manage inventory, serve customers, and even expanded my business last year.",
    image: "/images/user-fatima.jpg",
    metrics: [
      { label: "Revenue Growth", value: "+45%" },
      { label: "Customer Reach", value: "3x" },
    ],
  },
  {
    id: 3,
    name: "Karim Hossain",
    role: "University Student",
    location: "Rajshahi",
    quote:
      "The voice navigation helps me attend classes independently. I no longer have to depend on friends to guide me around campus.",
    image: "/images/user-karim.jpg",
    metrics: [
      { label: "Campus Routes", value: "12" },
      { label: "Class Attendance", value: "98%" },
    ],
  },
  {
    id: 4,
    name: "Nasreen Akter",
    role: "Community Health Worker",
    location: "Sylhet",
    quote:
      "I visit families across my village to provide health services. Drishti's obstacle detection keeps me safe on unpaved rural roads.",
    image: "/images/user-nasreen.jpg",
    metrics: [
      { label: "Families Served", value: "150+" },
      { label: "Weekly Visits", value: "40" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function UserStoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-teal/10 px-4 py-2 text-sm font-semibold text-teal mb-4">
            Real Stories
          </span>
          <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl">
            Lives <span className="italic text-amber">Transformed</span>
          </h2>
          <p className="mt-6 text-xl text-navy/70 max-w-2xl mx-auto">
            Meet the individuals whose lives have been changed by Drishti&apos;s
            assistive technology.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-white border border-navy/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex gap-5">
                {/* User Image */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-navy/5">
                  <Image
                    src={story.image}
                    alt={`Portrait of ${story.name}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {/* Location Badge */}
                  <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full bg-navy px-2 py-1 text-xs font-medium text-cream shadow-md">
                    <MapPin className="h-3 w-3" />
                    {story.location}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {story.name}
                  </h3>
                  <p className="text-sm font-medium text-teal">{story.role}</p>

                  {/* Quote */}
                  <blockquote className="mt-3 text-navy/70 italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mt-6 flex gap-4 border-t border-navy/5 pt-5">
                {story.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-lg bg-cream/50 px-4 py-3 text-center"
                  >
                    <p className="text-2xl font-bold text-navy">{metric.value}</p>
                    <p className="text-xs font-medium text-navy/60 uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-amber via-teal to-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
