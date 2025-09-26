'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, FolderKanban, Info, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  // Theme-based colors
  const navBgColor = theme === 'light' ? 'bg-white' : 'bg-[#1c2c45ff]';
  const textColor = theme === 'light' ? 'text-[#1c2c45ff]' : 'text-white';
  const borderColor = theme === 'light' ? 'border-b-[#1c2c45ff]' : 'border-b-[#e5e7eb]'; 
  const logoFilter = theme === 'light' ? '' : 'invert';

  useEffect(() => { const handleScroll = () => { if (window.scrollY > window.innerHeight) { setIsScrolled(true); } else { setIsScrolled(false); } }; window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
    ${isScrolled ? `${navBgColor} border-b-2 ${borderColor}` : 'bg-transparent border-b border-transparent '}
  `;

  const linkClasses = `
    relative text-sm 
    after:content-[''] after:absolute after:left-0 after:bottom-[-5px] 
    after:h-[2px] after:w-0 after:transition-all after:duration-300
    hover:after:w-full
    ${isScrolled ? textColor : 'text-[#1c2c45ff]'}
    ${isScrolled ? (theme === 'dark' ? 'after:bg-[#1c2c45ff]' : 'after:bg-white') : 'after:bg-white'}
  `;

  return (
     <nav className={navClasses}>
      <div className="py-3 flex justify-between items-center px-10 relative">
        {/* Left Section - Links (Desktop) */}
        <div className="hidden md:flex items-center justify-start gap-8">
          <Link href="#mission" className={`relative ${linkClasses}`}>
            Mission
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#58a6ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#projects" className={`flex ${linkClasses}`}>
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#58a6ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className={`flex ${linkClasses}`}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#58a6ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 ">
          <Link href="/">
            <h1
              className={`text-2xl sm:text-3xl font-extrabold ${textColor} transition-colors duration-300`}
            >
              EQlair<span className="text-[#58a6ff]">.</span>
            </h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6 flex-none">
          <Link href="#contact" className={linkClasses}>
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#58a6ff] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={`md:hidden text-sm ${linkClasses}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <span>Close</span>: <span>Menu</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div
    className={`xs:hidden ${navBgColor} fixed inset-0 flex flex-col justify-center items-center z-40`}
  >
    <Link
      href="#mission"
      className={`w-full text-center py-6 border-b border-white ${linkClasses}`}
      onClick={() => setIsOpen(false)}
    >
      Mission
    </Link>
    <Link
      href="#projects"
      className={`w-full text-center py-6 border-b border-white ${linkClasses}`}
      onClick={() => setIsOpen(false)}
    >
      Projects
    </Link>
    <Link
      href="#about"
      className={`w-full text-center py-6 border-b border-white ${linkClasses}`}
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    <Link
      href="#contact"
      className={`w-full text-center py-6 ${linkClasses}`}
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
  </div>
)}
    </nav>
  );
};

export default Navbar;
