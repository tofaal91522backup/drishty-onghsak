"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [children]);

  const safeHeight = Math.max(svgHeight, 300);
  const curvePoint = Math.max(safeHeight - 120, safeHeight * 0.65);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, safeHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, safeHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  const pathD = `M 1 0V -36 l 18 24 V ${curvePoint} l -18 24V ${safeHeight}`;

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-5xl", className)}
    >
      <div className="absolute top-0 left-2 md:left-0">
        <motion.div
          transition={{ duration: 0.25 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "0px 0px 0px rgba(0,0,0,0)"
                : "0 8px 24px rgba(232, 168, 56, 0.22)",
          }}
          className="ml-[27px] flex h-5 w-5 items-center justify-center rounded-full border border-[#E8A838]/30 bg-[#FFF8E8] shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.25 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#F8F6F2" : "#E8A838",
              borderColor: scrollYProgress.get() > 0 ? "#E8A838" : "#D29A2E",
            }}
            className="h-2.5 w-2.5 rounded-full border bg-[#E8A838]"
          />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${safeHeight}`}
          width="20"
          height={safeHeight}
          className="ml-2 md:ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={pathD}
            fill="none"
            stroke="#E8D8B0"
            strokeOpacity="0.45"
            strokeWidth="1"
          />

          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
            className="motion-reduce:hidden"
          />

          <defs>
            <motion.linearGradient
              id="goldGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#E8A838" stopOpacity="0" />
              <stop offset="0.2" stopColor="#E8A838" stopOpacity="1" />
              <stop offset="0.5" stopColor="#F4D58D" stopOpacity="1" />
              <stop offset="0.8" stopColor="#D29A2E" stopOpacity="1" />
              <stop offset="1" stopColor="#E8A838" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef} className="pl-16  md:pl-0">
        {children}
      </div>
    </motion.div>
  );
};
