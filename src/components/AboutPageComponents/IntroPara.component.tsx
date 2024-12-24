"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function IntroParaComponent() {
  return (
    <div className="h-[130vh] w-full bg-black flex flex-col gap-5 px-10 py-[100px] justify-center items-center">
      {/* First Block */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full p-10 relative h-full"
      >
        <div className="absolute left-0 top-0 text-white text-lg md:text-xl lg:text-2xl font-audioWide shadow-[0_0_20px_blue] w-[350px] sm:w-[550px] md:w-[700px] lg:w-[700px] h-auto text-balance p-10 border border-white rounded-[50px]">
          <p>
            For us, it’s all about creating meaningful experiences that resonate
            with your audience and help your business grow. We make our mark by
            creating unique branding, designing beautiful websites, and boosting
            visibility through SEO and PPC strategies that drive real growth.
          </p>
        </div>
      </motion.div>

      {/* Second Block */}
      <motion.div
      variants={fadeIn("left", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full relative h-full ">
        <div className="absolute right-0 top-0 text-white text-lg md:text-xl lg:text-2xl font-audioWide shadow-[0_0_20px_blue] w-[350px] sm:w-[550px] md:w-[700px] lg:w-[700px] h-auto text-balance p-10 border border-white rounded-[50px]">
          <p>
            Our process begins with understanding your vision, goals, and
            challenges. Whether you're a startup making your mark or an
            established business expanding online, we dive deep into your needs.
            Then, we craft a custom approach that combines creativity and
            strategy to ensure your brand shines and your website excels.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
