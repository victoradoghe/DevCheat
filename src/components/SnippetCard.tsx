import React, { useState } from 'react';
import type { Snippet } from '../types';
import { Difficulty } from '../types';
import CodeBlock from './CodeBlock';
import { Copy, Check } from 'lucide-react';

interface SnippetCardProps {
  snippet: Snippet;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  snippet,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const difficultyColor = {
    [Difficulty.Beginner]: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    [Difficulty.Intermediate]: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    [Difficulty.Advanced]: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-md flex flex-col h-full group">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{snippet.title}</h3>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${difficultyColor[snippet.difficulty]}`}>
                {snippet.difficulty}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              {snippet.description}
            </p>
          </div>

        </div>

        <div className="relative group/code mb-4">
          <CodeBlock code={snippet.code} language={snippet.language} />
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 bg-slate-700/80 hover:bg-slate-600 text-white rounded-md opacity-0 group-hover/code:opacity-100 transition-opacity backdrop-blur-sm"
            title="Copy Code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <div className="flex gap-2">
          {snippet.tags.map(tag => (
            <span key={tag} className="text-xs text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnippetCard;