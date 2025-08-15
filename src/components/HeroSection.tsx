"use client";
import { useState, useEffect } from "react";
import Lightning from "./Lightning"; // your lightning component
import BlurText from "@/components/BlurText";
export default function HeroSection() {

  return (

        <section className="flex flex-col justify-center items-start h-screen px-12 lg:px-24 relative bg-white/80 text-gray-900 font-sans">
          {/* Hero Title */}

          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight">
            EQlair<span className="text-[#58a6ff]">.</span>
          </h1>

          {/* Subtitle with minimalist style */}
          <BlurText
            text="Design web simple, rapide et efficace"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-6 max-w-lg leading-snug"
          />

          {/* Divider line */}
          <div className="w-20 h-1 bg-[#58a6ff] mb-8"></div>

          {/* Call to Action */}
          <button
            className="border border-[#58a6ff] text-[#58a6ff] rounded-sm px-6 py-3 font-medium text-lg hover:bg-[#58a6ff] hover:text-white transition-colors duration-300"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          >
            Découvrir
          </button>
        </section>
  );
}
