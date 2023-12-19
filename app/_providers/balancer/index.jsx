import { Provider } from 'react-wrap-balancer';

/** @param {import('react').PropsWithChildren<unknown>} */
export function BalancerProvider({ children }) {
  return <Provider>{children}</Provider>;
}
