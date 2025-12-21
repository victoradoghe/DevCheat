
import React, { useState } from 'react';
import type { CheatSheet } from '../types';
import * as LucideIcons from 'lucide-react';
import { Home, Search, Code2, X } from 'lucide-react';

interface SidebarProps {
  cheatSheets: CheatSheet[];
  activeSheetId: string | null;
  onSelectSheet: (id: string) => void;
  onGoHome: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cheatSheets, activeSheetId, onSelectSheet, onGoHome, isOpen, onClose }) => {
  const [filter, setFilter] = useState('');

  const filteredSheets = cheatSheets.filter(s => 
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedSheets = filteredSheets.reduce((acc, sheet) => {
    const type = sheet.type || 'Other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(sheet);
    return acc;
  }, {} as Record<string, CheatSheet[]>);

  const typeOrder = ['Language', 'Framework', 'Database', 'Tool', 'Other'];
  const availableTypes = Object.keys(groupedSheets);
  const sortedTypes = [
    ...typeOrder.filter(t => availableTypes.includes(t)),
    ...availableTypes.filter(t => !typeOrder.includes(t))
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside 
        className={`
          fixed lg:sticky top-0 left-0 z-50 w-72 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 
          transform transition-transform duration-300 ease-in-out flex flex-col shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
               <Code2 size={20} />
             </div>
             <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
               DevCheat
             </h1>
           </div>
           <button onClick={onClose} className="lg:hidden p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
             <X size={20} />
           </button>
        </div>

        <div className="p-4">
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             <input 
               type="text" 
               placeholder="Find technology..."
               className="w-full pl-9 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-500"
               value={filter}
               onChange={(e) => setFilter(e.target.value)}
             />
           </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-6 custom-scrollbar">
          <button
            onClick={() => { onGoHome(); onClose(); }}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
              ${activeSheetId === null
                ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }
            `}
          >
            <Home size={18} />
            Home Dashboard
          </button>

          {sortedTypes.map(type => {
             const sheets = groupedSheets[type];
             if (!sheets || sheets.length === 0) return null;
             return (
               <div key={type}>
                  <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    {type}s
                  </div>
                  <div className="space-y-1">
                    {sheets.map(sheet => {
                      const IconComponent = (LucideIcons as any)[sheet.iconName] || LucideIcons.Code;
                      const isActive = activeSheetId === sheet.id;
                      return (
                        <button
                          key={sheet.id}
                          onClick={() => { onSelectSheet(sheet.id); onClose(); }}
                          className={`
                            w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
                            ${isActive 
                              ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300' 
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }
                          `}
                        >
                          <IconComponent size={18} className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'} />
                          {sheet.name}
                        </button>
                      );
                    })}
                  </div>
               </div>
             );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
