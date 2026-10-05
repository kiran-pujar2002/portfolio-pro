// src/app/skills/page.jsx
export const metadata = {
  title: "Skills",
  description:
    "Financial analysis, valuation, portfolio metrics, tools, and certifications.",
};

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

export default function Skills() {
  return (
    <div className="container-page">
      {/* Header */}
      <div className="mb-10">
        <p className="eyebrow animate-fade-in">Skills</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200 max-w-3xl animate-fade-up">
          The full{" "}
          <span className="text-gold-500">toolkit</span>.
        </h1>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {skillCategories.map((category, idx) => (
          <div
            key={category.name}
            className="border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm
                       p-6
                       hover:border-gold-500/40
                       transition-colors duration-500
                       flex flex-col"
          >
            {/* Card number */}
            <span className="font-mono text-[11px] tracking-widest-xl text-gold-500/70">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Category title */}
            <h2 className="mt-4 font-serif text-xl md:text-2xl text-cream-200 leading-snug">
              {category.name}
            </h2>
            <div className="mt-4 h-px bg-cream-500/15" />

            {/* Skills list */}
            <ul className="mt-5 space-y-2.5 flex-1">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-cream-400 leading-relaxed text-sm flex gap-3"
                >
                  <span className="text-gold-500/70 font-mono text-xs mt-1.5 select-none">
                    —
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            {/* Card footer */}
            <div className="mt-6 pt-4 border-t border-cream-500/10 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest-xl text-cream-600">
                {category.skills.length} skills
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}