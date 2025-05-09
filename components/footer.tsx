import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-zinc-900 border-t border-zinc-700 text-center py-3 px-4 shadow-inner">
      <p className="text-sm text-zinc-400">
        © 2025 <Link href="/" className="hover:underline text-white">AI Resume Tailor</Link>. All rights reserved.
      </p>
    </footer>
  );
};