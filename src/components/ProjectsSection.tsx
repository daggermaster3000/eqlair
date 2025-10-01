"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dims, setDims] = useState({ w: 520, h: 380, cd: 70, vd: 80 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const compute = () => {
      const cw = Math.min(520, Math.floor(el.clientWidth));
      const ch = Math.floor(cw * 0.73);
      setDims({
        w: cw,
        h: ch,
        cd: Math.max(28, Math.floor(cw * 0.12)),
        vd: Math.max(40, Math.floor(ch * 0.20)),
      });
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const projects = [
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
  ];

  return (
    <section
      id="projects"
      className="py-24 px-8 lg:px-24 bg-white text-gray-900 font-sans overflow-x-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-left flex items-start"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span>Projets</span>
      </motion.h2>

      {/* Divider line */}
      <motion.div
        className="w-16 h-1 mb-6"
        style={{ backgroundColor: 'var(--brand-accent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-lg opacity-80 max-w-xl leading-relaxed mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        Voici quelques-uns des sites que nous avons conçus et développés.
      </motion.p>

      {/* CardSwap Showcase */}
      <motion.div
        className="w-full flex justify-center mt-24 sm:mt-28 lg:mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div ref={containerRef} className="w-full">
          <CardSwap
            width={dims.w}
            height={dims.h}
            cardDistance={dims.cd}
            verticalDistance={dims.vd}
          skewAmount={0}
          pauseOnHover={false}
          onCardClick={(idx) => window.open(projects[idx].link, '_blank')}
          >
          {projects.map((p, i) => (
            <Card
              key={i}
              customClass="overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
              }}
            >
              <div className="w-full h-full relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Top header bar with project name (placed after image to be on top) */}
                <div className="absolute inset-x-0 top-0 h-10 bg-white/90 text-gray-900 border-b border-black/10 flex items-center gap-2 px-3 z-10">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-accent)' }} />
                  <span className="text-xs font-medium truncate">{p.title}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-xs opacity-90">{p.description}</p>
                </div>
              </div>
            </Card>
          ))}
          </CardSwap>
        </div>
      </motion.div>
    </section>
  );
}
