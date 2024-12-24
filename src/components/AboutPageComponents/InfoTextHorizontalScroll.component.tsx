"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import AboutData from "@/data/AboutData.json";

export default function InfoTextHorizontalScrollComponent() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-90%"]);

  // Skew effect
  const skew = useTransform(scrollYProgress, [0, 2], ["-5deg", "-10deg"]);

  return (
    <div ref={targetRef} className="h-[1000vh]">
      <div className="z-10 relative h-full w-full">
        <div className="sticky top-0 h-screen flex items-start pt-[200px] overflow-hidden">
          <motion.div
            style={{
              x,
              skewX: skew,
            }}
            className="flex gap-x-[50px] transform"
          >
            {AboutData.map(({ title, description }, index) => {
              return (
                <div
                  key={index}
                  className=" min-h-[100px] w-[350px] sm:w-[500px] md:w-[400px] lg:w-[500px] flex flex-col gap-y-5 p-10 rounded-[50px] border border-white bg-transparent transition duration-500 ease-in-out hover:scale-[1.1]"
                >
                  <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-eagleLake text-blue-600 w-full">
                    {title}
                  </h3>
                  <p className=" text-xl md:text-xl lg:text-2xl  text-gray-200">
                    {description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
