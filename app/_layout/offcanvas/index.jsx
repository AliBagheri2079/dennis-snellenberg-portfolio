'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { OffcanvasBody, OffcanvasToggle } from './components';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isOpen ? <OffcanvasBody /> : null}
      </AnimatePresence>
      <OffcanvasToggle isOpen={isOpen} handleOpen={setOpen} />
    </>
  );
}
