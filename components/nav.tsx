'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-0 sm:px-2 py-2">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center ml-0">
          <Image src="/logo.png" alt="Logo" width={88} height={88} className="object-contain" />
        </Link>

        {/* Account Avatar Right */}
        <div className="flex items-center mr-2">
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