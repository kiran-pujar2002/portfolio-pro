"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const skillCategories = [
  {
    name: "Financial Analysis",
    skills: [
      "Financial Statement Analysis",
      "Ratio Analysis",
      "Earnings Analysis",
      "Industry & Company Research",
      "Portfolio Analysis",
      "Investment Analysis",
      "Scenario Analysis",
    ],
  },
  {
    name: "Valuation & Modelling",
    skills: [
      "DCF Valuation",
      "Relative Valuation",
      "Financial Modelling",
      "CAPM",
      "Beta Estimation",
      "WACC",
      "NOPAT",
      "FCFF / FCFE",
    ],
  },
  {
    name: "Portfolio Metrics",
    skills: [
      "P/E Analysis",
      "Sharpe Ratio",
      "Information Ratio",
      "Alpha",
      "Risk-Adjusted Returns",
      "Benchmarking",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Advanced Excel",
      "Bloomberg (basic)",
      "Screener",
      "Microsoft Office",
    ],
  },
  {
    name: "Research & Reporting",
    skills: [
      "Equity Research",
      "Investment Research",
      "Mutual Fund Analysis",
      "Peer Benchmarking",
      "Macro & Sector Analysis",
      "Research Notes & Presentations",
      "Excel-based Dashboards",
    ],
  },
  {
    name: "Certifications",
    skills: [
      "CFA Level I Passed (2026)",
      "NISM XV — Research Analyst",
      "NISM X-A & X-B — Investment Adviser",
      "NISM AIF Category I & II Distributor",
      "NISM Equity Derivatives",
      "Moody's Analytics — Intl. Wealth Management",
      "Financial Modelling and Analysis",
    ],
  },
];

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? -1 : i));
  };

  return (
    <div className="container-page pb-16 md:pb-20">
      {/* Header */}
      <Reveal>
        <div className="mb-10">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-5 section-title max-w-3xl">
            The full <span className="text-emerald-500">toolkit</span>.
          </h2>
        </div>
      </Reveal>

      {/* Accordion */}
      <div className="border-t border-cream-500/15">
        {skillCategories.map((category, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={category.name} delay={idx * 0.04}>
              <div className="border-b border-cream-500/15">
                {/* Header row — always visible */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6
                             py-5 md:py-6 text-left group
                             transition-colors"
                >
                  {/* Left: number + category name */}
                  <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                    <span className="font-mono text-[11px] tracking-widest-xl text-emerald-500/70 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-serif text-xl md:text-2xl leading-snug transition-colors ${
                        isOpen
                          ? "text-gold-400"
                          : "text-cream-200 group-hover:text-gold-400"
                      }`}
                    >
                      {category.name}
                    </h3>
                  </div>

                  {/* Right: count + chevron */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest-xl text-slate-500">
                      {category.skills.length} items
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-center w-7 h-7
                                 border border-emerald-500/25 text-emerald-300
                                 group-hover:border-gold-500/50 group-hover:text-emerald-400
                                 transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.span>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-0 md:pl-[60px] pr-2">
                        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
                          {category.skills.map((skill) => (
                            <li
                              key={skill}
                              className="flex gap-3 text-slate-400 leading-relaxed text-sm md:text-base"
                            >
                              <span className="text-emerald-500/70 font-mono text-xs mt-1.5 select-none">
                                —
                              </span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}