'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center space-y-6">
        <h1
          className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          AI Resume Tailor
        </h1>

        <p className="text-lg text-gray-700">
          Paste a job. Upload your resume. Instantly get a tailored version optimized to get hired.
        </p>

        <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-6 space-y-4 text-left">
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
  );
}