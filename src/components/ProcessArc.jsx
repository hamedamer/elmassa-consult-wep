import { useState } from 'react'
import { processSteps } from '../data/processSteps.js'

export default function ProcessArc() {
  const [active, setActive] = useState(1)
  const activeStep = processSteps[active - 1]

  return (
    <section className="py-20 bg-white font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative min-h-[500px] flex items-center">

          <div className="absolute -left-[380px] sm:-left-[320px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gray-200 rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">

            <div className="lg:col-span-4 relative flex flex-col justify-center space-y-10 pl-6 sm:pl-12 my-8 lg:my-0">
              {processSteps.map((step) => {
                const isActive = active === Number(step.num)
                return (
                  <div
                    key={step.num}
                    onClick={() => setActive(Number(step.num))}
                    className="group flex items-center gap-6 cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute -left-3 w-2 h-2 rounded-full bg-brandNavy transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      ></span>
                      <span
                        className={`text-xl font-extrabold transition-all duration-300 ${
                          isActive ? 'text-brandNavy' : 'text-gray-300'
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-base transition-all duration-300 group-hover:text-brandNavy ${
                        isActive ? 'text-brandNavy' : 'text-gray-300'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="lg:col-span-8 pl-0 lg:pl-12">
              <div className="transition-all duration-500 opacity-100 translate-y-0 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-6 max-w-lg">
                  <h2 className="text-4xl sm:text-5xl font-black text-brandNavy tracking-tight">
                    {activeStep.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{activeStep.description}</p>

                  {activeStep.badges.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {activeStep.badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-white border border-gray-200 text-gray-500 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brandRed hover:text-brandRed cursor-pointer"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center shrink-0">
                  {activeStep.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/${activeStep.image}`}
                      alt={activeStep.imageAlt}
                      className="w-full h-full object-contain animate-bounce-slow"
                    />
                  ) : (
                    <i className={`fa-solid ${activeStep.icon} text-8xl ${activeStep.iconColor}`}></i>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}