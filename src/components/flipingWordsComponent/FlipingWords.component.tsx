"use client"
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useCursor } from "@/context/CursorContext";

export function FlipWordsComponent() {
  const words = ["better", "cute", "pretty", "modern"];
  const { textEnter, textLeave } = useCursor();

  return (
    <div className="text-3xl w-full text-center lg-1:text-left lg:text-left rounded-3xl sm:text-3xl md:text-6xl lg-1:text-5xl lg:text-6xl text-balance font-audioWide text-slate-300">
      <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Build
        <FlipWords className="" words={words} /> <br />
        websites with Websero
      </span>
    </div>
  );
}
