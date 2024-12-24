"use client"
import React from "react";
import { Meteors } from "../ui/meteors";
import Image from "next/image";

interface MeteorsComponentProps {
  id: number;
  title: string;
  description: string;
  image?: string; // Marking image as optional
}

export function MeteorsComponent({ id, title, description, image }: MeteorsComponentProps) {
  return (
    <div className="">
      <div className="w-full relative max-w-[30rem]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[blue] via-[#422bed] to-[#ff46fc] transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* Conditionally render the Image component */}
          {image && (
            <Image
              src={image}
              alt="item image"
              height={300}
              width={450}
              className="mb-5"
            />
          )}

          <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
            <span className="text-orange-600 font-extrabold">0{id}</span> {title}
          </h1>

          <p className="text-xl text-white mb-4 relative z-50">
            {description}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
