"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LogoDrawAnimationProps {
  onComplete?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showProgress?: boolean;
  showText?: boolean;
  text?: string;
}

export default function LogoDrawAnimation({ 
  onComplete,
  className = "",
  size = "lg",
  showProgress = true,
  showText = true,
  text = ""
}: LogoDrawAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const sizeClasses = {
    sm: "w-48 h-12",
    md: "w-64 h-16", 
    lg: "w-80 h-20",
    xl: "w-96 h-24"
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Set initial state
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8, y: 20 });
    if (progressRef.current) gsap.set(progressRef.current, { scaleX: 0 });
    if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: 10 });

    // Animate logo appearance
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Create hand-drawn effect for each letter
    const letters = logoRef.current?.querySelectorAll('.letter');
    if (letters) {
      letters.forEach((letter, index) => {
        const paths = letter.querySelectorAll('path, circle, line');
        
        // Set initial state for paths
        gsap.set(paths, { 
          strokeDasharray: "1000 1000",
          strokeDashoffset: "1000"
        });

        // Animate each letter with staggered timing
        tl.to(paths, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut"
        }, index * 0.15);
      });
    }

    // Animate progress bar
    if (showProgress && progressRef.current) {
      tl.to(progressRef.current, {
        scaleX: 1,
        duration: 2,
        ease: "power2.inOut"
      }, "-=1");
    }

    // Animate text
    if (showText && textRef.current) {
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=1");
    }

    // Add a subtle pulse effect to the logo
    tl.to(logoRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "-=0.5");

  }, [onComplete, showProgress, showText]);

  return (
    <div ref={containerRef} className={`flex flex-col items-center justify-center ${className}`}>
      {/* Logo */}
      <h1 ref={logoRef} className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight">
            EQlair<span className="text-[#58a6ff]">.</span>
          </h1>

      {/* Progress bar */}
      {showProgress && (
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mt-6">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#58a6ff] to-[#3b82f6] rounded-full origin-left"
          />
        </div>
      )}

      {/* Loading text */}
      {showText && (
        <p ref={textRef} className="mt-4 text-sm text-gray-500 font-medium">
          {text}
        </p>
      )}
    </div>
  );
}
