"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { useEffect } from "react";

export default function CursorComponent() {
  const { cursorVariant, variants } = useCursor();

  // Set up motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring animation for smooth movement
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const offset = cursorVariant === "text" ? 150 : 15; // Adjust for growing cursor

      // Adjust the mouse position based on the cursor size
      mouseX.set(e.clientX - offset); // 75px for the larger cursor
      mouseY.set(e.clientY - offset); // Same for vertical positioning
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorVariant, mouseX, mouseY]); 

  return (
    <motion.div
      className="bg-white rounded-full fixed top-0 left-0 pointer-events-none z-[500] mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
