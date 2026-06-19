import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react'; 
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import  Footer  from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ElectricEye - Premium Lighting Solutions',
  description: 'Discover LED bulbs, tube lights, sensor lights, and radar sensor lights.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}