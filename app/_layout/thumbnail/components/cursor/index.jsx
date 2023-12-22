'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { CursorShape } from './index.styled';

const MotionComponent = motion(CursorShape);

export const ThumbnailCursorCircle = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailCursorCircle({ variants, active, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        className='bg-primary'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);

export const ThumbnailCursorLabel = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailCursorLabel({ variants, active, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);
