"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    label: "Financial Analysis",
    items: [
      "Financial Statement Analysis",
      "Ratio & Earnings Analysis",
      "Portfolio Analysis",
      "Investment Analysis",
    ],
  },
  {
    label: "Valuation & Modelling",
    items: [
      "DCF & Relative Valuation",
      "CAPM · Beta · WACC",
      "FCFF / FCFE · NOPAT",
      "Scenario Analysis",
    ],
  },
  {
    label: "Portfolio Metrics",
    items: [
      "Sharpe · Information Ratio",
      "Alpha · Risk-Adjusted Returns",
      "P/E · Benchmarking",
    ],
  },
  {
    label: "Tools",
    items: [
      "Advanced Excel",
      "Bloomberg (basic)",
      "Screener",
      "Microsoft Office",
    ],
  },
  {
    label: "Research & Reporting",
    items: [
      "Equity Research",
      "Mutual Fund Analysis",
      "Macro & Sector Research",
      "Excel Dashboards",
    ],
  },
  {
    label: "Certifications",
    items: [
      "CFA Level I (2026)",
      "NISM Research Analyst",
      "NISM Investment Adviser",
      "NISM AIF Distributor",
    ],
  },
];

export default function SkillsOverview() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    const amount = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section>
      <div className="container-page">
        {/* Section header + controls */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow">Core Expertise</p>
            <h2 className="mt-5 section-title max-w-2xl">
              The toolkit behind the{" "}
              <span className="text-gold-500">analysis</span>.
            </h2>
          </div>

          {/* Arrow controls (desktop) */}
          <div className="hidden md:flex items-center gap-3 pb-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-cream-500/30
                         flex items-center justify-center
                         text-cream-300 hover:text-gold-400
                         hover:border-gold-500/50
                         disabled:opacity-30 disabled:cursor-not-allowed
                         transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
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
              className="w-10 h-10 rounded-full border border-cream-500/30
                         flex items-center justify-center
                         text-cream-300 hover:text-gold-400
                         hover:border-gold-500/50
                         disabled:opacity-30 disabled:cursor-not-allowed
                         transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
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

        {/* Carousel track */}
        <div className="relative">
          {/* Left fade mask */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 w-16 z-10
                        bg-gradient-to-r from-navy-900 to-transparent
                        transition-opacity duration-300
                        ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
          />
          {/* Right fade mask */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 w-16 z-10
                        bg-gradient-to-l from-navy-900 to-transparent
                        transition-opacity duration-300
                        ${canScrollRight ? "opacity-100" : "opacity-0"}`}
          />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       pb-2
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                data-card
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="snap-start shrink-0
                           w-[80vw] sm:w-[340px] md:w-[300px] lg:w-[320px]
                           border border-cream-500/15
                           bg-navy-900/40 backdrop-blur-sm
                           p-6 md:p-7
                           hover:border-gold-500/40
                           transition-colors duration-500
                           flex flex-col"
              >
                {/* Card number */}
                <span className="font-mono text-[11px] tracking-widest-xl text-gold-500/70">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="mt-4 font-serif text-xl text-cream-200 leading-snug">
                  {s.label}
                </h3>
                <div className="mt-4 h-px bg-cream-500/15" />

                {/* Items */}
                <ul className="mt-5 space-y-2.5 flex-1">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-cream-400 leading-relaxed text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer accent */}
                <div className="mt-6 pt-4 border-t border-cream-500/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest-xl text-cream-600">
                    {s.items.length} areas
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
                </div>
              </motion.div>
            ))}

            {/* Trailing spacer so last card breathes */}
            <div className="shrink-0 w-4 md:w-8" aria-hidden="true" />
          </div>
        </div>

        {/* Mobile hint */}
        <p className="md:hidden mt-4 text-center font-mono text-[10px] uppercase tracking-widest-xl text-cream-600">
          Swipe to explore
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/skills"
            className="font-mono text-xs uppercase tracking-widest-xl
                       text-gold-400 hover:text-gold-300 transition-colors
                       border-b border-gold-500/30 hover:border-gold-400 pb-1"
          >
            View full skill set →
          </Link>
        </div>

        {/* Rule */}
        <div className="mt-12 md:mt-16 gold-rule" />
      </div>
    </section>
  );
}