'use client';

import { motion } from 'framer-motion';

import { reveal } from './variants';

/** @param {{paragraph: string}}  */
export function ParallaxReveal({ paragraph }) {
  const words = paragraph
    .split(' ')
    .map((word, index) => ({ id: index, word }));

  const text = words.map(({ id, word }) => (
    <span key={id} className='me-2 inline-flex overflow-hidden'>
      <motion.span
        custom={id}
        variants={reveal}
        initial='initial'
        whileInView='open'
      >
        {word}
      </motion.span>
    </span>
  ));

  return <>{text}</>;
}
