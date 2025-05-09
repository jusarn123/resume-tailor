'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4 py-8">
      <div className="w-full max-w-xl text-gray-900 space-y-6 bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          AI Resume Tailor
        </h1>

        <p className="text-center text-blue-600 text-lg">Tailor your resume instantly.</p>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Resume (.docx or .pdf)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Job Description or URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Paste Job Description or Job Posting URL</label>
          <textarea
            rows={5}
            placeholder="Paste a job description or job URL..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Submit Button */}
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

        {/* Loading State */}
        {loading && <div className="text-center text-blue-600 font-semibold">⏳ Tailoring your resume...</div>}

        {/* AI Output */}
        {!loading && output && (
          <div>
            <label className="block text-sm font-medium mb-1 mt-4">Tailored Resume Output</label>
            <textarea
              value={output}
              readOnly
              rows={8}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        )}

        {/* Upgrade Prompt */}
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
    </main>
  );
}