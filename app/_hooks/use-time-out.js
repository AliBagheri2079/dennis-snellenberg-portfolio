'use client';

import { useEffect } from 'react';

/**
 * @param {Object} params
 * @param {() => void} params.callback
 * @param {number} params.duration
 * @param {import('react').DependencyList} params.deps
 */
export function useTimeOut({ callback, duration = 100, deps = [] }) {
  useEffect(() => {
    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
