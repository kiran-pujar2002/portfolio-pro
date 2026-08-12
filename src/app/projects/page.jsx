// src/app/projects/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getProjectImage } from "@/lib/cloudinary";

export default function Projects() {
  const projects = [
        {
      title: "Financial Restatement Tool",
      description: "AI-powered Quality of Earnings Report Generator that automates financial statement normalization and transaction categorization.",
      cloudinaryId: "ChatGPT_Image_Aug_12_2026_08_19_48_PM_t5ntqb",
      url: "https://financial-tool-ruddy.vercel.app", // ✅ Your financial tool URL
      tech: ["Next.js", "Express.js", "PostgreSQL (Neon)", "Google Gemini AI", "Razorpay", "Zustand", "Vercel", "Render"],
      features: [
        "AI-driven transaction categorization and add-back detection",
        "JWT authentication and Razorpay Orders API integration",
        "Interactive report editor with autosave (Zustand)",
        "Automated PDF generation",
        "Deployed on Vercel and Render with Neon PostgreSQL backend"
      ]
    },
    {
      title: "Dev Tinder",
      description: "Production-grade social networking application with JWT authentication, RBAC, secure REST APIs, and real-time chat.",
      cloudinaryId: "ChatGPT_Image_Aug_8_2026_05_16_24_PM_gi9gpw",
      url: "https://dev-tinder-app.vercel.app", // Replace with your actual Dev Tinder URL
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Socket.io", "Docker", "JWT", "Razorpay"],
      features: [
        "JWT authentication and RBAC authorization",
        "Real-time chat with Socket.io",
        "Google Gemini AI integration",
        "Razorpay payment gateway for tiered premium subscriptions",
        "MongoDB indexing for performance"
      ]
    },

  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const imageUrl = getProjectImage(project.cloudinaryId, 800, 400);
          
          return (
            <Link
              key={idx}
              href={project.url}
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="block transition-transform hover:scale-[1.02] duration-200"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="relative h-56 w-full bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'top' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-blue-500">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Optional: Add a "Visit Project" button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                      Visit Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}