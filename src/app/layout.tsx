import type { Metadata } from 'next';
import './globals.css';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Genfrica',
  description: 'Generate Quality African images',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-black min-h-screen">
        <Theme
          appearance="dark"
          style={{
            minHeight: '100vh',
            backgroundColor: 'black',
            width: '100%',
          }}
        >
          <Navbar />

          <main className="">{children}</main>

          <Footer />
        </Theme>
      </body>
    </html>
  );
}
