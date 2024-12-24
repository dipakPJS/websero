"use client"
import WorkFlowData from "@/data/WorkflowData.json";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
import { MeteorsComponent } from "../metorsComponent/metors.component";
import { motion } from "framer-motion";

// Variants for random fade directions
const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

export default function WorkflowComponent() {
  return (
    <div className="min-h-[120vh] w-full relative  flex flex-col items-start justify-start px-10 pb-[50px]">
      {/* Header Section */}
      <div className="text-start p-6 h-auto w-full relative flex flex-col gap-5">
        <motion.h1
        initial={fadeInDirections.top.initial}
        whileInView={fadeInDirections.top.animate}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="uppercase text-slate-400 text-lg md:text-xl lg:text-2xl">
          Workflow
        </motion.h1>
        <motion.div
        initial={fadeInDirections.left.initial}
        whileInView={fadeInDirections.left.animate}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GradientTextComponent
            span={false}
            texts=" Discipline is the key to success"
            classNames="text-3xl md:text-4xl lg:text-5xl font-audioWide capitalize"
          />
        </motion.div>
      </div>

      {/* Workflow Items Section */}
      <div className="flex flex-wrap gap-6 w-full p-6 justify-center items-center">
        {WorkFlowData.map(({ id, title, description }, index) => (
          <div
            key={index}
            className="flex-grow sm:flex-none max-w-full sm:max-w-[48%] lg:max-w-[30%] flex justify-center"
          >
            <MeteorsComponent id={id} title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
}
