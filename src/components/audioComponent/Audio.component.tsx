"use client";

import React from "react";
import Lottie from "lottie-react";
import soundWave from "../../../public/lottie/wavy.json";
import { IoVolumeMute } from "react-icons/io5";
import { useAudio } from "../../context/AudioContext";

const AudioComponent: React.FC = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="absolute z-[200] top-[70px] right-[20%]">
      <div className="relative w-[50px] h-[50px] rounded-[50%]">
        <button
          className="bg-transparent rounded-[100px] backdrop-blur-[20px] h-full w-full border-none outline-none cursor-pointer flex items-center justify-center"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Lottie
              animationData={soundWave}
              loop
              autoplay
              className="scale-[1]"
            />
          ) : (
            <IoVolumeMute size={30} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioComponent;
