"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HighlightOnScroll({ text, color = "rgba(7, 146, 226, 1)" }) {
  const markRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (markRef.current) {
      gsap.fromTo(
        markRef.current,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: markRef.current,
            start: "top 85%", // when the top of the element hits 85% of viewport
            end: "bottom 50%", // when the bottom of the element hits 15% of viewport
            scrub: true, // tie animation progress to scroll
          },
        }
      );
    }
  }, []);

  return (
    <span
      ref={markRef}
      style={{
        backgroundImage: `linear-gradient(to right, ${color} 0%, ${color} 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
        font: "inherit",
        color: "inherit",
        padding: 0,
        display: "inline",
      }}
    >
      {text}
    </span>
  );
}
