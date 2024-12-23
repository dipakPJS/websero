"use client";

import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";


export function WobbleCardComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-10 md:px-10 sm:px-10 mx-auto w-full px-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-900 min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="absolute max-w-lg z-10">
          <h2 className="text-left text-balance uppercase text-base md:text-3xl lg-1:text-4xl lg:text-5xl font-audioWide font-semibold tracking-[-0.015em] text-white">
           20+ Successfully Finished Products
          </h2>
          <p className="mt-4 text-left  leading-6 text-neutral-200 text-2xl font-bold">
          Beyond numbers, our track record of over 20+ successful projects speaks to
           our commitment to turning clients' dreams into digital realities
          </p>
        </div>
        <Image
          src="/images/delivery.png"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute z-0 -right-2 lg:-right-[10%] grayscale filter  -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      
      <WobbleCard containerClassName=" col-span-1 bg-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="absolute z-10 max-w-sm">
          <h2 className="max-w-sm md:max-w-lg font-audioWide  text-left text-balance text-base  md:text-2xl lg-1:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
          2+ years of experience
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-2xl leading-6 text-neutral-200 font-bold">
          These 2 years of growth embody our unwavering commitment to progress, creativity,
          and the art of making ideas flourish. It's a testament to our ever-evolving journey at Ministry
          </p>
        </div>
        <Image
          src="/images/reputation.png"
          width={250}
          height={250}
          alt="linear demo image"
          className="absolute z-0 -right-10  md:-right-[40%] lg:-right-[10%] grayscale -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName=" col-span-1 min-h-[300px] bg-yellow-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="absolute z-10 max-w-sm">
          <h2 className="max-w-sm md:max-w-lg font-audioWide  text-left text-balance text-base  md:text-2xl lg-1:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
           50+ Case Studies
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-2xl leading-6 text-neutral-200 font-bold">
          "We deliver custom web solutions, with 50+ case studies showcasing our commitment to elevating businesses online."
          </p>
        </div>
        <Image
          src="/images/analysis.png"
          width={250}
          height={250}
          alt="linear demo image"
          className="absolute z-0 -right-10 md:-right-[10%] grayscale lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="  col-span-1 lg:col-span-2 h-full bg-orange-900 min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="absolute max-w-lg z-10">
          <h2 className="text-left text-balance font-audioWide text-base  md:text-3xl lg-1:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white uppercase">
          Good vibes only
          </h2>
          <p className="mt-4 text-left text-2xl leading-6 text-neutral-200 font-bold">
          it's the foundation of our creative spirit. Join us in crafting positive
           experiences and spreading the endless chill through every project we touch
          </p>
        </div>
        <Image
          src="/images/vibes.png"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute z-0 -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
     
    </div>
  );
}
