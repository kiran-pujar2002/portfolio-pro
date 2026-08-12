export default function ExperienceSummary() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl font-bold text-gray-800 mb-2">Professional Experience</h2>
        <p className="text-gray-500 mb-10 ml-4">Full Stack Developer · Wedding Cluster · Mar 2024 – Present</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Full-Stack Development</h3>
                <p className="text-gray-600 text-sm mt-1">React.js, Angular, Node.js, Python · secure, scalable, performant apps.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Auth & Security</h3>
                <p className="text-gray-600 text-sm mt-1">JWT, RBAC, input validation, secure API design, CORS, HTTPS.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Next.js Migration</h3>
                <p className="text-gray-600 text-sm mt-1">SSR/SSG · improved Core Web Vitals, TTFB, and SEO significantly.</p>
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
                <h3 className="font-semibold text-lg">DB & Performance</h3>
                <p className="text-gray-600 text-sm mt-1">MySQL, PostgreSQL schema design, query optimization, indexing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
