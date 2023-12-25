'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative max-h-screen bg-foreground text-background'
      style={{ y: transformY }}
    >
      <div style={{ paddingBlock: 'clamp(5em, 21vh, 12em)' }}>
        <UserDetails transformX={transformX} />
        <SocialInfo />
      </div>
    </motion.footer>
  );
}
