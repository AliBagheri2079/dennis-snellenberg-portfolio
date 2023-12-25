'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';

import { scale, slideOut } from './variants';

export function OffcanvasLinks() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const items = navItems.map(({ href, title }, index) => {
    const id = index;
    return (
      <motion.li
        key={id}
        className='relative my-4 flex items-center'
        variants={slideOut}
        custom={id}
        initial='initial'
        animate='enter'
        exit='exit'
        onPointerEnter={() => setActiveLink(href)}
      >
        <motion.div
          className='absolute -left-11'
          variants={scale}
          animate={activeLink === href ? 'open' : 'closed'}
        >
          <Dot size={36} />
        </motion.div>
        <Link href={href} className='text-6xl capitalize'>
          {title}
        </Link>
      </motion.li>
    );
  });

  return (
    <div className='mt-20 flex flex-col gap-3'>
      <div className='mb-10 border-b border-solid'>
        <h5 className='text-xs uppercase text-secondary-foreground'>
          Navigation
        </h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>{items}</ul>
    </div>
  );
}
