"use client"
import "./gradientButton.styles.css";

type buttonTitle = {
  title: string;
};

export default function GradientButtonComponent({ title }: buttonTitle) {
  return (
    <button key={title} className="relative inline-block px-6 py-3 font-bold text-white bg-gradient-to-br from-sky-500 via-pink-500 to-purple-500 rounded-lg shadow-md transition-shadow duration-300 ease-in-out active:shadow-[0_0_20px_rgba(0,191,255,0.8),0_0_30px_rgba(255,105,180,0.8),0_0_40px_rgba(138,43,226,0.8)] focus:outline-none">
      {title}
    </button>
  );
}
