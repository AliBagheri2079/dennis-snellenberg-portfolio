'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/app/_utils';
import { useOffcanvasToggle } from '@/app/_hooks';
import { MagneticButton } from '@/app/_components';
import classes from './index.module.css';

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {import('react').Dispatch<SetStateAction<boolean>>} props.handleOpen
 */
export function OffcanvasToggle({ isOpen, handleOpen }) {
  /** @type {import('react').MutableRefObject<HTMLDivElement>} */
  const containerRef = useRef(null);
  const { scrollYProgress } = useOffcanvasToggle({
    element: containerRef,
    callback: latest => latest <= 1 && handleOpen(false),
  });

  return (
    <motion.div
      ref={containerRef}
      className={classes.wrapper}
      initial={false}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ scale: scrollYProgress }}
    >
      <MagneticButton
        size='md'
        variant='ghost'
        className='border border-solid border-muted-foreground'
        onClick={() => handleOpen(!isOpen)}
      >
        <span
          className={cn([classes.burger], [isOpen && classes.burgerActive])}
        />
        <span className='sr-only focus:not-sr-only'>Offcanvas Toggle</span>
      </MagneticButton>
    </motion.div>
  );
}
