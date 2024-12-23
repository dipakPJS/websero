import { Variants } from "framer-motion";

// Defining the valid directions
type Direction = "up" | "down" | "left" | "right" | "";

// Updating AnimationConfig to align with Variants from framer-motion
export const fadeIn = (direction: Direction, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.25], 
        delay,
      },
    },
  };
};

