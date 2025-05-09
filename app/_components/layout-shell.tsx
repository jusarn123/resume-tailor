'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="flex-grow">
        <main className="p-6">{children}</main>
      </div>
      <Footer />
    </>
  );
};