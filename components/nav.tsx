'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full px-6 py-4 bg-transparent z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" aria-label="Home">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </Link>
        {/* Account Avatar Right */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <Image
            src="/avatar-placeholder.png"
            alt="Account Avatar"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      </nav>
    </aside>
  );
};