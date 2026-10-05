// src/app/experience/page.jsx
export const metadata = {
  title: "Experience",
  description:
    "Professional experience — HDFC Asset Management Company Ltd.",
};

const roles = [
  {
    title: "Unit Manager — Investment Advisory & Fund Analysis",
    company: "HDFC Asset Management Company Ltd.",
    location: "Bengaluru, India",
    period: "Dec 2022 — Present",
    achievements: [
      "Conducted quantitative and fundamental analysis of 20+ mutual fund schemes with ₹10,000 Cr+ AUM, improving risk-adjusted performance assessment.",
      "Performed peer benchmarking, portfolio analysis, and risk-return evaluation to identify performance drivers and investment opportunities.",
      "Analyzed industry, sector, and macroeconomic trends to assess their impact on investment performance.",
      "Prepared research notes, investment presentations, and Excel-based dashboards to support portfolio reviews and investment decisions.",
      "Monitored fund performance trends and portfolio risk metrics, delivering actionable insights to support investment decisions and periodic performance reviews.",
    ],
  },
];

const highlights = [
  {
    title: "Portfolio Analysis at Scale",
    description:
      "Analyzed 20+ mutual fund schemes with ₹10,000 Cr+ AUM, strengthening risk-adjusted performance assessment.",
  },
  {
    title: "Risk-Return Evaluation",
    description:
      "Performed peer benchmarking and portfolio analysis to identify performance drivers and investment opportunities.",
  },
  {
    title: "Macro & Sector Research",
    description:
      "Assessed industry, sector, and macroeconomic trends and their impact on investment performance.",
  },
  {
    title: "Investment Reporting",
    description:
      "Built research notes, investment presentations, and Excel-based dashboards for portfolio reviews and decisions.",
  },
];

export default function Experience() {
  return (
    <div className="container-page">
      {/* Header */}
      <div className="mb-10">
        <p className="eyebrow animate-fade-in">Experience</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200 max-w-3xl animate-fade-up">
          A track record built on{" "}
          <span className="text-gold-500">analysis</span>.
        </h1>
      </div>

      {/* Role block */}
      <div className="border-t border-cream-500/15 pt-10">
        {roles.map((exp, idx) => (
          <div key={idx}>
            {/* Meta row: period + location */}
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
              <p className="meta text-gold-500">{exp.period}</p>
              <p className="meta">{exp.location}</p>
            </div>

            {/* Title + company */}
            <h2 className="font-serif text-2xl md:text-3xl text-cream-200 leading-tight">
              {exp.title}
            </h2>
            <p className="mt-2 text-cream-500">{exp.company}</p>

            {/* Achievement bullets */}
            <ul className="mt-8 grid gap-4 max-w-3xl">
              {exp.achievements.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-cream-400 leading-relaxed text-sm md:text-base"
                >
                  <span className="text-gold-500/70 font-mono text-xs mt-1.5 select-none">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="gold-rule my-16" />

      {/* Highlights — 2-col card grid */}
      <div className="mb-8">
        <p className="eyebrow">Selected Highlights</p>
        <h2 className="mt-5 section-title max-w-3xl">
          Where the work{" "}
          <span className="text-gold-500">landed</span>.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm
                       p-6 md:p-7
                       hover:border-gold-500/40
                       transition-colors duration-500"
          >
            <p className="meta text-gold-500">Highlight</p>
            <h3 className="mt-4 font-serif text-xl md:text-2xl text-cream-200 leading-snug">
              {h.title}
            </h3>
            <div className="mt-4 h-px bg-cream-500/15" />
            <p className="mt-4 text-cream-400 leading-relaxed text-sm md:text-base">
              {h.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}