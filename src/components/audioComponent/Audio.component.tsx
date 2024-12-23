"use client"

import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import soundWave from "../../../public/lottie/wavy.json";
import { IoVolumeMute } from "react-icons/io5";

const AudioComponent: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeDuration = 1000;  

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;  
      audio.loop = true;  
    }
  }, []);

  const fadeAudio = (fadeIn: boolean) => {
    const audio = audioRef.current;
    if (audio) {
      const step = 0.01;  
      const interval = fadeDuration / (0.5 / step);  
      const fade = setInterval(() => {
        if (fadeIn && audio.volume < 0.5) {
          audio.volume = Math.min(audio.volume + step, 0.5);
        } else if (!fadeIn && audio.volume > 0) {
          audio.volume = Math.max(audio.volume - step, 0);
        } else {
          clearInterval(fade);
          if (!fadeIn) audio.pause();  
        }
      }, interval);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        fadeAudio(false);  
      } else {
        audio.play();
        fadeAudio(true);  
      }
      setIsPlaying(!isPlaying);
    }
  };

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
        <audio ref={audioRef} src="/music/audio.mp3" loop />
      </div>
    </div>
  );
};

export default AudioComponent;
