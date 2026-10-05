// src/app/projects/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Maruti Suzuki India Ltd. – Equity Research & DCF Valuation",
      description:
        "Built a financial model for Maruti Suzuki incorporating revenue, cost, and financial statement projections to assess intrinsic value and business drivers.",
      imageUrl: "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186231/maruthi-suzuki_krfvfm.avif",
      // TODO: Add a link to the full report/PDF if available
      url: null,
      tech: ["DCF Valuation", "FCFF", "WACC", "Terminal Value", "Sensitivity Analysis", "Advanced Excel"],
      features: [
        "Developed a financial model with revenue, cost, and financial statement projections",
        "Performed DCF valuation using FCFF, WACC, terminal value, and sensitivity analysis",
        "Analyzed key financial ratios and business drivers to assess financial performance and valuation"
      ]
    },
    {
      title: "CAPM Analysis of Nifty 500 Stocks",
      description:
        "Estimated beta and expected returns using market data to evaluate the risk-return relationship across Nifty 500 constituents.",
      imageUrl: "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186219/capm-image_op1fxi.jpg",
      // TODO: Add a link to the full report/PDF if available
      url: null,
      tech: ["CAPM", "Beta Estimation", "Risk-Return Analysis", "Market Data"],
      features: [
        "Estimated beta and expected returns using historical market data",
        "Evaluated the risk-return relationship across Nifty 500 stocks",
        "Applied CAPM framework to assess expected returns against systematic risk"
      ]
    },
        {
      title: "Zepto – Financial Modelling & Quick-Commerce Industry Research",
      description:
        "Developed a financial model for Zepto covering revenue, cost, and profitability projections, alongside research on the Indian quick-commerce industry.",
      imageUrl: "https://res.cloudinary.com/ty0vjzcd/image/upload/v1791186241/zepto-image_g54wsk.avif",
      // TODO: Add a link to the full report/PDF if available
      url: null,
      tech: ["Financial Modelling", "Industry Research", "Forecasting", "Unit Economics", "Advanced Excel"],
      features: [
        "Developed a financial model covering revenue, cost, and profitability projections",
        "Researched the Indian quick-commerce industry — market growth, competitive landscape, key operating drivers",
        "Built operating assumptions using metrics such as orders, average order value, dark stores, and growth rates"
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-14">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Projects &amp; Research</h1> */}

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const cardContent = (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'top' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-blue-500">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                      View Report
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          );

          return project.url ? (
            <Link
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02] duration-200"
            >
              {cardContent}
            </Link>
          ) : (
            <div
              key={idx}
              className="transition-transform hover:scale-[1.02] duration-200"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}