'use client';

import { useCallback, useState } from 'react';

/** @param {import('react').MutableRefObject<HTMLButtonElement>} element */
export function useMagnetic(element) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /** @type {import('react').PointerEventHandler<HTMLButtonElement>} */
  const handleMagneticMove = useCallback(
    event => {
      const { clientX, clientY } = event;
      const { width, height, left, top } =
        element.current.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) * 0.35;
      const y = (clientY - (top + height / 2)) * 0.35;
      setPosition(prePosition => ({ ...prePosition, x, y }));
    },
    [element],
  );

  const handleMagneticOut = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  return { position, handleMagneticMove, handleMagneticOut };
}
