import { useState } from 'react'
import { platformTabs } from '../data/platforms.js'

const TAB_KEYS = ['software', 'formats', 'scanners']

export default function PlatformsFormats() {
  const [activeTab, setActiveTab] = useState('software')

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="inline-block bg-brandRed/10 text-brandRed font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
          Ecosystem & Compatibility
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy mb-4">
          Compatible with Leading <span className="text-brandRed">Scan & BIM</span> Platforms
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Our team works seamlessly with the industry's top software, formats, and hardware platforms to guarantee 100% integration with your project workflows.
        </p>

        {/* TABS BUTTONS */}
        <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl gap-2 mb-16 shadow-inner flex-wrap justify-center">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-300 ${
                activeTab === key
                  ? 'bg-brandNavy text-white shadow-md'
                  : 'text-gray-600 hover:text-brandNavy hover:bg-gray-200/60'
              }`}
            >
              {platformTabs[key].label}
            </button>
          ))}
        </div>

        <div className="relative max-w-xl mx-auto h-[380px] sm:h-[420px] flex items-center justify-center">

          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] border-2 border-dashed border-gray-200 rounded-full animate-spin-slow pointer-events-none"></div>
          <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] border-2 border-brandNavy/10 rounded-full pointer-events-none"></div>
          <div className="absolute w-20 h-20 rounded-full bg-brandNavy/5 border border-brandNavy/10 flex items-center justify-center pointer-events-none">
            <span className="w-8 h-8 rounded-full bg-brandRed/20 border border-brandRed/40 animate-ping"></span>
          </div>

          {TAB_KEYS.map((key) => {
            const tab = platformTabs[key]
            const isActive = activeTab === key
            return (
              <div
                key={key}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {tab.items.map((item, i) => (
                  <div key={item.label} className={`group ${tab.positions[i]}`}>
                    <div className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition duration-300 pointer-events-none mb-1.5 bg-brandNavy text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      {item.label}
                    </div>
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center text-xl sm:text-2xl transition duration-300 ${item.hover} ${item.color} ${item.text ? 'font-black text-xs' : ''}`}
                    >
                      {item.icon ? <i className={`fa-solid ${item.icon}`}></i> : item.text}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
