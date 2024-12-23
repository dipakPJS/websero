"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: (newValue: string) => void;
  textEnter: () => void;
  textLeave: () => void;
  variants: Record<string, any>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<string>("default");

  const variants = {
    default: {
      height: 30,
      width: 30,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    text: {
      height: 300,
      width: 300,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, textEnter, textLeave, variants }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
