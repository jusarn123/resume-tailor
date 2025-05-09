'use client';

export default function Home() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <h1 className="text-2xl font-bold text-center">
        AI Resume Tailor
      </h1>

      {/* Tall debug filler */}
      <div className="h-[70vh] bg-blue-100 rounded-xl flex items-center justify-center">
        <p className="text-blue-800">Filler content to force height</p>
      </div>

      {/* Footer stick test */}
      <div className="bg-red-500 text-white p-4 text-center mt-auto">
        DEBUG: This should be above the footer if layout works
      </div>
    </div>
  );
}
