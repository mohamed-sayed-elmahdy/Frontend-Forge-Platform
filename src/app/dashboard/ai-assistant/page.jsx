'use client';
import { WandSparkles, Zap, Bug, Layers } from 'lucide-react';
import Link from 'next/link';

export default function AIAssistantPage() {
  const tools = [
    { name: 'Explain Code', icon: Zap, color: 'text-cyan-500', path: '/dashboard/ai-assistant/explain-code', desc: 'Get AI explanations of code snippets' },
    { name: 'Fix Errors', icon: Bug, color: 'text-red-500', path: '/dashboard/ai-assistant/fix-errors', desc: 'Get instant solutions to errors' },
    { name: 'Generate Components', icon: Layers, color: 'text-green-500', path: '/dashboard/ai-assistant/generate-components', desc: 'Create components from descriptions' },
    { name: 'Refactor Code', icon: WandSparkles, color: 'text-purple-500', path: '/dashboard/ai-assistant/refactor-code', desc: 'Improve code quality and performance' },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <WandSparkles className="w-10 h-10 text-violet-400" />
          AI Assistant
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">AI-powered tools to boost your productivity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.name} href={tool.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${tool.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tool.desc}</p>
                <span className="text-blue-600 text-sm font-medium">Try Now →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
