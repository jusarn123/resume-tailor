'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { navLinks } from "@/config";

export const Nav = () => {
  const setActiveLink = (href: string, pathname: string) => {
    if (pathname === href || (pathname.split("/")[1] === "blog" && href === "/blog")) {
      return "text-blue-500";
    }
    return "text-zinc-100";
  };
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" aria-label="Home">
          <p className="text-2xl font-bold text-blue-600">↻</p>
        </Link>
        <ul className="flex gap-6 text-sm text-neutral-800 dark:text-neutral-200">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                className={`${setActiveLink(link.href, pathname)} hover:text-blue-500 dark:hover:text-blue-600 transition`}
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};