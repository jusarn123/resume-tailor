import Link from 'next/link';
import { navLinks } from '@/config';

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-300 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={`footer_${i}`}
              className="hover:text-white transition"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <p className="text-zinc-400 text-center">
          ©2025{' '}
          <Link
            href="https://www.christianbmartinez.com"
            className="hover:text-white underline"
          >
            Next 15 Tailwind 4 Template
          </Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};