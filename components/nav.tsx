'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/config';

export const Nav = () => {
  const pathname = usePathname();

  const setActiveLink = (href: string) => {
    if (pathname === href || (pathname.split('/')[1] === 'blog' && href === '/blog')) {
      return 'text-white font-bold';
    }
    return 'text-blue-100';
  };

  return (
    <aside className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <p className="text-3xl font-bold text-white tracking-tight">&#120148;</p>
        </Link>
        <ul className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                className={`${setActiveLink(link.href)} hover:text-white transition duration-200`}
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};