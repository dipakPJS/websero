"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";

const fadeInDirection = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
}

export function WorldMapComponent() {
  return (
    <div className=" py-40 w-full px-10">
      <div className="max-w-5xl mx-auto text-center pb-[100px] relative">
        <motion.p 
        initial={fadeInDirection.top.initial}
        whileInView={fadeInDirection.top.animate}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-audioWide text-white">
          We work with clients all over the <GradientTextComponent span={true} texts="World!" />
        </motion.p>
        
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },  
            end: { lat: -15.7975, lng: -47.8919 },  
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, 
            end: { lat: 38.7223, lng: -9.1393 },  
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, 
            end: { lat: 28.6139, lng: 77.209 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: 43.1332, lng: 131.9113 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: -1.2921, lng: 36.8219 }, 
          },
        ]}
      />
    </div>
  );
}
