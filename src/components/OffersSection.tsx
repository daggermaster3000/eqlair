"use client";

import { motion } from "framer-motion";

export default function OffersSection() {
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

   <section
  id="missions"
  className="flex flex-col lg:px-24 gap-5 px-6 py-24 bg-neutral-90/80 text-white"
>
  <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
    <sup className="text-base align-super">01</sup>
    <span>Notre mission</span>
  </h2>

  {/* Divider line */}
  <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

  <div className="justify-center mx-auto grid md:grid-cols-3 py-10 gap-10 max-w-6xl w-full">
    {/* Mission 1 */}
    <div className="flex flex-col border-t pt-6">
      <span className="text-sm mb-2">01</span>
      <h3 className="text-2xl font-semibold mb-4">Clarté & Impact</h3>
      <p className="mb-6">
        Chaque site est pensé pour transmettre votre message de façon simple,
        percutante et mémorable — afin de <em>captiver</em> vos visiteurs dès le premier regard.
      </p>
      <ul className="space-y-1 mb-8">
        <li>• Design clair et moderne</li>
        <li>• Hiérarchie visuelle optimisée</li>
        <li>• Expérience utilisateur intuitive</li>
      </ul>
    </div>

    {/* Mission 2 */}
    <div className="flex flex-col border-t pt-6">
      <span className="text-sm mb-2">02</span>
      <h3 className="text-2xl font-semibold mb-4">Performance & Visibilité</h3>
      <p className="mb-6">
        Un site rapide et optimisé pour le référencement — pensé pour attirer,
        retenir et convertir vos visiteurs en clients.
      </p>
      <br></br>
      <ul className="space-y-1 mb-8">
        <li>• Optimisation SEO</li>
        <li>• Vitesse de chargement garantie</li>
        <li>• Compatible tous supports</li>
      </ul>
    </div>

    {/* Mission 3 */}
    <div className="flex flex-col border-t pt-6">
      <span className="text-sm mb-2">03</span>
      <h3 className="text-2xl font-semibold mb-4">Créativité & Sur-mesure</h3>
      <p className="mb-6">
        Des sites uniques qui reflètent votre identité et votre univers —
        avec une touche créative qui vous distingue de la concurrence.
      </p><br></br>
      <ul className="space-y-1 mb-8">
        <li>• Animations et micro-interactions</li>
        <li>• Identité visuelle cohérente</li>
        <li>• Fonctionnalités adaptées à vos besoins</li>
      </ul>
    </div>
    
  </div>
  <div className="flex justify-center mt-12">
        <motion.a
          href="#contact"
          onClick={handleScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#58a6ff] text-white rounded-md px-8 py-4 font-medium text-lg shadow-md hover:bg-[#3a78d8] transition-colors duration-300"
        >
          Demander un devis →
        </motion.a>
      </div>
</section>

  );
}
