'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';

/**
 * @param {Object} params
 * @param {import('react').MutableRefObject<HTMLDivElement>} params.element
 * @param {(latestValue: number) => void} params.callback
 */
export function useOffcanvasToggle({ element, callback }) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['500px 500px', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', callback);

  return { scrollYProgress };
}
