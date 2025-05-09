'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-2 sm:px-4 py-2">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center ml-1">
          <Image src="/logo.png" alt="Logo" width={72} height={72} className="object-contain" />
        </Link>

        {/* Account Avatar Right */}
        <div className="flex items-center mr-1">
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
        </div>
      </nav>
    </aside>
  );
};