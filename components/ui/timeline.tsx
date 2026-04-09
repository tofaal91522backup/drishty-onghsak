"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white font-sans md:px-10"
    >
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-24"
          >
            {/* Left sticky title */}
            <div className="sticky top-32 z-30 flex w-full max-w-xs self-start md:max-w-sm lg:max-w-md">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2137]/10 bg-white shadow-[0_8px_20px_rgba(15,33,55,0.08)]">
                <div className="h-4 w-4 rounded-full border-2 border-[#E8A838] bg-[#E8A838]" />
              </div>

              <h3 className="hidden pl-20 font-serif text-2xl font-bold tracking-[-0.02em] text-[#0F2137] md:block md:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>

            {/* Right content */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block font-serif text-2xl font-bold tracking-[-0.02em] text-[#0F2137] md:hidden">
                {item.title}
              </h3>

              <div className="rounded-[1.5rem] border border-[#0F2137]/8 bg-[#FFFCF8] p-5 shadow-[0_12px_32px_rgba(15,33,55,0.05)] md:p-6">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Base line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,33,55,0.10)_10%,rgba(15,33,55,0.10)_90%,transparent_100%)]"
        >
          {/* Animated progress */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-[linear-gradient(to_bottom,#E8A838_0%,#2A9D8F_55%,#E8A838_100%)]"
          />
        </div>
      </div>
    </div>
  );
};