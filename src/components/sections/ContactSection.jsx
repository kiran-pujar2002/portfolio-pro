"use client";

import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";

const contactCards = [
  {
    label: "Email",
    value: "sangameshhalepujari@gmail.com",
    href: "mailto:sangameshhalepujari@gmail.com",
    external: false,
  },
  {
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/sangameshhalepujaria496121a9",
    href: "https://www.linkedin.com/in/sangameshhalepujaria496121a9/",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <div className="container-page pb-16 md:pb-20">
      {/* Header */}
      <Reveal>
        <div className="mb-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 section-title max-w-3xl">
            Let&apos;s start a{" "}
            <span className="text-emerald-500">conversation</span>.
          </h2>
        </div>
      </Reveal>

      {/* Intro */}
      <Reveal>
        <p className="text-slate-400 leading-relaxed max-w-2xl mb-14">
          Have a question, or want to discuss an opportunity? Reach out — I
          usually respond within a day.
        </p>
      </Reveal>

      {/* Contact cards — 3 in a row on desktop */}
      <Stagger
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        stagger={0.08}
      >
        {contactCards.map((c) => {
          const inner = (
            <div
              className="h-full border border-cream-500/15 bg-navy-900/40 backdrop-blur-sm
                         p-6 md:p-7
                         hover:border-emerald-500/40
                         transition-colors duration-500
                         flex flex-col"
            >
              <p className="meta text-emerald-500">{c.label}</p>
              <div className="mt-4 h-px bg-cream-500/15" />
              <p className="mt-5 text-cream-100 leading-relaxed text-base md:text-lg break-all flex-1">
                {c.value}
              </p>
              {c.href && (
                <span
                  className="mt-6 inline-block font-mono text-[10px] uppercase tracking-widest-xl
                             text-emerald-500/80 border-b border-emerald-500/30 pb-0.5 self-start"
                >
                  {c.external ? "Open →" : "Send →"}
                </span>
              )}
            </div>
          );

          return (
            <StaggerItem key={c.label}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="block h-full group"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}