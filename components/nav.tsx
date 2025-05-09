'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-0 sm:px-2 py-2">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center ml-4">
          <Image src="/logo2_opt.png" alt="Logo" width={44} height={44} className="object-contain" />
          <h1 className="text-2xl md:text-7xl font-extrabold tracking-tight text-white text-center" style={{ fontFamily: 'Unbounded, sans-serif' }}>
            ResumeAI
          </h1>
        </Link>

        {/* Account Avatar Right */}
        
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            width={55}
            height={55}
            className="rounded-full object-cover mr-4"
          />
        
      </nav>
    </aside>
  );
};