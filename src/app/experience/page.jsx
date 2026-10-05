export default function Experience() {
  const experiences = [
    {
      title: "Unit Manager – Investment Advisory & Fund Analysis",
      company: "HDFC Asset Management Company Ltd.",
      location: "Bengaluru, India",
      period: "Dec 2022 – Present",
      achievements: [
        "Conducted quantitative and fundamental analysis of 20+ mutual fund schemes with ₹10,000 Cr+ AUM, improving risk-adjusted performance assessment",
        "Performed peer benchmarking, portfolio analysis, and risk-return evaluation to identify performance drivers and investment opportunities",
        "Analyzed industry, sector, and macroeconomic trends to assess their impact on investment performance",
        "Prepared research notes, investment presentations, and Excel-based dashboards to support portfolio reviews and investment decisions",
        "Monitored fund performance trends and portfolio risk metrics, delivering actionable insights to support investment decisions and periodic performance reviews"
      ]
    }
  ];

  const achievements = [
    { title: "Portfolio Analysis at Scale", description: "Analyzed 20+ mutual fund schemes with ₹10,000 Cr+ AUM, strengthening risk-adjusted performance assessment" },
    { title: "Risk-Return Evaluation", description: "Performed peer benchmarking and portfolio analysis to identify performance drivers and investment opportunities" },
    { title: "Macro & Sector Research", description: "Assessed industry, sector, and macroeconomic trends and their impact on investment performance" },
    { title: "Investment Reporting", description: "Built research notes, investment presentations, and Excel-based dashboards for portfolio reviews and decisions" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-14">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Professional Experience</h1> */}

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