"use client"
import React from "react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";

export function CoverComponent() {
  return (
    <div className="pointer-events-auto">
      <h1 className="text-white flex flex-col  text-[70px] sm:text-[80px] md:text-[90px] lg:text-[120px] font-iceBerg max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 ">
        Let's Get 
        <Link href={"/contact"} className="">
          <Cover className="underline hover:bg-gradient-to-br from-yellow-600 via-blue-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:opacity-90 hover:blur-sm ">
            Started!{" "}
          </Cover>
        </Link>
      </h1>
    </div>
  );
}
