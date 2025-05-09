import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-t border-white/20 text-center py-3 px-4 shadow-inner">
      <p className="text-sm text-white">
        © 2025 <Link href="/" className="hover:underline text-white font-medium">AI Resume Tailor</Link>. All rights reserved.
      </p>
    </footer>
  );
};
