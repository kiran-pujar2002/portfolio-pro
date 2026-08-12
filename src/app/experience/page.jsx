export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Wedding Cluster",
      location: "Bangalore, India",
      period: "Mar 2024 – Present",
      achievements: [
        "Designed, developed, and maintained full-stack applications using React.js, Angular, Node.js, and Python",
        "Built and maintained RESTful APIs with JWT authentication, RBAC authorization, and input validation",
        "Migrated production app to Next.js with SSR/SSG — improving Core Web Vitals, TTFB, and SEO performance",
        "Designed and optimized MySQL and PostgreSQL schemas; improved query performance for high-traffic endpoints",
        "Built backend services using Python and FastAPI for REST APIs and data pipeline processing",
        "Enforced code quality via ESLint, peer code reviews, and maintained CI/CD pipelines on AWS, Vercel, and Netlify",
        "Wrote Jest, Enzyme unit tests and Cypress E2E tests; troubleshot and resolved critical production issues"
      ]
    }
  ];

  const achievements = [
    { title: "Improved Core Web Vitals", description: "Next.js SSR/SSG migration delivered faster TTFB and better search indexing" },
    { title: "15% reduction in API calls", description: "Via debouncing and in-memory caching, improving app performance under load" },
    { title: "30% faster feature delivery", description: "By building a reusable Tailwind + MUI component library" },
    { title: "Secure full-stack application", description: "Dev Tinder with JWT auth, RBAC, real-time chat, and payment integration" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Professional Experience</h1>
      
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{exp.title}</h2>
                <p className="text-lg text-blue-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-3">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Key Achievements</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((ach, idx) => (
          <div key={idx} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-semibold text-blue-700 text-lg">{ach.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
