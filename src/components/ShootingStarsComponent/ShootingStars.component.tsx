"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsComponent() {
  return (
    <div className="h-full bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
