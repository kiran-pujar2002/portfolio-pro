import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Dev Tinder",
      description: "Social networking with JWT auth, RBAC, real-time chat (Socket.io), Google Gemini AI, Razorpay subscriptions.",
      tech: ["React", "Node.js", "MongoDB", "Docker"],
      slug: "dev-tinder"
    },
    {
      title: "Financial Restatement Tool",
      description: "AI-powered QoE report generator · automates financial normalization, transaction categorization, PDF generation.",
      tech: ["Next.js", "Express", "PostgreSQL", "Zustand"],
      slug: "financial-restatement"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title text-3xl font-bold text-gray-800">Projects</h2>
          <Link href="/projects" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View all →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden card-hover">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-0.5 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}