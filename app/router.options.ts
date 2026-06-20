import type { RouterConfig } from '@nuxt/schema'

// Height of the sticky header, so anchored sections aren't hidden behind it.
const HEADER_OFFSET = 88

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

/**
 * Animate the window scroll to `targetTop` with a controlled, snappy duration
 * (capped so long jumps never drag). Honours reduced-motion preferences.
 */
function smoothScrollTo(targetTop: number) {
  const startTop = window.scrollY
  const distance = targetTop - startTop

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced || Math.abs(distance) < 4) {
    window.scrollTo(0, targetTop)
    return
  }

  // 0.4ms per pixel, clamped to a brisk 350–650ms window.
  const duration = Math.min(650, Math.max(350, Math.abs(distance) * 0.4))
  const start = performance.now()

  function step(now: number) {
    const progress = Math.min(1, (now - start) / duration)
    window.scrollTo(0, startTop + distance * easeInOutQuad(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      const el = document.querySelector(to.hash) as HTMLElement | null
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
        smoothScrollTo(top)
      }
      // We performed the scroll ourselves.
      return false
    }

    if (savedPosition) return savedPosition

    return { top: 0 }
  },
}
