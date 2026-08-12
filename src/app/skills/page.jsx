export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js (Hooks, Context)", "Angular", "Vue.js", "TypeScript", "Next.js (SSR/SSG)"]
    },
    {
      name: "UI & Styling",
      skills: ["Tailwind CSS", "Material UI", "Responsive Design", "Figma", "CSS Modules", "Styled Components"]
    },
    {
      name: "State & APIs",
      skills: ["Redux", "Redux Toolkit", "Redux Saga", "Zustand", "REST APIs", "GraphQL (Apollo)", "WebSockets", "Axios", "Context API"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "Java", "JWT Auth", "RBAC", "REST API Design"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL (Neon)", "MongoDB", "Firebase Firestore", "Schema Design", "Query Optimization"]
    },
    {
      name: "DevOps & Cloud",
      skills: ["AWS (EC2, S3)", "Docker", "Git", "GitHub", "CI/CD Pipelines", "Vercel", "Render", "Netlify"]
    },
    {
      name: "Security",
      skills: ["JWT Authentication", "RBAC", "Input Validation", "Secure API Design", "CORS", "HTTPS"]
    },
    {
      name: "Testing",
      skills: ["Jest", "Cypress (E2E)", "React Testing Library", "Enzyme", "ESLint", "Prettier", "Unit Testing"]
    },
    {
      name: "Concepts",
      skills: ["Agile/Scrum", "Clean Code", "Scalable Architecture", "Microservices", "DevSecOps", "Code Reviews"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Technical Skills</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 hover:shadow-md transition">
            <h2 className="text-lg font-bold text-gray-800 mb-3">{category.name}</h2>
            <ul className="space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}