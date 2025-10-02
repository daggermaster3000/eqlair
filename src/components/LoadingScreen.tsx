"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LogoDrawAnimation from "./LogoDrawAnimation";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    // Add a small delay before fading out
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-gray-50"
    >
      <LogoDrawAnimation
        onComplete={handleAnimationComplete}
        size="xl"
        showProgress={true}
        showText={true}
        text=""
        className="text-gray-800"
      />
    </div>
  );
}
