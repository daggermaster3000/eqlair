"use client";

import { useEffect, useRef, useState } from "react";
import Lightning from "@/components/Lightning";
import  Navbar  from "@/components/NavbarDemo";
import Section from '@/components/Section';
import BlurText from "@/components/BlurText";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import TextTrail from '@/components/TextTrail';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import HighlightOnScroll from '@/components/ScrollHighlight';
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Instagram } from "lucide-react";


type Theme = 'light' | 'dark';

export default function Home() {
   const [theme, setTheme] = useState<Theme>('light');
  return (
    <>
      {/* Tailwind + fonts + styles */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&family=Roboto+Mono:wght@400;500;700&display=swap');

body, li {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-: bold;
  background-color: white;
  font-size: 1.25rem;
}

h1, h2, h3, h4, h5, h6, .hero, .nav-text {
  font-family: 'Merriweather', serif;
  font-style: italic;
}

.font-sans {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.font-mono {
  font-family: 'Roboto Mono', monospace;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

        `}
      </style>

      {/* Full-screen animated Lightning background */}
      {/* <Lightning hue={228} speed={0.5} intensity={0.5} size={1} /> */}

      {/* Main content container: fill screen, relative for z-index */}
      <Navbar theme={theme} />
      <div
       
        className="relative z-10 min-h-screen backdrop-blur-md text-white"
      >
        {/* Your NavbarDemo component */}
        

          <Section id="mission" theme="light" setTheme={setTheme}>
        <HeroSection></HeroSection>
          </Section>



        <Section id="mission" theme="dark" setTheme={setTheme}>
        <OffersSection ></OffersSection>
        </Section>
        <Section id="mission" theme="light" setTheme={setTheme}>
        <ProjectsSection></ProjectsSection>
        </Section>
        {/* <TestimonialsSection></TestimonialsSection> */}


        <Section
          id="contact"
          className="py-24 px-8 lg:px-24 text-white font-sans bg-[#1c2c45ff]"
          theme="dark"
          setTheme={setTheme}
        >
          {/* Section Title */}
          <h2 className="text-6xl font-bold mb-12 text-left flex items-start gap-2">
            
            <span>Contact</span>
            <sup className="text-base align-super">03</sup>
          </h2>

          {/* Divider line */}
          {/* <div className="w-16 h-1 bg-[#ffffff] mb-6"></div> */}

          {/* Subtitle */}
          <p className=" max-w-xl  mb-12">
            Créons ensemble quelque chose d'<em>exceptionnel</em>.
          </p>

          {/* Contact Form */}
          <form className="max-w-xl  space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre Nom"
                className="w-full border-b  rounded-sm px-4 py-3  focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="vous@exemple.com"
                className="w-full border-b rounded-sm px-4 py-3  focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Votre Message"
                rows={1}
                className="w-full border-b  rounded-sm px-4 py-3 focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#58a6ff] text-white rounded-sm px-6 py-3 font-medium text-lg hover:bg-[#3a78d8] transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>
        </Section>


        <footer className="bg-white text-gray-900 font-sans py-12 px-8 lg:px-24 border-t border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

            {/* Brand / Logo */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                EQlair<span className="text-[#58a6ff]">.</span>
                
              </h3>
              
              <p className="text-sm opacity-70 max-w-xs">
                Web design simple, rapide et efficace.
              </p>
              <p className="text-sm opacity-70 max-w-xs">
                Swiss made 🧀
              </p>
              <div className="inline-flex flex-col gap-2 mt-3">
            {/* <h4 className="text-sm font-bold tracking-tight mb-1">Follow</h4> */}
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-80 hover:text-[#58a6ff] transition"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold tracking-tight mb-1">Services</h4>
                <a href="#offres" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Web Design</a>
                <a href="#projects" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Projets</a>
                <a href="#contact" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Contact</a>
              </div>

              {/* <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold tracking-tight mb-1">Follow</h4>
                <a href="#" className="text-sm opacity-80 hover:text-[#58a6ff] transition">LinkedIn</a>
                <a href="#" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Dribbble</a>
              </div> */}
            </div>
            
          </div>

          {/* Bottom bar */}
          <div className="mt-12 text-sm text-gray-500 opacity-70 text-center">
            © {new Date().getFullYear()} EQlair. All rights reserved.
          </div>
        </footer>


      </div>

    </>
  );
}
