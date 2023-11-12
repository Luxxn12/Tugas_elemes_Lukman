// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import {Rubik} from 'next/font/google'

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
const rubik = Rubik({subsets:['latin']})

export const metadata = {
  title: 'Project Elemes',
  description: 'Moh Alif Al Lukman',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={rubik.style}>
        <MantineProvider>
          {children}
          </MantineProvider>
      </body>
    </html>
  );
}