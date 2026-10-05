// src/components/ExperienceSummary.jsx
import Link from "next/link";

const roles = [
  {
    role: "Unit Manager — Investment Advisory & Fund Analysis",
    company: "HDFC Asset Management Company Ltd.",
    location: "Bengaluru, India",
    period: "Dec 2022 — Present",
    bullets: [
      "Quantitative and fundamental analysis of 20+ mutual fund schemes with ₹10,000 Cr+ AUM",
      "Peer benchmarking, portfolio analysis, and risk-return evaluation",
      "Industry, sector, and macroeconomic trend research",
    ],
  },
];

export default function ExperienceSummary() {
  return (
    <section className="relative">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-12">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-5 section-title max-w-3xl">
            Building conviction through{" "}
            <span className="text-gold-500">analysis</span>.
          </h2>
        </div>

        {/* Role card */}
        <div className="border-t border-cream-500/15 pt-10">
          {roles.map((r, i) => (
            <div key={i}>
              {/* Top meta row */}
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <p className="meta text-gold-500">{r.period}</p>
                <p className="meta">{r.location}</p>
              </div>

              {/* Role + company */}
              <h3 className="font-serif text-2xl md:text-3xl text-cream-200 leading-tight">
                {r.role}
              </h3>
              <p className="mt-2 text-cream-500">{r.company}</p>

              {/* Bullets */}
              <ul className="mt-6 grid gap-3 max-w-3xl">
                {r.bullets.map((b, k) => (
                  <li
                    key={k}
                    className="flex gap-4 text-cream-400 leading-relaxed"
                  >
                    <span className="text-gold-500/70 font-mono text-xs mt-1.5 select-none">
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/experience"
              className="font-mono text-xs uppercase tracking-widest-xl
                         text-gold-400 hover:text-gold-300 transition-colors
                         border-b border-gold-500/30 hover:border-gold-400 pb-1"
            >
              View full experience →
            </Link>
          </div>
        </div>

        {/* Rule */}
        <div className="mt-12 md:mt-16 gold-rule" />
      </div>
    </section>
  );
}