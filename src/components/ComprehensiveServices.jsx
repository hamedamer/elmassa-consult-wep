import { comprehensiveServices } from '../data/comprehensiveServices.js'

export default function ComprehensiveServices() {
  return (
    <section className="bg-[#0b0f19] text-white py-16 px-5 text-center font-sans">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Comprehensive Scan to BIM Services We Offer</h2>
      <p className="text-slate-400 mb-10">We provide end-to-end modeling solutions from registered point cloud data.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {comprehensiveServices.map((s) => (
          <div
            key={s.title}
            className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 text-left flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1 hover:border-brandRed/40 group"
          >
            <div className="flex justify-between items-start gap-4 mb-0">
              <h3 className="text-[1.15rem] font-semibold text-white leading-snug mt-auto transition-colors duration-300 group-hover:text-brandRed">
                {s.title}
              </h3>
              <div className="w-[72px] h-[72px] rounded-xl flex items-center justify-center shrink-0 mb-1 transition-colors duration-300 group-hover:bg-brandRed/15">
                <img src={`/images/${s.image}`} alt={s.alt} className="object-contain w-full h-full" />
              </div>
            </div>
            <p className="text-gray-400 text-[0.72rem] leading-relaxed mt-1">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
