import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  const sliderRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)

  const GAP = 24

  const recalc = () => {
    const slider = sliderRef.current
    if (!slider || !slider.children[0]) return

    const firstCard = slider.children[0]
    const cw = firstCard.offsetWidth + GAP
    setCardWidth(cw)

    const containerWidth = slider.parentElement.offsetWidth
    const visibleCards = Math.max(1, Math.floor(containerWidth / (cw - GAP)))
    const max = Math.max(0, testimonials.length - visibleCards)
    setMaxIndex(max)
    setIndex((prev) => Math.min(prev, max))
  }

  useEffect(() => {
    recalc()
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [])

  const goPrev = () => setIndex((i) => Math.max(0, i - 1))
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="py-20 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B48] mb-2">What Our Clients Say</h2>
            <p className="text-sm text-gray-500 font-medium">Trusted by AEC, Spatial, and BIM professionals across the globe.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={index === 0}
              className={`w-10 h-10 rounded bg-[#0A1D31] text-white flex items-center justify-center transition shadow focus:outline-none ${
                index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#EB4C4C]'
              }`}
            >
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </button>
            <button
              onClick={goNext}
              disabled={index >= maxIndex}
              className={`w-10 h-10 rounded bg-gray-300 text-gray-700 flex items-center justify-center transition shadow focus:outline-none ${
                index >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#EB4C4C] hover:text-white'
              }`}
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[31%] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-serif text-[#EB4C4C]/30 mb-4 font-bold">&ldquo;</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">{t.quote}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F2B48] text-base">{t.name}</h4>
                  <p className="text-xs text-gray-400 mb-2">{t.role}</p>
                  <div className="flex text-amber-400 text-xs gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
