// src/components/ProjectsPreview.jsx
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Maruti Suzuki — Equity Research & DCF Valuation",
    description:
      "Financial model + DCF valuation using FCFF, WACC, terminal value, and sensitivity analysis.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186231/maruthi-suzuki_krfvfm.avif",
    meta: "Equity Research · 2024",
  },
  {
    title: "Zepto — Financial Modelling & Industry Research",
    description:
      "Revenue, cost, and profitability model alongside deep research on Indian quick-commerce.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186241/zepto-image_g54wsk.avif",
    meta: "Financial Modelling · 2024",
  },
];

export default function ProjectsPreview() {
  return (
    <section>
      <div className="container-page">
        {/* Section header */}
        <div className="mb-8">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 section-title max-w-3xl">
            Research &amp; valuation{" "}
            <span className="text-gold-500">exhibits</span>.
          </h2>
        </div>

        {/* Projects — narrower grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {projects.map((p) => (
            <Link key={p.title} href="/projects" className="group block">
              {/* Shorter image — 5/3 aspect for a more compact strip */}
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                  style={{ filter: "grayscale(0.15)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
                />
              </div>

              <div className="mt-4">
                <p className="meta">{p.meta}</p>
                <h3 className="mt-2 font-serif text-lg md:text-xl text-cream-200 leading-snug group-hover:text-gold-400 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-cream-500 leading-relaxed text-sm">
                  {p.description}
                </p>
                <span
                  className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest-xl
                             text-gold-400/80 group-hover:text-gold-300 transition-colors
                             border-b border-gold-500/30 group-hover:border-gold-400 pb-0.5"
                >
                  View project →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Rule */}
        <div className="mt-10 md:mt-12 gold-rule" />
      </div>
    </section>
  );
}