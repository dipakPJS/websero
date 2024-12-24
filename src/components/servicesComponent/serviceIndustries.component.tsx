"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";

const ServiceIndustriesComponent: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Animation transforms for directions
  const topToBottom = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const bottomToTop = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const leftToRight = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const randomMove = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  // Opacity and scale for larger text
  const largeTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 1, 0.3]
  ); // Increased range for visibility
  const largeTextScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.2, 0.5]
  );

  // Opacity for smaller texts
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]); // Start and end with higher opacity

  return (
    <div className="h-[80vh] w-[90%] md:w-[80%] mx-auto mt-[50px] relative px-5">
      <div className="h-full w-full relative flex items-center justify-center text-center text-white">
        {/* Animated Larger Text */}
        <motion.div
          className="px-5 md:px-10 lg:px-20"
          style={{ opacity: largeTextOpacity, scale: largeTextScale }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <GradientTextComponent
            span={false}
            texts="Industries we have worked with"
            classNames="text-3xl md:text-4xl lg-1:text-5xl lg:text-6xl font-eagleLake capitalize"
          />
        </motion.div>

        {/* Animated Smaller Texts */}
        <motion.p
          className="absolute top-[10%] left-0 sm:left-[5%] md:left-[10%] font-iceBerg border py-3 px-4 md:py-2 md:px-3 rounded-[50px] text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-4xl"
          style={{ y: topToBottom, opacity: textOpacity }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Crypto/NFT
        </motion.p>
        <motion.p
          className="absolute top-[20%] lg:top-[15%] right-0 sm:right-[5%] md:right-[7%] font-iceBerg  border py-3 px-4 md:py-2 md:px-3 rounded-[50px] text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-4xl"
          style={{ y: bottomToTop, opacity: textOpacity }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Production
        </motion.p>
        <motion.p
          className="absolute bottom-[20%] right-0 sm:right-[5%] md:right-[10%] font-iceBerg border py-3 px-4 md:py-2 md:px-3 rounded-[50px] text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-4xl"
          style={{ x: leftToRight, opacity: textOpacity }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Beauty/Care
        </motion.p>
        <motion.p
          className="absolute bottom-[10%] left-0 sm:left-[5%] md:left-[10%] font-iceBerg border py-3 px-4 md:py-2 md:px-3 rounded-[50px] text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-4xl"
          style={{ x: randomMove, opacity: textOpacity }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Ed-tech
        </motion.p>
        <motion.p
          className="absolute top-[15%] left-[30%] sm:left-[35%] md:left-[40%] font-iceBerg border py-3 px-4 md:py-2 md:px-3 rounded-[50px] text-xl sm:text-xl md:text-2xl lg-1:text-3xl lg:text-4xl"
          style={{ y: randomMove, opacity: textOpacity }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Development
        </motion.p>
      </div>
    </div>
  );
};

export default ServiceIndustriesComponent;
