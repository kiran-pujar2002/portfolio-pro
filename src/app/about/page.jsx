// src/app/about/page.jsx
import Link from "next/link";
import Image from "next/image";

const profileImageUrl =
  "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791185138/WhatsApp_Image_2026-10-05_at_12.54.45_PM_iuk6ay.jpg";

export const metadata = {
  title: "About",
  description:
    "Finance professional with 3+ years of experience in asset management, mutual fund analysis, and investment research.",
};

export default function About() {
  return (
    <div className="container-page ">
      {/* Header */}
      <div className="mb-10">
        <p className="eyebrow animate-fade-in">About</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200 max-w-3xl animate-fade-up">
          A finance professional with a bias toward{" "}
          <span className="text-gold-500">rigour</span>.
        </h1>
      </div>

      {/* Portrait + intro */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-16">
        <div className="md:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
            <Image
              src={profileImageUrl}
              alt="Sangamesh Halepujari"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={90}
              style={{ filter: "grayscale(0.15) contrast(1.02)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,22,40,0.10) 0%, rgba(10,22,40,0) 40%, rgba(10,22,40,0.5) 100%)",
              }}
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="text-xl sm:text-2xl text-cream-300 leading-relaxed max-w-2xl">
            I&apos;m{" "}
            <span className="font-semibold text-cream-100">Sangamesh</span> — a
            finance professional with 3+ years across asset management, mutual
            fund analysis, portfolio analytics, and investment research.
          </p>
          <p className="mt-6 text-cream-500 leading-relaxed max-w-2xl">
            My work sits at the intersection of quantitative analysis and
            fundamental research. I build financial models, run risk-return
            evaluations, and translate market data into decisions that are
            defensible on paper.
          </p>
          <p className="mt-6 text-cream-500 leading-relaxed max-w-2xl">
            I&apos;m currently seeking opportunities in{" "}
            <span className="text-cream-200">Equity Research</span>,{" "}
            <span className="text-cream-200">Investment Research</span>, and{" "}
            <span className="text-cream-200">Financial Analysis</span>.
          </p>
        </div>
      </div>

      <div className="gold-rule mb-16" />

      {/* ---------- CARDS BELOW ---------- */}

      {/* Currently + Focus — 2-col card grid */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        <div className="border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm p-6 md:p-7 hover:border-gold-500/40 transition-colors duration-500">
          <p className="meta text-gold-500">Currently</p>
          <div className="mt-4 h-px bg-cream-500/15" />
          <ul className="mt-5 space-y-3">
            <li className="text-cream-400 leading-relaxed text-sm md:text-base">
              Unit Manager — Investment Advisory &amp; Fund Analysis at HDFC
              Asset Management Company Ltd., Bengaluru.
            </li>
            <li className="text-cream-400 leading-relaxed text-sm md:text-base">
              Analysing 20+ mutual fund schemes with ₹10,000 Cr+ AUM — focused
              on peer benchmarking, portfolio analysis, and risk-return
              evaluation.
            </li>
          </ul>
        </div>

        <div className="border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm p-6 md:p-7 hover:border-gold-500/40 transition-colors duration-500">
          <p className="meta text-gold-500">Focus</p>
          <div className="mt-4 h-px bg-cream-500/15" />
          <ul className="mt-5 space-y-3">
            <li className="text-cream-400 leading-relaxed text-sm md:text-base">
              Financial modelling, valuation, and risk assessment with
              expertise in DCF, relative valuation, and CAPM.
            </li>
            <li className="text-cream-400 leading-relaxed text-sm md:text-base">
              Building risk-adjusted performance assessments across equity and
              fixed income portfolios.
            </li>
          </ul>
        </div>
      </div>

      {/* Credentials — full-width card with 2-col list */}
      <div className="mt-5 border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm p-6 md:p-7 hover:border-gold-500/40 transition-colors duration-500">
        <p className="meta text-gold-500">Credentials</p>
        <div className="mt-4 h-px bg-cream-500/15" />
        <ul className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {[
            "CFA Program — Level I Passed (2026)",
            "NISM XV — Research Analyst",
            "NISM X-A & X-B — Investment Adviser Level I & II",
            "NISM AIF Category I & II Distributor Certification",
            "NISM Equity Derivatives Certification",
            "Moody's Analytics — International Wealth Management",
          ].map((c) => (
            <li
              key={c}
              className="flex gap-3 text-cream-400 leading-relaxed text-sm md:text-base"
            >
              <span className="text-gold-500/70 font-mono text-xs mt-1.5 select-none">
                —
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Education — full-width card */}
      <div className="mt-5 border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm p-6 md:p-7 hover:border-gold-500/40 transition-colors duration-500">
        <p className="meta text-gold-500">Education</p>
        <div className="mt-4 h-px bg-cream-500/15" />
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="font-serif text-lg md:text-xl text-cream-200 leading-snug">
              Master of Business Administration (MBA)
            </p>
            <p className="mt-1 text-cream-500 text-sm md:text-base">
              AIMS Institute, Bengaluru
            </p>
          </div>
          <span className="meta">Nov 2022</span>
        </div>
      </div>

      {/* Gold rule */}
      <div className="gold-rule mt-16 mb-12" />

      {/* CTA — unchanged */}
      <div className="flex flex-wrap gap-4">
        <Link href="/contact" className="btn-primary">
          Get in touch
        </Link>
        <Link href="/projects" className="btn-secondary">
          View selected work
        </Link>
      </div>
    </div>
  );
}