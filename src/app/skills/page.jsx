export default function Skills() {
  const skillCategories = [
    {
      name: "Financial Analysis",
      skills: [
        "Financial Statement Analysis",
        "Ratio Analysis",
        "Earnings Analysis",
        "Industry & Company Research",
        "Portfolio Analysis",
        "Investment Analysis",
        "Scenario Analysis"
      ]
    },
    {
      name: "Valuation & Modelling",
      skills: [
        "DCF Valuation",
        "Relative Valuation",
        "Financial Modelling",
        "CAPM",
        "Beta Estimation",
        "WACC",
        "NOPAT",
        "FCFF / FCFE"
      ]
    },
    {
      name: "Portfolio Metrics",
      skills: [
        "P/E Analysis",
        "Sharpe Ratio",
        "Information Ratio",
        "Alpha",
        "Risk-Adjusted Returns",
        "Benchmarking"
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        "Advanced Excel",
        "Bloomberg (basic)",
        "Screener",
        "Microsoft Office"
      ]
    },
    {
      name: "Certifications",
      skills: [
        "CFA Level I Passed (2026)",
        "NISM XV – Research Analyst",
        "NISM X-A & X-B – Investment Adviser",
        "NISM AIF Category I & II Distributor",
        "NISM Equity Derivatives",
        "Moody's Analytics – Intl. Wealth Management",
        "Financial Modelling and Analysis"
      ]
    },
    {
      name: "Research & Reporting",
      skills: [
        "Equity Research",
        "Investment Research",
        "Mutual Fund Analysis",
        "Peer Benchmarking",
        "Macro & Sector Analysis",
        "Research Notes & Presentations",
        "Excel-based Dashboards"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-14">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Core Expertise</h1> */}

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