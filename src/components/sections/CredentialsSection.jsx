"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const credentials = [
  {
    id: "01",
    name: "CFA Program — Level I",
    issuer: "CFA Institute",
    issued: "2026",
    expires: "—",
    credentialId: "Passed (2026)",
    status: "passed",
    imageUrl: null,
  },
  {
    id: "02",
    name: "NISM XV — Research Analyst",
    issuer: "National Institute of Securities Markets",
    issued: "—",
    expires: "—",
    credentialId: "NISM-XV",
    status: "active",
    imageUrl: null,
  },
  {
    id: "03",
    name: "NISM X-A & X-B — Investment Adviser Level I & II",
    issuer: "National Institute of Securities Markets",
    issued: "Feb 2026",
    expires: "Jan 2029",
    credentialId: "NISM-202500104993",
    status: "active",
    imageUrl: null,
  },
  {
    id: "04",
    name: "NISM AIF Category I & II Distributor Certification",
    issuer: "National Institute of Securities Markets",
    issued: "Jul 2026",
    expires: "Jul 2029",
    credentialId: "2610292436",
    status: "active",
    imageUrl: null,
  },
  {
    id: "05",
    name: "NISM Equity Derivatives Certification",
    issuer: "National Institute of Securities Markets",
    issued: "—",
    expires: "—",
    credentialId: "NISM-ED",
    status: "active",
    imageUrl: null,
  },
  {
    id: "06",
    name: "Award in International Wealth Management",
    issuer: "Moody's Analytics",
    issued: "—",
    expires: "—",
    credentialId: "MA-IWM",
    status: "active",
    imageUrl: null,
  },
  {
    id: "07",
    name: "Financial Modelling and Analysis",
    issuer: "—",
    issued: "—",
    expires: "—",
    credentialId: "—",
    status: "active",
    imageUrl: null,
  },
];

export default function CredentialsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const active = openIndex !== null ? credentials[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <div className="container-page pb-16 md:pb-20">
      {/* Header */}
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-tight text-cream-200">
              Credential Ledger
            </h2>
          </div>
          <p className="meta">
            {String(credentials.length).padStart(2, "0")} Certifications
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="gold-rule mb-2" />
      </Reveal>

      {/* Table header — desktop only, no Verify column */}
      <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-cream-500/15">
        <p className="col-span-6 meta text-emerald-500">Certification</p>
        <p className="col-span-2 meta text-emerald-500">Issued</p>
        <p className="col-span-2 meta text-emerald-500">Expires</p>
        <p className="col-span-2 meta text-emerald-500">Credential ID</p>
      </div>

      {/* Rows — tighter spacing */}
      <div>
        {credentials.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.03}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 border-b border-cream-500/10">
              {/* Certification name + issuer */}
              <div className="md:col-span-6">
                <p className="font-serif text-base text-cream-200 leading-snug">
                  {c.name}
                </p>
                <p className="mt-0.5 text-slate-400 text-xs md:text-sm">
                  {c.issuer}
                </p>
              </div>

              {/* Issued */}
              <div className="md:col-span-2">
                <p className="md:hidden meta text-emerald-500 mb-1">Issued</p>
                <p className="meta">{c.issued}</p>
              </div>

              {/* Expires */}
              <div className="md:col-span-2">
                <p className="md:hidden meta text-emerald-500 mb-1">Expires</p>
                <p className="meta">{c.expires}</p>
              </div>

              {/* Credential ID */}
              <div className="md:col-span-2">
                <p className="md:hidden meta text-emerald-500 mb-1">
                  Credential ID
                </p>
                <p className="font-mono text-xs md:text-sm text-gold-400 break-all">
                  {c.credentialId}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}