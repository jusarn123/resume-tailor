'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};