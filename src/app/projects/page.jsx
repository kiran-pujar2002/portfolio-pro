// src/app/projects/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Maruti Suzuki — Equity Research & DCF Valuation",
    description:
      "Financial model + DCF valuation using FCFF, WACC, terminal value, and sensitivity analysis.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186231/maruthi-suzuki_krfvfm.avif",
    url: null,
    meta: "Equity Research · 2024",
    tech: ["DCF", "FCFF", "WACC", "Sensitivity"],
  },
  {
    title: "Zepto — Financial Modelling & Industry Research",
    description:
      "Revenue, cost, and profitability model alongside deep research on Indian quick-commerce.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186241/zepto-image_g54wsk.avif",
    url: null,
    meta: "Financial Modelling · 2024",
    tech: ["Modelling", "Industry Research", "Forecasting"],
  },
  {
    title: "CAPM Analysis of Nifty 500 Stocks",
    description:
      "Estimated beta and expected returns using market data to evaluate the risk-return relationship.",
    imageUrl:
      "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186219/capm-image_op1fxi.jpg",
    url: null,
    meta: "Quant Research · 2024",
    tech: ["CAPM", "Beta Estimation", "Risk-Return"],
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="container-page">
      {/* Header */}
      <div className="mb-10">
        <p className="eyebrow animate-fade-in">Projects</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200 max-w-3xl animate-fade-up">
          Selected research &amp; valuation{" "}
          <span className="text-gold-500">exhibits</span>.
        </h1>
      </div>

      {/* Controls row */}
      <div className="flex items-end justify-between gap-6 mb-6">
        <p className="meta">
          {projects.length} projects · scroll to explore
        </p>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full border border-cream-500/30
                       flex items-center justify-center
                       text-cream-300 hover:text-gold-400
                       hover:border-gold-500/50
                       disabled:opacity-30 disabled:cursor-not-allowed
                       transition-colors duration-300"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full border border-cream-500/30
                       flex items-center justify-center
                       text-cream-300 hover:text-gold-400
                       hover:border-gold-500/50
                       disabled:opacity-30 disabled:cursor-not-allowed
                       transition-colors duration-300"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade masks */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 z-10
                      bg-gradient-to-r from-navy-900 to-transparent
                      transition-opacity duration-300
                      ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 z-10
                      bg-gradient-to-l from-navy-900 to-transparent
                      transition-opacity duration-300
                      ${canScrollRight ? "opacity-100" : "opacity-0"}`}
        />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     pb-2
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => {
            const inner = (
              <div
                className="h-full border border-cream-500/15
                           bg-navy-900/40 backdrop-blur-sm
                           hover:border-gold-500/40
                           transition-colors duration-500
                           flex flex-col overflow-hidden"
              >
                {/* Image — 4/3 aspect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 320px, 33vw"
                    quality={85}
                    style={{ filter: "grayscale(0.15)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5">
                  <p className="meta text-gold-500">{p.meta}</p>
                  <h3 className="mt-3 font-serif text-lg text-cream-200 leading-snug">
                    {p.title}
                  </h3>
                  <div className="mt-3 h-px bg-cream-500/15" />
                  <p className="mt-3 text-cream-500 leading-relaxed text-sm flex-1">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider
                                   text-cream-600 border border-cream-500/20
                                   px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <span
                    className="mt-5 inline-block font-mono text-[11px] uppercase tracking-widest-xl
                               text-gold-400/80 transition-colors
                               border-b border-gold-500/30 pb-0.5 self-start"
                  >
                    {p.url ? "View report →" : "Case study soon"}
                  </span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={p.title}
                data-card
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shrink-0 snap-start
                           w-[80vw] sm:w-[320px] md:w-[calc((100%-2.5rem)/3)]"
              >
                {p.url ? (
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}

          {/* Trailing spacer */}
          <div className="shrink-0 w-4" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile hint */}
      <p className="md:hidden mt-4 text-center font-mono text-[10px] uppercase tracking-widest-xl text-cream-600">
        Swipe to explore
      </p>
    </div>
  );
}