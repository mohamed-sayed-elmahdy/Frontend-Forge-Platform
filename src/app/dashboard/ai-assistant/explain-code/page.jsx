'use client';
import { Code, Zap, Copy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ExplainCodePage() {
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleExplain = () => {
    if (code.trim()) {
      setExplanation('This code defines a React component that renders a button. When clicked, it increments the counter state using setState. The component uses the useState hook to manage the counter value.');
    }
  };

  return (
    <div className="space-y-6">
      <Link href="/dashboard/ai-assistant" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to AI Assistant
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Explain Code</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Get AI-powered explanations for your code snippets</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
              <Code className="w-5 h-5 inline mr-2" />
              Paste Your Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="function add(a, b) {\n  return a + b;\n}"
              className="w-full h-48 bg-gray-900 text-cyan-300 p-4 rounded font-mono text-sm border border-gray-700 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleExplain}
              className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Explain Code
            </button>
          </div>
        </div>

        {explanation && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">AI Explanation</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{explanation}</p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy Explanation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
