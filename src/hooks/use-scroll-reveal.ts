import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (
      !root ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const elements = root.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('reveal-visible', entry.isIntersecting)
        }
      },
      { rootMargin: '0px 0px -64px 0px' },
    )

    for (const element of elements) {
      observer.observe(element)
    }

    const revealFocusedContent = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const element = event.target.closest('[data-reveal]')
      if (element) {
        element.classList.remove('reveal-visible')
      }
    }

    root.addEventListener('focusin', revealFocusedContent)

    return () => {
      observer.disconnect()
      root.removeEventListener('focusin', revealFocusedContent)
      for (const element of elements) {
        element.classList.remove('reveal-visible')
      }
    }
  }, [])

  return ref
}
