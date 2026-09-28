import Counter from './Counter.jsx'
import { metrics } from '../data/metrics.js'

export default function MetricsStrip() {
  return (
    <section className="bg-[#05070d] py-12 px-4 border-y border-gray-800/60">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-brandRed font-bold">
            Trust Indicators
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mt-1">
            Proven Track Record in Engineering & BIM Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#0d111d] border border-gray-800 rounded-xl p-6 text-center hover:border-brandRed/50 transition-colors"
            >
              <div className="mb-1">
                <Counter
                  target={m.target}
                  suffix={m.suffix}
                  className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
