"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useCursor } from "@/context/CursorContext";
import { ShootingStarsComponent } from "../ShootingStarsComponent/ShootingStars.component";

export default function TextScrollComponent() {
  const { textEnter, textLeave } = useCursor();

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Define two transforms for the two layers moving in opposite directions
  const x1 = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "30%"]);

  const text = "What We D0";

  return (
    <div ref={targetRef} className="h-[300vh] bg-black">
      <div className="h-full w-full relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden rotate-[5deg] w-[150%]">
          {/* First layer of text */}
          <motion.div
            style={{ x: x1 }}
            className="absolute top-[60%] flex gap-x-[5px] md:gap-x-[10px] lg:gap-x-[20px] w-auto"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {text.split("").map((char, index) => (
              <p
                key={index}
                className=" text-[150px] lg-1:text-[180px] lg:text-[200px] font-audioWide text-transparent bg-clip-text bg-gradient-to-bl from-[blue]  via-[#ee00ff] to-[purple] bg-[length:200%] bg-left animate-gradient-x"
              >
                {char}
              </p>
            ))}
          </motion.div>
          {/* Second layer of text moving in the opposite direction */}
          <motion.div
            style={{ x: x2 }}
            className="absolute top-[30%] flex gap-x-[5px] md:gap-x-[10px] lg:gap-x-[20px] w-auto"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {text.split("").map((char, index) => (
              <p
                key={index}
                className=" text-[150px] lg-1:text-[180px] lg:text-[200px] font-audioWide text-transparent bg-clip-text bg-gradient-to-tr from-purple-700  via-[blue] to-pink-600 bg-[length:200%] bg-left animate-gradient-x"
              >
                {char}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
