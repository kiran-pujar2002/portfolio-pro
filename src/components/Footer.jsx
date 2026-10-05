import Link from "next/link";

const footerLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Credentials", id: "credentials" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 bg-[#0b1c31]">
      <div className="container-page py-10 md:py-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <a
              href="#home"
              className="font-serif text-xl md:text-2xl tracking-tight text-cream-200 hover:text-gold-400 transition-colors"
            >
              Sangamesh
            </a>
            <p className="mt-3 text-slate-400 max-w-md leading-relaxed text-sm md:text-base">
              Finance professional specialising in equity research, investment
              analysis, and portfolio analytics.
            </p>
          </div>


          <div className="md:col-span-4">
            <p className="meta text-emerald-500">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:sangameshhalepujari@gmail.com"
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  sangameshhalepujari@gmail.com
                </a>
              </li>
              <li className="text-slate-400 text-sm md:text-base">
                Bengaluru, India
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sangameshhalepujaria496121a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-gold-400 transition-colors text-sm md:text-base"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-500/10 flex flex-wrap justify-between gap-3">
          <p className="meta">
            © {new Date().getFullYear()} Sangamesh Halepujari
          </p>
          <p className="meta">Bengaluru · India</p>
        </div>
      </div>
    </footer>
  );
}