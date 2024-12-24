"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import PricingFilterComponent from "./pricingFilters.component";

export default function PricingComponent() {
  return (
    <div className=" w-full min-h-[100vh]">
      
      <div className="z-10 h-full w-full relative py-[50px]">

      <motion.p
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="font-audioWide pl-8 font-bold text-white text-4xl sm:text-4xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
        Pricing
      </motion.p>
      <br />
      <br />
      <div className="w-full text-center h-full">
        <p className="text-white font-eagleLake text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mt-5">
          Website <span className="text-purple-600">Packages</span>
        </p>
      </div>
      <div className=" mt-10 w-full min-h-screen ">
        <PricingFilterComponent />
        </div>
      </div>
    </div>
  );
}
