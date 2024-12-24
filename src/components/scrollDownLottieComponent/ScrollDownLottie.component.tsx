"use client";

import Lottie from "lottie-react";
import scrollDownLottie from "../../../public/lottie/scrollDown.json";
 

export default function ScrollDownLottieComponent() {
    return (
        <div className="absolute cursor-pointer top-[100%] left-[37%] sm:top-[90%] sm:left-[40%] md:top-[90%] md:left-[40%]  lg:left-[80%] lg-1:top-[75%] lg:top-[70%] h-[100px] md:h-[150px] w-auto">
        <a href="#work">
          <Lottie
            animationData={scrollDownLottie}
            className="h-full w-full"
          />
        </a>
      </div>
    )
}