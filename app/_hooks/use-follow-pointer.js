'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

/**
 * @param {Object} params
 * @param {import('react').MutableRefObject<HTMLElement>} params.modal
 * @param {import('react').MutableRefObject<HTMLElement>} params.cursor
 * @param {import('react').MutableRefObject<HTMLElement>} params.label
 */
export function useFollowPointer({ modal, cursor, label }) {
  const [item, setItem] = useState({ active: false, index: 0 });

  /** @type {import('react').MutableRefObject<number | null>} */
  let xMoveModal = useRef(null);
  /** @type {import('react').MutableRefObject<number | null>} */
  let yMoveModal = useRef(null);

  /** @type {import('react').MutableRefObject<number | null>} */
  let xMoveCursor = useRef(null);
  /** @type {import('react').MutableRefObject<number | null>} */
  let yMoveCursor = useRef(null);

  /** @type {import('react').MutableRefObject<number | null>} */
  let xMoveLabel = useRef(null);
  /** @type {import('react').MutableRefObject<number | null>} */
  let yMoveLabel = useRef(null);

  /** @type {(index: number) => void} */
  const handlePointerEnter = useCallback(
    index => setItem({ active: true, index }),
    [],
  );

  /** @type {(index: number) => void} */
  const handlePointerLeave = useCallback(
    index => setItem({ active: false, index }),
    [],
  );

  /** @type {(x: number, y: number) => void} */
  const moveItems = useCallback((x, y) => {
    xMoveModal.current(x);
    yMoveModal.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveLabel.current(x);
    yMoveLabel.current(y);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Move modal
      xMoveModal.current = gsap.quickTo(modal.current, 'left', {
        duration: 0.8,
        ease: 'power3',
      });
      yMoveModal.current = gsap.quickTo(modal.current, 'top', {
        duration: 0.8,
        ease: 'power3',
      });

      // Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
        duration: 0.5,
        ease: 'power3',
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
        duration: 0.5,
        ease: 'power3',
      });

      // Move cursor label
      xMoveLabel.current = gsap.quickTo(label.current, 'left', {
        duration: 0.45,
        ease: 'power3',
      });
      yMoveLabel.current = gsap.quickTo(label.current, 'top', {
        duration: 0.45,
        ease: 'power3',
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { item, handlePointerEnter, handlePointerLeave, moveItems };
}
