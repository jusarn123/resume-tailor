'use client';

import { useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 text-white z-10">
        <div className="w-full max-w-2xl text-center space-y-6">
          <h1
            className="text-5xl font-extrabold tracking-tight leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            AI Resume Tailor
          </h1>

          <p className="text-lg text-blue-100">
            Tailor your resume instantly.
          </p>

          <div className="bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 rounded-xl p-6 space-y-4 text-left text-gray-800">
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Resume (.docx or .pdf)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Paste Job Description or Job Posting URL
              </label>
              <textarea
                rows={5}
                placeholder="Paste a job description or job URL..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setLoading(true);
                setOutput('');
                setLimitReached(false);
                setTimeout(() => {
                  setLoading(false);
                  setOutput('Tailored resume content goes here...');
                }, 2000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
            >
              ✨ Tailor My Resume
            </button>

            {loading && (
              <div className="text-center text-blue-600 font-semibold">
                ⏳ Tailoring your resume...
              </div>
            )}

            {!loading && output && (
              <div>
                <label className="block text-sm font-medium mb-1 mt-4">
                  Tailored Resume Output
                </label>
                <textarea
                  value={output}
                  readOnly
                  rows={8}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
            )}

            {limitReached && (
              <div className="text-center border border-yellow-400 bg-yellow-100 text-yellow-800 px-4 py-3 rounded">
                You’ve reached your free limit.{' '}
                <a href="#" className="underline font-medium">
                  Go Pro
                </a>{' '}
                for unlimited resumes.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}