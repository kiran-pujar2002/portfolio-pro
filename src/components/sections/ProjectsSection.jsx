"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";

const projects = [
  {
    title: "Maruti Suzuki — Equity Research & DCF Valuation",
    description:
      "Full financial model + DCF valuation using FCFF, WACC, terminal value, and sensitivity analysis.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186231/maruthi-suzuki_krfvfm.avif",
    meta: "Equity Research · 2024",
    tech: ["DCF", "FCFF", "WACC"],
    size: "large", // featured tile
  },
  {
    title: "Zepto — Financial Modelling & Industry Research",
    description:
      "Revenue, cost, and profitability model + deep research on Indian quick-commerce.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186241/zepto-image_g54wsk.avif",
    meta: "Financial Modelling · 2024",
    tech: ["Modelling", "Research"],
    size: "small",
  },
  {
    title: "CAPM Analysis of Nifty 500 Stocks",
    description:
      "Estimated beta and expected returns to evaluate risk-return across Nifty 500 constituents.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186219/capm-image_op1fxi.jpg",
    meta: "Quant Research · 2024",
    tech: ["CAPM", "Beta"],
    size: "small",
  },
];

export default function ProjectsSection() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <div className="container-page pb-16 md:pb-20">
      <Reveal>
        <div className="mb-14">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-5 section-title max-w-3xl">
            Selected research &amp; valuation{" "}
            <span className="text-emerald-500">exhibits</span>.
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-4 md:gap-5">
        {/* Featured — spans 7 cols, tall */}
        <Reveal className="md:col-span-7">
          <div className="relative h-full overflow-hidden border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm group">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
                style={{ filter: "grayscale(0.1)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="meta text-emerald-500">{featured.meta}</p>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl text-cream-200 leading-snug">
                {featured.title}
              </h3>
              <div className="mt-4 h-px bg-cream-500/15" />
              <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider
                               text-slate-400 border border-cream-500/20
                               px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Side column — two stacked small tiles */}
        <div className="md:col-span-5 grid gap-4 md:gap-5">
          {others.map((p) => (
            <Reveal key={p.title}>
              <div className="relative h-full overflow-hidden border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm group">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={85}
                    style={{ filter: "grayscale(0.1)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
                  />
                </div>
                <div className="p-5">
                  <p className="meta text-emerald-500 text-[10px]">{p.meta}</p>
                  <h3 className="mt-2 font-serif text-lg text-cream-200 leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-400 leading-relaxed text-xs">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}