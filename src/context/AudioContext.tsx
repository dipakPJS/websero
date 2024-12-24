"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";

type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeDuration = 1000;

  useEffect(() => {
    const audio = new Audio("/music/audio.mp3");
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;
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
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
