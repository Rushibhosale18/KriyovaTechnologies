import { useEffect, useRef, useState } from 'react'

/**
 * useScrollAnimation — triggers fade-in-up when element enters viewport.
 * @param {object} options IntersectionObserver options
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, no need to keep observing
          observer.unobserve(el)
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default useScrollAnimation
