import { StyledComponentsRegistry } from './styled-components';

/**
 * @param {import('react').PropsWithChildren}
 */
export function Providers({ children }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
