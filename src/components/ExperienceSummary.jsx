export default function ExperienceSummary() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl font-bold text-gray-800 mb-2">Professional Experience</h2>
        <p className="text-gray-500 mb-10 ml-4">Unit Manager – Investment Advisory &amp; Fund Analysis · HDFC Asset Management Company Ltd. · Dec 2022 – Present</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fund &amp; Portfolio Analysis</h3>
                <p className="text-gray-600 text-sm mt-1">Quantitative &amp; fundamental analysis of 20+ mutual fund schemes with ₹10,000 Cr+ AUM.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Valuation &amp; Modelling</h3>
                <p className="text-gray-600 text-sm mt-1">DCF &amp; relative valuation, CAPM, Beta, WACC, NOPAT, FCFF/FCFE, financial modelling.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Research &amp; Insights</h3>
                <p className="text-gray-600 text-sm mt-1">Industry, sector &amp; macroeconomic trend analysis; research notes and investment presentations.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Portfolio Metrics &amp; Tools</h3>
                <p className="text-gray-600 text-sm mt-1">P/E, Sharpe Ratio, Information Ratio, Alpha, risk-adjusted returns, benchmarking. Advanced Excel, Bloomberg, Screener.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}