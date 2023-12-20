'use client';

import Link from 'next/link';

import { MagneticButton } from '@/app/_components';
import { socialMedias } from '@/app/_data';
import { randomId } from '@/app/_utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id}>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className='flex w-full justify-between gap-10'>{medias}</ul>;
}
