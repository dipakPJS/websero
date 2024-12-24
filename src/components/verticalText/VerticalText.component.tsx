"use client"
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function VerticalText() {
    return (
        <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="h-full w-full flex justify-between items-center text-center px-2">
       <div className="w-full"></div>
       <div className="h-[500px] w-full  relative">
       <p className="text-xs sm:text-xl md:text-xl lg-1:text-2xl lg:text-2xl text-white font-audioWide absolute top-[50%] left-[47%] w-full transform rotate-90">
        Your Success, {" "}
          <GradientTextComponent span={true} texts="Our Mission"/>
        </p>
       </div>
      </motion.div>
    )
}