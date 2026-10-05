// src/app/about/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getProfileImage } from "@/lib/cloudinary";

export default function About() {
  // TODO: Replace with Sangamesh's actual Cloudinary image public ID
  // const profileImageUrl = getProfileImage('kiran-image_nlmlue');
  const profileImageUrl = "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791185138/WhatsApp_Image_2026-10-05_at_12.54.45_PM_iuk6ay.jpg";


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-14">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1> */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100">
            <Image
              src={profileImageUrl}
              alt="Sangamesh"
              fill
              className="object-cover"
              sizes="(max-width: 700px)"
              quality={85}
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I&apos;m <span className="font-semibold">Sangamesh</span>, a finance professional with 3+ years of
              experience in asset management, mutual fund analysis, portfolio analytics, and investment research.
            </p>
            <p className="text-gray-600">
              I&apos;m skilled in financial modelling, valuation, and risk assessment, with expertise in DCF,
              relative valuation, and CAPM. I currently work as a Unit Manager – Investment Advisory &amp; Fund
              Analysis at HDFC Asset Management Company, where I analyse 20+ mutual fund schemes with ₹10,000 Cr+ AUM.
            </p>
            <p className="text-gray-600">
              I&apos;m a <span className="font-medium">CFA Level I Passed (2026)</span> candidate and a{" "}
              <span className="font-medium">NISM Research Analyst</span> certified professional. I&apos;m seeking
              opportunities in Equity Research, Investment Research, and Financial Analysis.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link href="/experience" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                View Experience
              </Link>
              <Link href="/projects" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}