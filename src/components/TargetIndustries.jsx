import { industriesRow1, industriesRow2 } from '../data/industries.js'

function IndustryCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-brandRed/50 hover:bg-white/10 px-6 py-3.5 rounded-2xl transition duration-300 min-w-[220px]">
      <div className="w-10 h-10 rounded-xl bg-brandRed/20 text-brandRed flex items-center justify-center text-lg">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <div>
        <h4 className="font-bold text-sm text-white leading-tight">{title}</h4>
        <span className="text-[10px] text-gray-400">{subtitle}</span>
      </div>
    </div>
  )
}

export default function TargetIndustries() {
  return (
    <section className="py-20 bg-brandNavy text-white relative overflow-hidden font-sans border-y border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <span className="inline-block bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
          Industries & Partners
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Empowering <span className="text-brandRed">AEC & Spatial</span> Professionals
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Tailored Scan to BIM, Digital Twin, and Geospatial solutions designed specifically for key industry stakeholders worldwide.
        </p>
      </div>

      <div className="relative w-full overflow-hidden space-y-6 [mask-image:_linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)]">

        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-5">
          {[...industriesRow1, ...industriesRow1].map((item, i) => (
            <IndustryCard key={`${item.title}-${i}`} {...item} />
          ))}
        </div>

        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] gap-5">
          {[...industriesRow2, ...industriesRow2].map((item, i) => (
            <IndustryCard key={`${item.title}-${i}`} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}
