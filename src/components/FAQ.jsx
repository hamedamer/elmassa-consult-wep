import { useState } from 'react'
import { faqItems } from '../data/faq.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#EB4C4C] uppercase tracking-widest block mb-2">Got Questions?</span>
          <h2 className="text-3xl font-bold text-[#0F2B48]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition">
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-semibold text-[#0F2B48]">{item.question}</span>
                  <span
                    className={`w-8 h-8 rounded flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#EB4C4C] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down text-sm"></i>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
