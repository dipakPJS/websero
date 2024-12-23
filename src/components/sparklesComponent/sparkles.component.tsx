"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { CgArrowTopRightO } from "react-icons/cg";

import "./sparkles.styles.css";
import Link from "next/link";

export default function SparklesComponent() {
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Link href={"/about"} className="mb-5">
        <div className="flex gap-2">
          <h1 className="md:text-3xl text-2xl lg:text-4xl text-center font-audioWide hover:text-purple-600 duration-700  text-white relative z-20">
            Get to Know Us
          </h1>
          <CgArrowTopRightO className="text-white text-4xl hover:text-purple-600 duration-700 hover:rotate-45 hover:scale-75" />
        </div>
      </Link>
      <div className="w-[40rem] scale-125 mt-2 h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={500}
          className=" h-full mx-auto w-[50%] sm:w-[80%] md:w-full lg:w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
