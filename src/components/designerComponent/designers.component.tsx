"use client"
import { motion } from "framer-motion";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
import SparklesComponent from "../sparklesComponent/sparkles.component";
import { useCursor } from "@/context/CursorContext";
import { ShootingStarsComponent } from "../ShootingStarsComponent/ShootingStars.component";


export default function DesignersComponent() {
  const { textEnter, textLeave } = useCursor();

  // Variants for different animations
  const gradientTextVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sparklesVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-[100vh] w-full">
<div className="relative h-full  w-full flex justify-center items-center flex-col">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="first-section z-10 text-center mt-10 w-[90%] sm:w-[80%] md:w-[80%] lg-1:w-[90%] lg:w-[80%] mx-auto  p-5"
      >
        {/* Animated Gradient Text */}
        <motion.p
          variants={gradientTextVariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          >
          <GradientTextComponent
            span={true}
            texts="We are a ministry of designers & developers, who may not be genies but grant wishes too."
            classNames="text-2xl sm:text-3xl md:text-4xl lg-1:text-5xl lg:text-6xl py-5 font-bold font-eagleLake"
          />
        </motion.p>

        {/* Animated Description */}
        <motion.p
          className="text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-3xl w-full sm:w-[90%] md:w-[90%] lg:w-[80%] text-center mx-auto text-slate-300 mt-10"
          variants={descriptionVariants}
          >
          By connecting deep analysis, strong technical skills and design
          background with clear communication & responsiveness we're creating
          unique projects with a pinch of good vibes
        </motion.p>
      </motion.div>

      {/* Animated Sparkles */}
      <motion.div
        variants={sparklesVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full flex justify-center mt-10"
        >
        <SparklesComponent />
      </motion.div>
        </div>
    </div>
  );
}
