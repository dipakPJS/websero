"use client"
import { motion } from "framer-motion";

import { useCursor } from "@/context/CursorContext";

// Variants for random fade directions
const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

export default function IntroTitleComponent() {
  const { textEnter, textLeave } = useCursor();

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-10"
      style={{ boxShadow: "inset 0 0 50px 50px black" }}
    >
      <div className="relative w-full h-full">
        <motion.div
          initial={fadeInDirections.top.initial}
          whileInView={fadeInDirections.top.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-header h-full w-full flex justify-center items-center"
        >
          <h1
            className="font-eagleLake text-2xl sm:text-2xl md:text-3xl lg-1:text-4xl lg:text-6xl w-[50%] text-center text-white"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            We are more than just a team
          </h1>
        </motion.div>
        <motion.p
          initial={fadeInDirections.bottom.initial}
          whileInView={fadeInDirections.bottom.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl font-bold border border-purple-500 absolute py-2 px-5 text-white top-[20%] left-[5%] sm:left-[8%] md:left-[15%] lg:left-[20%] bg-transparent  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]"
        >
          We are Listeners
        </motion.p>
        <motion.p
          initial={fadeInDirections.right.initial}
          whileInView={fadeInDirections.right.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl font-bold border border-purple-500 absolute py-2 px-5 text-white top-[30%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[15%] bg-transparent   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]"
        >
          we are genies
        </motion.p>
        <motion.p
          initial={fadeInDirections.left.initial}
          whileInView={fadeInDirections.left.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl font-bold border border-purple-500 absolute py-2 px-5 text-white top-[60%] sm:top-[60%] md:top-[75%] lg:top-[75%] left-[10%] bg-transparent   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]"
        >
          we are bunch of specialists
        </motion.p>
        <motion.div
          initial={fadeInDirections.top.initial}
          whileInView={fadeInDirections.top.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute border border-purple-500 min-h-[120px] w-[350px] sm:w-[400px] md:w-[400px] lg:w-[500px] top-[70%] sm:top-[70%] md-1:top-[60%] md:top-[60%] lg-1:top-[60%] lg:top-[65%] p-5 right-[5%] bg-transparent  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] rounded-[50px]"
        >
          <p className="text-sm md:text-lg lg:text-xl text-white">
            We are visionaries, because we see and understand. We are creators,
            crafting more than just websites—we build experiences. We are a team
            of experts, ready to bring every idea to life with precision and
            care. We are Websero.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
