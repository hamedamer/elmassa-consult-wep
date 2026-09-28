import { useEffect, useRef, useState } from 'react'

// Replicates the original scroll-triggered counting animation using IntersectionObserver
export default function Counter({ target, suffix = '', prefix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const speed = 200
    const inc = target / speed

    const startCounting = () => {
      let current = 0
      const step = () => {
        current += inc
        if (current < target) {
          setCount(Number(current.toFixed(decimals)))
          requestAnimationFrame(() => setTimeout(step, 15))
        } else {
          setCount(Number(target.toFixed(decimals)))
        }
      }
      step()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            startCounting()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}
