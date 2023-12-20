/** @type {import('framer-motion').Variants} */
export const slideLeft = {
  initial: {
    x: 'calc(100% + 100px)',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
