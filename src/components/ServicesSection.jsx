import { servicesCards, workflowSteps } from '../data/servicesCards.js'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0B132B] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brandRed bg-brandRed/10 px-3 py-1 rounded-full border border-brandRed/20">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
            Our Core Capabilities & Engineering Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Integrated BIM, Surveying, and Digital Twin solutions designed for contractors, consultants, and facility owners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {servicesCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#1C2541] border border-slate-700/60 rounded-2xl p-6 hover:border-brandRed/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-brandRed/10 text-brandRed rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className={`fa-solid ${card.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{card.description}</p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-700/50 pt-4">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brandRed"></i> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="workflow" className="bg-[#1C2541]/60 border border-slate-800 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">How We Deliver: Our 4-Step Process</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="text-2xl font-extrabold text-brandRed/80 bg-brandRed/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div>
                  <h5 className="font-bold text-white text-sm">{step.title}</h5>
                  <p className="text-xs text-slate-400 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
