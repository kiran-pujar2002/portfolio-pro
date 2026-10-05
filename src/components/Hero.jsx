// src/components/Hero.jsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Direct Cloudinary URL with version and proper format
  // TODO: Replace this with Sangamesh's actual Cloudinary image URL
  const profileImageUrl = "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791185138/WhatsApp_Image_2026-10-05_at_12.54.45_PM_iuk6ay.jpg";

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-14">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            Finance Professional
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&apos;m <span className="gradient-text">Sangamesh</span> <br />
            <span className="text-gray-700">driving investment research &amp; analysis</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            3+ years of experience in asset management, mutual fund analysis, portfolio analytics, and investment research. CFA Level I Passed (2026) &amp; NISM Research Analyst certified.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              Let&apos;s talk
            </Link>
            <Link
              href="/projects"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition"
            >
              See projects
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 pt-4">
            <span>
              <svg className="w-4 h-4 text-blue-500 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bengaluru, India
            </span>
            <span>
              <svg className="w-4 h-4 text-blue-500 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {/* TODO: Add Sangamesh's email */}
              sangamesh@email.com
            </span>
            <span>
              <svg className="w-4 h-4 text-blue-500 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {/* TODO: Add Sangamesh's phone number */}
              +91 XXXXX XXXXX
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-white bg-gradient-to-br from-blue-100 to-indigo-100">
            <Image
              src={profileImageUrl}
              alt="Sangamesh - Finance Professional"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 256px, 288px"
              quality={85}
              style={{ objectPosition: 'start' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}