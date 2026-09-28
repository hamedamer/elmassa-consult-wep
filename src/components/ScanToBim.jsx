export default function ScanToBim() {
  return (
    <section className="bg-[#0B132B] py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* 1. Left Side: Content Text */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-block px-3 py-1 bg-brandRed/10 border border-brandRed/30 rounded-full">
              <span className="text-xs uppercase tracking-widest text-brandRed font-bold">Scan to BIM Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Scan to BIM Experts for Existing Buildings
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Existing buildings often lack reliable documentation, making renovation, expansion and facility management significantly more challenging. Our <strong className="text-white font-semibold">Scan to BIM Modeling Services</strong> help architects, surveyors, contractors, engineers and facility managers convert laser scan data into intelligent BIM models that precisely illustrate current site conditions.
              </p>

              <p>
                Unlike companies that perform laser scanning, we specialize exclusively in <strong className="text-white font-semibold">Scan to BIM Conversion Services</strong> using client-provided point cloud data. Our experienced BIM specialists transform registered scans into coordinated architectural, structural, and MEP models while maintaining required Level of Development (LOD), project standards, and dimensional accuracy.
              </p>

              <p>
                From renovation and retrofit projects to heritage preservation, industrial facilities, hospitals, airports, and commercial developments, we deliver BIM-ready models that enable better planning and informed decision-making.
              </p>

              <p className="pt-2 border-t border-slate-800 text-slate-200">
                As a trusted <strong className="text-white font-semibold">Scan to BIM Company</strong>, we seamlessly integrate point cloud transformations directly into your project workflows.
              </p>
            </div>

          </div>

          {/* 2. Right Side: Clean Branded Image Frame */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#1C2541] shadow-2xl p-2 sm:p-3 transition-transform duration-300 hover:scale-[1.01]">

              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/scan-banner.png`}
                  alt="Scan to BIM 3D Model & Laser Equipment"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="pt-3 pb-1 px-2 text-center sm:text-left flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Laser Scan to 3D Model</span>
                <span className="text-brandRed font-semibold">LOD 100 - 500</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}