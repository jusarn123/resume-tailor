'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-2 sm:px-4 py-2">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={72} height={72} className="object-contain" />
        </Link>

        {/* Account Avatar Right */}
        <div className="flex items-center">
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
      </nav>
    </aside>
  );
};