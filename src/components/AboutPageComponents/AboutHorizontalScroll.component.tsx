"use client"
import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion"

export default function AboutHorizontalScrollComponent() {

    const targetRef =  useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["80%", "-120%"]);
  

    return (
        <div ref={targetRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
         <motion.div style={{x}} className="flex gap-x-[50px]">
           <div><p className="text-[300px] text-white font-audioWide uppercase">W</p></div>
            
           
         </motion.div>
        </div>
       </div>
    )
}