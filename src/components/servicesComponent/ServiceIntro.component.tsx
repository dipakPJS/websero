"use client"
import ServiceTitleComponent from "./ServiceTitle.component";
import Lottie from "lottie-react";
import CircleLottie from "../../../public/lottie/circlelottie.json";
import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function ServiceIntroComponent() {
  const { textEnter, textLeave } = useCursor();

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center px-6 ">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-8 ">
        {/* Intro Text */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 relative text-center lg:text-left"
        >
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="font-audioWide text-4xl sm:text-5xl md:text-6xl lg-1:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-pink-600 animate-gradient-x"
          >
            Our Services
          </h2>
          <p className="mt-4 text-base md:text-2xl lg-1:text-3xl lg:text-4xl font-audioWide text-slate-400">
            Our creative team of branding, web design, web development, and
            marketing experts care about your project, almost as much as you do!
          </p>
        </motion.div>
        {/* Lottie Animation with Randomly Positioned Titles */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 relative h-64 md:h-[300px] lg:h-[400px]"
        >
          {/* Service Title Component */}
          <ServiceTitleComponent />
          {/* Lottie Animation */}
          <Lottie animationData={CircleLottie} className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
}
