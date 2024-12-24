"use client"
import VideoComponent from "../videoComponent/video.component";
import { PiLinktreeLogoDuotone } from "react-icons/pi";
import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";

export default function ServiceBookingComponent() {
  const { textEnter, textLeave } = useCursor();

  // Variants for different animations
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paraVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative flex justify-center items-center px-4 sm:px-10">
      <div className="h-[80vh] sm:h-[30rem] w-full rounded-[5rem] relative overflow-hidden">
        {/* video */}
        <div className="absolute inset-0">
          <VideoComponent
            videoUrl="/videos/particles.mp4"
            classNames="absolute top-0 left-0 w-full h-full object-cover rounded-[2rem] sm:rounded-[5rem]"
          />
        </div>

        {/* main booking */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="absolute inset-0 bg-[#0000002a] z-10 rounded-[5rem] sm:rounded-[5rem]"
          style={{ boxShadow: "inset 0 0 100px black" }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center p-5 sm:p-10 gap-5 sm:gap-10 h-auto w-full sm:w-auto bg-transparent backdrop-blur-[10px] rounded-[2rem] sm:rounded-[5rem]">
              <motion.h2
                variants={headingVariant}
                className="text-2xl sm:text-4xl lg:text-6xl font-eagleLake"
              >
                It always starts with trust
              </motion.h2>
              <motion.p
                variants={paraVariant}
                className="text-xs sm:text-sm font-audioWide py-1 px-3 sm:px-5 bg-transparent backdrop-blur-[10px] rounded-full"
              >
                Click here to catch the flow!
              </motion.p>
              <a
                href="#"
                className="font-audioWide text-black px-4 py-2 sm:px-5 sm:py-3 text-base sm:text-xl bg-white rounded-full duration-500 ease-in-out hover:shadow-[0_0_20px_white] hover:scale-110"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <div className="flex justify-between items-center gap-2">
                  Book the Journey{" "}
                  <PiLinktreeLogoDuotone className="text-3xl sm:text-5xl text-purple-700" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
