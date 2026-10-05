import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";

const profileImageUrl =
  "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791185138/WhatsApp_Image_2026-10-05_at_12.54.45_PM_iuk6ay.jpg";

const sections = [
  {
    label: "Currently",
    entries: [
      "Unit Manager — Investment Advisory & Fund Analysis at HDFC Asset Management Company Ltd., Bengaluru.",
      "Analysing 20+ mutual fund schemes with ₹10,000 Cr+ AUM — focused on peer benchmarking, portfolio analysis, and risk-return evaluation.",
    ],
  },
  {
    label: "Focus",
    entries: [
      "Financial modelling, valuation, and risk assessment with expertise in DCF, relative valuation, and CAPM.",
      "Building risk-adjusted performance assessments across equity and fixed income portfolios.",
    ],
  },
  {
    label: "Credentials",
    entries: [
      "CFA Program — Level I Passed (2026)",
      "NISM XV — Research Analyst",
      "NISM X-A & X-B — Investment Adviser Level I & II",
      "NISM AIF Category I & II Distributor Certification",
      "NISM Equity Derivatives Certification",
      "Moody's Analytics — International Wealth Management",
    ],
  },
  {
    label: "Education",
    entries: [
      "Master of Business Administration (MBA) — AIMS Institute, Bengaluru (Nov 2022)",
    ],
  },
];

export default function AboutSection() {
  return (
    <div className="container-page pb-16 md:pb-20">
      <Reveal>
        <div className="mb-12">
          <p className="eyebrow">About</p>
          <h2 className="mt-5 section-title max-w-3xl">
            A finance professional with a bias toward{" "}
            <span className="text-emerald-500">rigour</span>.
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream-500/15 bg-navy-950">
                <Image
                  src={profileImageUrl}
                  alt="Sangamesh Halepujari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  style={{ filter: "grayscale(0.1) contrast(1.02)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,28,46,0.1) 0%, rgba(10,28,46,0) 40%, rgba(10,28,46,0.5) 100%)",
                  }}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-3">
                <p className="meta text-emerald-500">Bengaluru, India</p>
                <p className="meta">CFA Level I · 2026</p>
                <p className="meta">NISM Certified × 5</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <p className="text-2xl sm:text-3xl text-slate-400 leading-relaxed max-w-3xl">
              I&apos;m{" "}
              <span className="font-semibold text-cream-100">Sangamesh</span> — a
              finance professional with 3+ years across asset management, mutual
              fund analysis, portfolio analytics, and investment research.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-slate-400 leading-relaxed max-w-3xl">
              My work sits at the intersection of quantitative analysis and
              fundamental research. I build financial models, run risk-return
              evaluations, and translate market data into decisions that are
              defensible on paper. I&apos;m currently seeking opportunities in
              Equity Research, Investment Research, and Financial Analysis.
            </p>
          </Reveal>

          <Stagger className="mt-14 space-y-12" stagger={0.08}>
            {sections.map((section) => (
              <StaggerItem key={section.label}>
                <div>
                  <p className="meta text-emerald-500">{section.label}</p>
                  <div className="mt-4 h-px bg-cream-500/15" />
                  <ul className="mt-5 space-y-3 max-w-3xl">
                    {section.entries.map((entry, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-slate-400 leading-relaxed text-sm md:text-base"
                      >
                        <span className="text-emerald-500/70 font-mono text-xs mt-1.5 select-none shrink-0">
                          —
                        </span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}