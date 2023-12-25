'use client';

import { styled } from 'styled-components';

import { Center } from '@/components';

export const CursorShape = styled(Center)`
  color: ${({ theme }) => theme?.colors?.background};
  width: 5rem;
  height: 5rem;
  border-radius: 100vmax;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: fixed;
  z-index: 2;
  pointer-events: none;
`;
