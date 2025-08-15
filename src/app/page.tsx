"use client";

import Lightning from "@/components/Lightning";
import { NavbarDemo } from "@/components/NavbarDemo";
import BlurText from "@/components/BlurText";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import TextTrail from '@/components/TextTrail';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import HighlightOnScroll from '@/components/ScrollHighlight';


export default function Home() {

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
      <Lightning hue={228} speed={0.5} intensity={1.5} size={0.5} />

      {/* Main content container: fill screen, relative for z-index */}
      <div className="relative z-10 min-h-screen backdrop-blur-md text-white bg-[#1c2c45ff]/80">
        {/* Your NavbarDemo component */}
        <NavbarDemo />


        {/* Hero Section */}
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




        {/* Additional sections */}
        <section
          id="offres"
          className="flex h-screen flex-col  gap-5 px-6 py-40 bg-neutral-900 text-white"
        >
          <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
            <sup className="text-base align-super">1</sup>
            <span>Nos offres de conception</span>
          </h2>

          <div className="grid md:grid-cols-3 py-10 gap-12 max-w-6xl w-full">
            {/* Offer 1 */}
            <div className="flex flex-col border-t border-neutral-700 pt-6">
              <span className="text-sm text-neutral-500 mb-2">01</span>
              <h3 className="text-2xl font-semibold mb-4">Pack Dash</h3>
              <p className="text-neutral-400 mb-6">
                Site vitrine rapide, clair et efficace
                — parfait pour lancer votre
                activité ou présenter vos services en toute simplicité.
              </p>

              <ul className="text-neutral-300 text-sm space-y-1 mb-8">
                <li>• 1 à 3 pages</li>
                <li>• Design responsive</li>
                <li>• Livraison en 7 jours</li>
              </ul>
              <a
                href="#contact"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Demander un devis →
              </a>
            </div>

            {/* Offer 2 */}
            <div className="flex flex-col border-t border-neutral-700 pt-6">
              <span className="text-sm text-neutral-500 mb-2">02</span>
              <h3 className="text-2xl font-semibold mb-4">Pack Lightning</h3>
              <p className="text-neutral-400 mb-6">
                Site professionnel optimisé avec animations et intégrations — idéal
                pour se démarquer et attirer vos clients.
              </p>
              <ul className="text-neutral-300 text-sm space-y-1 mb-8">
                <li>• 4 à 6 pages</li>
                <li>• Animations fluides</li>
                <li>• Optimisation SEO</li>
              </ul>
              <a
                href="#contact"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Demander un devis →
              </a>
            </div>

            {/* Offer 3 */}
            <div className="flex flex-col border-t border-neutral-700 pt-6">
              <span className="text-sm text-neutral-500 mb-2">03</span>
              <h3 className="text-2xl font-semibold mb-4">Pack Storm</h3>
              <p className="text-neutral-400 mb-6">
                Expérience web sur mesure — fonctionnalités avancées,
                design haut de gamme et accompagnement personnalisé.
              </p>
              <ul className="text-neutral-300 text-sm space-y-1 mb-8">
                <li>• Pages illimitées</li>
                <li>• Fonctionnalités sur mesure</li>
                <li>• Support prioritaire</li>
              </ul>
              <a
                href="#contact"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Demander un devis →
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-24 h-screen px-8 lg:px-24 bg-white text-gray-900 font-sans"
        >
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
            <sup className="text-base align-super">2</sup>
            <span>Projects</span>
          </h2>

          {/* Divider line */}
          <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

          {/* Subtitle */}
          <p className="text-lg opacity-80 max-w-xl leading-relaxed mb-12">
            Here are some of the websites I’ve designed and developed.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project */}
            <a
              href="https://example1.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 rounded-sm hover:border-[#58a6ff] transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-sm opacity-80">
                Brief description of this project and what I contributed.
              </p>
            </a>

            <a
              href="https://example2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 rounded-sm hover:border-[#58a6ff] transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-sm opacity-80">
                Brief description of this project and what I contributed.
              </p>
            </a>

            <a
              href="https://example3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 rounded-sm hover:border-[#58a6ff] transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-sm opacity-80">
                Brief description of this project and what I contributed.
              </p>
            </a>

            {/* Add more projects as needed */}
          </div>
        </section>

        <section
          id="testimonials"
          className="py-24 h-screen px-8 lg:px-24 bg-white text-gray-900 font-sans"
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
            {/* Example Testimonial */}
            <div className="p-6 border-l-4 border-[#58a6ff] bg-gray-50 rounded-sm">
              <p className="text-sm opacity-90 mb-4">
                "Quillan delivered exactly what we needed—clean, modern, and fast. Highly recommended!"
              </p>
              <h4 className="text-base font-semibold">Jane Doe</h4>
              <p className="text-sm opacity-70">CEO, Example Company</p>
            </div>

            <div className="p-6 border-l-4 border-[#58a6ff] bg-gray-50 rounded-sm">
              <p className="text-sm opacity-90 mb-4">
                "Professional, precise, and creative. Our website never looked better."
              </p>
              <h4 className="text-base font-semibold">John Smith</h4>
              <p className="text-sm opacity-70">Marketing Lead, Another Company</p>
            </div>

            <div className="p-6 border-l-4 border-[#58a6ff] bg-gray-50 rounded-sm">
              <p className="text-sm opacity-90 mb-4">
                "Fantastic collaboration, great attention to detail, and timely delivery."
              </p>
              <h4 className="text-base font-semibold">Alice Johnson</h4>
              <p className="text-sm opacity-70">Product Manager, Some Company</p>
            </div>

            {/* Add more testimonials as needed */}
          </div>
        </section>


        <section
          id="contact"
          className="py-24 h-screen px-8 lg:px-24 bg-white text-gray-900 font-sans"
        >
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
            <sup className="text-base align-super">4</sup>
            <span>Contact</span>
          </h2>

          {/* Divider line */}
          <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

          {/* Subtitle */}
          <p className="text-lg opacity-80 max-w-xl leading-relaxed mb-12">
            Let’s connect and make something amazing together.
          </p>

          {/* Contact Form */}
          <form className="max-w-xl space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full border-b border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={1}
                className="w-full border-b border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:ring-0 focus:ring-[#58a6ff] focus:border-[#58a6ff] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#58a6ff] text-white rounded-sm px-6 py-3 font-medium text-lg hover:bg-[#3a78d8] transition-colors duration-300"
            >
              Send Message
            </button>
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
                Web design simple, rapide et efficace. Minimal, structured, precise.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold tracking-tight mb-1">Services</h4>
                <a href="#offers" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Web Design</a>
                <a href="#contact" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Contact</a>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold tracking-tight mb-1">Follow</h4>
                <a href="#" className="text-sm opacity-80 hover:text-[#58a6ff] transition">LinkedIn</a>
                <a href="#" className="text-sm opacity-80 hover:text-[#58a6ff] transition">Dribbble</a>
              </div>
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
