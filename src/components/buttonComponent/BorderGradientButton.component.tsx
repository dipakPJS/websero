"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Link from "next/link";

export function BorderGradientButton() {
  return (

      <HoverBorderGradient
        containerClassName="rounded-full"
        className=" text-slate-300 flex items-center  px-5 py-1"
      >
        <div className="flex gap-x-2 h-full items-center">
          <span className=" text-xs sm:text-sm md:text-md lg:text-lg font-audioWide">Get Started</span>
          <FaSquareArrowUpRight className="text-xl" />
        </div>
      </HoverBorderGradient>
   
  );
}
