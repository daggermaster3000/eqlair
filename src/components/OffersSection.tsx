"use client";

export default function MissionsSection() {
  return (
    <section
      id="missions"
      className="flex flex-row lg:px-24 gap-5 px-6 py-24 h-screen text-white bg-[#1c2c45ff]"
    >
      <h2 className="text-6xl italic font-bold mb-12 text-left flex items-start gap-2">
        <span>Mission</span>
        <sup className="text-base align-super">01</sup>
      </h2>

      <div className="justify-center mx-auto grid md:grid-cols-1 py-10 gap-10 max-w-8xl w-full">
        {/* Mission 1 */}
        <div className="flex flex-col border-t pt-6">
          {/* <span className="text-sm mb-2">01</span> */}
          <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
          <p className="mb-6">
            Créer des expériences web <em>claires</em>, <em>rapides</em> et
            accessibles — poser des bases solides pour chaque projet.
          </p>

          {/* <ul className="text-sm space-y-1 mb-8">
            <li>• Approche centrée utilisateur</li>
            <li>• Design <em>responsive</em></li>
            <li>• Respect des délais</li>
          </ul> */}
        </div>

        {/* Mission 2 */}
        {/* <div className="flex flex-col border-t pt-6">
          <span className="text-sm mb-2">02</span>
          <h3 className="text-2xl font-semibold mb-4">Créativité</h3>
          <p className="mb-6">
            Offrir des sites <em>uniques</em> et <em>expressifs</em> —
            intégrant animations fluides et une identité visuelle forte.
          </p>

          <ul className="text-sm space-y-1 mb-8">
            <li>• <em>Animations</em> modernes</li>
            <li>• Cohérence visuelle</li>
            <li>• Optimisation SEO</li>
          </ul>
        </div> */}

        {/* Mission 3 */}
        {/* <div className="flex flex-col border-t pt-6">
          <span className="text-sm mb-2">03</span>
          <h3 className="text-2xl font-semibold mb-4">Accompagnement</h3>
          <p className="mb-6">
            Construire des relations durables — avec un suivi{" "}
            <em>personnalisé</em> et un support <em>prioritaire</em>.
          </p>

          <ul className="text-sm space-y-1 mb-8">
            <li>• Conseil stratégique</li>
            <li>• Fonctionnalités sur mesure</li>
            <li>• Support <em>continu</em></li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
