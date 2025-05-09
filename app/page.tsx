'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <div className="w-full max-w-md px-4 space-y-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md rounded-xl">
      <h1 className="text-xl font-bold text-center pt-4">AI Resume Tailor</h1>

      <form className="space-y-3 w-full px-2 pb-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">
            Upload Resume (.docx or .pdf)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">
            Paste Job Description or Job Posting URL
          </label>
          <textarea
            rows={5}
            placeholder="Paste a job description or job URL..."
            className="border border-gray-300 rounded px-3 py-2 text-sm"
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
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Tailor My Resume
        </button>
      </form>

      {loading && (
        <div className="text-center text-blue-600 font-semibold pb-3">
          ⏳ Tailoring your resume...
        </div>
      )}

      {!loading && output && (
        <div className="w-full px-2 pb-3">
          <label className="block text-sm font-medium mb-1">
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
        <div className="text-center border border-yellow-400 bg-yellow-100 text-yellow-800 px-4 py-3 rounded mb-4">
          You’ve reached your free limit.{' '}
          <a href="#" className="underline font-medium">
            Go Pro
          </a>{' '}
          for unlimited resumes.
        </div>
      )}
    </div>
  );
}
