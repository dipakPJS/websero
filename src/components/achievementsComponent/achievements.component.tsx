"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { WobbleCardComponent } from "../wobbleCardComponent/woobleCard.component";

export default function AchievementsComponent() {
  return (
    <div className="w-full min-h-[170vh]">
      <div className="z-10 relative  py-[100px] h-full w-full">
        <motion.p
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="font-audioWide z-[100] pl-8 font-bold text-white text-4xl sm:text-4xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
          Achievements
        </motion.p>
        <div className="w-full mt-[100px]">
          <WobbleCardComponent />
        </div>
      </div>
    </div>
  );
}
