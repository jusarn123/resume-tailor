'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <aside className="w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-0 sm:px-2 py-4">
        {/* Logo Left */}
        <Link href="/" aria-label="Home" className="flex items-center gap-4 ml-4">
          <Image 
            src="/logo2_opt.png" 
            alt="Logo" 
            width={30} 
            height={30} 
            className="object-contain w-6 md:w-9"
          />
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-2xl md:text-5xl tracking-tight text-white" style={{ fontFamily: 'Unbounded, sans-serif' }}>
              ResumeAI
            </h2>
            <p className="text-xl md:text-4xl font-light text-blue-100 mb-0 md:mb-2">
              <span className="extrabold">Drop</span> it. Tailor it. Apply.
            </p>
          </div>
        </Link>

        {/* Account Avatar Right */}
        
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            width={44}
            height={44}
            className="rounded-full object-cover mr-4 w-11 md:w-15"
          />
        
      </nav>
    </aside>
  );
};