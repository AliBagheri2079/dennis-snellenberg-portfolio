import { rootMetadata } from './_config';
import { neue_montreal } from './_fonts';
import { Offcanvas } from './_layout';
import { Providers } from './_providers';
import './globals.css';

export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <Offcanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
