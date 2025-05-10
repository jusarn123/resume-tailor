'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  return (
    <main className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col items-center justify-center px-4 py-12">
      
      {/*
      <div className="text-center space-y-4 mb-22">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white text-center" style={{ fontFamily: 'Unbounded, sans-serif' }}>
          AI Resume Tailor
        </h1>
        <p className="text-lg font-light text-blue-100 max-w-xl mx-auto">
          Instantly shape your resume to fit any job description.
        </p>
      </div>
      */}
      <div className="text-center space-y-4 mb-8">
        <p className="text-xl md:text-4xl font-light text-blue-100 mb-3 md:mb-12">
          <span className="extrabold">Drop</span> it. Tailor it. Apply.
        </p>
      </div>
      <div className="w-full max-w-3xl space-y-6">
        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Resume (.docx or .pdf)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border border-blue-300 bg-white/10 backdrop-blur-md rounded px-4 py-2 text-sm text-white placeholder-white"
          />
        </div>

        {/* Job Description or URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Paste Job Description or Job Posting URL</label>
          <textarea
            rows={8}
            placeholder="Paste a job description or URL..."
            className="w-full border border-blue-300 bg-white/10 backdrop-blur-md rounded px-4 py-3 text-sm text-white placeholder-white"
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
          className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full w-full hover:bg-blue-100 transition duration-200"
        >
          ✨ Tailor My Resume
        </button>

        {/* Loading State */}
        {loading && <div className="text-center text-white font-semibold">⏳ Tailoring your resume...</div>}

        {/* AI Output */}
        {!loading && output && (
          <div>
            <label className="block text-sm font-medium mb-1 mt-4">Tailored Resume Output</label>
            <textarea
              value={output}
              readOnly
              rows={8}
              className="w-full border border-blue-300 bg-white/10 backdrop-blur-md rounded px-4 py-2 text-sm text-white"
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