"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotLightComponent } from "../cardSpotLightComponent/CardSpotLight.component";
import pricingData from "@/data/pricingData.json"; 

const PricingFilterComponent: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<
    "Basic" | "Content-Focused" | "Custom" | "Enterprise"
  >("Basic");

  const handleFilterClick = (
    level: "Basic" | "Content-Focused" | "Custom" | "Enterprise"
  ) => {
    setActiveLevel(level);
  };

  // Filter the imported data based on the selected level
  const filteredPackages = pricingData.filter(
    (pkg) => pkg.level === activeLevel
  );

  // Variants for animation of cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <div className="p-5 w-full ">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {["Basic", "Content-Focused", "Custom", "Enterprise"].map((level) => (
          <button
            key={level}
            onClick={() =>
              handleFilterClick(
                level as "Basic" | "Content-Focused" | "Custom" | "Enterprise"
              )
            }
            className={`px-4 py-2 rounded-[50px] font-semibold transition-colors ${
              activeLevel === level
                ? "bg-purple-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {level} Package
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <motion.div
        className="mt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 md:gap-5 sm:gap-2 lg:px-10 min-h-screen"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence mode="wait">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={index}
            >
              <CardSpotLightComponent
                key={pkg.id}
                id={pkg.id}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                pages={pkg.pages}
                duration={pkg.duration}
                additional={pkg.additional}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PricingFilterComponent;
