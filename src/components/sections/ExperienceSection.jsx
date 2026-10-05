import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";

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

export default function ExperienceSection() {
  return (
    <div className="container-page pb-16 md:pb-20">
      {/* Header */}
      <Reveal>
        <div className="mb-14">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-5 section-title max-w-3xl">
            Building conviction through{" "}
            <span className="text-emerald-500">analysis</span>.
          </h2>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical rail */}
        <div
          aria-hidden="true"
          className="absolute left-2 md:left-3 top-2 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/25 to-transparent"
        />

        {roles.map((exp, idx) => (
          <div key={idx} className="relative pl-10 md:pl-14">
            {/* Rail marker */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 w-[18px] h-[18px] rounded-full
                         border-2 border-emerald-500 bg-[#0a1c2e]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-4 w-1 h-1 rounded-full bg-emerald-500"
            />

            {/* Meta strip */}
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <p className="meta text-emerald-500">{exp.period}</p>
                <p className="meta">{exp.location}</p>
              </div>
            </Reveal>

            {/* Role heading */}
            <Reveal delay={0.05}>
              <h3 className="font-serif text-3xl md:text-4xl text-cream-200 leading-tight max-w-3xl">
                {exp.title}
              </h3>
              <p className="mt-3 text-slate-400 text-base md:text-lg">
                {exp.company}
              </p>
            </Reveal>

            {/* Achievements */}
            <Stagger className="mt-8 grid gap-4 max-w-3xl" stagger={0.06}>
              {exp.achievements.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-4 text-slate-400 leading-relaxed text-sm md:text-base">
                    <span className="text-emerald-500/70 font-mono text-xs mt-1.5 select-none">
                      —
                    </span>
                    <span>{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>

      {/* Section divider */}
      <Reveal>
        <div className="gold-rule my-20" />
      </Reveal>

      {/* Highlights header */}
      <Reveal>
        <div className="mb-10">
          <p className="eyebrow">Selected Highlights</p>
          <h3 className="mt-5 section-title max-w-3xl">
            Where the work <span className="text-emerald-500">landed</span>.
          </h3>
        </div>
      </Reveal>

      {/* Numbered highlights */}
      <Stagger className="space-y-10 md:space-y-12 max-w-4xl" stagger={0.08}>
        {highlights.map((h, i) => (
          <StaggerItem key={h.title}>
            <div className="grid md:grid-cols-12 gap-4 md:gap-10 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[11px] tracking-widest-xl text-emerald-500/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-9">
                <h4 className="font-serif text-xl md:text-2xl text-cream-200 leading-snug">
                  {h.title}
                </h4>
                <div className="mt-4 h-px bg-cream-500/15" />
                <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
                  {h.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}