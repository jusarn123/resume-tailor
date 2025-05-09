'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="max-w-9xl mx-auto flex items-center justify-between px-3 py-3">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
        </Link>

        {/* Account Avatar Right */}
        <div className="flex items-center">
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            width={52}
            height={52}
            className="rounded-full object-cover"
          />
        </div>
      </nav>
    </aside>
  );
};