'use client';

import { styled } from 'styled-components';

export const ListTitle = styled.h5`
  color: ${({ theme }) => theme?.colors?.muted?.foreground};
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  margin-block-end: 1rem;
`;
