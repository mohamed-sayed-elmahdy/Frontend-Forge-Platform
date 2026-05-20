'use client';
import { Code2, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function ReactCheatSheetPage() {
  const snippets = [
    { id: 1, title: 'useState Hook', syntax: 'const [state, setState] = useState(initialValue)', category: 'Hooks' },
    { id: 2, title: 'useEffect Hook', syntax: 'useEffect(() => { ... }, [dependencies])', category: 'Hooks' },
    { id: 3, title: 'useContext Hook', syntax: 'const value = useContext(MyContext)', category: 'Hooks' },
    { id: 4, title: 'useReducer Hook', syntax: 'const [state, dispatch] = useReducer(reducer, init)', category: 'Hooks' },
    { id: 5, title: 'Conditional Rendering', syntax: '{condition && <Component />}', category: 'Rendering' },
    { id: 6, title: 'List Rendering', syntax: '{items.map(item => <Item key={item.id} {...item} />)}', category: 'Rendering' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/cheat-sheets" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Cheat Sheets
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">React Cheat Sheet</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Essential React syntax and patterns for quick reference</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 font-mono text-sm">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{snippet.title}</h3>
              <span className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-3 py-1 rounded-full">{snippet.category}</span>
            </div>
            <div className="bg-gray-900 dark:bg-black text-cyan-300 p-3 rounded mb-3 overflow-x-auto">
              {snippet.syntax}
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Copy →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
