"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      {/* Glow layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "300% 300%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-50 group-hover:opacity-90 blur-xl transition duration-500",
          `
          bg-[radial-gradient(circle_at_0%_100%,#E8A838,transparent),
              radial-gradient(circle_at_100%_0%,#2A9D8F,transparent),
              radial-gradient(circle_at_100%_100%,#0F2137,transparent),
              radial-gradient(circle_at_0%_0%,#E8A838,#FAF6F0)]
          `,
        )}
      />

      {/* Sharp gradient layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "300% 300%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          `
         
          `,
        )}
      />

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
