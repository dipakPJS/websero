"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import TestimonialData from "@/data/TestimonialData.json";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
 

interface AnimData {
  bgColor: string;
}

export function AnimatedTestimonialsComponent({bgColor}: AnimData) {
 
  return (
    <div className="px-10 min-h-[100vh] flex flex-col gap-y-[50px]" style={{backgroundColor: bgColor}}>
      <div className="z-10 relative">

         <motion.p
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="font-audioWide text-center font-bold text-white text-2xl sm:text-3xl md-1:text-3xl md:text-4xl lg-1:text-5xl lg:text-6xl uppercase"
      >
        What clients <GradientTextComponent span={true} texts="say!" />
      </motion.p>
       <AnimatedTestimonials testimonials={TestimonialData} />
        </div>
    </div>
  )
}
