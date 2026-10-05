"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Credentials", id: "credentials" },
  { name: "Contact", id: "contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(10,28,46,0.85)"
            : "rgba(10,28,46,0.35)",
          borderBottomColor: scrolled
            ? "rgba(16,185,129,0.22)"
            : "rgba(16,185,129,0.08)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
      >
        <div className="container-page">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo — CFA badge */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="group inline-flex items-center gap-2
                         border border-emerald-500/30 rounded-full
                         px-3 py-1.5
                         hover:border-emerald-400/60
                         transition-colors duration-300"
            >
              {/* Pulsing dot */}
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest-xl
                               text-emerald-300 group-hover:text-emerald-200
                               transition-colors">
                CFA Level I · Passed
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative font-mono text-[11px] uppercase tracking-widest-xl
                                transition-colors duration-300 ${
                                  isActive
                                    ? "text-emerald-400"
                                    : "text-cream-500 hover:text-cream-200"
                                }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 right-0 h-px bg-emerald-500"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="font-mono text-[11px] uppercase tracking-widest-xl
                           text-emerald-400 hover:text-emerald-300
                           border-b border-emerald-500/40 hover:border-emerald-400
                           pb-0.5 transition-colors"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-0 w-6 h-px bg-cream-200"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-2.5 w-6 h-px bg-cream-200"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-5 w-6 h-px bg-cream-200"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-[#0a1c2e]/70 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-72
                         bg-[#0a1c2e] border-l border-emerald-500/20 md:hidden"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-cream-500/10">
                <span className="meta text-emerald-500">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-cream-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-1">
                {/* CFA badge in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 }}
                  className="mb-4 pb-4 border-b border-cream-500/10"
                >
                  <span className="inline-flex items-center gap-2
                                   border border-emerald-500/30 rounded-full
                                   px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest-xl text-emerald-300">
                      CFA Level I · Passed
                    </span>
                  </span>
                </motion.div>

                {navItems.map((item, i) => {
                  const isActive = active === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`flex items-center gap-3 px-2 py-3 font-mono text-xs
                                    uppercase tracking-widest-xl transition-colors ${
                                      isActive
                                        ? "text-emerald-400"
                                        : "text-cream-400 hover:text-cream-100"
                                    }`}
                      >
                        <span className="w-6 h-px bg-current opacity-40" />
                        {item.name}
                      </a>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + navItems.length * 0.04 }}
                  className="mt-6 pt-6 border-t border-cream-500/10"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="block font-mono text-xs uppercase tracking-widest-xl
                               text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Get in touch →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}