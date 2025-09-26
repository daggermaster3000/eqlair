"use client";

export default function ProjectsSection() {

  return (
<section
  id="projects"
  className="py-24 px-8 lg:px-24 bg-white text-gray-900 font-sans"
>
  {/* Section Title */}
  <h2 className="text-4xl font-bold mb-12 text-left flex items-start gap-2">
    <sup className="text-base align-super">02</sup>
    <span>Projets</span>
  </h2>

  {/* Divider line */}
  <div className="w-16 h-1 bg-[#58a6ff] mb-6"></div>

  {/* Subtitle */}
  <p className="text-lg opacity-80 max-w-xl leading-relaxed mb-12">
    Voici quelques-uns des sites que nous avons conçus et développés.
  </p>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Babybubbles.ch",
        description: "Site vitrine",
        image: "/baby-bubbles.png",
        link: "https://babybubbles.ch",
      },
      {
        title: "ACTS Taekwondo Crissier",
        description: "Site officiel du club de taekwondo de Crissier",
        image: "/ACTS.png",
        link: "https://acts-crissier.ch",
      },
      {
        title: "Poster Scientifique",
        description: "Site poster pour un projet de recherche scientifique",
        image: "/zebrafish.png",
        link: "https://digitalposterbachmannlab.netlify.app/",
      },
    ].map((project, i) => (
      <a
        key={i}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col bg-white border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 "
          />
        </div>

        {/* Text content */}
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm opacity-80">{project.description}</p>
        </div>
      </a>
    ))}
  </div>
</section>

  );
}
