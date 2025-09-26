"use client";

import { useEffect, ReactNode, useRef } from "react";

type Theme = "light" | "dark";

interface SectionProps {
  children: ReactNode;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
  [key: string]: any;
}

const NAVBAR_HEIGHT = 80; // px, adjust this to your navbar’s actual height

const Section: React.FC<SectionProps> = ({ children, setTheme, theme, ...rest }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Top of section relative to viewport
      const top = rect.top;

      // If the top of the section is at or above the navbar
      // AND not completely scrolled past
      if (top <= NAVBAR_HEIGHT && rect.bottom > NAVBAR_HEIGHT) {
        setTheme(theme);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount to set initial theme

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, setTheme]);

  return (
    <section ref={ref} {...rest}>
      {children}
    </section>
  );
};

export default Section;
