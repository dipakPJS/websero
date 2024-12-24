"use client"
interface GradientClass {
    span: boolean;
    texts: string;
    classNames?: string;
  }
  
  export default function GradientTextComponent({ span, texts, classNames }: GradientClass) {
    const gradientClasses = `text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-600 to-pink-600 bg-[length:200%] bg-left animate-gradient-x ${classNames || ''}`;
  
    return span ? (
      <span className={gradientClasses}>{texts}</span>
    ) : (
      <p className={gradientClasses}>{texts}</p>
    );
  }
  