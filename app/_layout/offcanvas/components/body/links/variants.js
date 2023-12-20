/** @type {import('framer-motion').Variants} */
export const slideOut = {
  initial: {
    x: 80,
  },
  enter: i => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
  exit: i => ({
    x: 80,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

/** @type {import('framer-motion').Variants} */
export const scale = {
  open: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.4,
    },
  },
};
