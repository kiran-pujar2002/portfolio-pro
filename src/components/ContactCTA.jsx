import Link from "next/link";

export default function ContactCTA() {
  return (
    <section>
      <div className="container-page">
        {/* Section header */}
        <div className="mb-10">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] tracking-tight text-cream-200 text-balance max-w-3xl">
            Let&apos;s discuss the{" "}
            <span className="text-gold-500">next move</span>.
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <p className="text-lg text-cream-500 leading-relaxed">
            Open to conversations around equity research, investment research,
            financial analysis, and portfolio analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <a
              href="mailto:sangameshhalepujari@gmail.com"
              className="btn-secondary"
            >
              sangameshhalepujari@gmail.com
            </a>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-10 pt-6 border-t border-cream-500/15 flex flex-wrap gap-x-8 gap-y-3">
          <span className="meta">CFA Level I (2026)</span>
          <span className="meta">NISM Research Analyst</span>
          <span className="meta">3+ Years Experience</span>
        </div>
      </div>
    </section>
  );
}