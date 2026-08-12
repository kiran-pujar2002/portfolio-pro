import Link from "next/link";

export default function SkillsOverview() {
  const skills = [
    { category: "Frontend", items: ["React, Angular, Vue", "Next.js, TypeScript"] },
    { category: "Backend", items: ["Node.js, Python", "Java, FastAPI"] },
    { category: "Databases", items: ["MySQL, PostgreSQL", "MongoDB, Firebase"] },
    { category: "DevOps", items: ["AWS, Docker", "CI/CD, Vercel"] }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title text-3xl font-bold text-gray-800">Tech Stack</h2>
          <Link href="/skills" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200/70">
              <h3 className="font-semibold text-gray-800 text-sm">{skill.category}</h3>
              <ul className="mt-2 space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
