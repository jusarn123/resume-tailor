'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
};