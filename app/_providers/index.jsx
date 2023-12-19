import { StyledComponentsRegistry } from './styled-components';

/** @param {import('react').PropsWithChildren<unknown>} props */
export function Providers(props) {
  const { children } = props;
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
