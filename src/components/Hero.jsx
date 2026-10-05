"use client";

import Image from "next/image";

const profileImageUrl =
  "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791185138/WhatsApp_Image_2026-10-05_at_12.54.45_PM_iuk6ay.jpg";

const pills = ["Bengaluru, Karnataka", "CFA Level I (2026)", "NISM Certified ×4"];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative">
      <div className="container-page relative pt-4 md:pt-4 pb-12 md:pb-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow animate-fade-in">
              Unit Manager — HDFC Mutual Funds
            </p>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-cream-200">
              <span className="block animate-fade-up">Sangamesh</span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="font-semibold text-cream-100">
                CFA Level I Passed and NISM Certified Research Analyst
              </span>{" "}
              with experience in investment research, mutual fund analytics,
              portfolio performance evaluation, financial modelling, and
              investment advisory support.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-2.5 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {pills.map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="btn-primary"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="btn-secondary"
              >
                Selected work
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div
              className="relative aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 md:ml-auto
                         overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Image
                src={profileImageUrl}
                alt="Sangamesh Halepujari"
                fill
                className="object-cover"
                priority
                sizes="320px"
                quality={90}
                style={{ filter: "grayscale(0.1) contrast(1.02)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,28,46,0.15) 0%, rgba(10,28,46,0) 40%, rgba(10,28,46,0.6) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 gold-rule" />
      </div>
    </section>
  );
}