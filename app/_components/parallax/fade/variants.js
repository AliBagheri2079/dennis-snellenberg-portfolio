/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
