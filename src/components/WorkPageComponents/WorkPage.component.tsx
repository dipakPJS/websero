"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkData from "@/data/WorkData.json";

import Image from "next/image";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";
 
import { CgArrowsExpandUpRight } from "react-icons/cg";

// Variants for random fade directions
const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

const categories = [
  "Show All",
  "Websites",
  "Social Media",
  "Branding",
  "Design",
];

const itemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 50,
    transition: { delay: index * 0.1 },
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      damping: 20,
      stiffness: 120,
    },
  }),
  exit: (index: number) => ({
    opacity: 0,
    y: -50,
    transition: { delay: index * 0.05, duration: 0.2, ease: "easeInOut" },
  }),
};

const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const filteredData =
    selectedCategory === "Show All"
      ? WorkData
      : WorkData.filter((item) => item.category === selectedCategory);

  return (
    <div className=" w-full min-h-screen">
      {/* Main Content */}
      <div className="relative h-full z-10 w-full px-10 pb-20 pt-[100px]">
        {/* Title */}
        <motion.div
          initial={fadeInDirections.top.initial}
          whileInView={fadeInDirections.top.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-10 pt-[100px]"
        >
          <GradientTextComponent
            span={false}
            texts="Our Works"
            classNames="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-audioWide"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={fadeInDirections.bottom.initial}
          whileInView={fadeInDirections.bottom.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-[100px]"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={` px-2 sm:px-5 md:px-5 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 rounded-[50px] font-bold text-xs sm:text-sm md:text-lg lg:text-xl border border-white  text-white font-iceBerg transition duration-300 ease-in-out ${
                selectedCategory === category
                  ? "shadow-custom scale-[1.1] border-blue-600"
                  : "scale-[1]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Filtered Items */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg-1:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="wait">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="py-5 shadow flex flex-col gap-5"
              >
                <div className="relative group rounded-3xl overflow-hidden border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="responsive"
                    loading="lazy"
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />

                  <a
                    href={item.link}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-[0.8] transition-opacity duration-500"
                  >
                    <button className="p-10 rounded-full bg-[#0000009f] shadow-lg">
                      <CgArrowsExpandUpRight className="text-[yellow] scale-[2]" />
                    </button>
                  </a>
                </div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-lg text-white font-audioWide">
                  {item.title}
                </h3>
                <div className="flex flex-wrap justify-start gap-2 mt-3 w-full">
                  {item.tags.map((tag, idx) => (
                    <p
                      key={idx}
                      className="px-5 py-2 border border-[#FC427B] rounded-[50px] text-white"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
