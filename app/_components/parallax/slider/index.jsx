'use client';

import { Fragment } from 'react';

import { motion } from 'framer-motion';

import { useParallaxSlider } from '@/hooks';
import { randomId } from '@/utils';

/** @param {import('react').PropsWithChildren<unknown> & {repeat: number; baseVelocity: number;}} */
export function ParallaxSlider({ children, repeat = 2, baseVelocity }) {
  const x = useParallaxSlider(baseVelocity);

  return (
    <div className='flex flex-nowrap overflow-hidden whitespace-nowrap'>
      <motion.div style={{ x }}>
        {Array.from({ length: repeat }, () => {
          const id = randomId();
          return <Fragment key={id}>{children}</Fragment>;
        })}
      </motion.div>
    </div>
  );
}
