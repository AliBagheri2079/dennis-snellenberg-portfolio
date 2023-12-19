'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/app/_utils';
import { useMagnetic } from '@/app/_hooks';
import { magneticVariance } from './index.variance';
import { MagneticItem } from './index.styled';

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl';}} props */
export function MagneticButton(props) {
  const { children, className, variant, size, ...attributes } = props;

  /** @type {import('react').MutableRefObject<HTMLButtonElement>} */
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      {...attributes}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}
