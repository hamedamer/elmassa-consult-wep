const projectDetails = [
  { label: 'Project Name', value: 'Commercial Facility Hub' },
  { label: 'Project Type', value: 'Commercial / Institutional' },
  { label: 'Scope of Work', value: '3D Scanning & As-Built Documentation' },
  { label: 'Services', value: 'Scan to Revit Modeling & Clash Detection' },
  { label: 'Location', value: 'New Administrative Capital, Egypt' },
  { label: 'Deliverables', value: 'LOD 350 BIM Model (.RVT / .NWD)', highlight: true },
]

export default function CaseStudies() {
  return (
    <section id="projects" className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 text-brandRed font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full mb-3">
                  <i className="fa-solid fa-folder-open text-xs"></i> Success Stories
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy leading-tight">
                  Featured Case Studies
                </h2>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  Discover how our 3D Laser Scanning and Scan to BIM modeling services help clients achieve extreme precision and eliminate on-site reworks.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden text-sm bg-white shadow-sm">
                {projectDetails.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 p-3.5 ${i !== projectDetails.length - 1 ? 'border-b border-gray-100' : ''} ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                  >
                    <span className="font-bold text-brandNavy">{row.label}</span>
                    <span className={`col-span-2 text-gray-700 ${row.highlight ? 'font-semibold text-brandRed' : ''}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brandNavy to-slate-800 hover:from-brandRed hover:to-red-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                >
                  <a href="\CaseStudies" >Explore Case Studies</a>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured BIM Project Showcase"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 bg-brandNavy/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-brandRed animate-pulse"></span>
                  <span>BEFORE / AFTER (POINT CLOUD TO BIM)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
