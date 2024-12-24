"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import ProcessData from "@/data/ProcessData.json";
import { MeteorsComponent } from "../metorsComponent/metors.component";

export default function ProcessComponent() {
  return (
    <div className="w-full min-h-[120vh] py-[100px] flex flex-col items-center text-left ">
      <div className="w-full">
        <motion.p
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="font-audioWide pl-8 font-bold text-black text-4xl sm:text-4xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
          Process
        </motion.p>
      </div>

      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg-1:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-y-10 p-10 gap-x-5 place-items-center w-full">
        {ProcessData.map((item, index) => {
          return (
            <MeteorsComponent
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
