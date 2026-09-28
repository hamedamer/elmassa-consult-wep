import Counter from './Counter.jsx'
import { benefits } from '../data/benefits.js'

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-5 bg-brandNavy rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-xl border-b-8 border-brandRed">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
                <i className="fa-solid fa-cube text-xs"></i> Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                Benefits of Our <span className="text-brandRed">Point Cloud</span> to BIM Services
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Transform raw spatial scan data into millimeter-accurate, intelligent 3D BIM models that maximize efficiency and minimize risks throughout the complete project lifecycle.
              </p>
            </div>

            <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brandRed/20 text-brandRed flex items-center justify-center font-bold text-xl">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <Counter target={40} suffix="%" prefix="Up to " className="block text-2xl font-extrabold text-white" />
                  <span className="text-xs text-gray-400 font-medium">Faster project execution & coordination</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brandRed flex items-center justify-center text-lg mb-4 group-hover:bg-brandRed group-hover:text-white transition duration-300">
                    <i className={`fa-solid ${b.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-brandNavy text-base mb-2">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
