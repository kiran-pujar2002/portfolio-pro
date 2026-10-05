import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Maruti Suzuki India Ltd. – Equity Research & DCF Valuation",
      description:
        "Built a financial model covering revenue, cost, and financial statement projections. Performed DCF valuation using FCFF, WACC, terminal value, and sensitivity analysis; assessed key ratios and business drivers.",
      tech: ["DCF Valuation", "FCFF", "WACC", "Sensitivity Analysis"],
      slug: "maruti-suzuki-equity-research"
    },
    {
      title: "Zepto – Financial Modelling & Quick-Commerce Industry Research",
      description:
        "Developed a financial model covering revenue, cost, and profitability projections. Researched the Indian quick-commerce industry, mapping market growth, competitive landscape, and key operating drivers.",
      tech: ["Financial Modelling", "Industry Research", "Forecasting", "Excel"],
      slug: "zepto-financial-modelling"
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