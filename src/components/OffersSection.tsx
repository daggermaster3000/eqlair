"use client";

export default function OffersSection() {

  return (

                <section
          id="offres"
          className="flex flex-col  gap-5 px-6 py-24 bg-neutral-90/80 text-white"
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
  );
}
