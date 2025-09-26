"use client";

import { useRef, useState } from "react";
import Lightning from "@/components/Lightning";
import { NavbarDemo } from "@/components/NavbarDemo";
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
import emailjs from "@emailjs/browser";

export default function Home() {
const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      // 1. Send to you
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!, // template for you
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // public key
      );

      // 2. Send confirmation to user
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONFIRM!, // template for confirmation
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Tailwind + fonts + styles */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap');
          body {
            font-family:  'Space Grotesk', sans-serif;
            background-color: #1c2c45ff;
          }
         
          .font-sans {
            font-family: 'Space Grotesk', sans-serif;
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
      <Lightning hue={228} speed={1.5} intensity={1.5} size={0.5} />

      {/* Main content container: fill screen, relative for z-index */}
      <div className="relative z-10 min-h-screen backdrop-blur-md text-white bg-[#1c2c45ff]/80">
        {/* Your NavbarDemo component */}
        <NavbarDemo />


        <HeroSection></HeroSection>





        <OffersSection ></OffersSection>
        <ProjectsSection></ProjectsSection>
        {/* <TestimonialsSection></TestimonialsSection> */}


        <section
      id="contact"
      className="py-24 px-8 lg:px-24 bg-neutral-90/80 text-white font-sans"
    >
      <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
        <sup className="text-base align-super">3</sup>
        <span>Contact</span>
      </h2>

      <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

      <p className="text-lg max-w-xl leading-relaxed mb-12">
        Créons ensemble quelque chose d'exceptionnel.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl space-y-6"
      >
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Votre Nom"
            required
            className="w-full border-b border-white rounded-sm px-4 py-3 focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="vous@exemple.com"
            required
            className="w-full border-b border-white rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre Message"
            rows={3}
            required
            className="w-full border-b border-white rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#58a6ff] text-white rounded-sm px-6 py-3 font-medium text-lg hover:bg-[#3a78d8] transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>

        {success && (
          <p className="text-green-400 mt-4">
            ✅ Merci ! Votre message a été envoyé.
          </p>
        )}
      </form>
    </section>


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
              href="https://www.instagram.com/eqlair.studio/"
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
            © {new Date().getFullYear()} EQlair.
          </div>
        </footer>


      </div>

    </>
  );
}
