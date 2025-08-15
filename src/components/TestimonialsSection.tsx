"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      const overlay = card.querySelector(".sweep-overlay");

      // Set initial overlay state for scroll animation
      gsap.set(overlay, { scaleX: 0, transformOrigin: "left center" });

      

      // Hover sweep in
      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      // Hover sweep out (reverse)
      card.addEventListener("mouseleave", () => {
        gsap.fromTo(
          overlay,
          { scaleX: 1, transformOrigin: "left center" },
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power2.inOut",
          }
        );
      });
    });
  }, []);

  const testimonials = [
    {
      quote:
        "Quillan delivered exactly what we needed—clean, modern, and fast. Highly recommended!",
      name: "Jane Doe",
      role: "CEO, Example Company",
    },
    {
      quote:
        "Professional, precise, and creative. Our website never looked better.",
      name: "John Smith",
      role: "Marketing Lead, Another Company",
    },
    {
      quote:
        "Fantastic collaboration, great attention to detail, and timely delivery.",
      name: "Alice Johnson",
      role: "Product Manager, Some Company",
    },
  ];

  return (
    <section
      id="testimonials"
      className="flex  flex-col gap-5 px-6 py-24 bg-neutral-90/80"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
        <sup className="text-base align-super">3</sup>
        <span>Testimonials</span>
      </h2>

      {/* Divider line */}
      <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

      {/* Subtitle */}
      <p className="text-lg opacity-80 max-w-xl leading-relaxed mb-12">
        Hear what my clients have to say about my work.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative overflow-hidden p-6 border-l-4 border-[#58a6ff] rounded-sm bg-transparent 
                       transition-all duration-500 hover:text-white group cursor-pointer"
          >
            {/* Sweep Overlay */}
            <div className="sweep-overlay absolute inset-0 bg-[#58a6ff] z-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-20">
              <p className="text-sm opacity-90 mb-4 transition-colors duration-500 group-hover:opacity-100">
                "{t.quote}"
              </p>
              <h4 className="text-base font-semibold transition-colors duration-500">
                {t.name}
              </h4>
              <p className="text-sm opacity-70 transition-colors duration-500 group-hover:opacity-90">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
