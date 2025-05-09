'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Nav />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};