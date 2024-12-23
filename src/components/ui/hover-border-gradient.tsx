"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #8a2be2 0%, rgba(255, 255, 255, 0) 100%)", // Purple gradient
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #ff69b4 0%, rgba(255, 255, 255, 0) 100%)", // Pink gradient
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #ffeb3b 0%, rgba(255, 255, 255, 0) 100%)", // Yellow gradient
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, #2196f3 0%, rgba(255, 255, 255, 0) 100%)", // Blue gradient
  };

  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Link
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border  mx-auto sm:mx-auto md:mx-auto lg-1:mx-0 lg:mx-0  content-center bg-transparent transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-8 decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-transparent px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[5px] rounded-[100px]" />
    </Link>
  );
}
