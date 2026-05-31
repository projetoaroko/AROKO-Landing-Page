import { useEffect } from 'react';
import type { RefObject } from 'react';

export function useRafParallax(
  ref: RefObject<HTMLElement>,
  options: { distance?: number; fadeDistance?: number } = {},
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) return;

    let frame = 0;
    const distance = options.distance ?? 160;
    const fadeDistance = options.fadeDistance ?? 360;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / fadeDistance, 1);
      element.style.transform = `translate3d(0, ${progress * distance}px, 0)`;
      element.style.opacity = `${1 - progress * 0.55}`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref, options.distance, options.fadeDistance]);
}
