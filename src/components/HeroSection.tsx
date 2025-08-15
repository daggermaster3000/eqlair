"use client";
import { useState, useEffect } from "react";
import Lightning from "./Lightning"; // your lightning component
import BlurText from "@/components/BlurText";
export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px breakpoint for mobile
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
        <section className="flex flex-col lg:flex-row justify-center items-center h-screen px-6 sm:px-12 lg:px-24 relative bg-white/80 text-gray-900 font-sans gap-8 lg:gap-12">
    {!isMobile && <Lightning hue={228} speed={0.5} intensity={1.5} size={0.5} />}
    {/* Left: Title + Subtitle */}
    <div className="flex-1 flex flex-col justify-center items-start text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight">
        EQlair<span className="text-[#58a6ff]">.</span>
      </h1>

      <BlurText
        text="Design web simple, rapide et efficace"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-lg leading-snug"
      />

      <div className="w-16 sm:w-20 h-1 bg-[#58a6ff] mb-8 mx-auto lg:mx-0"></div>

      <button
        className="border border-[#58a6ff] text-[#58a6ff] rounded-sm px-5 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg hover:bg-[#58a6ff] hover:text-white transition-colors duration-300"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        Découvrir
      </button>
    </div>

    {/* Divider for large screens */}
    <div className="hidden lg:block h-80 w-px bg-gray-900"></div>

    {/* Right: Lightning in circular container */}
    <div className="flex-1 flex justify-center items-center">
      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-[#1c2c45ff]/30 backdrop-blur-md flex justify-center items-center">
        <Lightning hue={228} speed={1} intensity={1.5} size={1} />
      </div>
    </div>

  </section>
  );
}
