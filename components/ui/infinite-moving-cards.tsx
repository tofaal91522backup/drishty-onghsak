"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    profile_link: string;
    study: string;
    college: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      const speedMap = {
        fast: "20s",
        normal: "25s",
        slow: "80s",
      };

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );

      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed],
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="group relative flex w-[320px] md:w-[420px] flex-col shrink-0 rounded-[1.8rem] border border-[#0F2137]/8 bg-white/80 backdrop-blur p-6 justify-center  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,33,55,0.12)]"
          >
            <Image
              src={item.profile_link}
              alt={item.name}
              width={80}
              height={80}
              className="mb-4 h-20 w-20 rounded-full object-cover mx-auto"
            />
            {/* Quote */}
            <blockquote className="text-center mb-4">
              <p className="text-[#3E4A5A] italic leading-relaxed text-sm md:text-base">
                “{item.quote}”
              </p>
            </blockquote>

            {/* Info */}
            <div className="text-center">
              <p className="font-serif text-xl font-bold text-[#0F2137]">
                {item.name}
              </p>

              <p className="text-sm font-medium text-[#2A9D8F]">{item.study}</p>

              <p className="text-sm text-[#6B7280]">{item.college}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
