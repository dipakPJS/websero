"use client"
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
import ServiceComponent from "./services.component";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function MainServicesComponent() {
  return (
    <div className="w-full min-h-[100vh] p-4 flex justify-center items-center ">
      <div className=" h-full w-[90%] lg-1:w-[95%] lg:w-[80%] flex flex-col justify-around  lg-1:flex-row lg:flex-row items-center">
        {/* experience text starts */}
        <motion.div 
         variants={fadeIn("right", 0.1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.2 }}
        className="experiences w-[90%]">
          <p className="text-xl font-audioWide text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 uppercase ">
            What we do
          </p>
          <div className="headings font-eagleLake text-4xl lg-1:text-6xl lg:text-6xl">
            <p className=" mt-5"> We Create </p>
            <GradientTextComponent texts="meaningful" span={false} />
            <p className=" mt-2"> Experiences </p>
          </div>
          <p className="mt-10 text-3xl w-3/4 ">
            We create brands and websites for businesses that give a damn.
          </p>
        </motion.div>
        {/* experience text ends */}
        <ServiceComponent colors={["blue", "#2d3436", "black"]} />
      </div>
    </div>
  );
}
