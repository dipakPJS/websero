"use client"
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { CoverComponent } from "../coverComponent/cover.component";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export function BackgroundGradientComponent() {
  return (
    <BackgroundGradientAnimation className="p-10 w-full">
      <motion.p
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="font-audioWide pl-8 font-bold text-white text-4xl sm:text-4xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
      >
        Contact
      </motion.p>
      <div className="absolute z-50 inset-0 flex items-center justify-center font-bold px-4 pointer-events-none text-center">
        <CoverComponent />
      </div>
    </BackgroundGradientAnimation>
  );
}
