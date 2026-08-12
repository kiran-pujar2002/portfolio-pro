// src/app/about/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getProfileImage } from "@/lib/cloudinary";

export default function About() {
  const profileImageUrl = getProfileImage('kiran-image_nlmlue');
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100">
            <Image
              src={profileImageUrl}
              alt="Kiran H P"
              fill
              className="object-cover"
              sizes="(max-width: 700px)"
              quality={85}
              style={{ objectPosition: 'center' }}

            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I&apos;m <span className="font-semibold">Kiran H P</span>, a Full Stack Developer with 2.5+ years of experience 
              designing, developing, and maintaining scalable, secure web applications.
            </p>
            <p className="text-gray-600">
              I&apos;m proficient in HTML, CSS, JavaScript, React.js, and Angular with strong backend skills in Node.js, Python, and Java. 
              I have experience with MySQL, PostgreSQL, and MongoDB databases.
            </p>
            <p className="text-gray-600">
              My focus is on clean, well-documented code, security, and cross-functional collaboration to deliver projects on time. 
              I have a solid background in Agile methodologies, CI/CD pipelines, AWS cloud, and DevOps practices.
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