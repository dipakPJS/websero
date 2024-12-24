"use client";
import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";

import RingLottie from "../../../public/lottie/ring.json";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";

export default function AboutMarqueeComponent() {
  return (
    <div className=" bg-black">

    <Marquee
      speed={200}
      autoFill={true}
      pauseOnHover={false}
      loop={0}
      gradient={true}
      gradientColor="black"
      gradientWidth={300}
      className="h-full w-full"
      >
      <div className="w-full flex items-center gap-5">
        <p className="text-white text-[150px] font-iceBerg uppercase px-10 border border-white rounded-[200px]">
         <GradientTextComponent texts=" What are we here for?" span={true} />
        </p>
        <Lottie
            animationData={RingLottie}
            className="h-[300px] w-[300px]"
            />
      </div>
    </Marquee>
            </div>
  );
}
