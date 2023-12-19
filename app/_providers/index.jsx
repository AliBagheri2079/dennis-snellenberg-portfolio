import { StyledComponentsRegistry } from './styled-components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
