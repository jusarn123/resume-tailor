'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <div className="flex w-full flex-grow items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6 py-12">
        <h1 className="text-2xl font-bold text-center">AI Resume Tailor</h1>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Resume (.docx or .pdf)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full border border-gray-300 rounded px-4 py-2 text-sm"
          />
        </div>

        {/* Job Description or URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Paste Job Description or Job Posting URL
          </label>
          <textarea
            rows={6}
            placeholder="Paste a job description or job URL..."
            className="block w-full border border-gray-300 rounded px-4 py-2 text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
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
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center text-blue-600 font-semibold">
            ⏳ Tailoring your resume...
          </div>
        )}

        {/* AI Output */}
        {!loading && output && (
          <div>
            <label className="block text-sm font-medium mb-1 mt-4">
              Tailored Resume Output
            </label>
            <textarea
              value={output}
              readOnly
              rows={10}
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
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
    </div>
  );
}